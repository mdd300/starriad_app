import React from 'react';
import {Text, View, Image, TouchableOpacity, AsyncStorage, Alert, ActivityIndicator} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../Notificacoes-styles';
import NotificacoesService from "../../../../services/notificacoes/notificacoes-service";
import ConexoesService from "../../../../services/conexoes/conexoes-service";
import AlertConexoes from "../../../../components/alertConexoes/alertConexoes";
import SideMenu from "../../../../components/SideMenu/SideMenu";

class ListItemLastNotificacoes extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            params: {dados: 'OK'},
            opened_alert: false,
        };
    }

    _openAlert = (() => {
        this.setState({ opened_alert: true })
    });

    _closedAlert = ((  ) => {
        this.setState({ opened_alert: false });
    });

    componentDidMount() {

        // Marca as notificações como lida quando a pagina é aberta
        setTimeout(()=> {
            this.props.notificacao.atv.map((notification) => {
                notification.notificacao_ready = 1;

                if (!notification == '') {
                    this.readActiviteSql(notification.notificacao_id);
                }
            });
        }, 8000);
    }

    // Função que le a notificação clicada e seta no sql
    readActiviteSql = async (idNotificacao) => {

        const restkey = await AsyncStorage.getItem('restkey');

        this.state.params.dados = idNotificacao;
        this.setState({
            params: this.state.params
        });
        NotificacoesService.lerAtividadesSql(this.state.params, restkey).then((res) => {
        }, (error) => {

            Alert.alert(
                'Atividade não lida',
                'Ops! Pareceu que ocorreu um erro verifique sua conexão ' + error,
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );
        });
    };

    // Função que passa a notificação clicada e passa pra função de ler no sql
    actionTo(notificacao){

        notificacao.notificacao_ready = 1;
        if (!notificacao == '') {
            this.readActiviteSql(notificacao.notificacao_id);

            if(notificacao.notificacao_tipo == 1 || notificacao.notificacao_tipo == 12){
                if(notificacao.post_id_fk != undefined || notificacao.post_id_fk != '' || notificacao.post_id_fk != null){
                    AsyncStorage.setItem("postID", notificacao.post_id_fk);
                    this.props.navigation.navigate('Feed');
                }else{
                    Alert.alert(
                        'Post Não encontrado!',
                        [
                            {text: 'OK'},
                        ],
                        {cancelable: false}
                    );
                }
            }
        }
    };

    conectar = async (empresa) => {

        const restkey = await AsyncStorage.getItem('restkey');

        this.setState({
            loading_conectar: true
        });

        let resposta = null;

        if (empresa.notificacao_ready == 0) {
            empresa.notificacao_ready = 1;
        }

        ConexoesService.setConectar(empresa.empresa_id_fk, restkey).then((response) => {
            resposta = response.data;

            if (resposta.success) {
                this.setState({
                    loading_conectar: false
                });

                if(this.props.notificacao[0]){
                    this.props.notificacao[0].atv.map(element => {
                        if(element.notificacao_tipo == 3 || element.notificacao_tipo == 10){
                            element.notificacao_tipo = 11;
                            element.notificacao_nome = 'Recebeu seu pedido de conexão';
                        }
                    });

                }
                if(this.props.notificacao[1]){
                    this.props.notificacao[1].atv.map(element => {
                        if(element.notificacao_tipo == 3 || element.notificacao_tipo == 10){
                            element.notificacao_tipo = 11;
                            element.notificacao_nome = 'Recebeu seu pedido de conexão';
                        }
                    });
                }

                this.actionTo(empresa);
                ConexoesService.insertIntoFirestore(empresa.empresa_id_fk.toString(), resposta.user_logged.toString(), resposta.sendToFirestore, resposta.data_aceitacao, restkey);
                this.changeStatusNotifc('connect', empresa.notificacao_id);
            }else{
                this.setState({
                    loading_conectar: false
                });
            }
        }, (error) => {
            this.setState({
                loading_conectar: false
            });

            if (empresa.notificacao_ready == 0) {
                empresa.notificacao_ready = 0;
            }

            Alert.alert(
                'Conexão perdida!',
                'Ops! Pareceu que ocorreu um erro verifique sua conexão.',
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );
        });
    };

    desconectar = async (empresa, index) => {

        const restkey = await AsyncStorage.getItem('restkey');

        let resposta = null;
        let motivo = null;
        let bloqueio = null;
        let paramsExcluir = {
            idSolicitado: empresa.empresa_id_fk,
            motivoExclusao: '',
            tempoBloqueio: ''
        };

        if (empresa.notificacao_ready == 0) {
            empresa.notificacao_ready = 1;
        }

        this.setState({
            opened_alert: true
        })

        // Alert.alert(
        //     'Excluir Conexão',
        //     'Tem certeza que deseja excluir essa conexão?',
        //     [
        //         {text: 'NÃO', onPress: () => null},
        //         {text: 'SIM', onPress: () => null},
        //     ],
        //     {cancelable: false}
        // );
    };

    toPerfil(){

    }

    render() {

        if (this.props.notificacao.date == 'Atividades Passadas') {
            return (
                <View>
                    <View style={styles.labelAnteriores}>
                        <Text style={styles.textAnteriores}>
                            {this.props.notificacao.date}
                        </Text>
                    </View>

                    {this.props.notificacao.atv.map((atividade, index) => (

                        <View key={index} style={[
                            styles.line,
                            atividade.notificacao_ready == 1 ? styles.corFundoNotificacaoLida : styles.corFundoNotificacaoNova
                        ]}>

                            {atividade.notificacao_ready == 0 &&
                            <View style={styles.statusNova}/>
                            }

                            {atividade.notificacao_ready == 1 &&
                            <View style={styles.statusLida}/>
                            }

                            <TouchableOpacity activeOpacity={0.8} style={styles.containerImagem}>
                                {
                                    atividade.img_url_big.medium !== '' ?
                                    <Image style={styles.imgPerfil} source={{uri: atividade.img_url_big.medium}}/> :
                                        <Image style={styles.imgPerfil} source={{uri: 'https://client.whatz.me/img/default-user.png'}}/>
                                }
                            </TouchableOpacity>

                            <Text style={styles.lineText}>

                                <Text style={{fontWeight: 'bold', paddingRight: 5}}>
                                    {atividade.perfil_nome}
                                </Text>

                                <Text> {
                                    atividade.notificacao_nome
                                }</Text>
                            </Text>

                            { atividade.notificacao_tipo == 10 &&
                            <TouchableOpacity onPress={() => this.conectar(atividade)} activeOpacity={0.6} style={styles.btnConexoes}>
                                <Text style={styles.labelBtnConexoes}>
                                    CONECTAR
                                </Text>
                            </TouchableOpacity>
                            }

                            { atividade.notificacao_tipo == 3 || atividade.notificacao_tipo == 2 &&
                            <TouchableOpacity onPress={() => this.desconectar(atividade, index)} activeOpacity={0.6} style={styles.btnConexoes}>
                                <Text style={styles.labelBtnConexoes}>
                                    DESCONECTAR
                                </Text>
                            </TouchableOpacity>
                            }

                            { atividade.notificacao_tipo == 11 &&
                            <TouchableOpacity onPress={() => this.desconectar(atividade, index)} activeOpacity={0.6} style={styles.btnConexoes}>
                                <Text style={styles.labelBtnConexoes}>
                                    CANCELAR
                                </Text>
                            </TouchableOpacity>
                            }

                            { atividade.notificacao_tipo == 3 &&
                            <View style={{flexDirection: 'row', width: 90, height: '60%'}}>
                                <TouchableOpacity onPress={() => this.conectar(atividade)} activeOpacity={0.6} style={[styles.btnConexoes, {flex: 1, maxWidth: 50, height: '100%'}]}>

                                    { this.state.loading_conectar ?
                                        <ActivityIndicator size="small" color="#fff"/> :

                                        <Text style={styles.labelBtnConexoes}>
                                            SIM
                                        </Text>
                                    }

                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.desconectar(atividade, index)} activeOpacity={0.6} style={[styles.btnConexoes, {flex: 1, maxWidth: 50, height: '100%'}]}>
                                    <Text style={styles.labelBtnConexoes}>
                                        NÃO
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            }

                            { atividade.notificacao_tipo == 8 &&
                            <TouchableOpacity onPress={() => this.desconectar(atividade, index)} activeOpacity={0.6} style={styles.btnConexoes}>
                                <Text style={styles.labelBtnConexoes}>
                                    CONECTADOS
                                </Text>
                            </TouchableOpacity>
                            }

                            { atividade.notificacao_tipo == 5 &&
                            <TouchableOpacity onPress={() => this.toPerfil(atividade)} activeOpacity={0.6} style={styles.btnConexoes}>
                                <Text style={styles.labelBtnConexoes}>
                                    VER PERFIL
                                </Text>
                            </TouchableOpacity>
                            }

                            { atividade.notificacao_tipo == 7 &&
                            <TouchableOpacity onPress={() => this.actionTo(atividade)} activeOpacity={0.6} style={styles.btnConexoes}>
                                <Text style={styles.labelBtnConexoes}>
                                    VER PRODUTO
                                </Text>
                            </TouchableOpacity>
                            }

                            { atividade.notificacao_tipo == 4 &&
                            <TouchableOpacity onPress={() => this.actionTo(atividade)} activeOpacity={0.6} style={styles.btnConexoes}>
                                <Text style={styles.labelBtnConexoes}>
                                    VER PEDIDO
                                </Text>
                            </TouchableOpacity>
                            }

                            { atividade.notificacao_tipo == 1
                            // || atividade.notificacao_tipo == 12
                            &&
                            <TouchableOpacity onPress={() => this.actionTo(atividade)} activeOpacity={0.6} style={styles.btnConexoes}>
                                <Text style={styles.labelBtnConexoes}>
                                    VER POST
                                </Text>
                            </TouchableOpacity>
                            }

                            { atividade.notificacao_tipo == 12 &&
                            <TouchableOpacity onPress={() => this.actionTo(atividade)} activeOpacity={0.6} style={styles.btnConexoes}>
                                <Text style={styles.labelBtnConexoes}>
                                    VER POST
                                </Text>
                            </TouchableOpacity>
                            }

                        </View>
                    ))}

                    <AlertConexoes opened={ this.state.opened_alert } onclose={ this._closedAlert } />
                </View>
            );
        } else {
            return (
                <View/>
            );
        }
    }
};

export default withNavigation(ListItemLastNotificacoes);