import React from "react";
import { View, Text, Dimensions } from 'react-native';
import styles from "./chat-message-styles";

export default class ChatMessage extends React.Component{

    constructor( props ){
        super( props );
        
        this.state = {
            sender: this.props.sender,
            message: this.props.message,
            date: this.props.date,

            device_width: Dimensions.get('window').width,
        };
        
    }/* Fim do escopo da função construtora do componente */


    render(){

        let ballonMaxWidth = { maxWidth: ( this.state.device_width - 100 ) };

        let balloon_class = ( this.state.sender ? styles.sended_balloon : styles.received_balloon );
        let caret_class = ( this.state.sender ? styles.sended_caret : styles.received_caret );
        let label_date_class = ( this.state.sender ? styles.sended_date : styles.received_date );

        return(
            <View style={[ styles.chat_message ]}>
                <View style={[ styles.chat_message_content ]}>

                    <View style={[ styles.chat_message_balloon, balloon_class, ballonMaxWidth ]}>

                        <Text style={[ styles.chat_message_balloon_label ]}>
                            { this.state.message }
                        </Text>
                        <Text style={[ styles.chat_message_balloon_date_label, label_date_class ]}>
                            { this.state.date }
                        </Text>

                        <View style={[ styles.chat_message_balloon_caret, caret_class ]}/>
                    </View>

                </View>
            </View>
        );

    }/* Fim do escopo da função render do componente */

}