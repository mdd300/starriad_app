import React from "react";
import {
    View,
    ScrollView,
    Text,
    KeyboardAvoidingView,
    Animated,
    TouchableOpacity,
    Image,
    TextInput,
    ImageBackground
} from "react-native";
import { withNavigation } from 'react-navigation';
import ImagePicker from "../../../../components/ImagePicker/ImagePicker";


class Logo extends React.Component {


    /** Função construtora do feed */
    constructor(props) {
        super(props);

        this.state = { show_image_picker: false, post_image: null, has_image: false };
    }
    __take_picture = (() => {
        this.setState({ show_image_picker: true });
    });

    __set_image = (( image )=>{

        this.setState({ show_image_picker: false, has_image: true, post_image: image[0].node.image.uri });

    });
    render(){

        return(
            <View >

                <TouchableOpacity style={{alignItems:'center',flex:1,marginTop: 30, marginBottom: 30,}} onPress={() =>   this.__take_picture()}>

                    {!this.state.has_image &&

                    <ImageBackground
                                     style={{width: 100, height: 100}}
                                     source={require('../../../../assets/imgs/png/icons/camera.png')}>
                    </ImageBackground>
                    }
                    {this.state.has_image &&

                    <ImageBackground
                        style={{width: 200, height: 200}}
                        source={{uri: this.state.post_image}}>
                    </ImageBackground>
                    }
                </TouchableOpacity>

                <ImagePicker
                    show={ this.state.show_image_picker }
                    onSelect={( images )=>{ this.__set_image( images ); }}
                    onCancel={()=>{ this.setState({ show_image_picker: false }) }} />

            </View>
        );

    }

}
export default withNavigation(Logo);
