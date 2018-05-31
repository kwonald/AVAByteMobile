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
  TextInput
} from 'react-native';

import Swiper from 'react-native-swiper';
import Video from "react-native-video";
import ModalDropdown from 'react-native-modal-dropdown';

import LightVideo from "./assets/cheers.mp4";
import BooBear from "./assets/boobear.mp4";
import Burger from "./assets/burgerrrr.mp4";

const { width, height } = Dimensions.get('window');
const itemWidth = width - 100;

export default class SetUpFlow extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nextState: false,
      password: '',
      avaNetwork: 'Select AVA-Byte from the list',
      homeNetwork: 'Select your home network',
      byteName: ''
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
            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
              <View style={styles.nextStepButton}>
                <Text style={styles.buttonText}>
                  Plug in the device
                </Text>
              </View> 
            </TouchableOpacity>
            
          </View>
          <View style={styles.deviceSetUpSlide}>
            <Video
              repeat
              source={BooBear}
              resizeMode="cover"
              style={StyleSheet.absoluteFill}
              muted={true}
            />
            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
              <View style={styles.nextStepButton}>
                <Text style={styles.buttonText}>
                  Extend the light stand
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.deviceSetUpSlide}>
            <Video
              repeat
              source={Burger}
              resizeMode="cover"
              style={StyleSheet.absoluteFill}
              muted={true}
            />
            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
              <View style={styles.nextStepButton}>
                <Text style={styles.buttonText}>
                  Long press the top button
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.appSetUpSlide}>
            <View style={{flex:0.5}}>
              <Image source={require('./assets/wifiIcon.png')} style={{width:43.75, height:31.25}}/>
            </View>
            <View style={{flex:1, alignItems:'center',}}>
              <Text style={{fontSize:24, color:'#4A4A4A', textAlign:'center', paddingBottom: 10}}>Connect to wifi</Text>
              <Text style={{fontSize:20, color:'#4A4A4A', textAlign:'center'}}>Just select a wifi network and enter password to connect your device to our cloud.</Text>
            </View>
            <View style={{flex:1}}>
            </View>
            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
              <View style={styles.nextStepButton}>
                <Text style={styles.buttonText}>OPEN NETWORK SETTINGS</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.appSetUpSlide}>
            <View style={{flex:0.25}}>
              <Image source={require('./assets/wifiIcon.png')} style={{width:43.75, height:31.25}}/>
            </View>
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
              <Text style={{fontSize:24, color:'#4A4A4A', textAlign:'center', paddingBottom: 10}}>Connect to 'AVA-Byte'</Text>
              <Text style={{fontSize:20, color:'#4A4A4A', textAlign:'center'}}>Select 'AVA-Byte' in the network list and hit connect</Text>
            </View>
            <View style={{flex:1}}>
              <ModalDropdown 
                style={{paddingBottom:25, width:width*0.8, borderRadius: 10}} 
                renderSeparator={() => <View />} 
                options={["AVA Byte", "Home Network", "Neighbor 1", "Neighbor 2", "Neighbor 3", "Neighbor 4"]} 
                defaultValue={this.state.avaNetwork}
                onSelect={(index, value) => this.setState({avaNetwork:value})}
                >

                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:0.8*width, height:52, borderRadius: 5, borderWidth:1, borderColor:'#1FB6FF', paddingHorizontal: 10}}>
                  <Text style={{color:'#546A79', fontSize: 18}}>{this.state.avaNetwork}</Text>
                  <Image source={require('./assets/chevron-down.png')} style={{width:15.82, height:9.04}}/>
                </View>
              </ModalDropdown>
             
            </View>
            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
              <View style={styles.nextStepButton}>
                <Text style={styles.buttonText}>CONNECT</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.appSetUpSlide}>
            <View style={{flex:0.25}}>
              <Image source={require('./assets/wifiIcon.png')} style={{width:43.75, height:31.25}}/>
            </View>
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
              <Text style={{fontSize:24, color:'#4A4A4A', textAlign:'center', paddingBottom: 10}}>Connect to your home wifi network</Text>
              <Text style={{fontSize:20, color:'#4A4A4A', textAlign:'center'}}>Select your home network and the password for that network to allow the Byte to wirelessly communicate with you</Text>
            </View>
            <View style={{flex:1}}>
              <ModalDropdown 
                style={{paddingBottom:25, width:width*0.8, borderRadius: 10}} 
                renderSeparator={() => <View />} 
                options={["AVA Byte", "Home Network", "Neighbor 1", "Neighbor 2", "Neighbor 3", "Neighbor 4"]} 
                defaultValue={this.state.homeNetwork}
                onSelect={(index, value) => this.setState({homeNetwork:value})}
                >

                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:0.8*width, height:52, borderRadius: 5, borderWidth:1, borderColor:'#1FB6FF', paddingHorizontal: 10}}>
                  <Text style={{color:'#546A79', fontSize: 18}}>{this.state.homeNetwork}</Text>
                  <Image source={require('./assets/chevron-down.png')} style={{width:15.82, height:9.04}}/>
                </View>
              </ModalDropdown>
              <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:0.8*width, height:52, borderRadius: 5, borderWidth:1, borderColor:'#1FB6FF', paddingHorizontal: 10}}>
                  <TextInput
                    style={{flex:1, height: 40, color: '#546A79', fontSize: 18}}
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry={true}
                    placeholder={'PASSWORD'}
                    value={this.state.password}
                  />
                </View>
            </View>
            <TouchableOpacity onPress={() => this.refs.swiper.scrollBy(1)}>
              <View style={styles.nextStepButton}>
                <Text style={styles.buttonText}>ALMOST DONE!</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.appSetUpSlide}>
            <View style={{flex:1}}>
              <Image source={require('./assets/avaByteSpaceGrey.png')} style={{width:204, height:110}}/>
            </View>
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
              <Text style={{fontSize:24, color:'#4A4A4A', textAlign:'center', paddingBottom: 10}}>Name your device</Text>
              <Text style={{fontSize:20, color:'#4A4A4A', textAlign:'center'}}>Set a friendly name for your device. This name will be used to identify your device in app.</Text>
            </View>
            <View style={{flex:1}}>
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', width:0.8*width, height:52, borderRadius: 5, borderWidth:1, borderColor:'#1FB6FF', paddingHorizontal: 30}}>
                  <TextInput
                    style={{flex:1, height: 40, color: '#546A79', fontSize: 18}}
                    onChangeText={(byteName) => this.setState({byteName})}
                    placeholder={'Your AVA Byte Name'}
                    value={this.state.byteName}
                  />
                </View>
            </View>
            <TouchableOpacity>
              <View style={styles.nextStepButton}>
                <Text style={styles.buttonText}>AVA Byte Activate!</Text>
              </View>
            </TouchableOpacity>
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
  deviceSetUpSlide: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 80,
    backgroundColor: '#fff'
  },
  appSetUpSlide: {
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal:30
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
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
});
