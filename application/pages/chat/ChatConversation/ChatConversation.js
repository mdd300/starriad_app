import React from "react";
import { View, Text, Image, TouchableOpacity, Animated, TextInput, ScrollView, Keyboard } from "react-native";
import styles from "./chat-conversation-styles";
import ChatConversationHeader from "./ChatConversationComponents/ChatConversationHeader/ChatConversationHeader";
import ChatMessage from "./ChatConversationComponents/ChatMessage/ChatMessage";

export default class ChatConversation extends React.Component{

    constructor( props ){
        super( props );

        this.state = {
            keyboard_height: 0,
            keyboard_animation: new Animated.Value( 0 ),

            keyboard_closer_animation: new Animated.Value( 0 ),
        }

    }

    /** Função trigger de quando o componente for montado */
    componentDidMount () {

        this.keyboardShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardShow);
        this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardHide);

        /* Temporizador sem tempo definido */
        setTimeout(()=>{
            this.refs.scrollView.scrollToEnd({ animated: false });
        });

    }/* Fim da função trigger de quando o componente for montado */

    /** Função trigger de quando o componente for fechado */
    componentWillUnmount () {

        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();

    }/* Fim da função trigger de quando o componente for fechado/desmontado */
    

    /** Função trigger, executada sempre que o keyboard for aberto */
    _keyboardShow = (( event )=>{

        this._setKeyboardHeight( event.endCoordinates.height );

        Animated.parallel([

            Animated.spring( this.state.keyboard_animation, {
                toValue: 100,
                bounciness: 10
            }),
            Animated.spring( this.state.keyboard_closer_animation, {
                toValue: 100,
                bounciness: 15,
            })

        ]).start();



    });/* Fim da função trigger de abertura do keyboard */

    
    /* Função trigger, executada sempre que o keyboard for fechado */
    _keyboardHide = (()=>{

        Animated.parallel([

            Animated.spring( this.state.keyboard_animation, {
                toValue: 0,
                bounciness: 15
            }),
            Animated.spring( this.state.keyboard_closer_animation, {
                toValue: 0,
                bounciness: 15,
            })

        ]).start();


    });


    /** Função utilizada para definir o HEIGHT do keyboard no state */
    _setKeyboardHeight = (( keyboard_height )=>{

        /* Define no state, apenas se os valores forem divergentes */
        if( keyboard_height !== this.state.keyboard_height ){
            this.setState({ keyboard_height });
        }

    }); /* Fim do escopo da função _setKeyBoardHeight */



    render(){
        return(
            <View style={[ styles.chat_conversation ]}>

                <ChatConversationHeader />
                { this._render_body() }

            </View>
        );
    }

    /** Função utilizada para renderizar o corpo da pagina */
    _render_body = (()=>{

        let keyboard_style = {
            paddingBottom: this.state.keyboard_animation.interpolate({ inputRange: [0, 100], outputRange: [0, this.state.keyboard_height ] })
        };

        return(
            <Animated.View style={[ styles.chat_conversation_body, keyboard_style ]}>

                <View style={[ styles.chat_conversation_content ]}>
                    <View style={[ styles.chat_conversation_viewport ]}>
                        <ScrollView ref="scrollView" style={[ styles.chat_conversation_scrollview ]}>
                            <View style={[ styles.chat_conversation_list_messages ]}>

                                { this._render_messages() }

                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={[ styles.chat_conversation_footer ]}>
                    <View style={[ styles.chat_conversation_footer_input_content ]}>
                        <TextInput style={[ styles.chat_conversation_footer_input ]} underlineColorAndroid="transparent" placeholder="mensagem..." />
                    </View>
                    <View style={[ styles.chat_conversation_footer_action_content ]}>
                        <View style={[ styles.chat_conversation_footer_action ]}>
                            <TouchableOpacity style={[ styles.chat_conversation_footer_action_touchable ]}>

                                <Image style={[ styles.chat_conversation_footer_action_ico ]} source={require('../../../assets/imgs/png/icons/send-message.png')} />

                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                { this._render_closer_keyboard() }

            </Animated.View>
        );

    });/* Fim do escopo da função _render_body */

    /** Função utilizada para renderizar o componente que fecha o keyboard */
    _render_closer_keyboard = (()=>{

        let animation = {
            bottom: this.state.keyboard_closer_animation.interpolate({ inputRange: [0,100], outputRange: [-50, (this.state.keyboard_height + 65) ] }),
            opacity: this.state.keyboard_closer_animation.interpolate({ inputRange: [0,50], outputRange: [0, 1 ] }),
        };

        return(
            <Animated.View style={[ styles.keyboard_closer, animation ]}>
                <TouchableOpacity
                    onPress={()=>{ Keyboard.dismiss(); }}
                    style={[ styles.keyboard_closer_touchable ]}>
                    <Image style={[ styles.keyboard_closer_icon ]} source={require('../../../assets/imgs/png/icons/keyboard-down.png')}/>
                </TouchableOpacity>
            </Animated.View>
        );

    });/* Fim do escopo da função render_closer_keyboard */




    _render_messages = (()=>{

        const  messages = [
            {
                message_sender: true,
                message_message: 'Lorem ipsum dolor sit amet',
                message_date: '10:30',
            },
            {
                message_sender: true,
                message_message: 'consectetur adipisicing elit. Ab accusamus ad animi eligendi enim id itaque,',
                message_date: '10:30',
            },
            {
                message_sender: false,
                message_message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad animi eligendi enim id itaque, modi necessitatibus numquam quae recusandae sint tempore voluptates! Aliquid ',
                message_date: '10:35',
            },
            {
                message_sender: true,
                message_message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad animi eligendi enim id itaque, modi necessitatibus numquam quae recusandae sint tempore voluptates! Aliquid assumenda dolore eveniet iste iure!',
                message_date: '10:40',
            },
            {
                message_sender: false,
                message_message: 'Lorem ipsum dolor sit amet',
                message_date: '10:45',
            },
            {
                message_sender: false,
                message_message: 'accusamus ad animi eligendi enim id itaque, modi necessitatibus numquam quae recusandae sint tempore voluptates!',
                message_date: '10:47',
            },
        ];

        const render = messages.map(( message, index )=>{
           return(
               <ChatMessage
                   key={ index }
                   sender={message.message_sender}
                   message={message.message_message}
                   date={message.message_date} />
           );
        });

        return render;


    });


}