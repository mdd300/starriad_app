import React from "react";
import { View, TouchableOpacity, Image, Text, Platform } from "react-native";
import styles from "../image-picker-styles";

export default class ImagePickerHeader extends React.Component{

    constructor( props ){
        super( props )
    };

    /* Função trigger de quando o componente for montado */
    componentDidMount(){}

    /* Função render do componente */
    render(){

        let marginTop = ( Platform.OS === 'ios' ? 24 : 0 );

        return(
            <View style={[ styles.view_image_picker_header, { marginTop: marginTop } ]}>

                <View style={[ styles.view_image_picker_header_back ]}>
                    <TouchableOpacity>
                        <Image style={[ styles.image_picker_header_back_ico ]} source={ require("../../../assets/imgs/png/icons/left-arrow.png") }/>
                    </TouchableOpacity>
                </View>
                <View style={[ styles.view_image_picker_header_confirm ]}>
                    <TouchableOpacity>
                        <Text style={[ styles.image_picker_header_confirm_label ]}> Confirmar </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }/* Fim da função render do componente  */

}