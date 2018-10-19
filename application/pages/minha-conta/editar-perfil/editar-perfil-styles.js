import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

    headerEditarBar: {
        width: '100%',
        height: 24,
        display: 'flex',
        backgroundColor: 'rgba( 124, 24, 246, 0.8 )',
        position: 'relative',
        borderColor: '#a2a2a2',
        borderBottomWidth: 1,
    },

    body_edit_content: {
        borderColor: '#a2a2a2',
        borderBottomWidth: 1,
        backgroundColor:'#fff',
        marginTop: 15
    },

    body_edit: {
        // backgroundColor: 'red',
        height:60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },

    body_control_icon:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    body_edit_down: {
        width: 15,
        height: 15,
        aspectRatio: 1,
        marginRight: 20
    },
    body_edit_up:{
        width: 15,
        height: 15,
        aspectRatio: 1,
        marginRight: 20,
        transform: [{ rotate: '180deg'}]
    },
    body_edit_icon: {
        width: 22,
        height: 22,
        aspectRatio: 1,
        marginLeft: 15
    },
    body_edit_text: {
        color: '#000',
        fontSize: 15,
        marginLeft:18
    },
    footerEditar: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: 75,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingBottom: 15,
        flex:1,
        alignItems:'center'
    },

    containerBtnSalvar: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginTop: 5,
    },

    textBtnSalvar: {
        color: '#fff',
        fontSize: 15,
    },




});

export default style;