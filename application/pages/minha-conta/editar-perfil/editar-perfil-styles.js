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

    body_edit_content_init: {
        borderColor: '#a2a2a2',
        borderBottomWidth: 1,
        backgroundColor:'#fff',
        marginTop: 15
    },

    body_edit_content: {
        borderColor: '#a2a2a2',
        borderBottomWidth: 1,
        backgroundColor:'#fff',
    },
    body_edit_content_end: {
        borderColor: '#a2a2a2',
        borderBottomWidth: 1,
        backgroundColor:'#fff',
        marginBottom: 25
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
    footerEnd: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: 120,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingBottom: 15,
        flex:1,
        alignItems:'center'
    },

    containerBtnSalvar: {
        flex: 1,
        backgroundColor: '#7f1cef',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginTop: 5,
    },
    containerBtnCancelar: {
        flex: 1,
        backgroundColor: '#ef0d15',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginTop: 5,
    },

    textBtnSalvar: {
        color: '#fff',
        fontSize: 15,
    },
    editStyle:{
        position: "absolute",
        flex: 1,
        alignSelf: "center",
        zIndex: 1111,
        width: 200,
        height: 50,

    },
    imageLogoSelected: {
        width: 200,
        height: 200
    },
    contentImage: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20
    },
    btnEditar: {
        backgroundColor: "#7f1cef",
        alignSelf: "flex-end",
        borderRadius: 100,
        width: 30,
        height: 30,
        margin: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    imgView: {
        width: 15,
        height: 15,
        margin: 5,
    },

    containerAuto: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 15,
        flexDirection: 'row'
    },
    autocompleteContainer: {
        marginLeft: 15,
        marginRight: 5,
        width: "60%"
    },
    itemText: {
        fontSize: 20,
        margin: 10,
        color: "#a2a2a2"
    },
    descriptionContainer: {
        // `backgroundColor` needs to be set otherwise the
        // autocomplete input will disappear on text input.
        backgroundColor: '#F5FCFF',
        marginTop: 8
    },
    infoText: {
        textAlign: 'center'
    },
    btnListCat:{
        backgroundColor: "#7f1cef",
        borderRadius: 100,
        width:80,
        height: 30,
        marginBottom: 10,
        marginLeft: 10
    },
    contentInsideOptions:{
        width:"100%",
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15
    },
    imageLogoSelectedAlbum: {
        width: 100,
        height: 100
    },
});

export default style;