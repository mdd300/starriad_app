import React from 'react';
import {
    Animated,
    AsyncStorage,
    Image,
    ImageBackground,
    Platform,
    Text,
    TouchableOpacity,
    UIManager,
    View,
    Linking,
    Share
} from 'react-native';
import styles from './capa-styles';
import ConexoesService from "../../../../services/conexoes/conexoes-service";
import AlertConexoes from "../../../../components/alertConexoes/alertConexoes";

export default class Capa extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            perfil: props.perfil,
            user_logged: props.user_logged,
            labelConexoes: '',
            opened_alert: false,
            user_logged_global: null,
            restkey: null,
            paramsExcluir: {
                idSolicitado: null,
                motivoExclusao: '',
                tempoBloqueio: ''
            },
        };
    }

    componentDidMount(){

        setTimeout(() => {

            this.state.labelConexoes = this.props.txtConexao;

            this.setState({
                labelConexoes: this.state.labelConexoes
            });

        }, 2000)
    }

    // Executa quando o component sofre atualizações
    componentWillReceiveProps(props){
        this.state.perfil = props.perfil;
        this.setState({
            perfil: this.state.perfil,
        });
    }

    _closedAlert =((valida, recusa) => {

        console.log('Valida: ', valida);
        console.log('Recusa: ', recusa);

        if(valida){
            if(recusa === 'sim'){
                this.state.labelConexoes = 'conectar';
                this.setState({
                    labelConexoes: this.state.labelConexoes
                });
            }else{
                this.state.labelConexoes = 'bloqueei';
                this.setState({
                    labelConexoes: this.state.labelConexoes
                });
            }
        }

        this.setState({ opened_alert: false });
    });

    conexoes = async (idClicado, situacao) => {

        this.state.restkey = await AsyncStorage.getItem('restkey');
        this.setState({
            restkey: this.state.restkey
        });

        const user_logged = await AsyncStorage.getItem('@houpa:userlogged');
        this.state.user_logged_global = JSON.parse(user_logged);

        let resposta = null;
        let motivo = null;
        let bloqueio = null;
        this.state.paramsExcluir = {
            idSolicitado: idClicado,
            motivoExclusao: '',
            tempoBloqueio: ''
        };

        if(situacao == 'conectados' || situacao == 'bloqueei'){
            situacao = 'solicitado';
        }else if (situacao == 'aceitar'){

            this.state.labelConexoes = 'conectados';
            this.setState({
                labelConexoes: this.state.labelConexoes
            });
            situacao = 'conectar';
        }

        switch (situacao) {
            case 'conectar':

                if(this.state.labelConexoes != 'conectados'){

                    this.state.labelConexoes = 'solicitado';
                    this.setState({
                        labelConexoes: this.state.labelConexoes
                    });
                }

                ConexoesService.setConectar(idClicado, this.state.restkey).then((response) => {
                    resposta = response.data;

                    if (resposta.success) {
                        ConexoesService.insertIntoFirestore(idClicado.toString(), resposta.user_logged.toString(), resposta.sendToFirestore);
                    }
                }, (error) => {
                    console.log('ERROR: ', error);
                });

                break;

            case 'solicitado':

                this.setState({
                    opened_alert: true,
                    user_logged_global: this.state.user_logged_global,
                    restkey: this.state.restkey
                });

                break;
        }
    };

    // Realizar chamada para a loja
    callNumber = (url) =>{
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Não é possível abrir a url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('Um erro ocorreu: ', err));
    };

    // Compartilhar Perfil
    sharePerfil(){
        Share.share({
            message: 'Olha só o que encontrei no Houpa! Acessa lá! ' + 'http://ws.houpa.com.br/' + this.state.perfil.profile_url,
            // url: 'http://bam.tech',
            title: 'Olha só o que encontrei no Houpa! Acessa lá!'
        }, {
            // Android only:
            dialogTitle: `Compartilhar ${this.state.perfil.perfil_nome}`,
            // iOS only:
            excludedActivityTypes: [
                ''
            ]
        })
    };

    renderBotaoConexoes(){

        let user_logged = JSON.parse(this.state.user_logged);

        if(this.state.user_logged && user_logged.user_type != this.state.perfil.user_type && !this.state.perfil.owner){
           return(
               <View style={styles.containerLabel}>
                   <TouchableOpacity activeOpacity={0.6} style={styles.touchBtnConexoes}
                         onPress={() => {
                             this.conexoes(this.state.perfil.empresa_id_fk, this.state.labelConexoes)
                         }}>
                       <Text style={styles.textBtnConexoes}>
                           {this.state.labelConexoes.toUpperCase()}
                       </Text>
                   </TouchableOpacity>
               </View>
           );
        }else{
            return null;
        }
    }

    render(){
        return(
            <View style={styles.containerCapa}>

                <View style={styles.containerFotoCapa}>
                    <ImageBackground source={{uri: this.state.perfil.imgCapa.big}} style={styles.imgCapa} />
                    <View style={styles.overlayFotoCapa} />
                </View>

                <View style={styles.containerInfo}>

                    <View style={styles.infoPerfil}>

                        <View style={styles.containerImgMarca}>
                            <Image style={styles.imgMarca} resizeMode={'contain'} source={{uri: this.state.perfil.imgPerfil.medium}} />
                        </View>

                        <View style={styles.containerLabel}>
                            <Text style={styles.labelBoasVindas}>
                                BEM VINDO À LOJA
                            </Text>
                        </View>

                        <View style={styles.containerNomeMarca}>
                            <Text style={styles.nomeMarca}>
                                {this.state.perfil.perfil_nome.toUpperCase()}
                            </Text>
                        </View>

                        {this.renderBotaoConexoes()}

                    </View>

                    <View style={styles.menuLateralIcons}>

                        <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                            <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/imagem.png') } />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                            <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/chat-fill.png') } />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.sharePerfil()} activeOpacity={0.6} style={styles.containerIcons}>
                            <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/share.png') } />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                            <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/localizacao.png') } />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.callNumber(`tel:${this.state.perfil.telefone}`)} activeOpacity={0.6} style={styles.containerIcons}>
                            <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/telefone.png') } />
                        </TouchableOpacity>

                    </View>
                </View>

                <AlertConexoes labelConexoes={this.state.labelConexoes} empresa={this.state.perfil} paramsExcluir={this.state.paramsExcluir} restkey={this.state.restkey} user_logged={this.state.user_logged_global} opened={ this.state.opened_alert } onclose={ this._closedAlert } />
            </View>
        );
    }
}