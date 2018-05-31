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

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{color:'#5C5757', fontSize: 16}}>Settings</Text>
        </View>
        <View style={{flex:10, justifyContent:'flex-start'}}>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>Device settings</Text>
                <Text style={styles.description}>Settings for all devices linked with this account</Text>
              </TouchableOpacity>
            </View> 
            <TouchableOpacity>
              <Text style={styles.nextButton}>›</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>Addresses</Text>
                <Text style={styles.description}>Edit your delivery address</Text>
              </TouchableOpacity>
            </View> 
            <TouchableOpacity>
              <Text style={styles.nextButton}>›</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>Profile</Text>
                <Text style={styles.description}>Edit your account settings</Text>
              </TouchableOpacity>
            </View> 
            <TouchableOpacity>
              <Text style={styles.nextButton}>›</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>Notifications</Text>
                <Text style={styles.description}>Manage your notification preferences</Text>
              </TouchableOpacity>
            </View> 
            <TouchableOpacity>
              <Text style={styles.nextButton}>›</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>Help & Support</Text>
                <Text style={styles.description}>Facing an issue? Get in touch</Text>
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
