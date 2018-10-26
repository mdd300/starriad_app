import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./template-footer-styles"

export default class TemplateFooter extends React.Component{

    /* Função construtora do  */
    constructor( props ){
        super( props );

        this.state = {};

    }/* Fim do escopo da função constructor do componente */

    
    
    /* Função utilizada para renderizar o componente de footer */
    render = (()=>{

        return(
            <View style={[ styles.template_footer ]}>
                <View style={[ styles.template_footer_content ]}>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity style={[ styles.template_footer_action_touchable ]}>
                            <Image style={[ styles.template_footer_action_icon ]} source={ require("../../../../assets/imgs/png/icons/feed.png") }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity style={[ styles.template_footer_action_touchable ]}>
                            <Image style={[ styles.template_footer_action_icon ]} source={ require("../../../../assets/imgs/png/icons/explorer.png") }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity style={[ styles.template_footer_action_touchable ]}>
                            <Image style={[ styles.template_footer_action_icon ]} source={ require("../../../../assets/imgs/png/icons/cart.png") }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity style={[ styles.template_footer_action_touchable ]}>
                            <Image style={[ styles.template_footer_action_icon ]} source={ require("../../../../assets/imgs/png/icons/chat-stroke.png") }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.template_footer_action ]}>
                        <TouchableOpacity style={[ styles.template_footer_action_touchable ]}>
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