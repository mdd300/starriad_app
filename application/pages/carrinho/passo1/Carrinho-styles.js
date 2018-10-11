import { StyleSheet } from 'react-native';

const stylesCarrinho = StyleSheet.create({

    loadingPager: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Scroll da page explorer
    containerScroll: {
        flex: 1,
    },

    // Contem o conteudo da pagina explorer
    containerCarrinho: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerNotificationBar:{
        width: '100%',
        height: 24,
        display: 'flex',
        backgroundColor: 'rgba( 124, 24, 246, 0.8 )',
        position: 'relative',
    },

    footerCarrinho: {
        width: '100%',
        height: 95,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#fff',
    },

    containerBtnAvancar: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginTop: 5,
    },

    textBtnAvancar: {
        color: '#fff',
        fontSize: 15,
    },

    containerMessageFooter: {
        width: '80%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },

    textMessageFooter: {
        fontSize: 12,
        color: '#a2a2a2',
    },


});

export default stylesCarrinho;