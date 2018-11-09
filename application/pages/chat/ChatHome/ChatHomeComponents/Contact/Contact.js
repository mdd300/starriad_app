import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./contact-styles";

export default class Contact extends React.Component{

    constructor( props ){
        super( props );
    }

    render = (() => {
        return(
            <View style={[ styles.contact_content ]}>
                <View style={[ styles.contact ]}>
                    <TouchableOpacity style={[ styles.contact_touchable ]}>

                        <View style={[ styles.contact_profile_image_content ]}>
                            <View style={[ styles.contact_profile_image ]}>
                                <Image style={[ styles.contact_profile_image_img ]} source={{ uri: this.props.contact_cover }}/>
                            </View>
                        </View>

                        <View style={[ styles.contact_profile_details_content ]}>
                            <View style={[ styles.contact_profile_datails ]}>
                                <View style={[ styles.contact_profile_detail, { justifyContent: 'flex-end' } ]}>
                                    <Text style={[ styles.contact_profile_detail_profilename ]} numberOfLines={1} ellipsizeMode='tail'> { this.props.contact_name } </Text>
                                </View>
                                <View style={[ styles.contact_profile_detail ]}>
                                    <Text style={[ styles.contact_profile_detail_description ]} numberOfLines={1} ellipsizeMode='tail' > { this.props.contact_desc } </Text>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        )
    });


}