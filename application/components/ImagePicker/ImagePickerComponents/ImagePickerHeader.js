import React from "react";
import { View, TouchableOpacity, Animated, Image, Text, Platform } from "react-native";
import styles from "../image-picker-styles";

export default class ImagePickerHeader extends React.Component{

    constructor( props ){
        super( props );

        this.state = {
            animation_progress: new Animated.Value( 0 ),
        }


    };

    /* Função trigger de quando o componente for montado */
    componentDidMount(){}

    /**
     * Função utilizada para confimar a seleção das imagens
     * @type {Function}
     * @private
     */
    __on_confirm = (()=> {
        this.props.onConfirm();
    });


    /**
     * Função utilizada para cancelar a seleção
     * @type {Function}
     * @private
     */
    __on_cancel = (()=> {
        this.props.onCancel();
    });


    /* Função render do componente */
    render(){

        const marginTop = ( Platform.OS === 'ios' ? 24 : 0 );

        return(
            <View style={[ styles.view_image_picker_header, { marginTop: marginTop } ]}>

                <View style={[ styles.view_image_picker_header_back ]}>
                    <TouchableOpacity
                        onPress={() => { this.__on_cancel() }}
                        hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}>
                        <Image style={[ styles.image_picker_header_back_ico ]} source={ require("../../../assets/imgs/png/icons/caret-left-black.png") }/>
                    </TouchableOpacity>
                </View>

                <View style={[ styles.view_image_picker_header_confirm ]}>
                    <TouchableOpacity onPress={() => { this.__on_confirm() }}>
                        <Text style={[ styles.image_picker_header_confirm_label ]}> Confirmar </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }/* Fim da função render do componente  */

}