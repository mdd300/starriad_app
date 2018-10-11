import React from 'react';
import { StyleSheet } from 'react-native';

const DetalhesPedidoStyles = StyleSheet.create({

    headerNotificationBar: {
        width: '100%',
        height: 24,
        display: 'flex',
        backgroundColor: 'rgba( 124, 24, 246, 0.8 )',
        position: 'relative'
    },

    containerDetalhePedido: {
        flex: 1,
    },

    containerInfosProduto: {
        backgroundColor: '#f9f9f9',
        width: '100%',
        height: 110,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },

    contentDetalhePedido: {
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        borderTopWidth: 1,
        borderTopColor: '#f2f2f2',
        marginTop: 10,
    },

    containerImgProduto: {
        width: 70,
        height: '100%',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#f6f6f6',
    },

    imgProduto: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
    },

    descricaoProduto: {
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
        marginLeft: 20,
    },

    produtoNome: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    produtoPrecoTotal: {
        fontSize: 14,
    },

    msgProdutoVazio: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },

    textProdutoVazio: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#a2a2a2',
    },

});

export default DetalhesPedidoStyles;