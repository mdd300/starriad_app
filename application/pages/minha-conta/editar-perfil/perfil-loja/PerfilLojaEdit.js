import React from "react";
import {View} from "react-native";
import style from "./perfil-loja-style"
import { Hoshi } from 'react-native-textinput-effects';
import { withNavigation } from 'react-navigation';


class PerfilLojaEdit extends React.Component {


    /** Função construtora do feed */
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){

        return(
            <View >
                <Hoshi style={style.contentPerfilLoja}
                    label={'Nome da sua loja'}
                    borderColor={'transparent'}
                />
                <Hoshi style={style.contentBio}
                       multiline={true}
                       label={'Biografia'}
                       inputStyle={ {minHeight: 61, paddingTop: 17}}
                    borderColor={'transparent'}
                />
            </View>
        );

    }

}
export default withNavigation(PerfilLojaEdit);
