import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput,
    ImageBackground,
    Alert,
    ScrollView,
    Animated,
    ActivityIndicator
} from 'react-native';
import {styleCadastro} from '../Cadastro-styles'
import {style} from '../../../../slides/SlideScreen-styles';
import CheckBox from '../../../../../components/checkBox/CheckBox'
import LoginService from "../../../../../services/login/login-service";
import GlobalService from "../../../../../services/global/global-service";
import axios from "axios";

export default class Passo1 extends React.Component {
    constructor(props) {
        super(props);

        let {height} = Dimensions.get('window');

        let user = {
            type: 0,
            user_name: '',
            user_full_name: '',
            password: '',
            confirmPassword: '',
            email: '',
            cnpj: '',
            cpf: '',
            tel: '',
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
            password: '',
            confirmPassword: '',
            email: '',
            tel: '',
            type: '',
            cpf: '',
        };

        this.state = {
            animation: new Animated.Value(0),
            user_type: { lojista: false, confeccao: false},
            endereco: endereco,
            empresa: empresa,
            user: user,
            error: error,
            enableCaptcha: false,
            validCnpj: false,
            load: { cnpj: false, captcha: false, cadastro: false },
            img_captcha: '',
            data_captcha:{ cnpj: '', captcha: '', cookie: '' },
            show: false,
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

                    <Text style={[styleCadastro.errorLabel]}>{this.state.error.type}</Text>
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
                    <TouchableOpacity  disabled={this.state.load.cnpj ? true : false} onPress={() => {
                        this.consultaCnpj();
                    }}>

                        { !this.state.load.cnpj &&
                            <View style={[style.btnPadrao, style.btnEntrar]}>
                                <Text style={[style.textBtn, styleCadastro.text2]}>Buscar</Text>
                                <ImageBackground resizeMode={'contain'} style={styleCadastro.iconBtn}
                                    source={require('../../../../../assets/imgs/png/icons/caret-left-white.png')}/>
                            </View>
                        }

                        { this.state.load.cnpj &&
                            <View style={[style.btnPadrao, style.btnEntrar]}>
                                <ActivityIndicator size="large" color="#fff" />
                            </View>
                        }
                    </TouchableOpacity>
                </View>

                {this.renderDadosCnpj()}

            </View>
        )
    }

    renderDadosCnpj(){

        let show_dados = this.state.animation.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ 400, 0 ]
        });

        if(this.state.show){
            return(
                <Animated.View style={[styleCadastro.containerDadosCnpj,
                    { transform: [{translateY: show_dados}] }
                    ]}>

                    <View style={styleCadastro.labelMsg}>
                        <Text style={styleCadastro.textMsg}>
                            De acordo com o CNPJ informado, confira se os dados estão corretos:
                        </Text>
                    </View>

                    <View style={styleCadastro.containerDadosEmpresa}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                            {this.state.empresa.empresa_razao}
                        </Text>
                    </View>

                    <View style={styleCadastro.containerDadosEmpresa}>
                        {
                            this.state.empresa.empresa_nomefantasia !== '' ?
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    {this.state.empresa.empresa_nomefantasia}
                                </Text> :
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    Nome Fantasia não consta
                                </Text>
                        }
                    </View>

                    <View style={styleCadastro.containerDadosEmpresa}>
                        {
                            this.state.empresa.empresa_endereco !== '' ?
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    {this.state.empresa.empresa_endereco}
                                </Text> :
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    Endereço não consta
                                </Text>
                        }
                    </View>

                    <View style={styleCadastro.containerDadosEmpresa}>
                        {
                            this.state.empresa.empresa_bairro !== '' ?
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    {this.state.empresa.empresa_bairro}
                                </Text> :
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    Bairro não consta
                                </Text>
                        }
                    </View>

                    <View style={styleCadastro.containerDadosEmpresa}>
                        {
                            this.state.empresa.empresa_numero !== '' ?
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    {this.state.empresa.empresa_numero}
                                </Text> :
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    Número não consta
                                </Text>
                        }
                    </View>

                    <View style={styleCadastro.containerDadosEmpresa}>
                        {
                            this.state.empresa.empresa_cidade !== '' ?
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    {this.state.empresa.empresa_cidade}
                                </Text> :
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    Cidade não consta
                                </Text>
                        }
                    </View>

                    <View style={styleCadastro.containerDadosEmpresa}>
                        {
                            this.state.empresa.empresa_estado !== '' ?
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    {this.state.empresa.empresa_estado}
                                </Text> :
                                <Text numberOfLines={1} ellipsizeMode="tail" style={styleCadastro.textDadosEmpresa}>
                                    Estado não consta
                                </Text>
                        }
                    </View>

                    <View style={{marginTop: 20, marginBottom: 50}}>
                        <TouchableOpacity onPress={() => {
                            this.props.callback('Passo2', this.state);
                        }}>
                            <View style={[style.btnPadrao, style.btnEntrar]}>
                                <Text style={[style.textBtn, styleCadastro.text2]}>Avançar</Text>
                                <ImageBackground resizeMode={'contain'} style={styleCadastro.iconBtn}
                                                 source={require('../../../../../assets/imgs/png/icons/caret-left-white.png')}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                </Animated.View>
            )
        }
    }

    // Formata o CNPJ
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

    // Função que verifica se o CNPJ digitado é valido
    checkCnpj() {
        let reg = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
        let validate = true;
        let cnpj = this.state.user.cnpj;
        this.state.error.cnpj = '';
        this.setState({error: this.state.error});

        if (!cnpj) {
            //CNPJ NÃO DIGITADO CORRETAMENTE
            validate = false;
            this.state.error.cnpj = "* Campo obrigatório";
            this.setState({error: this.state.error});
        }
        else if (!reg.test(cnpj) || !GlobalService.cnpjValidator(cnpj)) {
            // CNPJ INVÁLIDO
            validate = false;
            this.state.error.cnpj = "* CNPJ inválido";
            this.setState({error: this.state.error});
        }
        return validate;
    };

    /*Função responsavel por buscar o cnpj pela api principal*/
    consultaCnpj() {

        this.setState({
            enableCaptcha: false
        });

        // Verifica se escolheu algum tipo
        if (this.state.user.type === 0) {

            this.state.error.type = "Selecione uma das opções.";
            this.setState({
                error: this.state.error
            });

        } else {
            // Verifica se já consultou
            if (!this.state.validCnpj) {

                // Verifica se o cnpj é válido
                if (this.checkCnpj()) {

                    this.state.validCnpj = false;
                    this.state.load.cnpj = true;

                    this.setState({
                        validCnpj: this.state.validCnpj,
                        load: this.state.load
                    });

                    LoginService.buscarCnpj(this.state.user.cnpj).then((res) => {
                        let response = res.data;

                        console.log('AQUI: ', response);

                        this.state.load.cnpj = false;
                        this.setState({
                            load: this.state.load
                        });

                        switch (response.type) {

                            case 'cadastrado':

                                this.state.error.cnpj = "Este CNPJ já está sendo usado.";
                                this.setState({
                                    error: this.state.error,
                                });

                                break;

                            case 'hub':

                                console.log('HUB: ');

                                this.state.validCnpj = true;
                                this.state.empresa = response.data.empresa;
                                this.setState({
                                    validCnpj: this.state.validCnpj,
                                    empresa: this.state.empresa
                                });

                                // Verifica se retornou os dados do endereço. Se estiver preenchido, faz uma busca na API do google maps para pegar a latitude e longitude
                                if (this.state.empresa.empresa_numero === '' || this.state.empresa.empresa_endereco === '' || this.state.empresa.empresa_estado === '') {
                                    this.setState({
                                        endereco: this.state.endereco,
                                    });

                                    this.setState({
                                        show: true
                                    });

                                    Animated.timing(this.state.animation, {
                                        toValue: 100,
                                        duration: 700
                                    }).start();
                                }
                                else{

                                    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.empresa.empresa_numero + ', ' + this.state.empresa.empresa_endereco.replace(/ /g, '+') + ',' + this.state.empresa.empresa_estado + '&key=AIzaSyBdCtTujNnCyhmvCOQGhv_weOjYpM0g7d4').then((res) => {
                                        let geocoding = res.data.results[0].geometry.location;
                                        this.state.endereco = response.data.endereco;
                                        this.state.endereco.empresa_latitude = geocoding.lat;
                                        this.state.endereco.empresa_longitude = geocoding.lng;

                                        this.setState({
                                            endereco: this.state.endereco,
                                        });

                                        this.setState({
                                            show: true
                                        });

                                        Animated.timing(this.state.animation, {
                                            toValue: 100,
                                            duration: 700
                                        }).start();

                                    }).catch((e) => {
                                        Alert.alert(
                                            'Ops',
                                            'Algo deu errado',
                                            [
                                                {text: 'OK'},
                                            ],
                                            {cancelable: false}
                                        );
                                    });
                                }

                                break;

                            case 'receita':

                                console.log('RECEITA: ');

                                this.state.img_captcha = 'data:image/jpeg;base64,' + response.data.captchaBase64;

                                this.state.data_captcha.cookie = response.data.cookie;
                                this.state.data_captcha.cnpj = this.state.user.cnpj;
                                this.state.enableCaptcha = true;

                                this.setState({
                                    img_captcha: this.state.img_captcha,
                                    data_captcha: this.state.data_captcha,
                                    enableCaptcha: this.state.enableCaptcha
                                });

                                break;
                        }
                    }, (error) => {
                        this.state.load.cnpj = false;
                        this.setState({
                            load: this.state.load
                        });

                        Alert.alert(
                            'Conexão Perdida',
                            'Ocorreu um erro! :( \n Verifique a sua conexão com a internet e tente novamente ',
                            [
                                {text: 'OK'},
                            ],
                            {cancelable: false}
                        );

                    });
                }else{
                    console.log('AQUI')
                }
            }
        }
    };
    /*Função responsavel por buscar o cnpj pela api principal*/

    /*Função responsavel por buscar o captcha da api da receita federal*/
    getCaptcha () {
        LoginService.buscarCaptcha().then((res) => {
            let response = res.data;
            this.state.img_captcha = 'data:image/jpeg;base64,' + response.captchaBase64;
            this.state.data_captcha.cookie = response.cookie;
            this.state.data_captcha.cnpj = this.state.user.cnpj;

            this.setState({
                img_captcha: this.state.img_captcha,
                data_captcha: this.state.data_captcha
            });

        }).catch((error) => {

            Alert.alert(
                'Conexão Perdida',
                'Ocorreu um erro! :( \n Verifique a sua conexão com a internet e tente novamente ',
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );
            this.getCaptcha();
        });
    };
    /*Função responsavel por buscar o captcha da api da receita federal*/

    /*Função responsavel por buscar o cnpj apos preencher o campo do capctha*/
    sendCaptcha(){
        this.state.load.captcha = true;
        this.setState({
            load: this.state.load
        });

        LoginService.enviarCaptcha(this.state.data_captcha).then((res) => {
            let response = res.data;
            this.state.load.captcha = false;
            this.setState({
                load: this.state.load
            });

            if (response.sucesso) {
                this.state.empresa = response.consulta.empresa;
                this.state.endereco = response.consulta.endereco;
                this.state.enableCaptcha = false;
                this.state.validCnpj = true;

                this.setState({
                    empresa: this.state.empresa,
                    endereco: this.state.endereco,
                    enableCaptcha: this.state.enableCaptcha,
                    validCnpj: this.state.validCnpj
                });

            } else {

                Alert.alert(
                    response.status,
                    [
                        {text: 'OK'},
                    ],
                    {cancelable: false}
                );

                this.state.enableCaptcha = false;
                this.getCaptcha();
                this.state.data_captcha.captcha = "";

                this.setState({
                    enableCaptcha: this.state.enableCaptcha,
                    data_captcha: this.state.data_captcha
                });
            }
        }, function (error) {
            this.state.load.captcha = false;

            this.setState({
                load: this.state.load
            });

            Alert.alert(
                'Conexão Perdida',
                'Ocorreu um erro! :( \n Verifique a sua conexão com a internet e tente novamente ',
                [
                    {text: 'OK'},
                ],
                {cancelable: false}
            );

            this.getCaptcha();
        });
    };

}


