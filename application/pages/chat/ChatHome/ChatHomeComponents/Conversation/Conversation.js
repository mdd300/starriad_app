import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native"
import styles from "./conversation-styles";

export default class Conversation extends React.Component{

    constructor( props ){
        super( props );

        this.state = {
            new_messages: this.props.chat_new_messages
        };

    };

    render(){
        return(
            <View style={[ styles.conversation_content ]}>
                <View style={[ styles.conversation ]}>
                    <TouchableOpacity style={[ styles.conversation_touchable ]}>

                        <View style={[ styles.conversation_cover_content ]}>
                            <View
                                style={[
                                    styles.conversation_cover_image,
                                    ( this.state.new_messages ? styles.cover_new_message : {} )
                                ]}>
                                <Image style={{ width: 50, aspectRatio: 1 }} source={{ uri: this.props.chat_cover }}/>
                            </View>
                        </View>
                        <View style={[ styles.conversation_details_content ]}>
                            <View style={[ styles.conversation_details ]}>

                                <View style={[ styles.conversation_detail_chat ]}>

                                    <View style={[ styles.conversation_detail_conversation_name ]}>
                                        <Text
                                            style={[
                                                styles.conversation_detail_conversation_name_label,
                                                ( this.state.new_messages ? styles.conversation_name_new_message : {} )
                                            ]}
                                            numberOfLines={1}
                                            ellipsizeMode="tail">
                                            { this.props.chat_name }
                                        </Text>
                                    </View>
                                    <View style={[ styles.conversation_detail_conversation_last_message ]}>
                                        <Text
                                            style={[
                                                styles.conversation_detail_conversation_last_message_label,
                                                ( this.state.new_messages ? styles.last_message_new_message : {} ) ]}
                                            numberOfLines={1}
                                            ellipsizeMode="tail" >
                                            { this.props.chat_last_message }
                                        </Text>
                                    </View>

                                </View>
                                <View style={[ styles.conversation_detail_infos ]}>
                                    <View style={[ styles.conversation_detail_info_data ]}>
                                        <Text
                                            style={[
                                                styles.conversation_detail_info_data_label,
                                                ( this.state.new_messages ? styles.date_new_message : {} )
                                            ]}>

                                            { this.props.chat_date }

                                        </Text>
                                    </View>
                                    <View style={[ styles.conversation_detail_info_badge ]}>
                                        { this.__render_badge( this.props.chat_badge ) }
                                    </View>
                                </View>

                            </View>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        );
    };/* Fim do escopo da função render do componente */

    /**
     * Função utilizada para renderizar as badges das conversas em casos de novas mensagens
     * @type {Function}
     * @private
     */
    __render_badge = (( badge_value) => {
        
        /* Tratamento para renderizar o valor da badge */
        let badge  = badge_value;
            badge = ( badge > 9 ? '9+' : badge );
            
        /* Tratamento dos estilos variado de acordo com o valor da badge */
        let badge_style = { fontSize: ( badge_value > 9 ? 10 : 12 ) };

        /* Verifica o valor da badge que será exibida, se for maior que zero, exibe a badge normalmente */
        if( badge_value > 0 ){

            return(
                <View style={[ styles.conversation_detail_badge ]}>
                    <Text style={[ styles.conversation_detail_badge_label, badge_style ]}> { badge } </Text>
                </View>
            );

            /* Caso o numero da badge seja 0, ou menor que 0, o componente nao renderiza nada */
        }else{
            return null
        }

    });/* Fim do escopo da função render_badge */


}