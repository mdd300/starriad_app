import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    conversation_content: {
        width: '100%',
        position: 'relative',
        marginTop: 2,
        display: 'flex'
    },

    conversation: {
        width: '100%',
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 15,
        marginVertical: 5
    },
    conversation_touchable: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row'
    },

    conversation_cover_content: {
        minWidth: 60,
        minHeight: 60,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    conversation_cover_image: {
        minWidth: 50,
        minHeight: 50,
        position: 'relative',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#eee',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cover_new_message: {
        borderColor: '#7f1cef'
    },


    conversation_details_content: {
        flex: 1,
        position: 'relative',
        paddingHorizontal: 5,
        paddingLeft: 15,
    },
    conversation_details: {
        width: '100%',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
    },
    conversation_detail_chat: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 10
    },
    conversation_detail_conversation_name: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        paddingBottom: 3,
    },
    conversation_detail_conversation_last_message: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    conversation_detail_conversation_name_label: {
        position: 'relative',
        width: '100%',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#656565'
    },
    conversation_name_new_message: {
        color: '#7f1cef'
    },

    conversation_detail_conversation_last_message_label: {
        position: 'relative',
        width: '100%',
        fontSize: 13,
        color: '#999',
    },
    last_message_new_message: {
        fontWeight: 'bold',
    },


    conversation_detail_infos: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    },
    conversation_detail_info_data: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    conversation_detail_info_badge: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },

    conversation_detail_badge: {
        width: 25,
        height: 25,
        position: 'relative',
        borderRadius: 25,
        display: 'flex',
        backgroundColor: '#7f1cef',
        alignItems: 'center',
        justifyContent: 'center'
    },
    conversation_detail_badge_label: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold'
    },


    conversation_detail_info_data_label: {
        fontSize: 13,
        color: '#858585',
    },
    date_new_message: { color: '#7f1cef', fontWeight: 'bold' },

});

export default styles;