import React from "react";
import {View, Image, Animated, Text} from "react-native";
import styles from "./loader-styles";

/** Escopo da classe de loader global */
export default class Loader extends React.Component{

    /* Função construtora do componente */
    constructor( props ){
        super( props );

        this.state = {
            animation_progress: new Animated.Value( 0 )
        };

    }/* Fim do escopo da função construtora */


    /** Função utilizada para quando o componente for montado */
    componentDidMount(){

        setTimeout(()=>{
            Animated.spring( this.state.animation_progress, {
                toValue: 100,
                bounciness: 20
            }).start();
        }, 100);

    }/* Fim do escopo da função de quando o componente for montado */

    /** Função utilizada para renderizar o componente */
    render(){

        const bounce_style = {transform: [{ scale: this.state.animation_progress.interpolate({ inputRange: [0,100], outputRange: [0,1] }) }]};

        return(
            <View style={[ styles.loader_content ]}>
                {/*<View style={[ styles.loader_view ]}>*/}

                    {/*<Animated.Image style={[ styles.loader_icon, bounce_style ]} source={ require("../../assets/imgs/gif/loading_houpa.gif") }/>*/}

                    {/*<Animated.View style={[ styles.loader_label_content, bounce_style ]}>*/}
                        {/*<Text style={[ styles.loader_label ]}> Carregando... </Text>*/}
                    {/*</Animated.View>*/}

                {/*</View>*/}
            </View>
        );

    }; /* Fim do escopo da função  */


}/* Fim do escopo da classe do componente Loader */