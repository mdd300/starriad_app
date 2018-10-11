import { StyleSheet } from 'react-native';

const stylesHeaderPassosCarrinho = StyleSheet.create({

    containerHeaderPassosCarrinho: {
        width: '100%',
        height: 70,
        flexDirection: 'column'
    },

    contentHeaderPassosCarrinho: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 60,
        paddingTop: 20
    },

    containerPassoUm: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c2c2c2',
        borderWidth: 1,
        borderRadius: 50,
    },

    actived: {
        backgroundColor: '#c2c2c2'
    },

    containerLine: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },

    line: {
        width: '100%',
        height: 1,
        borderColor: '#c2c2c2',
        borderBottomWidth: 1,
    },

    containerPassoDois: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c2c2c2',
        borderWidth: 1,
        borderRadius: 50
    },

    contentMessage: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 20,
        paddingTop: 5
    },

    containerMessageCarrinho: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textMessageCarrinho: {
        fontSize: 12,
        color: '#a2a2a2'
    },

    containerMessagePedido: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textMessagePedido: {
        fontSize: 12,
        color: '#a2a2a2'
    },

});

export default stylesHeaderPassosCarrinho;