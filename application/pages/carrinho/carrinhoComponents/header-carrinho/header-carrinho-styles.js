import { StyleSheet } from 'react-native';

const stylesHeaderCarrinho = StyleSheet.create({

    containerHeader: {
        width: '100%',
        height: 80,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },

    contentHeader: {
        width: '100%',
        flex: 2,
        flexDirection: 'row'
    },

    btnBack: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconBack: {
        width: 25,
        height: 25
    },

    titleHeader: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textTitleHeader: {
        fontSize: 20,
        color: '#000'
    },

    messageHeader: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textMessageHeader: {
        fontSize: 12,
        color: '#a2a2a2'
    },

    containerImgMarca: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgMarca: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#f2f2f2',
    },

});

export default stylesHeaderCarrinho;