import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./chat-conversation-styles";
import ChatConversationHeader from "./ChatConversationComponents/ChatConversationHeader/ChatConversationHeader";

export default class ChatConversation extends React.Component{

    constructor( props ){
        super( props );

    }

    render(){
        return(
            <View style={[ styles.chat_conversation ]}>

                <ChatConversationHeader />
                { this._render_body() }

            </View>
        );
    }

    _render_body = (()=>{

        return(
            <View style={[ styles.chat_conversation_body ]}>

                <View style={[ styles.chat_conversation_content ]}></View>

                <View style={[ styles.chat_conversation_footer ]}>
                    <View style={[ styles.chat_conversation_footer_input_content ]}>
                    </View>
                    <View style={[ styles.chat_conversation_footer_action_content ]}>

                    </View>
                </View>

            </View>
        );

    });

}