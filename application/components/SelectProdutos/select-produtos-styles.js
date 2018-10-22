import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    modal_select_products_content: {
        flex: 1,
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    modal_select_products_header: {
        width: '100%',
        height: 50,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        paddingHorizontal: 10
    },

    select_products_header_back_content: {
        width: 100,
        position: 'relative',
        display: 'flex',
    },

    select_products_header_back_icon: {
        width: 50,
        height: 50,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    select_products_header_back_touchable: {
        width: 50,
        height: 50,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    },
    select_products_header_back_ico: {
        width: 17,
        height: 17,
        aspectRatio: 1,
        marginLeft: 5
    },


    select_products_header_label: {
        position: 'relative',
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    select_products_header_label_txt: {
        fontSize: 13,
        color: '#fff'
    },

    select_products_header_confirm_content: {
        width: 100,
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    select_products_header_confirm_label: {
        fontSize: 13,
        color: '#fff',
        fontWeight: 'bold',
    },

    modal_select_products_scrollview: {
        flex: 1,
        position: 'relative',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    modal_select_products_scrollview_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 20,
    },

    product_thumb_content_touchable: {
        width: '50%',
        position: 'relative',
        display: 'flex'
    },
    product_thumb_content: {
        width: '100%',
        position: 'relative',
        display: 'flex'
    },

    product_thumb_content_inn: {
        width: '100%',
        position: 'relative',
        paddingHorizontal: 5,
    },
    product_thumb_content_viewport: {
        backgroundColor: '#fff',
        marginBottom: 10,
    },

    product_thumb_content_cover: {
        width: '100%',
        position: 'relative',
    },
    product_thumb_content_cover_content: {
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#eee',
        borderRadius: 3,
    },
    product_thumb_content_cover_image: {
        height: '100%',
        aspectRatio: 1,
        position: 'relative'
    },

    product_thumb_select_badge: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 7,
        top: 7,
        backgroundColor: '#ededed',
        borderWidth: 1,
        borderColor: '#aaaaaa',
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },


    product_thumb_selected_badge: {
        width: 24,
        height: 24,
        position: 'relative',
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2ecc40',
        borderWidth: 2,
        borderColor: '#269332'
    },

    product_thumb_select_badge_ico: {
        width: 11,
        height: 11,
        position: 'relative',
        tintColor: '#1d6329',

    },

    product_thumb_content_product_name: {
        width: '100%',
        position: 'relative',
        paddingTop: 8,
    },
    product_thumb_product_name_label: {
        width: '100%',
        position: 'relative',
        fontWeight: 'bold'
    },

    product_thumb_content_product_price: {
        width: '100%',
        position: 'relative',
    },
    product_thumb_content_product_price_label: {
        fontWeight: 'bold',
        fontSize: 12
    },

    product_thumb_content_variables: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
    },
    product_thumb_variable: {
        width: 25,
        height: 25,
        marginRight: 5,
        borderWidth: 2,
        borderColor: '#000',
        flexDirection: 'row',
    },

    product_thumb_variable_inn: {
        flex: 1,
        position: 'relative',
        display: 'flex',
    },


});

export default styles;