import React from "react";
import {View, ScrollView, Text, KeyboardAvoidingView, Animated, TouchableOpacity, Image} from "react-native";
import style from "./editar-perfil-styles";
import HeaderCarrinho from "../../carrinho/carrinhoComponents/header-carrinho/header-carrinho";
import PerfilLojaEdit from "./perfil-loja/PerfilLojaEdit"
import Logo from "./logo/Logo"

export default class EditarPerfil extends React.Component{


    /** Função construtora do feed */
    constructor( props ){
        super( props );

        this.state = {
            Perfil_loja: false,
            Logo: false,
            Foto_capa: false,
            MeusEstilos: false,
            ConfigLoja: false,
            FotosLoja: false,
            End: false,
            TelefoneCont: false,

        };

    }/* Fim da função construtora do Editar Perfil */

    /** Função utilizada para esconder os Itens de edição */
    hideEdit = ((itens) => {
        switch (itens) {
            case 1:
                this.setState({Perfil_loja: !this.state.Perfil_loja});
                break;
            case 2:
                this.setState({Logo: !this.state.Logo});
                break;
            case 3:
                this.setState({Foto_capa: !this.state.Foto_capa});
                break;
            case 4:
                this.setState({MeusEstilos: !this.state.MeusEstilos});
                break;
            case 5:
                this.setState({ConfigLoja: !this.state.ConfigLoja});
                break;
            case 6:
                this.setState({FotosLoja: !this.state.FotosLoja});
                break;
            case 7:
                this.setState({End: !this.state.End});
                break;
            case 8:
                this.setState({TelefoneCont: !this.state.TelefoneCont});
                break;
        }
    })/* end of hideSubmenu */

    render(){

        return(
            <View>
            <ScrollView style={{backgroundColor: '#fff', height: "100%"}}>
                <View style={{flex: 1, backgroundColor: '#fff'}}>
                    <View style={style.headerEditarBar} />
                    <HeaderCarrinho title={'Editar Perfil'} subtitle={'Aqui você pode editar os dados da sua conta'} onPressItem={() => {
                        this.props.navigation.goBack(null);
                    }} />
                </View>
                <View style={ style.body_edit_content_init }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(1)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>PERFIL DA LOJA</Text>
                        </View>
                        { !this.state.Perfil_loja &&
                            <Image style={style.body_edit_down}
                                source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.Perfil_loja &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>
                    { this.state.Perfil_loja &&
                    <PerfilLojaEdit/>
                    }

                </View>

                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(2)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>ALTERAR LOGO</Text>
                        </View>
                        { !this.state.Logo &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.Logo &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>
                    { this.state.Logo &&
                    <Logo/>
                    }

                </View>
                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(3)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>FOTO DE CAPA</Text>
                        </View>
                        { !this.state.Foto_capa &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.Foto_capa &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>


                </View>
                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(4)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>MEUS ESTILOS</Text>
                        </View>
                        { !this.state.MeusEstilos &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.MeusEstilos &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>


                </View>
                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(5)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>CONFIGURAÇÃO DA LOJA</Text>
                        </View>
                        { !this.state.ConfigLoja &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.ConfigLoja &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>


                </View>
                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(6)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>FOTO DA SUA LOJA</Text>
                        </View>
                        { !this.state.FotosLoja &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.FotosLoja &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>
                </View>
                
                <View style={ style.body_edit_content }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(7)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>ENDEREÇO</Text>
                        </View>
                        { !this.state.End &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.End &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>


                </View>
                <View style={ style.body_edit_content_end }>
                    <TouchableOpacity style={style.body_edit} onPress={() => this.hideEdit(8)}>
                        <View style={style.body_control_icon}>
                            <Text style={style.body_edit_text}>TELEFONE</Text>
                        </View>
                        { !this.state.TelefoneCont &&
                        <Image style={style.body_edit_down}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }
                        { this.state.TelefoneCont &&
                        <Image style={style.body_edit_up}
                               source={require('../../../assets/imgs/png/arrow-down.png')}/>
                        }

                    </TouchableOpacity>


                </View>

            </ScrollView>
                {this.renderButtonAvancar()}
            </View>
        );

    }


    renderButtonAvancar() {
        return (
            <View style={style.footerEditar}>

                <TouchableOpacity activeOpacity={0.6} style={style.containerBtnSalvar}>
                    <Text style={style.textBtnSalvar}>
                        SALVAR
                    </Text>
                </TouchableOpacity>

            </View>

        );
    }

};