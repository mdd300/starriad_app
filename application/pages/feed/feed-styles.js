import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    feed_view: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
    },

    post_content: {
        width: '100%',
        maxWidth: 390,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 10,
        alignSelf: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#cfcfcf",
        borderRadius: 2
    },

    /* ESTILOS REFERENTES AO COMPONENT DO HEADER DOS POSTS */
    header_post_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
    },
    header_post: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
    },
    header_image_logo: {
        minWidth: 50,
        maxWidth: 50,
        minHeight: 50,
        maxHeight: 50,
        position: 'relative',
        display: 'flex',
        overflow: 'hidden',
        borderRadius: 2,
    },
    header_image_logo_img: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        aspectRatio: 1
    },
    header_label_name: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    header_label_text: {
        width: '100%',
        maxWidth: 270,
        display: 'flex',
        fontWeight: 'bold'

    },
    header_actions_content: {
        width: 30,
        flexGrow: 1,
        maxWidth: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_actions_touchable: {
        position: 'relative',
        display: 'flex'
    },
    header_actions_image: {
        height: 20,
        aspectRatio: 1,

    },
    /* FIM DOS ESTILOS REFERENTES AO COMPONENT DO HEADER DOS POSTS */

    /* ESTILOS REFERENTES AO CONTEUDO DO POST SIMPLES */
    simple_post_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
    },
    simple_post_image_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        maxHeight: 400,
        overflow: 'hidden'
    },
    simple_post_image: {
        maxWidth: '100%',
        maxHeight: 400,
        aspectRatio: 1
    },
    simple_post_description: {
        width: '100%',
        position: 'relative',
        paddingTop: 10,
        paddingHorizontal: 5
    },
    simples_post_description_label: {
        width: '100%',
        position: 'relative',
        fontSize: 17,
        color: '#5d5d5d'
    },
    /* FIM DOS ESTILOS REFERENTES AO CONTEUDO DO POST SIMPLES */
    /* ESTILOS REFERENTES AO FOOTER DOS POSTS*/
    post_footer_content: {
        width: '100%',
        position: 'relative',
        marginTop: 10,
    },
    post_footer_actions: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
    },
    post_footer_action: {
        width: 30,
        height: 30,
        position: 'relative',
        marginRight: 10,
    },
    post_footer_action_touchable: {
        width: 30,
        height: 30,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    post_footer_action_icon: {
        width: 20,
        height: 20,
    },
    post_footer_informations:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        marginTop: 10,
    },
    post_footer_information_likes: {
        width: '100%',
        position: 'relative',
        color: '#0e0000',
        fontSize: 15,
        fontWeight: 'bold',
    },
    post_footer_information_time: {
        width: '100%',
        position: 'relative',
        color: '#a49c91',
        fontSize: 12,
        paddingTop: 5,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#e7e7e7',
    },
    post_footer_comments: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    post_footer_comments_count: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        marginTop: 15
    },
    post_footer_comments_count_label: {
        width: '100%',
        position: 'relative',
        color: "#1c0d08",
        fontSize: 15,
        fontWeight: "500"
    },
    post_footer_comments_content: {
        width: '100%',
        position: 'relative',
        marginTop: 15
    },
    post_comment_content: {
        width: '100%',
        position: 'relative',
        marginBottom: 10,
    },
    post_comment: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
    },
    post_comment_labels: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        minHeight: 35,
        justifyContent: 'center'
    },
    post_comment_father_label: {
        position: 'relative',
        maxWidth: 310,
        display: 'flex',
    },
    comment_markup: {
        position: 'relative',
        color: '#a89c9c',
    },
    comment_description: {
        position: 'relative',
    },
    post_comment_actions: {
        maxWidth: 35,
        minWidth: 35,
        flexGrow: 1,
        position: 'relative',
        display: 'flex',
    },
    post_comment_touchable_opacity: {
        width: 35,
        height: 35,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    post_comment_actions_icon: {
        aspectRatio: 1,
        width: 25,
        height: 19,
    },
    post_footer_new_comment_content:{
        width: '100%',
        position: 'relative',
        display: 'flex',
        marginTop: 10
    },
    post_footer_new_comment:{
        width: '100%',
        position: 'relative',
        backgroundColor: '#f0f0f0',
        height: 40,
        padding: 10,
        borderBottomWidth: 0,
    },
    /* FIM DOS ESTILOS REFERENTES AO FOOTER DOS POSTS*/

    /* ESTILOS REFERENTES AO CONTENT DE CRIAÇÃO DE POST */
    create_post_component: {
        width: '100%',
        position: 'relative',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8'
    },
    create_post_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },

    create_post_header: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        paddingBottom: 10,
    },
    create_post_title: {
        width: '100%',
        flex: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '400',
        color: '#020302',
        textAlign: 'center',
        fontSize: 17,
    },

    create_post_body: {
        width: '100%',
        position: 'relative',
        marginBottom: 10,
    },
    create_post_input: {
        padding: 10,
        paddingVertical: 20,
        display: 'flex',
        height: 72,
        backgroundColor: '#f0f0f0',
        textAlignVertical: 'top'
    },

    create_post_footer: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row'
    },
    create_post_footer_actions: {
        position: 'relative',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row'
    },
    create_post_footer_action: {
        width: 45,
        height: 45,
        position: 'relative',
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    create_post_footer_action_ico: {
        width: 20,
        height: 20,
        aspectRatio: 1,
    },
    create_post_footer_finish: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    create_post_footer_finish_button: {
        width: 150,
        height: 40,
        position: 'relative',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    create_post_footer_finish_button_text: {
        color: '#fff',
        fontSize: 13,
    },
    /* FIM DOS ESTILOS REFERENTES AO CONTENT DE CRIAÇÃO DE POST */
});

export default styles;