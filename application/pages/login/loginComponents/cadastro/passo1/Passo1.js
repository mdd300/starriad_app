import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, TextInput, ImageBackground} from 'react-native';
import {styleCadastro} from '../Cadastro-styles'
import {style} from '../../../../slides/SlideScreen-styles';
import CheckBox from '../../../../../components/checkBox/CheckBox'

export default class Passo1 extends React.Component {
    constructor(props) {

        super(props);
        let {height} = Dimensions.get('window');
        let user = {
            type: 0,
            user_name: '',
            user_full_name: '',
            cidade: '',
            password: '',
            confirmPassword: '',
            email: '',
            cnpj: '',

        };

        let empresa = {
            empresa_nomefantasia: '',
            empresa_cnpj: '',
            empresa_endereco: '',
            empresa_numero: '',
            empresa_complemento: '',
            empresa_estado: '',
            empresa_razao: '',
            empresa_bairro: '',
            empresa_cidade: '',
        };


        let endereco = {
            endereco_local: '',
            endereco_descricao: '',
            endereco_numero: '',
            endereco_uf: '',
            endereco_cidade: '',
            endereco_bairro: '',
            endereco_cep: '',
            endereco_telefone: '',
        };

        let error = {
            cnpj: '',
            user_name: '',
            user_full_name: '',
            cidade: '',
            password: '',
            confirmPassword: '',
            email: '',
            tel: '',
        };


        this.state = {
            user_type: {
                lojista: true,
                confeccao: false,
            },
            endereco: endereco,
            empresa: empresa,
            user: user,
            error: error,
        }



    }

    render() {
        return (
            <View>
                {this.buscaCnpj()}
            </View>
        )


    }



    buscaCnpj() {
        return (
            <View style={styleCadastro.inputContainer}>

                <View style={{marginBottom: 25}}>
                    <Text style={styleCadastro.titleForm}>O que deseja no houpa?</Text>
                    <TouchableOpacity
                        style={styleCadastro.containerCheckbox}
                        onPress={
                            () => {
                                this.state.user_type.lojista = true;
                                this.state.user_type.confeccao = false;
                                this.state.user.type = 2;
                                this.setState({user_type: this.state.user_type, user: this.state.user})
                            }
                        }>
                        <CheckBox actived={this.state.user_type.lojista} color={'#0099df'}/>
                        <Text style={styleCadastro.textCheckbox}>Comprar roupas no atacado</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styleCadastro.containerCheckbox}
                                      onPress={
                                          () => {
                                              this.state.user_type.lojista = false;
                                              this.state.user_type.confeccao = true;
                                              this.state.user.type = 1;
                                              this.setState({user_type: this.state.user_type, user: this.state.user})
                                          }
                                      }>
                        <CheckBox actived={this.state.user_type.confeccao} color={'#0099df'}/>
                        <Text style={styleCadastro.textCheckbox}>Vender roupas no atacado</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={[styleCadastro.inputCadastro, (this.state.error.cnpj !== '' ? styleCadastro.inputError : null)]}
                    maxLength={18}
                    keyboardType='numeric'
                    onChangeText={(text) => this.formatCNPJ(text)}
                    underlineColorAndroid='#FFF'
                    placeholder="Insira seu CNPJ"
                    placeholderTextColor="#a0a7ad"
                    defaultValue={this.state.user.cnpj.toString()}
                />
                <Text style={[styleCadastro.errorLabel]}>{this.state.error.cnpj}</Text>

                <View style={[styleCadastro.btnEspaco]}>
                    <TouchableOpacity onPress={() => {
                        this.validateCnpj();
                    }}>
                        <View style={[style.btnPadrao, style.btnEntrar]}>
                            <Text style={[style.textBtn, styleCadastro.text2]}>Buscar</Text>
                            <ImageBackground resizeMode={'contain'} style={styleCadastro.iconBtn}
                                             source={require('../../../../../assets/imgs/png/icons/seta-left-white.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    formatCNPJ(valor) {
        //necessario pois se apagar sem nada da erro
        valor = valor.replace(/\D/g, "");
        //Coloca ponto entre o segundo e o terceiro dígitos
        valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
        //Coloca ponto entre o quinto e o sexto dígitos
        valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        //Coloca uma barra entre o oitavo e o nono dígitos
        valor = valor.replace(/\.(\d{3})(\d)/, ".$1/$2");
        //Coloca um hífen depois do bloco de quatro dígitos
        valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
        this.state.user.cnpj = valor;
        this.state.error.cnpj = '';
        this.setState({user: this.state.user, error: this.state.error})
    }

    formatCPF(valor) {
        //necessario pois se apagar sem nada da erro
        valor = valor.replace(/\D/g, "");
        //Coloca ponto entre o segundo e o terceiro dígitos
        valor = valor.replace(/^(\d{3})(\d)/, "$1.$2");
        //Coloca ponto entre o quinto e o sexto dígitos
        valor = valor.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
        //Coloca uma barra entre o oitavo e o nono dígitos
        valor = valor.replace(/\.(\d{3})(\d)/, ".$1-$2");
        //Coloca um hífen depois do bloco de quatro dígitos
        this.state.user.cpf = valor;
        this.setState({user: this.state.user})

    }

    validateCnpj() {

        if (this.state.user.cnpj.length < 18) {
            this.state.error.cnpj = 'Cnpj esta inconpleto'
        } else {
            this.state.error.cnpj = '';
            this.props.callback('Passo2' ,this.state);
        }
        this.setState({user: this.state.user, error: this.state.error})

    }




}


