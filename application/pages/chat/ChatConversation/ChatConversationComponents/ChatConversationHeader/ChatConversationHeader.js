import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./chat-conversation-header-styles";

export default class ChatConversationHeader extends React.Component{

    constructor( props ){
        super( props );
    }


    render(){
        return(
            <View style={[ styles.chat_conversation_header ]}>
                <View style={[ styles.chat_conversation_statusbar ]} />

                <View style={[ styles.chat_conversation_header_content ]}>
                    <View style={[ styles.chat_conversation_header_action ]}>
                        <TouchableOpacity style={[ styles.chat_conversation_header_action_touchable ]}>
                            <Image style={[ styles.chat_conversation_header_action_ico ]} source={require('../../../../../assets/imgs/png/icons/left-arrow.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.chat_conversation_header_details ]}>

                        <View style={[ styles.chat_conversation_header_cover ]}>
                            <View style={[ styles.chat_conversation_header_cover_content ]}>
                            </View>
                        </View>
                        <View style={[ styles.chat_conversation_header_labels ]}>
                            <View style={[ styles.chat_conversation_header_label, styles.alignBot ]}>
                                <Text numberOfLines={1} ellipsizeMode='tail' style={[ styles.chat_conversation_header_chatname ]}>
                                    Chat Name
                                </Text>
                            </View>
                            <View style={[ styles.chat_conversation_header_label, styles.alignTop ]}>
                                <Text style={[ styles.chat_conversation_header_chatstatus ]} numberOfLines={1} ellipsizeMode='tail'>
                                    Online
                                </Text>
                            </View>
                        </View>

                    </View>

                    <View style={[ styles.chat_conversation_header_action ]}>
                        <TouchableOpacity style={[ styles.chat_conversation_header_action_touchable ]}>
                            <Image style={[ styles.chat_conversation_header_action_ico_small ]} source={require('../../../../../assets/imgs/png/icons/dots-vertical.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }

}