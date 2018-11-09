import React from "react";
import {
    ActivityIndicator,
    View,
    TextInput,
    Text,
    ScrollView,
    Animated,
    UIManager,
    Platform,
    Image,
    TouchableOpacity,
    AsyncStorage, Alert
} from "react-native";
import styles from "../perfil/Perfil-style";
import Capa from './perfilComponents/capa/capa';
import Produto from "./perfilComponents/produtos/produtos";
import Filtro from "./perfilComponents/filtro/filtro";
import Template from "../../components/Template/Template";
import PerfilService from "../../services/perfil/perfil-service";
import {AxiosInstance as axios} from "axios";

export default class Perfil extends React.Component {

    constructor(props) {
        super(props);

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        this.state = {

            // perfil_nome: this.props.navigation.getParam('perfil_nome'),
            // profile_url: this.props.navigation.getParam('profile_url'),

            params: {
                profile_url: '',
            },

            map: '',
            coordsEnderecos: [],

            perfil: [],
            album: [],
            dados: [],
            enderecos: [],
            styles: [],
            produtos: [],
            categorias: [],
            tamanhos: [],
            user_logged_global: null,
            restkey: null,
            sessaoAtiva: false,
            empresa_id: '',
            qtdTotalProd: '',
            conexao: {},
            dados_carregados: false,
            produtos_carregados: false,
            colors: [],
            ordenacao: [
                {ordem_id: 1, ordem_nome: 'Menor preço', extra: false},
                {ordem_id: 2, ordem_nome: 'Maior preço', extra: false},
                {ordem_id: 3, ordem_nome: 'Mais vendido', extra: true},
                {ordem_id: 4, ordem_nome: 'Mais relevantes', extra: false}
            ],
            preco: false,
            paginacao_produto_perfil: {inicio: 5, fim: 0},
            txtConexao: '',
            verMaisAtivo: false,

            precos: [],
            loading: false,
            loading_products: false,
            system_tabs: true,
            animation_filtro: new Animated.Value(0),
            animation_ordenar: new Animated.Value(0),
            opened_filtro: false,
        };
    }

    _openFiltro = (() => {
        this.setState({ opened_filtro: true })
    });

    _closedFiltro = ((  ) => {
        this.setState({ opened_filtro: false });
    });

    componentDidMount(){

        this.setState({ loading: true });

        setTimeout(() => {
            this.getProfileData();

            this.setState({
                loading: false,
            });
        }, 500);
    }

    getProfileData = async () => {

        let perfil_nome_params = this.props.navigation.getParam('perfil_nome');
        let profile_url_params = this.props.navigation.getParam('profile_url');

        this.state.restkey = await AsyncStorage.getItem('restkey');
        this.state.user_logged_global = await AsyncStorage.getItem('@houpa:userlogged');

        this.setState({
            user_logged_global: this.state.user_logged_global,
            restkey: this.state.restkey
        });

        if(profile_url_params !== undefined){

            console.log('IF: ', profile_url_params);

            this.state.params.profile_url = profile_url_params;
            this.setState({
                params: this.state.params
            });

        }else{
            let user_logged = JSON.parse(this.state.user_logged_global);
            let profile_url = user_logged.profile_url;

            this.state.params.profile_url = profile_url;
            this.setState({
                params: this.state.params
            });
        }

        PerfilService.getProfileData(this.state.params, this.state.restkey).then((res) => {

            let result = res.data;

            console.log('getProfileData: ', result);

            if(result.success){
                this.state.dados = result.dados[0];
                this.setState({
                    dados: this.state.dados,
                    dados_carregados: true
                });

                if (!this.state.user_logged_global || this.state.user_logged_global.user_type === this.state.dados.user_type && this.state.user_logged_global.empresa_id_fk !== this.state.dados.empresa_id_fk) {
                    this.mudarSessao(1, 'Vitrine');
                }

                this.state.album = result.album;
                this.state.enderecos = result.enderecos;
                this.state.empresa_id = this.state.dados.empresa_id_fk;
                this.setState({
                    album: this.state.album,
                    enderecos: this.state.enderecos,
                    empresa_id: this.state.empresa_id
                });

                this.state.dados.user_type === '1' ? this.getProfileConfeccao(this.state.empresa_id) : '';

                try {
                    this.state.conexao = this.state.dados.conexao[0];
                    this.setState({
                        conexao: this.state.conexao
                    });

                    if (this.state.conexao == undefined) {
                        this.state.conexao = {
                            empresa_conexao_status: null,
                            empresa_solicitante: null,
                            conexao_bloqueio: null
                        };
                        this.setState({
                            conexao: this.state.conexao
                        });

                        this.setConnection(this.state.conexao);
                    } else {
                        this.setConnection(this.state.dados.conexao[0]);
                    }

                } catch (e) {
                    console.log('ERROR: ', e)
                }

                this.state.categorias = result.categorias;
                this.state.styles = result.styles;

                this.getProducts();

                let geocoding = null;

                this.state.enderecos.forEach((endereco, indice) => {
                    if ((endereco.empresa_latitude == null || endereco.empresa_latitude === "") && (endereco.empresa_longitude == null || endereco.empresa_latitude === "")) {
                        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + endereco.endereco_numero +
                            ', ' + endereco.endereco_local.replace(/ /g, '+') + ',' + endereco.endereco_uf +
                            '&key=AIzaSyBdCtTujNnCyhmvCOQGhv_weOjYpM0g7d4').then((res) => {

                            console.log('res : ', res);

                            geocoding = res.data.results[0].geometry.location;
                            this.state.coordsEnderecos.push(geocoding);

                            this.setState({
                                coordsEnderecos: this.state.coordsEnderecos
                            });

                            PerfilService.updateCoordsEmpresa({
                                coords: geocoding,
                                empresa_id_fk: this.state.dados.empresa_id_fk,
                                endereco_id: endereco.endereco_id
                            });

                            // if (indice === 0) {
                            //     this.state.map = new google.maps.Map(document.getElementById('map-location'), {
                            //         center: geocoding,
                            //         zoom: 17
                            //     });
                            //
                            //     this.setState({
                            //         map: this.state.map
                            //     });
                            // }
                            //
                            // let marker = new google.maps.Marker({
                            //     position: geocoding,
                            //     map: this.state.map,
                            //     title: this.state.dados.perfil_nome
                            // });
                            //
                            // this.setState({
                            //     map: this.state.map
                            // });
                            //
                            // marker.setMap(this.state.map);

                        }).catch((err) => {
                            geocoding = null;
                            console.log('ERROR: ', err);
                        })
                    } else {


                        // geocoding = new google.maps.LatLng(endereco.empresa_latitude, endereco.empresa_longitude);

                        // this.state.coordsEnderecos.push(geocoding);
                        // this.setState({
                        //     coordsEnderecos: this.state.coordsEnderecos
                        // });

                        // if (indice === 0) {
                        //     this.state.map = new google.maps.Map(document.getElementById('map-location'), {
                        //         center: geocoding,
                        //         zoom: 17
                        //     });

                        //     this.setState({
                        //         map: this.state.map
                        //     });
                        // }

                        // let marker = new google.maps.Marker({
                        //     position: geocoding,
                        //     map: this.state.map,
                        //     title: this.state.dados.perfil_nome
                        // });

                        // this.setState({
                        //     map: this.state.map
                        // });

                        // marker.setMap(this.state.map);
                    }
                });
            }

        }).catch((error) => {
            console.log('error: ', error)
        });
    };

    getProfileConfeccao(empresa_id, categorias = false){

        new Promise(() => {
            this.getProducts(true);
        });

        PerfilService.getProfileConfeccao(empresa_id, categorias).then((res) => {

            let result = res.data;

            this.state.tamanhos = result.tamanhos;
            this.setState({
                tamanhos: this.state.tamanhos
            });

            // let cores = [];
            //
            // $scope.slider = {
            //     min: parseFloat(result.precos.min),
            //     max: parseFloat(result.precos.max),
            // };
            //
            // $scope.inputsRange.map((input) => {
            //     input.min = $scope.slider.min;
            //     input.max = $scope.slider.max;
            // });
            //
            // $scope.inputsRange[0].value = result.precos.min;
            // $scope.inputsRange[1].value = result.precos.max;
            //
            // let min = global.numberToMoney($scope.inputsRange[0].value);
            // let max = global.numberToMoney($scope.inputsRange[1].value);
            //
            // let displayElement = document.getElementsByClassName("rangeValues")[0];
            // displayElement.innerText = "De R$ " + min + " à R$ " + max;
            //
            // $scope.listeningChangesInputRange();

            // this.state.colors = result.cor_tratada;
            // this.setState({
            //     colors: this.state.colors
            // });
        }).catch((e) => {
            console.log('ERROR: ', e);
        });
    }

    setConnection(conexao){

        if (conexao){

            if (conexao.conexao_bloqueio == null && conexao.empresa_conexao_status == null && conexao.empresa_solicitante == null) {
                this.setState({
                    txtConexao: 'conectar'
                });
            }
            if (conexao.conexao_bloqueio != 1 && conexao.conexao_bloqueio != 0 && conexao.empresa_conexao_status != 1 && !conexao.empresa_solicitante) {
                this.setState({
                    txtConexao: 'conectar'
                });
            }
            if (conexao.conexao_bloqueio == 2 && conexao.empresa_solicitante) {
                this.setState({
                    txtConexao: 'conectar'
                });
            }
            if (conexao.empresa_conexao_status == 1 && conexao.conexao_bloqueio == null) {
                this.setState({
                    txtConexao: 'conectados'
                });
            }
            if(conexao.empresa_conexao_status == 0 && conexao.empresa_solicitante == 1 && (conexao.conexao_bloqueio == null)){
                this.setState({
                    txtConexao: 'solicitado'
                });
            }
            if(conexao.empresa_conexao_status == 0 && conexao.empresa_solicitante == 0 && (conexao.conexao_bloqueio == null)){
                this.setState({
                    txtConexao: 'aceitar'
                });
            }
            if((conexao.conexao_bloqueio == 1 || conexao.conexao_bloqueio == 0) && conexao.empresa_solicitante == 0 && conexao.empresa_conexao_status == 0){
                this.setState({
                    txtConexao: 'bloqueei'
                });
            }
            if((conexao.conexao_bloqueio == 1 || conexao.conexao_bloqueio == 0) && conexao.empresa_solicitante == 1 && conexao.empresa_conexao_status == 0){
                this.setState({
                    txtConexao: 'bloqueado'
                });
            }
            if((conexao.conexao_bloqueio == 1 || conexao.conexao_bloqueio == 0) && conexao.empresa_solicitante == 0 && conexao.empresa_conexao_status == 2){
                this.setState({
                    txtConexao: 'bloqueado'
                });
            }
            if((conexao.conexao_bloqueio == 1 || conexao.conexao_bloqueio == 0) && conexao.empresa_solicitante == 1 && conexao.empresa_conexao_status == 2){
                this.setState({
                    txtConexao: 'bloqueei'
                });
            }
            if((conexao.conexao_bloqueio != 1 && conexao.conexao_bloqueio != 0) && conexao.empresa_solicitante && conexao.empresa_conexao_status == 2){
                this.setState({
                    txtConexao: 'conectar'
                });
            }
        }

    }

    mudarSessao (sessaoId, sessaoName) {

        if (this.state.user_logged_global && this.state.user_logged_global.user_type !== this.state.dados.user_type || this.state.user_logged_global.empresa_id_fk === this.state.dados.empresa_id_fk || sessaoId === 1) {
            if (this.state.user_logged_global && this.state.user_logged_global.empresa_id_fk === this.state.dados.empresa_id_fk  && this.state.sessaoAtiva.sessao_id === sessaoId) {
                this.setState({
                    sessaoAtiva: false
                });
            } else {
                this.state.sessaoAtiva = {sessao_id: sessaoId, sessao_nome: sessaoName};
                this.setState({
                    sessaoAtiva: this.state.sessaoAtiva
                });
            }

            this.getProducts(true);
        } else {
            if (sessaoId !== 1) {
                this.alertaPermissao();
            }
        }
    };

    categorias_id = [];

    getProducts = async (substituir) => {

        this.setState({
            loading_products: true
        });

        this.state.restkey = await AsyncStorage.getItem('restkey');

        substituir ? (this.state.produtos = []) && (this.state.paginacao_produto_perfil = {inicio: 5, fim: 0}) : '';

        let tamanhos = [];
        let ordem = [];
        this.categorias_id = [];
        let filtroCor = {coresNome: [], coresValor: []};

        let corAtiva = [];
        let tamAtivo = [];
        let catAtiva = [];

        this.state.colors.map((cor) => {
            if (cor.actived) {
                filtroCor.coresNome.push(cor.cor_nome);
                filtroCor.coresValor.push(cor.cor_valor);
                corAtiva.push(cor.cor_nome);
            }
        });

        this.state.tamanhos.map((tam) => {
            if(tam.actived){
                tamanhos.push(tam.tamanho_id);
                tamAtivo.push(tam.tamanho_nome);
            }
        });

        this.state.ordenacao.map((o) => {
            o.actived ? ordem.push(o.ordem_id) : '';
        });

        this.state.categorias.map((cat) => {
            if(cat.actived){
                this.categorias_id.push(cat.style_id);
                catAtiva.push(cat.style_name);
            }
        });

        corAtiva = corAtiva.join();
        tamAtivo = tamAtivo.join();
        catAtiva = catAtiva.join();

        let params = {
            categorias: this.categorias_id,
            empresa_id: this.state.empresa_id,
            limite: this.state.paginacao_produto_perfil,
            ordenar: ordem,
            precos: this.state.preco,
            sessao: this.state.sessaoAtiva.sessao_id,
            tamanhos: tamanhos,
            filtroCor: filtroCor,
        };

        PerfilService.getProducts(params).then((res) => {

            this.setState({
                verMaisAtivo: false
            });

            let result = res.data;

            this.state.qtdTotalProd = result.totalProd;
            this.setState({
                qtdTotalProd: this.state.qtdTotalProd
            });

            if (this.state.produtos && !substituir) {
                this.state.produtos.push(...result.produtos);
                this.setState({
                    produtos: this.state.produtos,
                    produtos_carregados: true,
                    loading_products: false
                });

            } else {
                this.state.produtos = result.produtos;
                this.setState({
                    produtos: this.state.produtos,
                    produtos_carregados: true,
                    loading_products: false
                });
            }

        }, (error) => {
            console.log('ERROR: ', error);
            this.setState({
                loading_products: false
            });
        });
    };

    infiniteScrollProducts(){
        this.setState({
            verMaisAtivo: true
        });

        this.state.paginacao_produto_perfil.fim += 5;
        this.setState({
            paginacao_produto_perfil: this.state.paginacao_produto_perfil
        });

        this.getProducts(false);
    };

    alertaPermissao(){
        if (this.state.user_logged_global && this.state.user_logged_global.user_type === this.state.dados.user_type && this.state.user_logged_global.empresa_id_fk !== this.state.dados.empresa_id_fk) {
            Alert.alert(
                'Aviso',
                'Desculpe, mas você não têm permissão para acessar este conteúdo.',
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );
        } else {
            this.set_cadastro();
        }
    }

    set_cadastro(){

    }

    renderRota(){
        return(
            <View style={styles.containerRotas}>

                <Text style={styles.textRota}>
                    houpa! >
                </Text>

                <Text style={styles.textRota}>
                    Vitrines >
                </Text>

                <Text style={{color: '#000'}}>
                    UniqueChic
                </Text>

            </View>
        )
    }

    renderInput(){
        return(
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.inputSearch}
                    underlineColorAndroid='#FFF'
                    placeholder={'Busca'}
                />
            </View>
        )
    }

    // Renderiza a Capa do Perfil com seus respectivos dados
    renderCapa(){
        if(this.state.dados_carregados){
            return(
                <Capa user_logged={this.state.user_logged_global} txtConexao={this.state.txtConexao} perfil={this.state.dados} />
            );
        }
    }

    // Renderiza os produtos das confecções no perfil
    renderProdutos(){
        if(this.state.produtos_carregados){
            return(
                <Produto user_logged={this.state.user_logged_global} produtos={this.state.produtos} />
            );
        }
    }

    // Ativa o loading dos produtos
    renderLoadingProducts() {
        if(this.state.loading_products && !this.state.verMaisAtivo){
            return (
                <View style={{marginTop: 20}}>
                    <ActivityIndicator size="large" color="#7417fb"/>
                    <Text>
                        Carregando os produtos...
                    </Text>
                </View>
            );
        }
    }

    // Ativa o loading de ver mais produtos
    renderLoadingVerMais(){
        if(this.state.verMaisAtivo){
            return(
                <View style={{marginTop: 20}}>
                    <ActivityIndicator size="large" color="#7417fb"/>
                    <Text>
                        Carregando mais produtos...
                    </Text>
                </View>
            );
        }
    }

    // Renderiza o botão ver mais produtos
    renderBotaoVerMais(){
        if(this.state.produtos.length > 0 && this.state.loading_products === false && this.state.produtos.length < this.state.qtdTotalProd){
            return(
                <TouchableOpacity style={{marginTop: 20, backgroundColor: '#000', padding: 10}} onPress={() => this.infiniteScrollProducts()}>
                    <Text style={{color: '#fff', fontSize: 14}}>
                        VER MAIS...
                    </Text>
                </TouchableOpacity>
            );
        }else{
            return null;
        }
    }

    _listViewOffset = 0;
    _onScroll = (event) => {

        const currentOffset = event.nativeEvent.contentOffset.y;
        const direction = (currentOffset > 0 && currentOffset > this._listViewOffset)
            ? 'down'
            : 'up';

        const filtroVisible = direction === 'up';

        if (filtroVisible) {

            Animated.timing( this.state.animation_filtro, {
                toValue: 0,
                duration: 200
            }).start();

            Animated.timing( this.state.animation_ordenar, {
                toValue: 0,
                duration: 200
            }).start();

        }else{

            Animated.timing(this.state.animation_filtro, {
                toValue: 100,
                duration: 200
            }).start();

            Animated.timing( this.state.animation_ordenar, {
                toValue: 100,
                duration: 200
            }).start();
        }
        this._listViewOffset = currentOffset
    };

    renderOrdenar(){

        let ordenar = this.state.animation_filtro.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ (60 * -1), 24 ]
        });

        if(this.state.dados_carregados){
            return(
                <Animated.View style={{
                    top: ordenar,
                    borderBottomWidth: 1,
                    borderBottomColor: '#c2c2c2',
                    alignItems: 'center', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, position: 'absolute', zIndex: 999999, flexDirection: 'row', width: '100%', height: 60, backgroundColor: '#fff'}}>

                    <View style={{width: '49%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>

                        <View style={{height: '100%', width: 50, borderWidth: 1, borderColor: '#c2c2c2', borderRadius: 2}}>
                            <Image style={{width: '100%', height: '100%'}} source={{uri: this.state.dados.imgPerfil.medium}} />
                        </View>

                        <Text numberOfLines={1} ellipsizeMode="tail" style={{width: 100, marginLeft: 10, color: '#000', fontSize: 16, fontWeight: 'bold'}}>
                            {this.state.dados.perfil_nome}
                        </Text>

                    </View>

                    <View style={{height: '100%', borderLeftColor: '#c2c2c2', borderLeftWidth: 1}} />

                    <View style={{width: '49%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>

                        <TouchableOpacity onPress={this._openFiltro}
                                          style={{height: '80%', width: 40, borderWidth: 1, borderColor: '#000', marginRight: 10, alignItems: 'center', justifyContent: 'center'}}>

                            <View style={{height: 20, width: 20}}>
                                <Image resizeMode={'contain'} style={{width: '100%', height: '100%'}} source={ require('../../assets/imgs/png/icons/filtro.png')} />
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={{height: '80%', width: 100, borderWidth: 1, borderColor: '#000', flexDirection: 'row', padding: 5, alignItems: 'center', justifyContent: 'center'}}>

                            <View style={{height: 15, width: 15, alignItems: 'center', justifyContent: 'center'}}>
                                <Image resizeMode={'contain'} style={{width: '50%', height: '50%', transform: [{rotateX: '180deg'}]}} source={ require('../../assets/imgs/png/arrow-down.png')} />
                                <Image resizeMode={'contain'} style={{width: '50%', height: '50%'}} source={ require('../../assets/imgs/png/arrow-down.png')} />
                            </View>

                            <Text style={{marginLeft: 5, color: '#000', fontSize: 12}}>
                                ORDENAR
                            </Text>

                        </TouchableOpacity>
                    </View>
                </Animated.View>
            )
        }
    }

    renderFiltro(){

        let filtro = this.state.animation_filtro.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ (50 * -1), 0 ]
        });

        return(
            <Animated.View style={[styles.containerFiltro, {bottom: filtro,
                // bottom: 0,
                }]}>

                <TouchableOpacity>
                    <Text style={styles.textFiltro}>
                        TODOS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textFiltro}>
                        VITRINE
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textFiltro}>
                        LANÇAMENTOS
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.textFiltro}>
                        PROMOÇÕES
                    </Text>
                </TouchableOpacity>

            </Animated.View>
        )
    }

    renderPage(){
        if(this.state.loading){
            return <ActivityIndicator style={{flex: 1,  alignItems: 'center', justifyContent: 'center'}} size="large" color="#7417fb" />;
        }

        return (
            <View style={styles.containerPage}>
                {this.renderRota()}
                {this.renderInput()}
                {this.renderCapa()}
                {this.renderProdutos()}
                {this.renderBotaoVerMais()}
                {this.renderLoadingProducts()}
                {this.renderLoadingVerMais()}
            </View>
        );
    }

    render_perfil(){
        return (
            <View style={styles.containerPerfil}>

                {this.renderOrdenar()}

                <ScrollView onScroll={this._onScroll}>
                    { this.renderPage() }
                </ScrollView>

                <Filtro opened={ this.state.opened_filtro } onclose={ this._closedFiltro} categorias={this.state.categorias} produtos={this.state.produtos} />

                {this.renderFiltro()}
            </View>
        );
    }

    render(){
        return(
            <Template
                render={ this.render_perfil() }
                navigation={ this.props.navigation } />
        );
    }

}