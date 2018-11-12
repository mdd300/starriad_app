import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    chat_message: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    chat_message_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
    },
    chat_message_balloon: {
        minWidth: 100,
        width: 'auto',
        flex: 0,
        flexShrink: 0,
        position: 'relative',
        display: 'flex',
        minHeight: 50,
        flexDirection: 'column',
        borderRadius: 5,
        padding: 13,
    },
    received_balloon: {
        backgroundColor: '#a19bff',
        alignSelf: 'flex-start',
        marginLeft: 5,
    },
    sended_balloon: {
        backgroundColor: '#d3d3d3',
        alignSelf: 'flex-end',
        marginRight: 5,
    },

    chat_message_balloon_caret: {
        borderTopWidth: 10,
        borderRightWidth: 10,
        borderLeftWidth: 10,
        borderBottomWidth: 10,

        position: 'absolute',
        borderRadius: 3,
        transform: [{ rotate: '-45deg' }]
    },

    received_caret: {
        borderTopColor: '#a19bff',
        borderRightColor: '#a19bff',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        left: -6,
        bottom: -10,
    },
    sended_caret: {
        borderTopColor: '#d3d3d3',
        borderRightColor: '#d3d3d3',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        right: -6,
        bottom: -10,
    },

    chat_message_balloon_label: {
        position: 'relative',
        maxWidth: '100%',
    },

    chat_message_balloon_date_label: {
        width: '100%',
        display: 'flex',
        fontSize: 10,
        transform: [{ translateY: 5, }],
    },
    received_date: {
        alignSelf: 'flex-start',
    },
    sended_date: {
        alignSelf: 'flex-end',
    }

});
export default styles;