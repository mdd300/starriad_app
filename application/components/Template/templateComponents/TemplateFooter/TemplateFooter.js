import React from "react";
import {View, Image, TouchableOpacity, AsyncStorage} from "react-native";
import styles from "./template-footer-styles"
import PerfilService from "../../../../services/perfil/perfil-service";

export default class TemplateFooter extends React.Component{

    /* Função construtora do  */
    constructor( props ){
        super( props );

        this.state = {
            perfilInfo: [],
            user_logged_global: null,
            dados_carregados: false,
        };

    }/* Fim do escopo da função constructor do componente */

    componentDidMount(){
        this.loadPerfilInfo();
    }

    // Pega as informações da empresa logada
    loadPerfilInfo = async () => {

        this.state.user_logged_global = await AsyncStorage.getItem('@houpa:userlogged');
        this.setState({
            user_logged_global: this.state.user_logged_global,
        });

        PerfilService.getInfoPerfil().then((resposta) => {
            this.state.perfilInfo = resposta.data;
            this.setState({
                perfilInfo: this.state.perfilInfo,
                dados_carregados: true
            });

            if (this.state.user_logged_global !== undefined && this.state.user_logged_global != null && this.state.user_logged_global !== '' && this.state.user_logged_global) {
                this.state.perfilInfo.user_email = this.state.user_logged_global.user_email;
                this.state.perfilInfo.profile_url = this.state.user_logged_global.profile_url;
                this.setState({
                    perfilInfo: this.state.perfilInfo
                });
            }
        });
    };

    __navigate_feed     = (()=>{   this.props.navigation.navigate('Feed');   });
    __navigate_explorer = (()=>{   this.props.navigation.navigate('Explorer');   });
    __navigate_cart     = (()=>{   this.props.navigation.navigate('Carrinho');   });
    __navigate_chat     = (()=>{   this.props.navigation.navigate('Explorer');   });
    __navigate_perfil   = (()=>{   this.props.navigation.navigate('Perfil');   });

    
    /* Função utilizada para renderizar o componente de footer */
    render = (()=>{

        return(
            <View style={[ styles.template_footer ]}>
                <View style={[ styles.template_footer_content ]}>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity
                            onPress={() => { this.__navigate_feed() }}
                            style={[ styles.template_footer_action_touchable ]}>
                            <Image style={[ styles.template_footer_action_icon ]} source={ require("../../../../assets/imgs/png/icons/feed.png") }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity
                            onPress={() => { this.__navigate_explorer() }}
                            style={[ styles.template_footer_action_touchable ]}>
                            <Image style={[ styles.template_footer_action_icon ]} source={ require("../../../../assets/imgs/png/icons/explorer.png") }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity
                            onPress={() => { this.__navigate_cart() }}
                            style={[ styles.template_footer_action_touchable ]}>
                            <Image style={[ styles.template_footer_action_icon ]} source={ require("../../../../assets/imgs/png/icons/cart.png") }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity style={[ styles.template_footer_action_touchable ]}>
                            <Image style={[ styles.template_footer_action_icon ]} source={ require("../../../../assets/imgs/png/icons/chat.png") }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity
                            onPress={() => { this.__navigate_perfil() }}
                            style={[ styles.template_footer_action_touchable ]}>
                            <View style={[ styles.template_footer_action_profile ]}>
                                {this.state.dados_carregados &&
                                    <Image style={[ styles.template_footer_action_profile_image ]} source={{ uri: this.state.perfilInfo.img_url_big.mini }}/>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );

    });/* Fim da função de renderização do componente de footer */

}