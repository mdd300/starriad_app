import {StyleSheet} from 'react-native';

export const styleLogin = StyleSheet.create({

    headerNotificationBar: {
        width: '100%',
        height: 24,
        display: 'flex',
        backgroundColor: 'rgba( 124, 24, 246, 0.8 )',
        position: 'relative'
    },

        container: {
            flex: 1,
            position: 'absolute',
            left: 0,
            top: 0,
            display: 'flex',
            justifyContent: 'space-between'
        },
        header: {
            width: '100%',
            height: 200,
            backgroundColor: 'transparent',
        },

        footer: {
            width: '100%',
            height: 100,
            backgroundColor: 'transparent',

        },

        imgLogo: {
            width: 100,
            height: 36,
        },

        imgSeta: {
            width: 22,
            height: 22,
        },

        setaContainer: {right: 100, top: 2},


        headerContainer: {
            marginTop: 45,
            justifyContent: 'center',
            flexDirection: 'row',
            width: "100%",
            height: 100,

        },

        bodyContainer: {
            width: "100%",
            minHeight: 100,
            paddingLeft: 40,
            paddingRight: 40
        },
        body: {
            width: "100%",
            minHeight: 100,
        },
        inputContainer: {
            marginBottom: 5
        },
        inputCadastro: {
            backgroundColor: '#fff',
            height: 45,
            fontSize: 18,
            borderRadius: 1,
            paddingLeft: 10
        },
        btnEspaco: {
            marginTop: 15
        },

        errorLabel: {
            fontSize: 12,
            marginLeft: 12
        },


        text2: {
            fontWeight: 'bold'


        }
    })
;