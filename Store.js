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
  ScrollView
} from 'react-native';

import Carousel from 'react-native-snap-carousel'; // 3.4.0'
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');
const itemWidth = width - 100;

export default class Shop extends Component {
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
          <View style={styles.card}>
            <View style={{flex:2, justifyContent:'center'}}>
              <Image source={require('./assets/emptyPods.png')} style={{height:60, width:60}}/>
            </View>
            <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'center'}}>
              <View style={{flex:1}}>
                <Text style={{color:'#000', fontSize:16}}>Item</Text>
              </View>
              <View style={{flex:1, width:147, backgroundColor:'#40C9E8', alignItems:'center', justifyContent: 'center', borderRadius:5}}>
                <Text style={{color:'#fff', fontSize:16}}>$1.40</Text>
              </View>
            </View>
          </View>

        );
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{color:'#5C5757', fontSize: 20}}>Shop</Text>
        </View>
        <View style={{flex:10}}>
          <ScrollView>
            <View style={{flex:1, height: height*0.3, paddingBottom:30}}>
              <ImageBackground
                  source={require('./assets/Bitmap.png')} 
                  style={{flex:1, justifyContent:'space-around', alignItems: 'center'}}>
                  <Text style={styles.descText}>
                    Introducting
                  </Text>
                  <Image source={require('./assets/ava_closed_black.png')} style={{width:120, height:50}}/>
                  <Text style={styles.text}>
                    Carbon Black
                  </Text>
              </ImageBackground>
            </View>

            <View style={{flex:1, paddingBottom: 30}}>
              <Text style={{color:'#5C5757', fontSize: 18}}>Pods</Text>
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
            <View style={{flex:1, paddingBottom: 30}}>
              <Text style={{color:'#5C5757', fontSize: 18}}>Devices</Text>
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
            <View style={{flex:1, paddingBottom: 30}}>
              <Text style={{color:'#5C5757', fontSize: 18}}>Add Ons</Text>
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
          </ScrollView>  
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
    width: 150, 
    height: 170, 
    justifyContent: 'space-between', 
    alignItems: 'center',
    margin: 5,
    borderRadius: 5, 
    borderWidth:1, 
    borderColor:'#000',
  },

  wrapper: {
    flex:1
  },
  descText: {
    color: '#fff',
    fontSize: 18,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  }
});
