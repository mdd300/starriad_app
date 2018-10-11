import React from 'react';
import { View, Text, Image, Animated } from 'react-native';
import styles from "../feed-styles";

import PostHeader from "./postComponents/PostHeader";
import PostFooter from "./postComponents/PostFooter";


export default class PostSimple extends React.Component{

    /* Função construtora do PostSimple */
    constructor( props ){
        super( props )

        /* State do componente */
        this.state = {
            animation_progress_spring: new Animated.Value( 0 ),
            animation_progress_timing: new Animated.Value( 0 )
        };

    }/* Fim da função construtora do PostSimple */


    /* Função executada quando o componente for montado */
    componentDidMount(){

        setTimeout(() => {

            Animated.parallel([
                Animated.spring( this.state.animation_progress_spring, {
                    toValue: 100,
                    bounciness: 15,
                    velocity: 500,
                }),
                Animated.timing( this.state.animation_progress_timing, {
                    toValue: 100,
                    duration: 500
                }),
            ]).start();

        }, 200);

    }/* end of componentDidMount */

    
    /* Função que renderiza o componente */
    render(){

        const content_style = {
            transform: [ {translateY: this.state.animation_progress_spring.interpolate({ inputRange: [0, 100], outputRange: [ 40, 0 ] })} ],
            opacity: this.state.animation_progress_timing.interpolate({ inputRange: [0, 100], outputRange: [ 0, 1 ] }),
        };

        return(
            <Animated.View style={[ styles.post_content, content_style ]}>

                <PostHeader />

                <View style={[ styles.simple_post_content ]}>
                    <View style={[ styles.simple_post_image_content ]}>
                        <Image resizeMode="cover" style={[ styles.simple_post_image ]} source={ require("../../../assets/imgs/exemples/papaya-modelo.jpg") } />
                    </View>
                    <View style={[ styles.simple_post_description ]}>
                        <Text style={[ styles.simples_post_description_label ]}>

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto esse fuga odio placeat praesentium, sit vel. Inventore magnam perspiciatis quas qui? Debitis, earum odio? Nemo quia quo sequi voluptatum.

                        </Text>
                    </View>
                </View>

                <PostFooter />

            </Animated.View>
        );
    }/* Fim da função render do componente */

};