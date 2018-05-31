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


const { width, height } = Dimensions.get('window');
const itemWidth = width - 100;

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      register: false
    };
  }
  _register = () =>
    this.setState({ register: !this.state.register });

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flex:1, flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{height:5, width:5, backgroundColor: '#fff'}}></View>
            <Image source={require('./assets/avaLogo.png')} style={{width:100, height:100}}/>
            <TouchableOpacity>
              <Image source={require('./assets/Close-icon.png')} style={{width:20, height:20}}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headingMessages}> 
          <Text style={{fontSize: 32, paddingBottom: 20}}>Welcome</Text>
          <Text style={{fontSize: 28, textAlign:'center'}}>Create an account to start growing better</Text>
        </View>
        <View style={styles.infoInput}>
          <TextInput
            style={{height: 40, }}
            onChangeText={(name) => this.setState({name})}
            placeholder={'NAME'}
            value={this.state.name}
          />
          <TextInput
            style={{height: 40, }}
            onChangeText={(email) => this.setState({email})}
            keyboardType={"email-address"}
            placeholder={'EMAIL'}
            value={this.state.email}
          />
          <TextInput
            style={{height: 40, }}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
            placeholder={'PASSWORD'}
            value={this.state.password}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.btn} onPress={this._register}>
            <Text style={{color:'#fff', fontSize: 20}}> REGISTER </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.additionalOptions}> 
           <Text style={{color:'#000'}}>Already have an account?</Text>
           <TouchableOpacity>
              <Text style={{color:'#40C9E8'}}> Login </Text>
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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 20
  },
  headingMessages: {
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoInput: {
    flex:1,
    justifyContent: 'space-between',
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
