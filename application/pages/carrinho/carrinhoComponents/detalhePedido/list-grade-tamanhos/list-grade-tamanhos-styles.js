import React from 'react';
import { StyleSheet } from 'react-native';

const ListGradeTamanhosStyles = StyleSheet.create({

    containerInfosTamanhos: {
        flex: 1,
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    tamanhosDisponiveis: {
        width: '45%',
    },

    containerTitleTamanhosDisponiveis: {
        width: '100%',
        flexDirection: 'row',
    },

    viewLabelTitle: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    labelTitle: {
        fontSize: 10,
    },

    containerTamanhosDisponiveis: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 5,
    },

    viewNomeTamanho: {
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
    },

    viewQtdTamanho: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerInfosQtd: {
        width: '45%',
    },

    infosQtd: {
        width: '100%',
        flexDirection: 'row',
    },

    titleQtd: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textBloqueado: {
        opacity: 0.2,
    },

    containerBtnMaisMenosQtd: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 5,
    },

    menosQtdMais: {
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textMenosMais: {
        fontWeight: 'bold',
        fontSize: 25,
    },

    infosTamanhos: {
        borderColor: 'red',
        borderWidth: 1,
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },

    tamanhosQtd: {
        flex: 1,
        width: '100%',
    },

    itemTamanho: {
        flex: 1,
        height: '100%',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2,
        maxWidth: '25%',
    },

    itemQuantidade: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2,
        maxWidth: '25%',
    },

    containerInput:{
        width: 60,
        height: 30,
        borderColor:'#e6e6e6',
        borderWidth:1,
    },

    errorInput:{
        borderColor:'red',
        borderWidth:1,
    },

    errorTextInput: {
      color: 'red',
    },



});

export default ListGradeTamanhosStyles;