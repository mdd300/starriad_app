import React from "react";
import {ActivityIndicator, View, TextInput, Text, ScrollView, Animated, UIManager, LayoutAnimation, Platform, Image, TouchableOpacity} from "react-native";
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import SystemTabs from "../../components/tabs/SystemTabs";
import styles from "../perfil/Perfil-style";
import Capa from './perfilComponents/capa/capa';
import Produto from "./perfilComponents/produtos/produtos";
import Filtro from "./perfilComponents/filtro/filtro";
import SideMenu from "../../components/SideMenu/SideMenu";

export default class Perfil extends React.Component {

    constructor(props) {
        super(props);

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        this.state = {
            perfil: [],
            album: [],
            dados: [],
            enderecos: [],
            styles: [],
            produtos: [],
            categorias: [],
            loading: false,
            error: false,
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
            this.setState({

                dados: [
                    {user_id_fk: '1', user_type: '1', perfil_nome: 'Uniquechic',

                        imgCapa: [{big: 'https://cdn.awsli.com.br/600x450/141/141063/produto/13989665/1eb662ac0c.jpg', medium: '', mini: ''}],

                        imgPerfil: [{big: '',
                            medium: 'https://scontent-lax3-2.cdninstagram.com/vp/7e62dc20ca11ca981854655007ef2553/5C2F2F5B/t51.2885-19/s150x150/20837257_149479915635315_6908195071569428480_a.jpg',
                            mini: ''}]
                    }
                ],

                categorias: [
                    {style_id: '1', style_name: 'Basico'},
                    {style_id: '2', style_name: 'Blazers'},
                    {style_id: '3', style_name: 'Blusas'},
                    {style_id: '4', style_name: 'Body'},
                    {style_id: '5', style_name: 'Calças'},
                    {style_id: '6', style_name: 'Camisa'},
                    {style_id: '7', style_name: 'Camisetas'},
                    {style_id: '8', style_name: 'Casacos'},
                    {style_id: '9', style_name: 'Casacos e Jaquetas'},
                    {style_id: '10', style_name: 'Cintos'},
                ],

                produtos: [
                    {
                        produto_id: '1',
                        produto_descricao: 'Regata Alça Fivela Tartaruga',
                        produto_preco_atacado: 'R$ 52,90',
                        produto_texto: 'Regata Alça Fivela Tartaruga',
                        style_name: 'Feminino',

                        image_url: [
                            {
                                big: 'https://assets.xtechcommerce.com/uploads/images/medium/63ac443d3dc902676a0d26d0428ad76b.png',
                                medium: '',
                                mini: ''
                            }
                        ],

                        images: ['https://img.olx.com.br/images/00/001826083008797.jpg',
                                 'https://http2.mlstatic.com/colete-tricot-kimono-longo-com-franjas-croch-moda-feminina-D_NQ_NP_502225-MLB25401876042_022017-F.jpg',
                                 'https://http2.mlstatic.com/kit-3-calca-ribana-moletom-moda-feminina-cintura-alta-022-D_NQ_NP_824268-MLB25689958858_062017-F.jpg'
                        ],

                        cores: [
                            {
                                cor_valor: '#3a9dff',
                                img_cor: '',
                                cor_nome: 'Azul',
                            },
                            {
                                cor_valor: '',
                                img_cor: 'https://http2.mlstatic.com/kit-3-calca-ribana-moletom-moda-feminina-cintura-alta-022-D_NQ_NP_824268-MLB25689958858_062017-F.jpg',
                                cor_nome: 'Estampada',
                            }
                        ],

                        grades: [
                            {
                                tamanho_nome: 'P'
                            },
                            {
                                tamanho_nome: 'M'
                            },
                            {
                                tamanho_nome: 'G'
                            }
                        ],

                        variantes: [
                            {
                                cor_id: '1',
                                cor_nome: 'Azul',
                                cor_valor: '',
                                image_url: '',

                                img_previa: [
                                    {
                                        big: 'https://assets.xtechcommerce.com/uploads/images/medium/63ac443d3dc902676a0d26d0428ad76b.png',
                                        medium: '',
                                        mini: ''
                                    }
                                ],

                                imgs: [
                                    {
                                        image: 'https://img.olx.com.br/images/00/001826083008797.jpg'
                                    },
                                    {
                                        image: 'https://http2.mlstatic.com/colete-tricot-kimono-longo-com-franjas-croch-moda-feminina-D_NQ_NP_502225-MLB25401876042_022017-F.jpg'
                                    },
                                    {
                                        image: 'https://http2.mlstatic.com/kit-3-calca-ribana-moletom-moda-feminina-cintura-alta-022-D_NQ_NP_824268-MLB25689958858_062017-F.jpg'
                                    }
                                ],

                                grades: [
                                    {
                                        tamanho_nome: 'P'
                                    },
                                    {
                                        tamanho_nome: 'M'
                                    },
                                    {
                                        tamanho_nome: 'G'
                                    }
                                ],
                            }
                        ]
                    },
                ],

                loading: false,
            });
        }, 500);
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

    renderPage(){

        if(this.state.loading){
            return <ActivityIndicator style={{flex: 1,
                alignItems: 'center',
                justifyContent: 'center',}} size="large" color="#7417fb" />;
        }
        if(this.state.error){
            return <Text style={style.error}>Ops... Algo deu errado =(</Text>
        }

        return (

            <View style={styles.containerPage}>
                {this.renderRota()}
                {this.renderInput()}

                <Capa perfil={this.state.dados} />
                <Produto produtos={this.state.produtos} />

            </View>

        );

    }

    _listViewOffset = 0;

    _onScroll = (event) => {

        // const CustomLayoutLinear = {
        //     duration: 200,
        //     create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
        //     update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
        //     delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
        // };

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

        // if (filtroVisible !== this.state.system_tabs) {
        //
        //     LayoutAnimation.configureNext(CustomLayoutLinear);
        //     this.setState({ system_tabs: !this.state.system_tabs });
        //
        // }



        this._listViewOffset = currentOffset
    };

    renderOrdenar(){

        let ordenar = this.state.animation_filtro.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ (60 * -1), 24 ]
        });

        return(

            <Animated.View style={{
                top: ordenar,
                borderBottomWidth: 1,
                borderBottomColor: '#c2c2c2',
                alignItems: 'center', justifyContent: 'space-between', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, position: 'absolute', zIndex: 999999, flexDirection: 'row', width: '100%', height: 60, backgroundColor: '#fff'}}>

                    { this.state.dados.map((perfil, index) => (

                        <View key={index} style={{width: '49%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>

                            <View style={{height: '100%', width: 50, borderWidth: 1, borderColor: '#c2c2c2', borderRadius: 2}}>
                                <Image style={{width: '100%', height: '100%'}} source={{uri: perfil.imgPerfil[0].medium}} />
                            </View>

                            <Text numberOfLines={1} ellipsizeMode="tail" style={{width: 100, marginLeft: 10, color: '#000', fontSize: 16, fontWeight: 'bold'}}>
                                {perfil.perfil_nome}
                            </Text>

                        </View>

                    ))}

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

    render() {
        return (
            <View style={styles.containerPerfil}>

                <SystemHeader />

                {this.renderOrdenar()}

                <ScrollView onScroll={this._onScroll}>
                    { this.renderPage() }
                </ScrollView>

                    <Filtro opened={ this.state.opened_filtro } onclose={ this._closedFiltro} categorias={this.state.categorias} produtos={this.state.produtos} />

                    <SystemTabs navigation={this.props.navigation} selectedTab='profile'/>

                {/*{!this.state.system_tabs &&*/}
                {this.renderFiltro()}
                {/*}*/}
            </View>
        );
    }
}