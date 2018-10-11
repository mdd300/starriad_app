import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    create_post_page: {
        width: '100%',
        flex: 1,
        position: 'relative'
    },

    create_post_page_header_tab: { width: '100%', height: 24, backgroundColor: '#7417fb' },
    create_post_page_header: {
        width: '100%',
        height: 50,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    create_post_header_action: {
        width: 120,
        position: 'relative',
        display: 'flex',
        paddingHorizontal: 5,
        justifyContent: 'center'
    },
    create_post_header_action_back: {
        width: 40,
        height: 40,
        position: 'relative',
    },
    create_post_header_action_touchable: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    create_post_header_action_ico: {
        width: 20,
        height: 20,
        position: 'relative',
        aspectRatio: 1,
    },
    create_post_header_action_label: {
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'right',
        position: 'relative',
        fontSize: 15,
    },

    create_post_header_label: {
        position: 'relative',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    create_post_header_lbl: {
        position: 'relative',
        fontSize: 15,
    },

    create_post_page_body_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    create_post_page_body: {
        width: '100%',
        flex: 1,
        flexGrow: 1,
        backgroundColor: '#fff'
    },

    create_post_page_image_content: {
        width: '100%',
        height: 230,
        position: 'relative',
        backgroundColor: '#eee',
        overflow: 'hidden'
    },
    create_post_page_image_viewport: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    create_post_page_image: {
        width: '100%',
        aspectRatio: 1,
    },
    create_post_image_remover: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 3,
        position: 'absolute',
        right: 10,
        top: 10,
    },
    create_post_image_remover_touchable: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    create_post_image_remover_ico: {
        width: 15,
        height: 15,
    },

    create_post_input_content: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        padding: 10,
    },
    create_post_input: {
        flex: 1,
        textAlignVertical: 'top',
    },

    feed_create_post_close_keyboard: {
        width: 35,
        height: 35,
        position: 'absolute',
        right: 15,
        bottom: 0,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    feed_create_post_close_keyboard_touchable: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    feed_create_post_close_keyboard_ico: {
        width: 20,
        height: 20,
        aspectRatio: 1,
    },

    create_post_page_footer: {
        width: '100%',
        backgroundColor: '#ff0',
        display: 'flex',
        flexDirection: 'column'
    },
    create_post_footer_action: {
        width: '100%',
        position: 'relative',
        height: 50,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#dddddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    create_post_footer_action_touchable: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        paddingHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    create_post_footer_action_icon: {
        width: 30,
        height: 30,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    create_post_footer_action_ico: {
        width: 20,
        height: 20,
        position: 'relative',
        aspectRatio: 1,
    },
    create_post_footer_action_label: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',

    },
    create_post_footer_action_label_text: {
        width: 'auto',
        position: 'relative',
        fontWeight: 'bold',
        color: '#484848'
    },

});

export default styles;