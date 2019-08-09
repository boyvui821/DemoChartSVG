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
  Animated,
  Dimensions,
  ScrollView,
  SafeAreaView
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import * as shape from 'd3-shape';
//import { declareModule } from '@babel/types';

import Slice from './src/components/Slice'
import InfoCard from './src/components/InfoCard'
import PaymentList from './src/components/PaymentList'
import BottomBar from './src/components/BottomBar'
import PieChart from './src/components/PieChart'

const AnimatedSlice = Animated.createAnimatedComponent(Slice)
const animatedAngle = new Animated.Value(0.1)

const S_WIDTH = Dimensions.get('window').width

const d3 = {
  shape
}

const demoData = [
  { number: 1, color: '#1565c0', name: "Số tháng chưa đóng", labelColor:"white" },
  { number: 11, color: '#cfd8dc', name: "Số tháng đã đóng", labelColor:"black" }, 
];

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fadeAnim: new Animated.Value(0),
      contentOffsetY:0,
      buttonOpacity:0,
      payments: [
        {
          date: "02/09/2019",
          amount: "1.000.000"
        },
        {
          date: "02/10/2019",
          amount: "1.000.000"
        },
        {
          date: "02/11/2019",
          amount: "1.000.000"
        },
        {
          date: "02/12/2019",
          amount: "1.000.000"
        }
      ]
    }

    //this.createPieSlice = this.createPieSlice.bind(this)
  }

  // createPieSlice(index) {
  //   this.arcs = d3.shape.pie()
  //     .value((item) => item.number)
  //     .startAngle(0)
  //     .endAngle(2 * Math.PI)
  //     (demoData)

  //   let arcData = this.arcs[index]
  //   return this.arcGenerator(arcData)
  // }

  componentDidMount() {
    var anim01 = Animated.timing(
      animatedAngle, {
        toValue: 2,
        duration: 2000
      }
    )

    var anim02 = Animated.timing(
      this.state.fadeAnim, {
        toValue: 1,
        duration: 1000
      }
    )

    Animated.parallel([anim01, anim02]).start()
  }

  _onScroll = (e)=>{
    console.log(e.nativeEvent.contentOffset.y)
    var opacity = 0    
    var contentOffsetY = e.nativeEvent.contentOffset.y

    if (contentOffsetY > this.state.contentOffsetY){
      var opacity = 1
    }

    this.setState({
      contentOffsetY: contentOffsetY,
      buttonOpacity:opacity,
    })
  }

  render() {

    this.arcGenerator = d3.shape.arc()
      .outerRadius(100)
      .padAngle(0.05)
      .innerRadius(0)
      .cornerRadius(10)

    // var opacity = this.state.animOpacity

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center' }}
          onScroll={this._onScroll}>
          {/* <Svg style={{ backgroundColor:'pink', marginBottom:20}} 
          width="200" 
          height="200">
          {demoData.map((item, index) =>
            <Path
              transform="translate(100, 100)"
              fill={item.color}
              d={this.createPieSlice(index)}
              key={'pie_slice_'+index}
            />
          )}
        </Svg> */}

          <InfoCard viewDetail = {()=> console.log("Detail contract")}/>

          <PieChart chartData={demoData}/>

          <PaymentList dataItems={this.state.payments} />

        </ScrollView>


        <BottomBar 
          style={{position:'absolute', bottom:20, backgroundColor:'transparent'}}
          buttonOpacity={this.state.buttonOpacity}/> 
      </SafeAreaView>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom:80
  },
  chart_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: S_WIDTH - 40,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10
  },
  chart_desc_container: {
    marginBottom: 5
  },
  end_date_title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
