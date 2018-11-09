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
    Linking
} from 'react-native';
import styles from './capa-styles';
import ConexoesService from "../../../../services/conexoes/conexoes-service";

export default class Capa extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            perfil: props.perfil,
            txtConexao: props.txtConexao,
            user_logged: props.user_logged,
        };
    }

    conexoes = async (idClicado, situacao) => {

        const restkey = await AsyncStorage.getItem('restkey');

        let resposta = null;
        let motivo = null;
        let bloqueio = null;
        let paramsExcluir = {
            idSolicitado: idClicado,
            motivoExclusao: '',
            tempoBloqueio: ''
        };

        if(situacao == 'conectados' || situacao == 'bloqueei'){
            situacao = 'solicitado';
        }else if (situacao == 'aceitar'){
            this.setState({
                txtConexao: 'conectados'
            });
            situacao = 'conectar';
        }

        switch (situacao) {
            case 'conectar':

                if(this.state.txtConexao != 'conectados'){
                    this.setState({
                        txtConexao: 'solicitado'
                    });
                }

                ConexoesService.setConectar(idClicado, restkey).then((response) => {
                    resposta = response.data;

                    if (resposta.success) {
                        ConexoesService.insertIntoFirestore(idClicado.toString(), resposta.user_logged.toString(), resposta.sendToFirestore);
                    }
                }, (error) => {
                    console.log('ERROR: ', error);
                });

                break;

            case 'solicitado':

                // // Quer dizer que ele vai excluir a solicitação ou conexão
                // swal({
                //     title: "Excluir Conexão",
                //     text: "Tem certeza que deseja excluir essa conexão ?",
                //     type: 'warning',
                //     showCancelButton: true,
                //     confirmButtonColor: '#000',
                //     cancelButtonColor: '#d33',
                //     confirmButtonText: 'Sim, deletar!'
                // }).then(function (result) {
                //     if (result.value) {
                //
                //         var inputOptions = new Promise(function (resolve) {
                //             setTimeout(function () {
                //                 resolve({
                //                     1: 'Critérios de análise Interna',
                //                     2: 'Praça fechada'
                //                 });
                //             }, 100);
                //         });
                //
                //
                //         swal({
                //             title: 'Qual o motivo da recusa ?',
                //             input: 'radio',
                //             inputOptions: inputOptions,
                //             showCancelButton: true,
                //             cancelButtonText: 'Cancelar',
                //             focusConfirm: true,
                //             inputValidator: function inputValidator(value) {
                //                 return !value && 'Marque ao menos uma opção!';
                //             }
                //         }).then(function (resposta) {
                //
                //             if (resposta.dismiss) {
                //             } else {
                //                 motivo = resposta.value;
                //                 swal({
                //                     title: 'Deseja receber uma nova solicitação deste cliente?',
                //                     input: 'select',
                //                     inputOptions: {
                //                         'sim': 'Sim',
                //                         '1mes': 'Daqui à 1 mês',
                //                         '3meses': 'Daqui à 3 mêses',
                //                         '6meses': 'Daqui à 6 mêses',
                //                         'nunca': 'Nunca'
                //                     },
                //                     inputPlaceholder: 'Escolha...',
                //                     cancelButtonText: 'Cancelar',
                //                     showCancelButton: true,
                //                     focusConfirm: true,
                //                     inputValidator: function inputValidator(value) {
                //                         return !value && 'Escolha ao menos ao menos uma opção!';
                //                     }
                //                 }).then(function (valor) {
                //                     if (valor.dismiss) {
                //                     } else {
                //                         // Quer dizer que ele vai excluir a solicitação ou conexão
                //
                //                         console.log("tentando", valor);
                //
                //                         if (valor.value == "sim") {
                //                             $scope.txtConexao = 'conectar';
                //
                //                         } else {
                //                             $scope.txtConexao = 'bloqueei';
                //
                //                         }
                //
                //                         bloqueio = valor.value;
                //                         paramsExcluir.motivoExclusao = motivo;
                //                         paramsExcluir.tempoBloqueio = bloqueio;
                //                         conexoesService.deleteConexao(paramsExcluir).then(function (response) {
                //                             resposta = response.data;
                //                             if (resposta.success) {
                //                                 conexoesService.deleteOfFirestore(idClicado, resposta.user_logged_id, resposta.dadosApagados);
                //                             }
                //                         }, function (error) {
                //                             console.log('ERROR: ', error);
                //                         });
                //                     }
                //                 });
                //             }
                //         });
                //     } else {
                //     }
                // });

                // conexoesService.deleteConexao(idClicado).then(function (response) {
                //     resposta = response.data;

                //     if (resposta.success) {
                //         conexoesService.deleteOfFirestore(idClicado, resposta.user_logged_id, resposta.dadosApagados);
                //     }
                // }, function (error) {
                //     console.log('ERROR: ', error);
                // });

                // }

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

                        { this.state.user_logged && this.state.user_logged.user_type != this.state.user_logged.user_type &&

                        !this.state.perfil.owner &&

                        <View style={styles.containerLabel}>
                            <TouchableOpacity activeOpacity={0.6} style={styles.touchBtnConexoes}
                                              onPress={() => {
                                                  this.conexoes(this.state.perfil.empresa_id_fk, this.state.txtConexao)
                                              }}>
                                <Text style={styles.textBtnConexoes}>
                                    {this.state.txtConexao.toUpperCase()}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        }

                    </View>

                    <View style={styles.menuLateralIcons}>

                        <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                            <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/imagem.png') } />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
                            <Image resizeMode={'contain'} style={styles.icons} source={ require('../../../../assets/imgs/png/icons/chat-fill.png') } />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6} style={styles.containerIcons}>
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
            </View>
        );
    }
}