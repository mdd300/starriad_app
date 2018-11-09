import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    chat_conversation: {
        flex: 1,
        flexDirection: 'column',
    },

    chat_conversation_body: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#ddd'
    },
    chat_conversation_content: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        backgroundColor: '#f00'
    },
    chat_conversation_footer: {
        width: '100%',
        position: 'relative',
        height: 60,
        backgroundColor: '#ff0',
        display: 'flex',
        flexDirection: 'row',
    },
    chat_conversation_footer_input_content: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'blue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chat_conversation_footer_action_content: {
        width: 60,
        height: 60,
        position: 'relative',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
export default styles;