/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const S_WIDTH = Dimensions.get('window').width

export default class BottomBar extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        return (
            <View style={[styles.container,{opacity:this.props.buttonOpacity},this.props.style]}>
                <TouchableOpacity style={styles.button_shadow}>
                    <LinearGradient 
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} 
                        colors={['#2962ff', '#448aff', '#bbdefb']} 
                        style={styles.button_container}>
                        <Text style={styles.button_text}>Payment Guidline</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: S_WIDTH,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    button_container: {
        width: S_WIDTH - 40,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#448aff',
        borderRadius: 10
    },
    button_shadow:{
        shadowOpacity:1,
        shadowColor:'#9e9e9e',
        shadowOffset:{width:5, height:5}
    },
    button_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    }

});
