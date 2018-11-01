import { StyleSheet } from 'react-native';

const stylesAlertConexoes = StyleSheet.create({

    container_page: {
        width: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingBottom: 10,
    },

    content_page: {
        width: '90%',
        height: 350,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container_alert: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    container_exclamacao: {
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },

    border_exclamacao: {
        width: 83,
        height: 83,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#facea8',
        borderWidth: 5,
        borderRadius: 50,
    },

    exclamacao: {
        fontSize: 50,
        color: '#f8bb86',
        fontWeight: 'bold',
    },

    container_title: {
        width: '100%',
        height: 83.33,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#595959',
    },

    sub_title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#545454',
    },

    container_options: {
        width: '100%',
        height: 83.33,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    btn_alert: {
        width: 120,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    btn_text: {
        fontSize: 18,
        color: '#fff',
    },

    container_options_checkbox: {
        width: '100%',
        height: 83.33,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingLeft: 20,
    },

    options_checkbox: {
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
        minHeight: 30,
        flexDirection: 'row',
    },

    text_checkbox: {
        fontSize: 20,
        textAlign: 'center',
        color: '#545454',
        marginLeft: 10,
    },

    container_picker: {
        width: '80%',
        borderColor: '#595959',
        borderWidth: 1,
    },

    picker: {
        width: '100%',
        height: 50,
    },

    errorLabel: {
        fontSize: 12,
        marginLeft: 2,
        color: '#ffa800',
    },

});

export default stylesAlertConexoes;