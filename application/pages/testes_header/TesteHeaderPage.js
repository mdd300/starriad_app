import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import SystemHeader from "../../components/SystemHeader/SystemHeader";
import SystemTabs from "../../components/tabs/SystemTabs";

export default class TesteHeaderPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.teste}>
                <SystemHeader/>
                <ScrollView style={styles.scrollview}>

                </ScrollView>
                <SystemTabs navigation={this.props.navigation} selectedTab='feed' />
            </View>

        );
    }

}

const styles = StyleSheet.create({
    scrollview: {
        flexGrow: 1,
    },
    teste: {
        borderColor: 'black',
        borderWidth: 2,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    }
});