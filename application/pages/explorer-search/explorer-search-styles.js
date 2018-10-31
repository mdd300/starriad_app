import { StyleSheet } from 'react-native';

/* Criação dos estilos referentes a pagina de busca do explorar */
const styles = StyleSheet.create({

    /* View content styles */
    scrollview_content: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
        display: 'flex',
        backgroundColor: '#fff',
    },
    explorer_search_content:{
        width: '100%',
        maxWidth: 391,
        paddingBottom: 30,
        position: 'relative',
        alignSelf: 'center'
    },
    /* End fo view content styles */

    /* Header Styles */
    explorer_search_searcher: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        marginTop: 10,
        marginBottom: 10,
    },
    explorer_search_searcher_wrapper:{
        width: '100%',
        maxWidth: 330,
        position: 'relative',
        alignSelf: 'center',
        height: 45,
    },
    explorer_search_searcher_elements: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        flexGrow: 1,
    },
    explorer_search_input_content: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
    },
    explorer_search_input:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d8d8d8',
        paddingHorizontal: 20

    },
    explorer_search_action_content: {
        display: 'flex',
        flexGrow: 1,
        minWidth: 55,
        maxWidth: 55,
        position: 'relative',
    },
    explorer_search_action_touchable: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    explorer_search_action_icon: {
        width: 22,
        height: 22,
        aspectRatio: 1,
        tintColor: '#fff'
    },
    /* End of header ( searcher ) styles */

    /* Filter styles */
    explorer_search_filter_content:{
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    },
    explorer_search_filter: {
        width: '100%',
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        flexDirection: 'row',
    },
    explorer_search_filter_item: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    explorer_search_filter_text: {
        fontWeight: 'bold',
        color: '#858585',
        paddingVertical: 12
    },
    explorer_search_filter_text_actived: {
        color: '#000'
    },
    explorer_search_actived_filter_bar: {
        backgroundColor: '#000',
        left: 0,
        bottom: 0,
        height: 3,
        width: '100%',
        position: 'absolute',
    },
    /* end of Filter styles */
    /* styles of sections results */
    explorer_search_results_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 15,
    },
    content_margin: {
        marginTop: 25,
    },
    explorer_search_result_content_title: {
        width: '100%',
        position: 'relative',
        display: 'flex',
    },
    explorer_search_result_content_title_label: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        color: '#717171'
    },
    label_margin: {
        marginBottom: 15,
    },
    explorer_search_results_content_list: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    },

    explorer_search_result_header_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row'
    },
    explorer_search_result_header: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 15,
    },
    borded: {
        borderBottomWidth: 1,
        borderColor: '#3e3e3e',
    },
    explorer_search_result_header_image: {
        width: 50,
        height: 50,
        position: 'relative',
        backgroundColor: '#ccc',
        overflow: 'hidden',
    },
    explorer_search_result_header_img: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        aspectRatio: 1,

    },
    explorer_search_result_header_label: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        paddingLeft: 5,
    },
    explorer_search_result_header_label_text: {
        width: '100%',
        position: 'relative',
        maxWidth: 150,
        fontSize: 14,
    },
    explorer_search_result_header_actions: {
        width: 'auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    explorer_search_result_header_action:{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 5,
        height: 35,
    },
    explorer_search_result_header_action_label: {
        fontSize: 9,
    },

    action_visit: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#252525',
    },
    label_visit: {
        color: '#030303',
    },
    action_connect: {
        backgroundColor: '#000',
    },
    label_connect: {
        color: '#fff',
    },
    /* end of styles of sections results */

    /* Styles for product results */
    explorer_search_results_product: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
    },
    explorer_search_results_products_header: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        marginBottom: 10,
    },
    explorer_search_results_products_list_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        marginTop: -15,
        marginBottom: 10
    },
    explorer_search_results_products_list_wrapper: {
        width: '100%',
        position: 'relative',
        height: 195,
        minHeight: 195,
    },
    explorer_search_results_products_viewport: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
    },
    explorer_search_result_product_thumb_content: {
        width: 150,
        height: '100%',
        position: 'relative',
        borderWidth: 1,
        borderColor: '#e8e8e8',
        overflow: 'hidden',
        borderRadius: 3,
    },
    margin_thumb: { marginRight: 10 },
    explorer_search_result_product_thumb_image: {
        height: '100%',
        position: 'relative'
    },
    /* End of styles for product results */

});

export default styles;