/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated } from 'react-native';
import Svg, { Path, Text as SVGText, TextPath, TSpan, G, Rect, Polyline } from 'react-native-svg';
import * as shape from 'd3-shape'

import d3lib from 'd3';

const d3 = {
  shape,
};

export default class Slice extends Component {

  constructor(props) {
    super(props)


    // console.log(data)

    // console.log(index)

    this._createPieSlice = this._createPieSlice.bind(this)
  }

  // arcGenerator = d3.shape.arc()
  //   .outerRadius(100)
  //   .padAngle(0)
  //   .innerRadius(20)

  _createPieSlice(index, data, animatedAngle) {
    var arcs = d3.shape.pie()
      .value((item) => item.number)
      .startAngle(0)
      .endAngle(animatedAngle * Math.PI)
      (data)


    let arcData = arcs[index]



    const generator = this.arcGenerator(arcData)
    console.log("generator: " + generator)

    // const points = [
    //   d3.shape.arc().outerRadius(125).innerRadius(75).centroid(arcData),
    //   d3.shape.arc().outerRadius(125 * 0.95).innerRadius(75).centroid(arcData)
    // ];

    this.point = d3.shape.arc().outerRadius(125).innerRadius(75).centroid(arcData)

    this.point[0] = this.point[0] + 125

    this.point[1] = this.point[1] + 125

    console.log("Point: " + this.point)
    return generator

  }

  componentDidMount() {
    console.log("Slice-componentDidMount")
  }

  render() {
    const {
      animatedAngle,
      color,
      index,
      data
    } = this.props

    this.arcGenerator = d3.shape.arc()
      .outerRadius(125)
      // .padAngle(0.05)
      .innerRadius(75)
    // .cornerRadius(20)



    return (
      <G>
        <Path
          id={this.props.id}
          transform="translate(125, 125)"
          d={this._createPieSlice(this.props.index, this.props.data, this.props.animatedAngle)}
          fill={this.props.color}
          key={'pie_slice_' + this.props.index}
        >

        </Path>

        {this.props.data[this.props.index] !== 0 ?
          <SVGText
            fontSize="20"
            fontWeight="500"
            transform={"translate(" + this.point + ")"}
            textAnchor="middle"
            fill={this.props.data[this.props.index].labelColor}
          >
            {this.props.data[this.props.index].number + " kỳ"}
          </SVGText>
          :
          null
        }

      </G>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
