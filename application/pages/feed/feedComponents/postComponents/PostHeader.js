import React from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import styles from "../../feed-styles";

export default class PostHeader extends React.Component{

    /** Função construtora do header do post */
    constructor( props ){
        super( props );

        this.state ={
            animation_progress_spring: new Animated.Value( 0 )
        }

    }/* Fim da função construtora do header do post */


    /* Função executada sempre que o componente for montado */
    componentDidMount(){

        setTimeout(() => {
            Animated.spring( this.state.animation_progress_spring, {
                toValue: 100,
                bounciness: 7,
                velocity: 500
            }).start();
        }, 400);

    }/* Fim da função de componentDidMount */

    /* Função de render do Header do Post */
    render(){

        const scale_inn = {
            transform: [ { scale: this.state.animation_progress_spring.interpolate({ inputRange: [0,100], outputRange: [0,1] }) } ]
        };

        return(
            <View style={[ styles.header_post_content ]}>
                <View style={[ styles.header_post ]}>

                    <Animated.View style={[ styles.header_image_logo, scale_inn ]}>
                        <Image style={[ styles.header_image_logo_img ]} source={ require('../../../../assets/imgs/exemples/papaya-logo.jpg') }/>
                    </Animated.View>
                    <View style={[ styles.header_label_name ]}>
                        <Text style={[ styles.header_label_text ]} numberOfLines={1} ellipsizeMode="tail" > PAPAYA </Text>
                    </View>
                    <Animated.View style={[ styles.header_actions_content, scale_inn ]}>
                        <TouchableOpacity  hitSlop={{ top: 10, right: 10, bottom: 10, left: 15 }} style={[ styles.header_actions_touchable ]}>
                            <Image resizeMode="cover" style={[ styles.header_actions_image ]} source={ require("../../../../assets/imgs/png/icons/dots-vertical.png") }></Image>
                        </TouchableOpacity >
                    </Animated.View>

                </View>
            </View>
        );
    }/* Fim da função render */


}/* Fim da classe do header do post */