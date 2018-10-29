import { StyleSheet } from 'react-native';

const stylesNotificacoes = StyleSheet.create({

    containerNotificacoes: {
      flex: 1,
    },

    loadingPager: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    /* ========================= */
    /* CSS da lista de notificações */

    line: {
        width: '100%',
        height: 70,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
    },

    statusNova: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#79ff75',
    },

    statusLida: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#c2c2c2',
    },

    corFundoNotificacaoLida: {
        backgroundColor: '#fff',
    },

    corFundoNotificacaoNova: {
        backgroundColor: '#ebebeb',
    },

    containerImagem: {
        borderColor: '#f2f2f2',
        borderWidth: 1,
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 2,
    },

    imgPerfil: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
    },

    lineText: {
        flex: 5,
        marginLeft: 10,
        fontSize: 15,
        flexDirection: 'row',
    },

    // Botão de conectar
    btnConexoes: {
        marginLeft: 5,
        flex: 3,
        height: '60%',
        maxWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },

    // Texto do botão de conectar
    labelBtnConexoes: {
        color: '#fff',
        fontSize: 12,
    },

    labelAnteriores: {
        width: '100%',
        height: 50,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    textAnteriores: {
        fontSize: 18,
        color: '#acacac',
    },

});

export default stylesNotificacoes;