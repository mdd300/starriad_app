import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({

    containerProdutos: {
        width: '100%',
        // minHeight: 50,
        flex: 1,
    },

    containerInfo: {
        width: '100%',
        minHeight: 50,
        padding: 15,
    },

    headerInfo: {
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    desc: {
        marginTop: 10,
    },
    imageContainer:
        {
            width: 26,
            height: 26,
        },
    iconsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconsArea: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '40%',
    },
    finalizarContainer: {
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f2f2f2',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },

    leftContainer: {
        flexDirection: 'row'
    },

    textTotal: {
        fontSize: 17,
    },
    btnCarrinhno: {
        backgroundColor: '#67c66a',
        width: 140,
        height: 35,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textBtn: {
        color: '#fff',
        fontSize: 10,
        fontWeight:'bold'
    },

    imageBtn: {
        width: 16,
        height: 16,
    },

});