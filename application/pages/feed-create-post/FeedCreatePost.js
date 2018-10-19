import React from "react";
import {View, ScrollView, Animated, Keyboard, Text, TouchableOpacity, Image, TextInput} from "react-native";
import styles from "./feed-create-post-styles";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import SelectProdutos from "../../components/SelectProdutos/SelectProdutos";

/* Escopo da classe da pagina de criação de post */
export default class FeedCreatePost extends React.Component{
    
    /** Função construtora da pagina de criação de post */
    constructor( props ){
        super( props );

        /* Propriedades do state */
        this.state = {
            scroll_content_height: 0,

            has_image: false,
            post_image: '.',

            animation_progress_keyboard_closer: new Animated.Value( 0 ),
            animation_progress_keyboard: new Animated.Value( 0 ),
            keyboard_height: 0,
            keyboard_opened: false,



            show_image_picker: false,

        };/* Fim das definições iniciais de state do componente */

    }/* Fim do constructor do componente */

    /** Função trigger de quando o componente for montado pela primeira vez */
    componentDidMount () {
        /* Adiciona os listenners ao keyboard */
        Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        Keyboard.addListener('keyboardWillHide', this._keyboardWillHide);
    }/* Fim da função trigger de didMount do componente */

    /** Função trigger de quando o componente receber unmount */
    componentWillUnmount () {
        /* Remove os listenners do keyboard */
        Keyboard.removeListener('keyboardDidShow');
        Keyboard.removeListener('keyboardWillHide');
    }/* Fim da função trigger de unmount */

    /** Função que seta a altura do keyboard */
    __set_keyboard_height( height ){
        /* Verifica se o keyboard height passado como parametro foi diferente do já registrado  */
        if( this.state.keyboard_height !== height ){
            /* Se sim, seta o state da altura do keyboard */
            this.setState({ keyboard_height: height });
        }
    }/* Fim da função que seta a altura do keyboard */

    /** Função trigger de quando o teclado for aberto */
    _keyboardDidShow = (( event ) => {

        /* Retorna a altura do teclado */
        let keyboard_height = event.endCoordinates.height;
        /* Seta a altura do teclado */
        this.__set_keyboard_height( keyboard_height );
        /* Seta o state de teclado aberto para tue */
        this.setState({ keyboard_opened: true });

        /* Inicia as animações em paralelo */
        Animated.parallel([
            /* Anima o botão de fechamento do keyboard */
            Animated.spring( this.state.animation_progress_keyboard_closer, {
                toValue: 100,
                bounciness: 10
            }),
            /* Anima o content View, para que o keyboard não fique por cima dos elementos */
            Animated.timing( this.state.animation_progress_keyboard, {
                toValue: 100,
                duration: 300
            })
        ]).start();/* Fim das animações em paralelo */

    });/* Fim da funçao trigger de quando o teclado for aberto */


    /** Função trigger de quando o keyboard for fechado */
    _keyboardWillHide = (() => {

        /* Seta o state de keyboard open pra false */
        this.setState({ keyboard_opened: false });

        /* Inicia as animações em paralelo */
        Animated.parallel([
            /* Anima o content view para remover o paddingBottom do keyboard */
            Animated.spring( this.state.animation_progress_keyboard_closer, {
                toValue: 0,
                bounciness: 10
            }),
            
            /* Anima (saida) o botão de fechamento do keyboard */
            Animated.timing( this.state.animation_progress_keyboard, {
                toValue: 0,
                duration: 300
            })
            
        ]).start();/* Fim das animações em paralelo */

    }); /* Fim da função trigger de quando o keyboard for fechado */


    /** Função utilizada para setar a altura do content height da scrollView */
    __setScrollContentHeight( height ){
        this.setState({ scroll_content_height: height });
    }/* __setScrollContentHeight */

    /* Função de fechamento do keyboard */
    __dismiss_keyboard(){
        Keyboard.dismiss();
    }/* __dismiss_keyboard */

    /** Função utilizada para renderizar o botão de fechamento do keyboard */
    __render_keyboard_closer(){

        /* Valores de Bottom, usados na animação */
        const bottom_position = this.state.animation_progress_keyboard_closer.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ -50, ( this.state.keyboard_height + 15 ) ]
        });

        /* Valores de opacidade, usados na animação */
        const opacity = this.state.animation_progress_keyboard.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ 0, 1 ]
        });

        /* Retorna a estrutura do elemento */
        return(
            <Animated.View style={[ styles.feed_create_post_close_keyboard, { bottom: bottom_position, opacity: opacity } ]}>
                <TouchableOpacity
                    hitSlop={ {top: 10, left: 10, right: 10, bottom: 10} }
                    style={ styles.feed_create_post_close_keyboard_touchable }
                    onPress={this.__dismiss_keyboard}>
                        <Image style={[ styles.feed_create_post_close_keyboard_ico ]} source={ require('../../assets/imgs/png/icons/keyboard-down.png') } />
                </TouchableOpacity>
            </Animated.View>
        );

    }; /* fim da função __render_keyboard_closer */

    /** Função utilizada para abrir o imagePicker */
    __take_picture = (() => {
        this.setState({ show_image_picker: true });
    });

    /** Função utilziada para definir a imagem no post */
    __set_image = (( image )=>{

        this.setState({ show_image_picker: false, has_image: true, post_image: image[0].node.image.uri });

    });



    /** Função utilizada para renderizar a imagem, caso exista */
    __render_image(){

        /* Verifica se existe imagem definida */
        if( this.state.has_image ){
            return(
                <View style={[ styles.create_post_page_image_content ]}>
                    <View style={[ styles.create_post_page_image_viewport ]}>

                        <Image resizeMode="cover" style={[ styles.create_post_page_image ]} source={{ uri: this.state.post_image }}/>

                        <View style={[ styles.create_post_image_remover ]}>
                            <TouchableOpacity style={[ styles.create_post_image_remover_touchable ]} onPress={() => { this.setState({ has_image: false }) }} >
                                <Image style={[ styles.create_post_image_remover_ico ]} source={require('../../assets/imgs/png/icons/trash.png')} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            );
        }

    }/* __render_image */

    /* Função utilizada para renderizar a pagina e seus componentes */
    render(){
        const footer_actions_height = 100;
        /* Valores do padding bottom da view, pra quando o keyboard estiver aberto */
        const keyboard_height = this.state.animation_progress_keyboard.interpolate({
            inputRange: [ 0, 100 ],
            outputRange: [ 0, this.state.keyboard_height ]
        });

        /* Retorna a estrutura do componente */
        return(
        <View style={[ styles.create_post_page ]}>

            <View style={[ styles.create_post_page_header_tab ]}></View>

            <View style={[ styles.create_post_page_header ]} >

                <View style={[ styles.create_post_header_action ]}>
                    <View style={[ styles.create_post_header_action_back ]}>
                        <TouchableOpacity style={[ styles.create_post_header_action_touchable ]}>
                            <Image style={[ styles.create_post_header_action_ico ]} source={ require('../../assets/imgs/png/icons/caret-left-black.png') }/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[ styles.create_post_header_label ]}>
                    <Text style={[ styles.create_post_header_lbl ]}> Publicar Post </Text>
                </View>
                <View style={[ styles.create_post_header_action ]}>
                    <TouchableOpacity style={[ styles.create_post_header_action_touchable ]}>
                        <Text style={[ styles.create_post_header_action_label ]}> Compartilhar </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <ScrollView onLayout={( event ) => { this.__setScrollContentHeight( event.nativeEvent.layout.height ); }} style={{ flex: 1, }}>

                <Animated.View style={[ styles.create_post_page_body_content, { paddingBottom: keyboard_height } ]}>

                    <View style={[ styles.create_post_page_body, { minHeight: (this.state.scroll_content_height - footer_actions_height ) } ]}>

                        { this.__render_image() }

                        <View style={[ styles.create_post_input_content ]}>
                            <TextInput multiline={true}
                                       underlineColorAndroid="transparent"
                                       placeholder="Escreva um texto..."
                                       style={[ styles.create_post_input ]} />
                        </View>

                    </View>

                    <View style={[ styles.create_post_page_footer ]}>
                        <View style={[ styles.create_post_footer_action ]} >
                            <TouchableOpacity
                                style={[ styles.create_post_footer_action_touchable ]}
                                onPress={()=> { this.__take_picture() }} >
                                <View style={[ styles.create_post_footer_action_icon ]}>
                                    <Image style={[ styles.create_post_footer_action_ico ]} source={ require("../../assets/imgs/png/icons/picture.png") }></Image>
                                </View>
                                <View style={[ styles.create_post_footer_action_label ]}>
                                    <Text style={[ styles.create_post_footer_action_label_text ]}> IMAGEM </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[ styles.create_post_footer_action ]} >
                            <TouchableOpacity style={[ styles.create_post_footer_action_touchable ]}>
                                <View style={[ styles.create_post_footer_action_icon ]}>
                                    <Image style={[ styles.create_post_footer_action_ico ]} source={ require("../../assets/imgs/png/icons/shirt.png") }></Image>
                                </View>
                                <View style={[ styles.create_post_footer_action_label ]}>
                                    <Text style={[ styles.create_post_footer_action_label_text ]}> PRODUTOS </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>

            </ScrollView>

            { this.__render_keyboard_closer() }

            <ImagePicker
                show={ this.state.show_image_picker }
                onSelect={( images )=>{ this.__set_image( images ); }}
                onCancel={()=>{ this.setState({ show_image_picker: false }) }} />

            <SelectProdutos
                show={true}
                onSelect={()=>{}}
                onCancel={()=>{}} />


        </View>
        );

    }/* Fim da função render  */
    
}/* Fim do escopo da classe do componente da pagina de criação de post */