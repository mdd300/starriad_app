import React from 'react';
import {View,Dimensions } from 'react-native';
import Video from 'react-native-video';
import {withNavigation} from "react-navigation";


class ProdutoProfile extends React.Component {

    constructor(props) {
        super(props);

        let {height} = Dimensions.get('window');

        this.state = {
            video_id: this.props.navigation.getParam('video_id'),

        }
    }
    audioFile = null
    componentWillMount(){
        var url = "../../assets/imgs/png/icons/videoplayback.mp4"

        var regex = /[?&]([^=#]+)=([^&#]*)/g,
            params = {},
            match;
        while (match = regex.exec(url)) {
            params[match[1]] = match[2];
        }
        this.audioFile = require(params);
    }
    params = {};

    render(){
        return(
            <View>
                <Video source={{uri: this.audioFile}}
                       style={{position: 'absolute',
                           top: 0,
                           bottom: 0,
                           left: 0,
                           right: 0,}}
                       />

            </View>
        );
    }
};

export default withNavigation(ProdutoProfile)