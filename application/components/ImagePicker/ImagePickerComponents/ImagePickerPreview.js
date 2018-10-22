import React from "react";
import { View, Image } from "react-native";
import styles from "../image-picker-styles";

export default class ImagePickerPreview extends React.Component{

    constructor( props ){
        super( props );
    }

    render(){
        return(

            <View style={[ styles.image_picker_viewer_image_content ]}>
                <View style={[ styles.image_picker_viewer_image ]}>
                    <Image style={[ styles.image_picker_viewer_image_img ]} source={{ uri: this.props.image }}/>
                </View>
            </View>

        );
    }

}