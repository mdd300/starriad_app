import { StyleSheet } from 'react-native';

const stylesListItemDetalhesCarrinho = StyleSheet.create({

    containerListItem: {
        flex: 1,
        backgroundColor: '#fff',
    },

    containerDetalhesPedido: {
        width: '100%',
        padding: 20,
    },

    containerTitleDetalhes: {
        width: '100%',
        flex: 1,
        justifyContent: 'center'
    },

    textTitleDetalhes: {
        color: '#a2a2a2',
        fontSize: 20,
    },

    containerTotaisPedido: {
        width: '100%',
        flex: 4,
        marginTop: 10,
    },

    itensPedidos: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },

    labelPedidos: {
        width: 125,
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right'
    },

    textPedidos: {
        color: '#a2a2a2',
        fontSize: 15,
        marginLeft: 20,
    },

    containerListItens: {
        width: '100%',
        flex: 1,
        borderTopColor: '#bbb',
        borderTopWidth: 1,
    },

    lineListItens: {
        width: '100%',
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
    },

    containerImgMarca: {
        width: 47.50,
        height: 47.50,
        borderRadius: 2,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: '#f2f2f2',
    },

    imgMarca: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
    },

    containerNomePreco: {
        flex: 5,
        marginLeft: 10,
        flexDirection: 'column'  ,
    },

    nameMarca: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    precoTotal: {
        fontSize: 12,
    },

    btnVerPedido: {
        marginLeft: 10,
        marginRight: 20,
        flex: 3,
        height: '60%',
        maxWidth: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },

    textVerPedido: {
        color: '#fff',
        fontSize: 10,
    },

});

export default stylesListItemDetalhesCarrinho;