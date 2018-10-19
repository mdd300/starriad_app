import { StyleSheet } from 'react-native';

const stylesProduto = StyleSheet.create({

    containerProduto: {
        width: '100%',
        height: 400,
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderRadius: 5,
    },

    touchContainerImgProduto: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerImgProduto: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgProduto: {
        width: '100%',
        height: '100%',
        top: 0,
    },

    infosProdutos: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -115,
        backgroundColor: '#FFF'
    },

    controleInfosProduto: {
        flexDirection: 'row',
    },

    containerDescricaoCategoria: {
        width: '60%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    textDescricao: {
        color: '#000',
        width: 200,
        marginTop: 10,
        fontSize: 18,
    },

    textCategoria: {
        color: '#b5b6bd',
        marginTop: 5,
        fontSize: 15,
    },

    containerPreco: {
        width: '40%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20,
    },

    textPreco: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
    },

    containerGradesVariantes: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    containerGrade: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
        marginTop: 10,
    },

    labelTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },

    controleInfos: {
        width: '100%',
        flexDirection: 'row',
    },

    textGrade: {
        color: '#b5b6bd',
        fontSize: 15,
        marginRight: 5,
    },

    containerVariantes: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
        marginTop: 10,
        marginBottom: 10,
    },

    touchVariantes: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        borderRadius: 50,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#c2c2c2',
    },

    varianteCor: {
        width: '95%',
        height: '95%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#c2c2c2',
    },

    containerSliderProduto: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    containerIconFechar: {
        width: '100%',
        paddingRight: 20,
        position: 'absolute',
        top: 10,
        zIndex: 999999999,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },

    iconFechar: {
        fontSize: 50,
        color: '#d2d5dc',
    },

    scrollSlider: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },

    containerImgProdutoSlider: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgProdutoSlider: {
        width: '100%',
        height: '100%',
    },

    buttonLeftRight: {
        width: 50,
        height: 50,
        padding: 10,
        position: 'absolute',
        zIndex: 999999999,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },

    buttonLeft: {
        left: 5,
        alignItems: 'flex-start',
    },

    buttonRight: {
        right: 5,
        alignItems: 'flex-end',
    },

    buttonsSlider: {
        width: '100%',
        height: '100%',
    },

    iconSlider: {
        width: '100%',
        height: '100%',
    },

    containerOverlay: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        position: 'absolute',
    },

    buttonOverlay: {
        width: 200,
        padding: 10,
        borderWidth: 2,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButtonOverlay: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

});

export default stylesProduto;