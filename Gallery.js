/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Carousel from 'react-native-snap-carousel'; // 3.4.0'

const { width, height } = Dimensions.get('window');
const itemWidth = width - 100;

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      gardenName: "Himanshu's Garden",
      networkName: "HomeNetwork1",
      firmwareVersion: '1.1.0',
      entries: [
        {
          podIndex: 'POD 1',
          podType: 'BASIL',
          cultivationPeriod: 15,
          image: './assets/TomatoesCard.png',
        },
        {
          podIndex: 'POD 2',
          podType: 'TOMATOES',
          cultivationPeriod: 30,
          image: './assets/TomatoesCard.png',
        },
        {
          podIndex: 'POD 3',
          podType: 'MUSHROOM',
          cultivationPeriod: 20,
          image: './assets/TomatoesCard.png',
        },
        {
          podIndex: 'POD 4',
          podType: 'THYME',
          cultivationPeriod: 18,
          image: './assets/TomatoesCard.png',
        },
        {
          podIndex: 'POD 5',
          podType: 'OREGANO',
          cultivationPeriod: 45,
          image: './assets/TomatoesCard.png',
        }

      ],
    };
  }
  // this is the render of the pod cards on the main dock.
  _renderItem ({item, index}) {
        return (
          <Image 
            source={require('./assets/TomatoesCard.png')} 
            style={styles.card}
            />
          

        );
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{color:'#5C5757', fontSize: 20}}>Gallery</Text>
        </View>
        <View style={{flex:10, justifyContent:'flex-start'}}>
          <View style={{flex:1}}>
            <Text style={{color:'#5C5757', fontSize: 18}}>Photos</Text>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              sliderWidth={width - 10}
              itemWidth={100}
              itemHeight={0}
            />
          </View>
          <View style={{flex:1}}>
            <Text style={{color:'#5C5757', fontSize: 18}}>Videos</Text>
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              sliderWidth={width - 10}
              itemWidth={100}
              itemHeight={0}
            />
          </View>
          
          
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:35,
    paddingHorizontal: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }, 
  listItem:{
    padding: 12,
    justifyContent: 'center',
    marginLeft: 12,
  },
  textHeader: {
    fontSize: 16,
    color: '#4A4A4A'
  },
  description: {
    fontSize: 12,
    color: '#4A4A4A'
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10

  },
  nextButton:{
    color:'#40C9E8', 
    fontSize:50,
  },
  card:{
    width: 100, 
    height: 100, 
    justifyContent: 'space-between', 
    alignItems: 'center',
    margin: 5
  },
});
