import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, TextInput, ImageBackground,Image} from 'react-native';
import {styleCadastro} from '../cadastro/Cadastro-styles'
import {style} from '../../../slides/SlideScreen-styles';

export default class LoginForm extends React.Component {

    constructor(props) {

        super(props)
        let user = {
            password: '',
            email: '',
        };

        let error = {
            password: '',
            email: '',
        };


        this.state = {
            user: user,
            error: error,
            hidePass:true
        }

    }

    render() {
        return (
            <View style={{marginTop: 50}}>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.email !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.email = text;
                            this.state.error.email = '';
                            this.setState({error: this.state.error})
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Nome de usuario/E-mail"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.email}</Text>
                </View>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.password !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        secureTextEntry={this.state.hidePass}
                        onChangeText={(text) => {
                            this.state.user.password = text;
                            this.state.error.password = '';
                            this.setState({error: this.state.error})
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Senha"
                        placeholderTextColor="#a0a7ad"
                    />
                    <TouchableOpacity style={styleCadastro.iconContainer} onPress={()=>{
                        this.setState({hidePass:!this.state.hidePass})
                    }}>
                        <Image style={styleCadastro.iconInput} resizeMode={'cover'}
                                         source={require('../../../../assets/imgs/png/icons/seta-left-white.png')}
                                         ref="image"/>
                    </TouchableOpacity>


                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.password}</Text>
                </View>

                <TouchableOpacity>
                    <View style={styleCadastro.inputContainer}>
                        <Text style={[styleCadastro.labelSenha]}>Esqueceu sua senha?</Text>
                    </View>
                </TouchableOpacity>


                <View style={{marginTop: 40}}>
                    <TouchableOpacity onPress={() => {
                        this.validateLogin()
                    }}>
                        <View style={[style.btnPadrao, style.btnEntrar]}>
                            <Text style={[style.textBtn, styleCadastro.text2]}>ENTRAR</Text>
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

    validateLogin() {

        let validate = true;

        if (this.state.user.email === '') {
            validate = false;
            this.state.error.email = 'Email esta incompleto'
        }
        if (this.state.user.password === '') {
            validate = false;
            this.state.error.password = 'Senha esta incompleta'
        }
        this.setState({user: this.state.user, error: this.state.error});

        if (validate) {
            this.props.callbackLogin('Explorer')
        }

    }
}