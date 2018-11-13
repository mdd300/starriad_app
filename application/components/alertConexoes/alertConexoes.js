import React from 'react';
import {Text, View, Image, TouchableOpacity, AsyncStorage, Alert, Animated, Picker, Dimensions} from 'react-native';
import styles from "./alertConexoes-styles";
import CheckBox from "../checkBox/CheckBox";
import ConexoesService from "../../services/conexoes/conexoes-service";

export default class AlertConexoes extends React.Component {

    constructor(props) {
        super(props);

        let { height, width } = Dimensions.get('window');

        this.state = {
            passos: {
                um: true,
                dois: false,
                tres: false
            },
            paramsExcluir: props.paramsExcluir,
            opcao: {
                opcaoUm: false,
                opcaoDois: false,
            },
            motivo: null,
            recusa: '',
            error: {
              motivo: '',
              bloqueio: '',
            },

            screen_height: height,
            screen_width: width,
        };
    }

    desconectar() {
        let resposta = null;
        let motivo = this.state.motivo;
        let bloqueio = this.state.recusa;

        this.state.paramsExcluir.idSolicitado = this.props.paramsExcluir.idSolicitado;
        this.state.paramsExcluir.motivoExclusao = motivo;
        this.state.paramsExcluir.tempoBloqueio = bloqueio;

        ConexoesService.deleteConexao(this.state.paramsExcluir, this.props.restkey).then((response) => {
            resposta = response.data;

            if (resposta.success) {
                this.props.empresa.notificacao_tipo = 10;
                this.props.empresa.notificacao_nome = 'E você estão desconectados';
                this.setState({
                    empresa: this.props.empresa
                });
                ConexoesService.deleteOfFirestore(this.props.empresa.empresa_id_fk, resposta.user_logged_id, resposta.dadosApagados, this.props.restkey);
            }
        }, (error) => {
            console.log('ERROR: ', error);
        });
    }

    renderAlertPassoUm(){
        if(this.state.passos.um){
            return(
                <View style={styles.container_alert}>
                    <View style={styles.container_exclamacao}>
                        <View style={styles.border_exclamacao}>
                            <Text style={styles.exclamacao}>
                                !
                            </Text>
                        </View>
                    </View>

                    <View style={[styles.container_title, {marginBottom: 10}]}>
                        <Text style={styles.title}>
                            Excluir Conexão
                        </Text>

                        <Text style={styles.sub_title}>
                            Tem certeza que deseja excluir essa conexão?
                        </Text>
                    </View>

                    <View style={styles.container_options}>

                        <TouchableOpacity style={[styles.btn_alert, {backgroundColor: '#000'}]}
                            onPress={() => {
                                this.state.passos.um = false;
                                this.state.passos.dois = true;
                                this.setState({
                                    passos: this.state.passos
                                })}}>

                            <Text style={styles.btn_text}>
                                Sim, excluir!
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btn_alert, {backgroundColor: '#ff1824', marginLeft: 10}]}
                            onPress={() => {
                                this.state.passos.um = true;
                                this.state.passos.dois = false;
                                this.state.passos.tres = false;
                                this.setState({
                                    passos: this.state.passos
                                });
                                this.props.onclose()}}>

                            <Text style={styles.btn_text}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }

    renderAlertPassoDois(){
        if(this.state.passos.dois){
            return(
                <View style={styles.container_alert}>
                    <View style={styles.container_title}>
                        <Text style={styles.title}>
                            Qual o motivo da exclusão?
                        </Text>
                    </View>

                    <View style={styles.container_options_checkbox}>
                        <TouchableOpacity style={styles.options_checkbox}
                            onPress={() => {
                                this.state.opcao.um = true;
                                this.state.opcao.dois = false;
                                this.props.user_logged.user_type == 1 ? this.state.motivo = 1 : this.props.user_logged.user_type == 2 ? this.state.motivo = 3 : null;
                                this.setState({opcao: this.state.opcao, user: this.state.motivo})
                            }}>

                            <CheckBox actived={this.state.opcao.um} color={'#0099df'}/>

                            {this.props.user_logged.user_type == 1 ?
                                <Text style={styles.text_checkbox}>
                                    Critérios de análise Interna
                                </Text>
                                    :
                                this.props.user_logged.user_type == 2 ?
                                    <Text style={styles.text_checkbox}>
                                        Não compro mais nessa loja
                                    </Text>
                                    :
                                    null
                            }
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.options_checkbox}
                            onPress={() => {
                                this.state.opcao.um = false;
                                this.state.opcao.dois = true;
                                this.props.user_logged.user_type == 1 ? this.state.motivo = 2 : this.props.user_logged.user_type == 2 ? this.state.motivo = 4 : null;
                                this.setState({opcao: this.state.opcao, user: this.state.motivo})
                            }}>

                            <CheckBox actived={this.state.opcao.dois} color={'#0099df'}/>

                            {this.props.user_logged.user_type == 1 ?
                                <Text style={styles.text_checkbox}>
                                    Praça fechada
                                </Text>
                                :
                                this.props.user_logged.user_type == 2 ?
                                    <Text style={styles.text_checkbox}>
                                        Outros
                                    </Text>
                                    :
                                    null
                            }
                        </TouchableOpacity>

                        <Text style={styles.errorLabel}>{this.state.error.motivo}</Text>

                    </View>

                    <View style={styles.container_options}>
                        <TouchableOpacity style={[styles.btn_alert, {backgroundColor: '#3085d6'}]}
                            onPress={() => {
                                if(this.state.motivo == '' || this.state.motivo == null || this.state.motivo == undefined){
                                    this.state.error.motivo = 'Preencha uma opção';
                                    this.setState({
                                        error: this.state.error
                                    });
                                }else{
                                    this.state.error.motivo = '';
                                    this.state.passos.dois = false;
                                    this.state.passos.tres = true;
                                    this.setState({
                                        passos: this.state.passos,
                                        error: this.state.error
                                    });
                                }
                            }}>

                            <Text style={styles.btn_text}>
                                OK
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btn_alert, {backgroundColor: '#aaa', marginLeft: 10}]}
                            onPress={() => {
                                this.state.passos.um = true;
                                this.state.passos.dois = false;
                                this.state.passos.tres = false;
                                this.state.opcao.um = false;
                                this.state.opcao.dois = false;
                                this.setState({
                                    passos: this.state.passos
                                });
                                this.props.onclose()}}>

                            <Text style={styles.btn_text}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }

    renderAlertPassoTres(){

        if(this.state.passos.tres){
            return(
                <View style={styles.container_alert}>
                    <View style={styles.container_title}>
                        <Text style={[styles.title, {textAlign: 'center'}]}>
                            Deseja receber uma nova solicitação deste cliente?
                        </Text>
                    </View>

                    <View style={styles.container_title}>
                        <View style={styles.container_picker}>
                            <Picker
                                selectedValue={this.state.recusa}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) => this.setState({recusa: itemValue})}>
                                <Picker.Item label="Escolha..." value="escolha" />
                                <Picker.Item label="Sim" value="sim" />
                                <Picker.Item label="Daqui à 1 mes" value="1mes" />
                                <Picker.Item label="Daqui à 3 mes" value="3meses" />
                                <Picker.Item label="Daqui à 6 mes" value="6meses" />
                                <Picker.Item label="Nunca" value="nunca" />
                            </Picker>
                        </View>
                        <Text style={styles.errorLabel}>{this.state.error.bloqueio}</Text>
                    </View>

                    <View style={styles.container_options}>
                        <TouchableOpacity style={[styles.btn_alert, {backgroundColor: '#3085d6'}]}
                            onPress={() => {
                                if(this.state.recusa == 'escolha'){
                                    this.state.error.bloqueio = 'Preencha uma opção';
                                    this.setState({
                                        error: this.state.error
                                    });
                                }else{
                                    this.desconectar();
                                    this.props.onclose(true, this.state.recusa);
                                    this.state.passos.um = true;
                                    this.state.passos.dois = false;
                                    this.state.passos.tres = false;
                                    this.state.opcao.um = false;
                                    this.state.opcao.dois = false;
                                }
                            }}>

                            <Text style={styles.btn_text}>
                                OK
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btn_alert, {backgroundColor: '#aaa', marginLeft: 10}]}
                            onPress={() => {
                                this.state.passos.um = true;
                                this.state.passos.dois = false;
                                this.state.passos.tres = false;
                                this.state.opcao.um = false;
                                this.state.opcao.dois = false;
                                this.setState({
                                    passos: this.state.passos
                                });
                                this.props.onclose()}}>

                            <Text style={styles.btn_text}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }

    renderPage(){
        return(
            <View style={styles.content_page}>
                {this.renderAlertPassoUm()}
                {this.renderAlertPassoDois()}
                {this.renderAlertPassoTres()}
            </View>
        );
    }

    render(){
        if(this.props.opened){
            return(
                <View style={[styles.container_page, {height: '100%'}]}>
                    {this.renderPage()}
                </View>
            );
        }else{
            return(
                <View />
            )
        }
    }
}