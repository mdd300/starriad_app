import React from 'react';
import { StyleSheet } from 'react-native';

const CapaStyles = StyleSheet.create({

    containerCapa: {
        width: '100%',
        height: 500,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerFotoCapa: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    imgCapa: {
        width: '100%',
        height: '100%'
    },

    overlayFotoCapa: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'absolute'
    },

    containerInfo: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        flexDirection: 'row'
    },

    infoPerfil: {
        width: '85%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerImgMarca: {
        width: 100,
        marginLeft: '15%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imgMarca: {
        width: '100%',
        height: '100%'
    },

    containerLabel: {
        width: '100%',
        marginLeft: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    labelBoasVindas: {
        color: '#fff',
        fontSize: 18,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },

    containerNomeMarca: {
        width: '100%',
        marginLeft: '15%',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    nomeMarca: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 5
    },

    touchBtnConexoes: {
        width: 200,
        padding: 10,
        backgroundColor: '#000',
        borderColor: '#fff',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textBtnConexoes: {
        color: '#fff',
        fontSize: 15
    },

    menuLateralIcons: {
        width: '15%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerIcons: {
        width: 25,
        height: 25,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    icons: {
        width: '100%',
        height: '100%',
        tintColor: '#fff'
    },

});

export default CapaStyles;