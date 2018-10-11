import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, TextInput, ImageBackground} from 'react-native';
import {styleCadastro} from '../Cadastro-styles'
import {style} from '../../../../slides/SlideScreen-styles';
import CheckBox from '../../../../../components/checkBox/CheckBox'

export default class Passo2 extends React.Component {
    constructor(props) {

        super(props);
        let {height} = Dimensions.get('window');

        this.state = {
            endereco: this.props.params.endereco,
            empresa: this.props.params.empresa,
            user: this.props.params.user,
            error: this.props.params.error,
            passConfirm: false
        }


    }

    render() {
        return (
            <View>
                {this.cadastro()}
            </View>
        )


    }


    cadastro() {
        return (

            <View>
                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.user_name !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.user_name = text;
                            this.state.error.user_name = '';
                            this.setState({error: this.state.error})
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Nome"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.user_name}</Text>
                </View>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.email !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.email = text
                            this.state.error.email = ''
                            this.setState({error: this.state.error})
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="E-mail"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.email}</Text>
                </View>


                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.password !== '' ? styleCadastro.inputError : null), (this.state.user.password !== '' ? styleCadastro.inputValidate : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.password = text
                            this.state.error.password = ''
                            this.setState({error: this.state.error})
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Senha"
                        secureTextEntry={true}
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.password}</Text>
                </View>


                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.confirmPassword !== '' ? styleCadastro.inputError : null), (this.state.passConfirm ? styleCadastro.inputValidate : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.confirmPassword = text
                            this.validatePassoword()
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Confirmar Senha"
                        secureTextEntry={true}
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.confirmPassword}</Text>
                </View>

                <View style={styleCadastro.inputContainer}>
                    <TextInput
                        style={[styleCadastro.inputCadastro, (this.state.error.cidade !== '' ? styleCadastro.inputError : null)]}
                        maxLength={30}
                        onChangeText={(text) => {
                            this.state.user.cidade = text
                            this.state.error.cidade = ''
                            this.setState({error: this.state.error})
                        }}
                        underlineColorAndroid='#FFF'
                        placeholder="Cidade"
                        placeholderTextColor="#a0a7ad"
                    />
                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.cidade}</Text>
                </View>
                <View style={[styleCadastro.btnEspaco]}>
                    <TouchableOpacity onPress={() => {
                        this.validateCadastro()
                    }}>
                        <View style={[style.btnPadrao, style.btnEntrar]}>
                            <Text style={[style.textBtn, styleCadastro.text2]}>ENTRAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    timeout;

    validatePassoword() {


        setTimeout(() => {

            if (this.state.user.confirmPassword !== this.state.user.password) {
                this.state.error.confirmPassword = 'Senhas não conferem'
                this.state.passConfirm = false;
            } else {
                this.state.passConfirm = true;
                this.state.error.confirmPassword = ''
            }
            this.setState({passConfirm: this.state.passConfirm, error: this.state.error})
            console.log('errrr');

        }, 10000)
    }

    validateCadastro() {

        let validate = true;

        if (this.state.user.user_name === '') {
            validate = false;
            this.state.error.user_name = 'Nome esta incomnpleto'
        }

        if (this.state.user.email === '') {
            validate = false;
            this.state.error.email = 'Email esta incompleto'
        }

        if (this.state.user.password === '') {
            validate = false;
            this.state.error.password = 'Senha esta incompleta'
        }

        if (this.state.user.confirmPassword === '') {
            validate = false;
            this.state.error.confirmPassword = 'Confirmação esta incompleta'
        }

        if (this.state.error.cidade === '') {
            validate = false;
            this.state.error.cidade = 'cidade esta incompleto'
        }
        this.setState({user: this.state.user, error: this.state.error})

    }
}


