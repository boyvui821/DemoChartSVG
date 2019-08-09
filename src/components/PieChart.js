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
import Svg, { Path, Rect, Text as SVGText, TSpan, G, TextPath } from 'react-native-svg';
//import * as shape from 'd3-shape';
//import { declareModule } from '@babel/types';

import * as d3 from 'd3';

import Slice from './Slice'

const AnimatedSlice = Animated.createAnimatedComponent(Slice)
const animatedAngle = new Animated.Value(0.1)

const S_WIDTH = Dimensions.get('window').width

// const d3 = {
//   shape
// }

export default class PieChart extends Component {

  constructor(props) {
    super(props)

    this.chartData = this.props.chartData

    this.state = {
      fadeAnim: new Animated.Value(0)
    }



  }

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



  render() {

    // this.arcGenerator = d3.shape.arc()
    //   .outerRadius(125)
    //   .padAngle(0.05)
    //   .innerRadius(0)
    //   .cornerRadius(10)

    const svgSize = 250
    const rectWidth = 250 / 2
    const rectTranslate = (svgSize - rectWidth) / 2
    return (

      <View style={styles.chart_container}>

        <Svg ref={svg => this.svg = svg} width={svgSize} height={svgSize} style={{ marginVertical: 30, justifyContent: 'center', alignItems: 'center' }}>

          {this.chartData.map((item, index) =>


            <AnimatedSlice

              id={"path" + index}
              animatedAngle={animatedAngle}
              color={item.color}
              data={this.chartData}
              index={index}
            />

          )}

          <SVGText
            fontSize="20"
            transform="translate(125,125)"
            textAnchor="middle"
          >
            <TSpan fill="#757575" fontSize="15">Ngày kết thúc</TSpan>
            <TSpan fill="black" x="0" dy="25">02/09/2019</TSpan>
          </SVGText>

        </Svg>

        <Animated.View style={[styles.chart_desc_container, { opacity: this.state.fadeAnim }]}>
          {this.chartData.map((item, index) =>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center'
              }}>
              <View style={{ backgroundColor: item.color, width: 20, height: 20, marginRight: 10, borderRadius: 10 }} />
              <Text style={styles.chart_desc_text}>{item.name}</Text>
            </View>
          )}
        </Animated.View>

        {/* <Text style={styles.end_date_title}>Ngày kết thúc</Text>
        <Text>01/02/2020</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  chart_desc_text: {
    fontSize: 12
  },
  end_date_title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
