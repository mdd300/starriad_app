import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    chat_conversation: {
        flex: 1,
        flexDirection: 'column',
    },

    chat_conversation_body: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#eee'
    },
    chat_conversation_content: {
        flex: 1,
        position: 'relative',
        display: 'flex',
    },
    chat_conversation_viewport: {
        flex: 1,
        position: 'relative',
        display: 'flex',
    },
    chat_conversation_scrollview: {
        display: 'flex',
        flex: 1,
        position: 'relative',
    },
    chat_conversation_list_messages: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 5,
    },

    chat_conversation_footer: {
        width: '100%',
        position: 'relative',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
    },
    chat_conversation_footer_input_content: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        paddingLeft: 10,
    },
    chat_conversation_footer_input: {
        width: '100%',
        height: 40,
        position: 'relative',
        display: 'flex',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 3,
        paddingHorizontal: 7,
    },
    chat_conversation_footer_action_content: {
        width: 60,
        height: 60,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chat_conversation_footer_action: {
        width: 40,
        height: 40,
        position: 'relative',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chat_conversation_footer_action_touchable: {
        width: 60,
        height: 60,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chat_conversation_footer_action_ico: {
        width: 20,
        height: 20,
        position: 'relative',
        transform: [{ translateX: -1},{translateY: 1}]
    },

    keyboard_closer: {
        width: 35,
        height: 35,
        position: 'absolute',
        right: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 5,
        display: 'flex',
    },
    keyboard_closer_touchable: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    keyboard_closer_icon: {
        width: 20,
        height: 20,
        aspectRatio: 1,
    },

});
export default styles;