import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    viewport_modal_image_picker: {
        flex: 1,
        position: 'relative'
    },

    viewport_loading_images: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    viewport_loading_images_label: {
        width: '100%',
        textAlign: 'center',
        paddingTop: 15,
    },
    viewport_modal_image_picker_component: {
        position: 'relative',
        flex: 1,
    },

    view_image_picker_header: {
        width: '100%',
        position: 'relative',
        backgroundColor: '#fff',
        height: 40,
        display: 'flex',
        flexDirection: 'row'
    },
    view_image_picker_header_back: {
        width: 40,
        height: 40,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image_picker_header_back_ico: {
        width: 20,
        height: 20,
        aspectRatio: 1,
    },
    view_image_picker_header_confirm: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    image_picker_header_confirm_label: {
        position: 'relative',
        fontWeight: 'bold',
        paddingHorizontal: 15
    },

    image_picker_viewer_image_content: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        borderBottomWidth: 4,
        borderColor: '#fff',
    },
    image_picker_viewer_image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#eee',
        overflow: 'hidden'
    },
    image_picker_viewer_image_img: {
        width: '100%',
        position: 'relative',
        aspectRatio: 1,

    },

    image_picker_viewer_images_list_content: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
    },
    image_picker_images_list_scrollview: {
        flex: 1,
        position: 'relative',
        paddingTop: 3,
    },
    image_picker_images_list_view: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image_picker_image_item_view: {
        borderWidth: 1,
        borderColor: '#eee',
        overflow: 'hidden',
    },

    selected_thumb_image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',
    },
    selected_thumb_image_badge: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 5,
        top: 5,
        borderRadius: 20,
        backgroundColor: '#2ecc40',
        borderWidth: 2,
        borderColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },


});

export default styles;