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

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/avaLogo.png')} style={{width:100, height:100}}/>
          <Text> SUP BITCH </Text>
        </View>
        <View style={styles.headingMessages}> 
          <Text> SUP BITCH </Text>
        </View>
        <View style={styles.infoInput}>
          <Text> SUP BITCH </Text>
        </View>
        <View style={styles.button}>
          <Text> SUP BITCH </Text>
        </View>
        <View style={styles.additionalOptions}> 
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
    marginVertical: 5
  },
  header: {

  },
  headingMessages: {

  },
  infoInput: {

  },
  button: {

  },
  additionalOptions: {

  },
});
