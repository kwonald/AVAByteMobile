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
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const itemWidth = width - 100;

export default class DeviceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gardenName: "Himanshu's Garden",
      networkName: "HomeNetwork1",
      firmwareVersion: '1.1.0',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{color:'#5C5757', fontSize: 16}}>Device Info</Text>
        </View>
        <View style={{flex:10, justifyContent:'flex-start'}}>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>{this.state.gardenName}</Text>
                <Text style={styles.description}>Change device name</Text>
              </TouchableOpacity>
            </View> 
            <TouchableOpacity>
              <Text style={styles.nextButton}>›</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>{this.state.networkName}</Text>
                <Text style={styles.description}>Change connected network</Text>
              </TouchableOpacity>
            </View> 
            <TouchableOpacity>
              <Text style={styles.nextButton}>›</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>V{this.state.firmwareVersion}</Text>
                <Text style={styles.description}>Check for available firmware update</Text>
              </TouchableOpacity>
            </View> 
            <TouchableOpacity>
              <Text style={styles.nextButton}>›</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:35
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
  }
});
