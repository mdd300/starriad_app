import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    contact_content: {
        width: '100%',
        position: 'relative',
        display: 'flex',
    },
    contact: {
        width: '100%',
        position: 'relative',
        display: 'flex',
    },
    contact_touchable: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 3
    },
    contact_profile_image_content: {
        minWidth: 60,
        minHeight: 60,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contact_profile_image: {
        minWidth: 50,
        minHeight: 50,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#eee',
        borderRadius: 3,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contact_profile_image_img: {
        width: 50,
        position: 'relative',
        aspectRatio: 1,
    },

    contact_profile_details_content: {
        display: 'flex',
        flex: 1,
        position: 'relative',
        paddingLeft: 10,
    },
    contact_profile_datails: {
        width: '100%',
        display: 'flex',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'column',
    },
    contact_profile_detail: {
        position: 'relative',
        display: 'flex',
        flex: 1,
    },
    contact_profile_detail_profilename: {
        fontWeight: 'bold',
        paddingBottom: 3,
        fontSize: 15,
        color: '#656565',
    },
    contact_profile_detail_description: {
        color: '#999',
        fontSize: 12,
    },

});

export default styles;