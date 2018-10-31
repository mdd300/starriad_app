import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    loader_content: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#fff'
    },
    loader_view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loader_icon: {
        width: 250,
        height: 250,
        position: 'relative'
    },
    loader_label_content: {
        width: '100%',
        display: 'flex',
    },
    loader_label: {
        width: '100%',
        textAlign: 'center'
    },

});

export default styles;