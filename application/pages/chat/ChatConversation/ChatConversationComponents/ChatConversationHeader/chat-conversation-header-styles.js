import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    chat_conversation_header: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    },

    chat_conversation_statusbar: {
        width: '100%',
        height: 24,
        position: 'relative',
        backgroundColor: '#7f1cef'
    },

    chat_conversation_header_content: {
        width: '100%',
        position: 'relative',
        backgroundColor: "#8f48ef",
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    chat_conversation_header_action: {
        width: 25,
        height: 50,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chat_conversation_header_action_touchable: {
        width: 25,
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    chat_conversation_header_action_ico: {
        width: 20,
        height: 20,
        tintColor: '#fff',
    },
    chat_conversation_header_action_ico_small: {
        width: 15,
        height: 15,
        tintColor: '#fff',
    },

    chat_conversation_header_details: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row'
    },
    chat_conversation_header_cover: {
        width: 50,
        height: 50,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chat_conversation_header_cover_content: {
        width: 38,
        height: 38,
        position: 'relative',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#5a1ab5',
        backgroundColor: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    chat_conversation_header_labels: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 5,
    },
    chat_conversation_header_label: {
        flex: 1,
        position: 'relative',
        display: 'flex'
    },

    alignBot:{ justifyContent: 'flex-end' },
    alignTop:{ justifyContent: 'flex-start' },

    chat_conversation_header_chatname: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 15,
        transform: [{ translateY: 2 }]

    },
    chat_conversation_header_chatstatus: {
        fontSize: 12,
        transform: [{ translateY: 2 }]

    }

});
export default styles;