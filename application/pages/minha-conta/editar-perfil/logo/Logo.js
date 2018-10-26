import React from "react";
import {
    View,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { withNavigation } from 'react-navigation';



class Logo extends React.Component {


    /** Função construtora do feed */
    constructor(props) {
        super(props);

        this.state = { show_image_picker: false, post_image: null, has_image: false };
    }

    render(){

        return(
            <View >

                <TouchableOpacity style={{alignItems:'center',flex:1,marginTop: 30, marginBottom: 30,}} onPress={() => this.props.onImage() }>

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



            </View>
        );

    }

}
export default withNavigation(Logo);
