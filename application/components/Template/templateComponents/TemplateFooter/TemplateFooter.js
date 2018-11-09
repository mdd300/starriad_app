import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./template-footer-styles"

export default class TemplateFooter extends React.Component{

    /* Função construtora do  */
    constructor( props ){
        super( props );

        this.state = {};

    }/* Fim do escopo da função constructor do componente */


    __navigate_feed     = (()=>{   this.props.navigation.navigate('Feed');   });
    __navigate_explorer = (()=>{   this.props.navigation.navigate('Explorer');   });
    __navigate_cart     = (()=>{   this.props.navigation.navigate('Carrinho');   });
    __navigate_chat     = (()=>{   this.props.navigation.navigate('ChatHome');   });
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
                        <TouchableOpacity
                            onPress={()=>{ this.__navigate_chat() }}
                            style={[ styles.template_footer_action_touchable ]}>
                            <Image style={[ styles.template_footer_action_icon ]} source={ require("../../../../assets/imgs/png/icons/chat.png") }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity
                            onPress={() => { this.__navigate_perfil() }}
                            style={[ styles.template_footer_action_touchable ]}>
                            <View style={[ styles.template_footer_action_profile ]}>
                                <Image style={[ styles.template_footer_action_profile_image ]} source={{ uri: 'https://i.ebayimg.com/images/g/LJYAAOSwjXRXbI-N/s-l300.jpg' }}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );

    });/* Fim da função de renderização do componente de footer */

}