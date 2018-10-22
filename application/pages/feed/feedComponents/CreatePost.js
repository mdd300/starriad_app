import React from "react";
import { View, Animated, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../feed-styles";

/* Classe do componente responsável por inicializar a criação de um POST */
export default class CreatePost extends React.Component{
    
    /* Função construtora do componente */
    constructor( props ){
        super( props );

        this.state = {
            animation: new Animated.Value( 0 ),
            post_text: '',
        }

    }
    
    /* Função trigger de quando o componente for montado */
    componentDidMount(){

        /* Cria um pequeno intervalo para que a animação possa ser vista pelo usuário */
        setTimeout(()=> {
            Animated.spring( this.state.animation, {
                toValue: 100,
                bounciness: 10
            }).start();
        }, 300);/* Fim do intervalo da animação */

    }


    __createPostImage = (() => {
        this.props.navigation.navigate('FeedCreatePost', { selection: 'image', text: this.state.post_text });
    });

    __createPostProduct = (() => {
        this.props.navigation.navigate('FeedCreatePost', { selection: 'product', text: this.state.post_text });
    });

    /* Função que renderiza o componente na tela */
    render(){

        const bounceIn = { transform: [{ scale: this.state.animation.interpolate({ inputRange: [0, 100], outputRange: [0, 1] }) }] };
        
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
                            onChangeText={(text) => this.setState({ post_text: text })}
                        />
                    </View>
                    <View style={[ styles.create_post_footer ]}>
                        <View style={[ styles.create_post_footer_actions ]}>

                            <TouchableOpacity activeOpacity={ .5 } onPress={ this.__createPostImage } >
                                <Animated.View style={[ styles.create_post_footer_action, bounceIn ]}>
                                    <Image style={[ styles.create_post_footer_action_ico ]} resizeMode="cover" source={ require("../../../assets/imgs/png/icons/picture.png") } />
                                </Animated.View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={ .5 } onPress={ this.__createPostProduct } >
                                <Animated.View style={[ styles.create_post_footer_action, bounceIn ]}>
                                    <Image style={[ styles.create_post_footer_action_ico ]} resizeMode="cover" source={ require("../../../assets/imgs/png/icons/shirt.png") } />
                                </Animated.View>
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