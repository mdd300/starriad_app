import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert, ActivityIndicator, AsyncStorage} from 'react-native';
import {styleCadastro} from '../cadastro/Cadastro-styles'
import {style} from '../../../slides/SlideScreen-styles';
import firebase from 'firebase';
import LoginService from '../../../../services/login/login-service';

export default class LoginForm extends React.Component {

    constructor(props) {

        super(props);
        let user = {
            user_pass: '',
            user_login: '',
        };

        let error = {
            user_pass: '',
            user_login: '',
        };

        this.state = {
            user: user,
            error: error,
            hidePass: true,
            loading: false,
        }
    }

    render() {
        return (
            <View style={{marginTop: 50}}>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.user_login !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.user_login = text;
                            this.state.error.user_login = '';
                            this.setState({error: this.state.error});
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Telefone"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.user_login}</Text>
                </View>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.user_pass !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        secureTextEntry={this.state.hidePass}
                        onChangeText={(text) => {
                            this.state.user.user_pass = text;
                            this.state.error.user_pass = '';
                            this.setState({error: this.state.error})
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Senha"
                        placeholderTextColor="#a0a7ad"
                    />

                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.user_pass}</Text>

                </View>

                <TouchableOpacity onPress={() => {
                    this.props.callback('RecuperarSenha');
                }}>
                    <View style={styleCadastro.inputContainer}>
                        <Text style={[styleCadastro.labelSenha]}>Esqueceu sua senha?</Text>
                    </View>
                </TouchableOpacity>


                <View style={{marginTop: 40}}>
                    <TouchableOpacity disabled={this.state.loading ? true : false} onPress={() => { this.doLogin() }}>
                        <View style={[style.btnPadrao, style.btnEntrar]}>

                            { !this.state.loading &&
                                <Text style={[style.textBtn, styleCadastro.text2]}>ENTRAR</Text>
                            }

                            { this.state.loading &&
                                <ActivityIndicator size="large" color="#fff" />
                            }

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop: 15}} onPress={() => {
                        this.props.callback('Passo1')
                    }}>
                        <View style={[style.btnPadrao, style.btnCadastrar]}>
                            <Text style={[style.textBtn, styleCadastro.text2]}>CADASTRAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )

    }

    doLogin() {

        // Verifica se os campos estão preenchidos
        if (this.state.user.user_login === '') {
            this.state.error.user_login = 'O campo e-mail deve ser preenchido';
            this.setState({
                user: this.state.user,
                error: this.state.error,
            });

        }else if (this.state.user.user_pass === '') {
            this.state.error.user_pass = 'O campo senha deve ser preenchido';
            this.setState({
                user: this.state.user,
                error: this.state.error,
            });

        }else{

            this.setState({
                loading: true
            });

            LoginService.signin(this.state.user).then((response) => {

                // Verifica o tipo de erro para colocar os avisos
                if (response.data.type_error === "email") {
                    this.state.error.user_login = 'Usuário ou e-mail não encontrado';
                    this.setState({
                        error: this.state.error
                    });

                } else if (response.data.type_error === "senha") {
                    this.state.error.user_pass = 'Usuário ou senha incorretos';
                    this.setState({
                        error: this.state.error
                    });

                } else if(response.data.type_error === "conta_desativada"){

                    Alert.alert(
                        response.data.message,
                        'Vimos que sua conta do houpa! está desativada. Para efetuar o login, basta clicar no botão Reativar minha conta',
                        [
                            {text: 'Reativar minha conta', onPress: () => {

                                let data = [response.data.empresa_id];

                                LoginService.reativarConta(data).then((res) => {

                                    if(res.data.success){
                                        this.doLogin();
                                    }else{
                                        Alert.alert(
                                            'Reativar conta',
                                            'Ocorreu um erro ao reativar a conta.',
                                            [
                                                {text: 'OK'},
                                            ],
                                            {cancelable: false}
                                        );
                                    }
                                });
                            }},
                            {text: 'Não reativar', onPress: () => null},
                        ],
                        {cancelable: false}
                    );
                }

                this.setState({
                    user: this.state.user,
                    error: this.state.error,
                    loading: false
                });

                if (response.data.success) {
                    firebase.auth().signInWithEmailAndPassword(response.data.email, this.state.user.user_pass).then((user) => {
                        AsyncStorage.setItem('@houpa:userlogged', JSON.stringify(response.data.data_user));
                        AsyncStorage.setItem('uid', user.user.uid);
                        AsyncStorage.setItem('restkey', response.data.restkey);

                    }).catch(error => {

                        this.setState({
                            loading: false
                        });

                        Alert.alert(
                            'Erro',
                            'Algo inesperado ocorreu. Por favor, tente novamente mais tarde. ' + error,
                            [
                                {text: 'OK'},
                            ],
                            {cancelable: false}
                        );
                    });

                    this.props.callbackLogin('Explorer');
                    this.setState({
                        loading: false
                    });
                }
                else if(response.data.type_error !== 'conta_desativada') {

                    Alert.alert(
                        'Erro',
                        response.data.message,
                        [
                            {text: 'OK'},
                        ]
                    );
                }
            }).catch(error => {

                this.setState({
                    loading: false
                });

                Alert.alert(
                    'Erro',
                    'Ocorreu um erro ao se comunicar com o servidor. Por favor, tente novamente mais tarde.' + error,
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false}
                );

            });

        }
    }
}