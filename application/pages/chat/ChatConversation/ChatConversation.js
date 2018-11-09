import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
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

                <View style={[ styles.chat_conversation_content ]}>
                    <View style={[ styles.chat_conversation_viewport ]}>
                        <ScrollView style={[ styles.chat_conversation_scrollview ]}>

                        </ScrollView>
                    </View>
                </View>

                <View style={[ styles.chat_conversation_footer ]}>
                    <View style={[ styles.chat_conversation_footer_input_content ]}>
                        <TextInput style={[ styles.chat_conversation_footer_input ]} underlineColorAndroid="transparent" placeholder="mensagem..." />
                    </View>
                    <View style={[ styles.chat_conversation_footer_action_content ]}>
                        <View style={[ styles.chat_conversation_footer_action ]}>

                        </View>
                    </View>
                </View>

            </View>
        );

    });

}