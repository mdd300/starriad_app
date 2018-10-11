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
        paddingTop: 24,
    },
    image_picker_viewer_image_content: {
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
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
    image_picker_image_item: {
        width: '25%',
        paddingTop: '25%',
        position: 'relative',
        display: 'flex',
        borderWidth: 1,
        borderColor: '#eee',
        overflow: 'hidden',
    },
    image_picker_image_item_view: {
        width: '100%',
        height: '134%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
    },
    image_picker_image_item_touchable: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
    },
    image_picker_image_item_img: {
        width: '100%',
        aspectRatio: 1,
    },


});

export default styles;