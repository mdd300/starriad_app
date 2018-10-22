import React from "react";
import { View, ScrollView, Text, KeyboardAvoidingView  } from "react-native";
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import SystemTabs from "../../components/tabs/SystemTabs";
import PostSimple from "./feedComponents/PostSimple";
import CreatePost from './feedComponents/CreatePost';
import styles from "./feed-styles";

export default class Feed extends React.Component{


    /** Função construtora do feed */
    constructor( props ){
        super( props );

        this.state = {};

    }/* Fim da função construtora do feed */



    render(){

        return(
            <View style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="padding"  style={{ flex: 1 }}>
                    <SystemHeader />
                    <ScrollView style={[ styles.feed_view ]}>

                        <CreatePost navigation={ this.props.navigation }/>
                        <PostSimple />

                    </ScrollView>
                </KeyboardAvoidingView >
                <SystemTabs navigation={ this.props.navigation } selectedTab='feed' />
            </View>
        );

    }

};