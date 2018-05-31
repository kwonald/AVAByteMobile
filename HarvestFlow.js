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
  TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Video from "react-native-video";
import ModalDropdown from 'react-native-modal-dropdown';

import LightVideo from "./assets/cheers.mp4";
import BooBear from "./assets/boobear.mp4";
import Burger from "./assets/burgerrrr.mp4";

const { width, height } = Dimensions.get('window');
const itemWidth = width - 100;

export default class HarvestFlow extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Swiper 
          ref='swiper'
          style={styles.wrapper} 
          showsButtons={true}
          loop={false}
          dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          activeDotColor={'#40C9E8'}
          scrollEnabled={false}
          nextButton={<Text></Text>}
          prevButton={<Text style={{color:'#40C9E8', fontSize:50,}}>‹</Text>}
          buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'flex-start'}}
        >

          <View style={styles.deviceSetUpSlide}>
            <Video
              repeat
              source={LightVideo}
              resizeMode="cover"
              style={StyleSheet.absoluteFill}
              muted={true}
            />
            <View style={styles.header}>
              <View style={styles.headerDetails}>
                <Text style={styles.descText}>
                  HARVESTING POD 5
                </Text>
                <Text style={styles.headerText}>
                  TOMATOES
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.descText}>Skip</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.emptySpace}>
            </View>

            <View style={styles.harvestTips}>
              <Text style={styles.headerText}>
                Step 1
              </Text>
              <Text style={styles.descText}>
                Description
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
                <View style={styles.nextStepButton}>
                  <Text style={styles.buttonText}>
                    NEXT
                  </Text>
                </View> 
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.deviceSetUpSlide}>
            <Video
              repeat
              source={BooBear}
              resizeMode="cover"
              style={StyleSheet.absoluteFill}
              muted={true}
            />
            <View style={styles.header}>
              <View style={styles.headerDetails}>
                <Text style={styles.descText}>
                  HARVESTING POD 5
                </Text>
                <Text style={styles.headerText}>
                  TOMATOES
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.descText}>Skip</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.emptySpace}>
            </View>

            <View style={styles.harvestTips}>
              <Text style={styles.headerText}>
                Step 2
              </Text>
              <Text style={styles.descText}>
                Description
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
                <View style={styles.nextStepButton}>
                  <Text style={styles.buttonText}>
                    NEXT
                  </Text>
                </View> 
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.deviceSetUpSlide}>
            <Video
              repeat
              source={Burger}
              resizeMode="cover"
              style={StyleSheet.absoluteFill}
              muted={true}
            />
            <View style={styles.header}>
              <View style={styles.headerDetails}>
                <Text style={styles.descText}>
                  HARVESTING POD 5
                </Text>
                <Text style={styles.headerText}>
                  TOMATOES
                </Text>
              </View>
            </View>
            
            <View style={styles.emptySpace}>
            </View>

            <View style={styles.harvestTips}>
              <Text style={styles.headerText}>
                Step 3
              </Text>
              <Text style={styles.descText}>
                Description
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity>
                <View style={styles.nextStepButton}>
                  <Text style={styles.buttonText}>
                    FINISH
                  </Text>
                </View> 
              </TouchableOpacity>
            </View>
          </View>

          

        </Swiper>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
  },
  header:{
    flex:0.2,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 22
  },
  deviceSetUpSlide: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 80,
    backgroundColor: '#fff'
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descText:{
    color: '#fff',
    fontSize: 14
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  nextStepButton: {
    justifyContent:'center', 
    alignItems:'center', 
    width:0.8*width, 
    height:50, 
    borderRadius:25, 
    backgroundColor:'#40C9E8'
  },
  buttonText:{
    color:'#fff', 
    fontSize:18
  },
  emptySpace:{
    flex: 3
  },
  harvestTips:{
    flex:1,
    paddingHorizontal: 22
  },
});
