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

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Himanshu Vaishnav',
      email: 'himvais@gmail.com',

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{color:'#5C5757', fontSize: 16}}>Profile</Text>
        </View>
        <View style={{flex:10, justifyContent:'flex-start'}}>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>{this.state.name}</Text>
                <Text style={styles.description}>Change Name of Owner</Text>
              </TouchableOpacity>
            </View> 
            <TouchableOpacity>
              <Text style={styles.nextButton}>›</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>{this.state.email}</Text>
                <Text style={styles.description}>Change Email Address</Text>
              </TouchableOpacity>
            </View> 
            <TouchableOpacity>
              <Text style={styles.nextButton}>›</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <View style={styles.listItem}>
              <TouchableOpacity>
                <Text style={styles.textHeader}>********</Text>
                <Text style={styles.description}>Change Password</Text>
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
