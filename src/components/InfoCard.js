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
  Switch,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const S_WIDTH = Dimensions.get('window').width

export default class InfoCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isRemind: false
    }
  }

  _remindPayment = (value) => {
    this.setState({
      isRemind: !this.state.isRemind
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.row_container}>
          <Text>123456</Text>
          <Switch
            value={this.state.isRemind}
            onValueChange={this._remindPayment}>
          </Switch>
        </View>

        <View style={styles.row_container}>
          <Text>Loan Card</Text>
        </View>

        <View style={styles.row_container}>
          <Text style={styles.amount}>30.000.000</Text>
        </View>

        <View style={styles.row_container}>
          <Text>Monthly payment amount</Text>
          <Text style={styles.right_text}>3.125.000</Text>
        </View>

        <View style={styles.row_container}>
          <Text>Monthly payment date</Text>
          <Text style={styles.right_text}>02/09/2019</Text>
        </View>

        <View style={styles.row_container}>
          <Text>Loan package insun</Text>
          <Text style={styles.right_text}>None</Text>
        </View>

        <View style={styles.row_container}>
          <Text>Contract</Text>
          <TouchableOpacity onPress={this.props.viewDetail}>
            <Text style={styles.right_text}>Detail</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: S_WIDTH - 40,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 20,
    paddingVertical: 10
  },
  row_container: {
    width: S_WIDTH - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 15
  },
  amount: {
    fontSize: 30,
    fontWeight: '500'
  },
  right_text: {
    fontWeight: 'bold'
  }
});
