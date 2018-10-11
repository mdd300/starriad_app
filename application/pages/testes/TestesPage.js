import React from "react";
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Tabs} from "../../components/tabs/SystemTabs";
import SystemTabs from "../../components/tabs/SystemTabs";
import SystemHeader from "../../components/SystemHeader/SystemHeader";

export default class TestesPage extends React.Component{

    render(){
        return(
            <View style={styles.TestesPage}>
                <SystemHeader/>
                <Text>Página de Testes</Text>
                <ScrollView style={{flex: 1}}></ScrollView>
                <SystemTabs navigation={this.props.navigation} selectedTab='feed'/>
            </View>
        );
    }

}

const styles= StyleSheet.create({
    TestesPage: {
        flex: 1,
    }
});