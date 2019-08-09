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

const S_WIDTH = Dimensions.get('window').width

export default class PaymentList extends Component {

    constructor(props) {
        super(props)

    }

    _renderItem = ({ item }) => {
        return (
            <View style={styles.list_item_container}>
                <Text>{item.date}</Text>
                <Text>{item.amount}</Text>
            </View>

        )
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header_container}>
                    <Text style={styles.header_text}>Payments history</Text>
                    <TouchableOpacity>
                        <Text style={styles.view_all_text}>View All</Text>
                    </TouchableOpacity>

                </View>

                <FlatList
                    data={this.props.dataItems}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: S_WIDTH - 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header_container: {
        width: S_WIDTH - 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header_text: {
        fontSize: 20,
        fontWeight: '500'
    },
    view_all_text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    list_item_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: S_WIDTH - 40,
        height: 50,
        borderBottomWidth: 2,
        borderColor: '#e0e0e0'
    }
});
