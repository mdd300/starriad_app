import React from "react";
import {View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import styles from "../../feed-styles";
import PostComment from '../postComponents/PostComment';

export default class PostFooter extends React.Component {

    /** Função construtora do footer dos posts */
    constructor(props) {
        super(props);

        this.state = {};

    }/* Fim da função construtora dos posts */

    /** Função executada quando o componente for montado completamente */
    componentDidMount(){}

    /** Função utilizada para renderizar o componente */
    render() {
        return (
            <View style={[ styles.post_footer_content ]}>
                <View style={[ styles.post_footer_actions ]}>
                    <View style={[ styles.post_footer_action ]}>
                        <TouchableOpacity style={[ styles.post_footer_action_touchable ]}>
                            <Image style={[ styles.post_footer_action_icon ]} source={ require('../../../../assets/imgs/png/icons/heart.png') }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.post_footer_action ]}>
                        <TouchableOpacity style={[ styles.post_footer_action_touchable ]}>
                            <Image style={[ styles.post_footer_action_icon ]} source={ require('../../../../assets/imgs/png/icons/message.png') }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.post_footer_action ]}>
                        <TouchableOpacity style={[ styles.post_footer_action_touchable ]}>
                            <Image style={[ styles.post_footer_action_icon ]} source={ require('../../../../assets/imgs/png/icons/send-message.png') }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.post_footer_action ]}>
                        <TouchableOpacity style={[ styles.post_footer_action_touchable ]}>
                            <Image style={[ styles.post_footer_action_icon ]} source={ require('../../../../assets/imgs/png/icons/shop.png') }/>
                        </TouchableOpacity>
                    </View>

                    <View style={[ styles.post_footer_action ]}>
                        <TouchableOpacity style={[ styles.post_footer_action_touchable ]}>
                            <Image style={[ styles.post_footer_action_icon ]} source={ require('../../../../assets/imgs/png/icons/share.png') }/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[ styles.post_footer_informations ]}>
                    <Text style={[ styles.post_footer_information_likes ]}> 0 curtidas </Text>
                    <Text style={[ styles.post_footer_information_time ]}> Há 8 horas atrás </Text>
                </View>

                <View style={[ styles.post_footer_comments ]}>

                    <View style={[ styles.post_footer_comments_count ]}>
                        <Text style={[ styles.post_footer_comments_count_label ]}> 356 Comentários </Text>
                    </View>

                    <View style={[ styles.post_footer_comments_content ]}>

                        <PostComment />
                        <PostComment />
                        <PostComment />

                    </View>

                    <View style={[ styles.post_footer_new_comment_content ]}>
                        <TextInput
                            style={[ styles.post_footer_new_comment ]}
                            underlineColorAndroid="transparent"
                            placeholder="Adicione um comentário e pressione Enter"
                            placeholderTextColor="#78756e"
                            multiline={false}/>
                    </View>

                </View>

            </View>
        );

    }/* Fim da função render do componente */

}