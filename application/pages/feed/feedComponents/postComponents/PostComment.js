import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../feed-styles';


export default class PostComment extends React.Component{

    /* Função construtora do componente */
    constructor( props ){
        super( props );

        this.state = {};

    }/* Fim da função construtora do componente */


    /* Função utilizada para renderizar o componente na tela */
    render(){

        return(
            <View style={[ styles.post_comment_content ]}>
                <View style={[ styles.post_comment ]}>

                    <View style={[ styles.post_comment_labels ]}>
                        <Text style={[ styles.post_comment_father_label ]} numberOfLines={2}>

                            <Text style={[ styles.comment_markup ]}>@Milalai: </Text>
                            <Text style={[ styles.comment_description ]}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur commodi, consequatur cumque dolores est in incidunt ipsum molestias mollitia necessitatibus officia perferendis placeat porro possimus quod saepe sed sunt.
                            </Text>

                        </Text>
                    </View>
                    <View style={[ styles.post_comment_actions ]}>
                        <TouchableOpacity style={[ styles.post_comment_touchable_opacity ]}>
                            <Image style={[ styles.post_comment_actions_icon ]} source={ require("../../../../assets/imgs/png/icons/dots-vertical.png") }></Image>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );/* Fim do return do render */
    }/* Fim da função render do componente */
    

}/* Fim da classe  */