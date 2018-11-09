import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    chat_home_content: {
        flex: 1,
        flexDirection: 'column'
    },

    chat_home_header: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    },

    chat_home_header_statusbar: {
        width: '100%',
        position: 'relative',
        height: 24,
        backgroundColor: '#7f1cef',
        zIndex: 9
    },
    chat_home_header_content: {
        width: '100%',
        position: 'relative',
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    chat_home_header_search_actions: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 5,
    },

    chat_home_header_search_content: {
        display: 'flex',
        flex: 1,
        position: 'relative',
        padding: 5,
        paddingLeft: 10
    },
    chat_home_header_search_inn: {
        flex: 1,
        display: 'flex',
        position: 'relative'
    },
    chat_home_header_search_input: {
        width: '100%',
        position: 'relative',
        height: 35,
        backgroundColor: '#eee',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        paddingHorizontal: 10
    },
    chat_home_header_search_icon: {
        width: 35,
        height: 35,
        position: 'absolute',
        right: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chat_home_header_search_icon_touchable: {
        width: 35,
        height: 35,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chat_home_header_search_action: {
        width: 25,
        height: 45,
        position: 'relative',
        display: 'flex'
    },
    chat_home_header_search_action_touchable: {
        width: 25,
        height: 45,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chat_home_header_search_action_ico: {
        width: 15,
        height: 15,
    },


    chat_home_header_sections_menu_content: {
        width: '100%',
        height: 52,
        position: 'relative',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    chat_home_header_section_menu: {
        position: 'relative',
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },
    chat_home_header_section_option: {
        flex: 1,
        position: 'relative'
    },
    chat_home_header_section_option_touchable: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chat_home_header_section_option_label: {
        fontSize: 15,
        color: '#666',
        fontWeight: 'bold'
    },

    actived_section_label: { color: '#7f1cef' },
    chat_home_header_section_menu_actived_bar: {
        width: '50%',
        display: 'flex',
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 2,
        backgroundColor: '#7f1cef'
    },


    chat_home_body_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },

    chat_home_body_viewport: {
        position: 'relative',
        backgroundColor: '#fff',
        flexDirection: 'row',
        display: 'flex'
    },

    chat_home_body_section: {
        minWidth: '100%',
        position: 'relative',
        flex: 1,
    },
    chat_home_section_conversations: {
        flex: 1,
        position: 'relative',
        display: 'flex',
    },
    chat_home_section_conversations_scrollview: {
        width: '100%',
        position: 'relative',
        display: 'flex',
    },

});

export default styles;