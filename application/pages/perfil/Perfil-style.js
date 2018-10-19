import { StyleSheet } from 'react-native';

const stylesPerfil = StyleSheet.create({

    containerPerfil: {
        flex: 1,
        backgroundColor: '#fff'
    },

    containerPage: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingBottom: 10
    },

    // Area das Rotas
    containerRotas: {
        width: '90%',
        flexDirection: 'row',
    },

    textRota: {
        color: '#b5b6bd',
        marginRight: 5
    },

    // Area do Input
    containerInput: {
        width: '90%',
        height: 50,
        marginTop: 10
    },

    inputSearch: {
        width: '100%',
        height: '100%',
        borderColor:'#e6e6e6',
        borderWidth:1,
        padding: 5,
        fontSize: 18,
        color: '#000'
    },

    containerFiltro: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        height: 40,
        backgroundColor: '#000'
    },

    textFiltro: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold'
    },

});

export default stylesPerfil;