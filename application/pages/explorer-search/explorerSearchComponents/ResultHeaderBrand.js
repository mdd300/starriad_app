import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../explorer-search-styles";


export default class ResultHeaderBrand extends React.Component{
    
    /** Função construtora do componente */
    constructor( props ){
        super( props );

        this.state = {};

    }/* Fim da função construtora do componente */



    /* Função utilizada para renderizar o  */
    render(){

        const border_class = ( this.props.border == undefined || this.props.border == true ? styles.borded : {} );

        return(
            <View style={[ styles.explorer_search_result_header_content ]}>
                <View style={[ styles.explorer_search_result_header, border_class ]}>

                    <View style={[ styles.explorer_search_result_header_image ]}>
                        <Image source={{ uri: 'https://pbs.twimg.com/profile_images/1013825307537596416/Asooougm_400x400.jpg' }} resizeMode="cover" style={[ styles.explorer_search_result_header_img ]}/>
                    </View>
                    <View style={[ styles.explorer_search_result_header_label ]}>
                        <Text style={[ styles.explorer_search_result_header_label_text ]} numberOfLines={1} ellipsizeMode="tail" > Banana Republic </Text>
                    </View>
                    <View style={[ styles.explorer_search_result_header_actions ]}>

                        <TouchableOpacity>
                            <View style={[ styles.explorer_search_result_header_action, styles.action_visit ]}>
                                <Text style={[ styles.explorer_search_result_header_action_label, styles.label_visit ]}> VISITAR LOJA </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[ styles.explorer_search_result_header_action, styles.action_connect ]}>
                                <Text style={[ styles.explorer_search_result_header_action_label, styles.label_connect ]}> CONECTAR </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        );

    }

}