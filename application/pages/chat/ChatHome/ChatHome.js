import React from "react";
import {View, Text, Image, TextInput, Animated, TouchableOpacity, ScrollView, PanResponder, Dimensions} from "react-native";
import styles from "./chat-home-styles";
import Template from "../../../components/Template/Template";
import Conversation from "./ChatHomeComponents/Conversation/Conversation";
import Contact from "./ChatHomeComponents/Contact/Contact";

export default class ChatHome extends React.Component{
    
    /* Função construtora da pagina home do chat */
    constructor( props ){
        super( props );

        let device_dimensions = Dimensions.get('window');
        let device_width = device_dimensions.width;

        this.state = {
            section_width: device_width,
            section_actived: 'conversas',
            section_animation: new Animated.Value( 0 ),

            panresponder: false,
        };


        this.panresponder_animation = new Animated.ValueXY();


        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) =>  { return Math.abs( gestureState.dx ) > 20; },
            onPanResponderGrant: (( evt, gestureState )=>{
                this.setState({ panresponder: true });
            }),
            onPanResponderMove: Animated.event([null, { dx: this.panresponder_animation.x, dy: 0 }]),
            onPanResponderRelease: (( evt, gestureState ) =>{
                this.setState({ panresponder: false });
            })
        });


    }/* Fim do escopo da função construtora da pagina Home do CHAT */


    __switch_section = (( section ) => {

        let animation_value = ( section === 'contatos' ? 100 : 0 );
        this.setState({ section_actived: section });

        Animated.spring( this.state.section_animation, {
            toValue: animation_value,
        }).start();

    });

    /* Função utilizada para renderizar a pagina com o componente Template */
    render(){

        return(
            <Template
                header={ false }
                scrollview={false}
                navigation={ this.props.navigation }
                render={ this.__render() }/>
        );
    };/* Fim da função Render da pagina */


    /** Função __render, utilizada para definir os componentes e estruturas internas da pagina */
    __render(){

        return(
            <View style={[ styles.chat_home_content ]} >
                { this.__render_header() }
                { this.__render_body() }
            </View>
        );

    }/* Fim do escopo da função __render */


    /** Função utilizada para renderizar o componente de Header a pagina home do chat */
    __render_header = (()=>{

        const animation = { transform: [{ translateX: this.state.section_animation.interpolate({ inputRange: [0,100], outputRange: [0, ( this.state.section_width / 2) ] }) }] }

        return(
            <View style={[ styles.chat_home_header ]}>

                <View style={[ styles.chat_home_header_statusbar ]} />

                <View style={[ styles.chat_home_header_content ]}>

                    <View style={[ styles.chat_home_header_search_actions ]}>
                        <View style={[ styles.chat_home_header_search_content ]}>
                            <View style={[ styles.chat_home_header_search_inn ]}>

                                <TextInput
                                    style={[ styles.chat_home_header_search_input ]}
                                    underlineColorAndroid="transparent"
                                    placeholder="Buscar..." />

                                <View style={[ styles.chat_home_header_search_icon ]}>
                                    <TouchableOpacity style={[ styles.chat_home_header_search_icon_touchable ]}>
                                        <Image style={[ { width: 15, height: 15, } ]} source={ require('../../../assets/imgs/png/icons/search.png') }/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={[ styles.chat_home_header_search_action ]}>
                            <TouchableOpacity style={[ styles.chat_home_header_search_action_touchable ]}>
                                <Image style={[ styles.chat_home_header_search_action_ico ]} source={ require('../../../assets/imgs/png/icons/dots-vertical.png') }/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[ styles.chat_home_header_sections_menu_content ]}>
                        <View style={[ styles.chat_home_header_section_menu ]}>

                            <View style={[ styles.chat_home_header_section_option ]}>
                                <TouchableOpacity onPress={()=>{ this.__switch_section( 'conversas' ) }} style={[ styles.chat_home_header_section_option_touchable ]}>
                                    <Text style={[ styles.chat_home_header_section_option_label, ( this.state.section_actived === 'conversas' && styles.actived_section_label ) ]}>
                                        Conversas
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[ styles.chat_home_header_section_option ]}>
                                <TouchableOpacity onPress={()=>{ this.__switch_section( 'contatos' ) }} style={[ styles.chat_home_header_section_option_touchable ]}>
                                    <Text style={[ styles.chat_home_header_section_option_label,  ( this.state.section_actived === 'contatos' && styles.actived_section_label ) ]}>
                                        Contatos
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <Animated.View style={[ styles.chat_home_header_section_menu_actived_bar, animation ]}/>

                        </View>
                    </View>

                </View>
            </View>
        );

    });/* Fim do escopo da função __render_header */


    /**
     * Função utilizada para renderdizar o corpo do
     * @type {function(): *}
     * @private
     */
    __render_body = (()=>{

        const style_minwidth = { minWidth: this.state.section_width, maxWidth: this.state.section_width };

        const animation = { transform: [{ translateX: this.state.section_animation.interpolate({ inputRange: [0,100], outputRange: [0, -this.state.section_width] }) }] }
        //const animation = { marginLeft: this.state.section_animation.interpolate({ inputRange: [0,100], outputRange: [0, -(this.state.section_width)] }) };

        return(
            <View
                { ...this._panResponder.panHandlers }
                style={[ styles.chat_home_body_content ]} >

                <Animated.View style={[ styles.chat_home_body_viewport, animation, { minWidth: ( this.state.section_width * 2 ) } ]}>
                    <Animated.View
                        style={[ styles.chat_home_body_section, style_minwidth ]}>
                        <View style={[ styles.chat_home_section_conversations ]} >
                            <ScrollView
                                style={[ styles.chat_home_section_conversations_scrollview ]}>
                                { this.__render_conversations() }
                            </ScrollView>
                        </View>
                    </Animated.View>
                    <Animated.View
                        style={[ styles.chat_home_body_section, style_minwidth]}>

                        <View style={[ styles.chat_home_section_conversations ]} >
                            <ScrollView
                                style={[ styles.chat_home_section_conversations_scrollview ]}>
                                { this.__render_contacts() }
                            </ScrollView>
                        </View>
                    </Animated.View>
                </Animated.View>


            </View>

        );
    }); /* fim do escopo da função render do body */


    /**
     * Função utilizada para renderizar os registros de conversas do chat
     * @type {Function}
     * @private
     */
    __render_conversations = (() => {

        const conversations = [
            {
                key: 0,
                chat_cover: 'http://f19.ifotki.info/org/62427712c74d6fa44795f39a0f67851505e485223190831.jpg',
                chat_name: 'D&G Dolce & Gabbana',
                chat_last_message: 'Qual a disposição de estoque do ultimo vestido postado?',
                chat_date: 'ontem',
                chat_badge: 0,
                chat_new_messages: false,
            },
            {
                key: 1,
                chat_cover: 'https://img2.cgtrader.com/items/726611/bc86a5b28a/large/versace-logo-3d-model-ma-mb.jpeg',
                chat_name: 'Versase',
                chat_last_message: 'Como está o status de entrega do pedido #0555423?',
                chat_date: '10:30',
                chat_badge: 10,
                chat_new_messages: true,
            },
            {
                key: 2,
                chat_cover: 'https://s3images.coroflot.com/user_files/individual_files/723615_git6bkyk4oyigbj6hrzu8xnqt.jpg',
                chat_name: 'Dior',
                chat_last_message: 'Quais formas de pagamento vocês aceitam?',
                chat_date: '11:20',
                chat_badge: 0,
                chat_new_messages: false,
            },
            {
                key: 3,
                chat_cover: 'https://cdn.shopify.com/s/files/1/2374/3709/products/GUCCI_THUMB_237af47c-c672-444b-bd49-5bf9b5d4b99b_394x.jpg?v=1514073359',
                chat_name: 'Gucci',
                chat_last_message: 'Estou tendo um problema para localizar o seu produto. Porderiam me ajudar?',
                chat_date: '11:25',
                chat_badge: 3,
                chat_new_messages: true,
            },

        ];

        /* Mapeia os elementos de chat para renderizalos de forma dinâmica */
        const render = conversations.map(( chat, index )=> {
            return(
                <Conversation
                    key={ index }
                    chat_cover={ chat.chat_cover }
                    chat_name={ chat.chat_name }
                    chat_last_message={ chat.chat_last_message }
                    chat_date={ chat.chat_date }
                    chat_badge={ chat.chat_badge }
                    chat_new_messages={ chat.chat_new_messages } />
            );
        }); /* Fim do mapeamento das conversas para renderiza-las */

        return render;

    });


    /**
     * Função utilizada para renderizar os componentes de contatos
     * @type {function(): *}
     * @private
     */
    __render_contacts = (() => {

        const contacts = [
            {
                contact_cover: 'http://f19.ifotki.info/org/62427712c74d6fa44795f39a0f67851505e485223190831.jpg',
                contact_name: 'D&G Dolce & Gabbana',
                contact_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                contact_cover: 'https://img2.cgtrader.com/items/726611/bc86a5b28a/large/versace-logo-3d-model-ma-mb.jpeg',
                contact_name: 'Versase',
                contact_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                contact_cover: 'https://s3images.coroflot.com/user_files/individual_files/723615_git6bkyk4oyigbj6hrzu8xnqt.jpg',
                contact_name: 'Dior',
                contact_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                contact_cover: 'https://cdn.shopify.com/s/files/1/2374/3709/products/GUCCI_THUMB_237af47c-c672-444b-bd49-5bf9b5d4b99b_394x.jpg?v=1514073359',
                contact_name: 'Gucci',
                contact_desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
        ];


        const render = contacts.map(( contact, key )=> {
            return(
                <Contact
                    key={ key }
                    contact_cover={ contact.contact_cover }
                    contact_name={ contact.contact_name }
                    contact_desc={ contact.contact_desc } />
            );
        });

        return render;

    });



}/* Fim do escopo da classe de ChatHome */