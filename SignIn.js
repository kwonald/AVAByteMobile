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


const { width, height } = Dimensions.get('window');
const itemWidth = width - 100;

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      nextState: false,
    };
  }
  _continueWithEmail = () =>
    this.setState({ nextState: !this.state.nextState });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('./assets/avaLogo.png')} style={{width:100, height:100}}/>
        </View>
          
        <View style={styles.infoInput}>
          <TouchableOpacity>
            <Image source={require('./assets/FacebookBtn.png')} style={{width:0.8*width, height:50, borderRadius: 10}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('./assets/GoogleBtn.png')} style={{width:0.8*width, height:50, borderRadius: 10}}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{backgroundColor: '#3C3A39', width: 0.8*width, height:50, borderRadius: 10, alignItems: 'center', justifyContent:'center'}}>
              <Text style={{color: '#fff', fontSize:14}}>
                Continue With Email
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.additionalOptions}> 
           <Text style={{color:'#000'}}>By signing in you agree to our</Text>
           <TouchableOpacity>
              <Text style={{color:'#40C9E8'}}> Terms & Conditions</Text>
           </TouchableOpacity>
        </View>
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
    marginVertical: 5,
    marginHorizontal: 38
  },
  header: {
    flex:2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },

  infoInput: {
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop:40
  },
  button: {
    flex:0.75,
    justifyContent: 'center',
  },
  btn: {
    width: 0.35*width,
    height: 0.05*height,
    backgroundColor: '#40C9E8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  additionalOptions: {
    flex:0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 15
  },
});
