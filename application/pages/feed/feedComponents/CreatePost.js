import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../feed-styles";

/* Classe do componente responsável por inicializar a criação de um POST */
export default class CreatePost extends React.Component{
    
    /* Função construtora do componente */
    constructor( props ){
        super( props );
    }
    
    /* Função trigger de quando o componente for montado */
    componentDidMount(){}
 
    /* Função que renderiza o componente na tela */
    render(){

        return(
            <View style={[ styles.create_post_component ]}>
                <View style={[ styles.create_post_content ]}>

                    <View style={[ styles.create_post_header ]}>
                        <Text style={[ styles.create_post_title ]}> Publicar Post </Text>
                    </View>
                    <View style={[ styles.create_post_body ]}>
                        <TextInput
                            multiline={true}
                            numberOfLines={3}
                            style={[ styles.create_post_input ]}
                            placeholder="Escreva um texto..."
                            placeholderTextColor="#797979"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={[ styles.create_post_footer ]}>
                        <View style={[ styles.create_post_footer_actions ]}>

                            <TouchableOpacity activeOpacity={ .5 }>
                                <View style={[ styles.create_post_footer_action ]}>
                                    <Image style={[ styles.create_post_footer_action_ico ]} resizeMode="cover" source={ require("../../../assets/imgs/png/icons/picture.png") } />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={ .5 }>
                                <View style={[ styles.create_post_footer_action ]}>
                                    <Image style={[ styles.create_post_footer_action_ico ]} resizeMode="cover" source={ require("../../../assets/imgs/png/icons/shirt.png") } />
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={[ styles.create_post_footer_finish ]}>
                            <TouchableOpacity activeOpacity={.7}>
                                <View style={[ styles.create_post_footer_finish_button ]}>
                                    <Text style={[ styles.create_post_footer_finish_button_text ]}> COMPARTILHAR </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </View>
        );

    }/* Fim da função responsável pelo render do componente */
    
    
    
};/* Fim da classe CreatePost */