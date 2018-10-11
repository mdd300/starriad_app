import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({

    containerDetalhes: {
        width: '100%',
        minHeight: 50,
        flex: 1,
        backgroundColor: '#fff',
    },

    container: {
        margin: 15,
        minHeight: 50,
    },

    line: {
        marginBottom: 5,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#e1e1e1'
    },

    containerTitle: {
        marginBottom: 10,
    },
    title: {
        color: '#a2a2a2',
        fontSize: 20,
    },
    containerContent: {
        flexDirection: 'row',
    },
    contentTitle: {
        fontWeight: 'bold',
        width: 130,
        fontSize: 15,
    },
    contentResult: {
        flexDirection: 'row',
        color: '#a2a2a2',
        fontSize: 15,
    },

    containerEndereco: {
        width: "100%",
        marginTop: 5,
        marginBottom: 5
    },
    areaEndereco: {
        width: 120,
    },

    textPadrao: {
        fontSize: 15,
        marginBottom: 2
    },

    containerButton: {
        width: "100%",
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnAlterar: {
        borderWidth: 2,
        borderColor: '#000',
        marginTop: 10,
    },

    btnText: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 10,
        fontWeight: 'bold'

    },
    containerForma: {
        flexDirection: 'row',
        marginBottom: 8,
        marginTop: 8,
        alignItems: 'center',
    },

    contentBox: {
        width:35 ,
        height:30,
        justifyContent: 'center',
        alignItems:'flex-start',

    },

    textEntrega: {
        fontSize: 15,
        fontWeight: 'bold'
    },

    checkBox: {
        width: 20,
        height: 20,
        borderRadius:100,
        borderWidth:1,
        borderColor:'#d9d9d9',
        backgroundColor:'#eeeeee',
        justifyContent: 'center',
        alignItems:'center',
    },

    actived: {
        backgroundColor:'#6d6a6a',
        borderRadius:100,
        width: 10,
        height: 10,

    },

    btnFinalizar: {
        borderWidth: 2,
        backgroundColor: '#000',
    },

    btnTextFinalizar: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 100,
        paddingLeft: 100,
        fontSize: 12,
        color:'#fff'

    },
    textFinal: {
        marginTop:5,
        fontSize: 12,
        color: '#a2a2a2',

    },


});