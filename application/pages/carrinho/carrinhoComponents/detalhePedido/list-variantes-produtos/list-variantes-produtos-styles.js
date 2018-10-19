import React from 'react';
import { StyleSheet } from 'react-native';

const ListVariantesProdutosStyles = StyleSheet.create({

    containerCor: {
        width: '100%',
        borderTopColor: '#f2f2f2',
        borderTopWidth: 1,
        overflow:'hidden',
    },

    containerDetalheCor: {
        width: '100%',
    },

    detalheCor: {
        flex: 1,
        height: 95,
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },

    containerImgCor: {
        width: 70,
        height: '100%',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#f6f6f6',
    },

    imgCor: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
    },

    infosCor: {
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginRight: 5,
    },

    descricaoCor: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    containerQtd: {
        flexDirection: 'row',
    },

    qtd: {
        width: 50,
    },

    labelQtd: {
        fontSize: 16,
    },

    textQtd: {
        fontSize: 14,
    },

    labelSubTotal: {
        fontSize: 16,
    },

    textSubTotal: {
        fontSize: 14,
    },

    containerIconLixeira: {
        width: 40,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    },

    touchIconLixeira: {
        width: '100%',
        height: 20,
    },

    containerIconSeta: {
        width: 25,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    },

    touchIconSeta: {
        width: '100%',
        height: 25,
    },

    icon: {
        width: '100%',
        height: '100%',
    },

    msgProdutoVazio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    textProdutoVazio: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#a2a2a2',
    },

});

export default ListVariantesProdutosStyles;