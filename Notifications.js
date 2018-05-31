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
  ListView,
} from 'react-native';

import Data from './Data';
import Row from './Row';

const { width, height } = Dimensions.get('window');
const itemWidth = width - 100;

export default class Notifications extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Data),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{color:'#5C5757', fontSize: 16}}>Notifications</Text>
        </View>
        
        <View style={{flex:10, justifyContent:'flex-start'}}>
          <ListView
            style={styles.notificationInfo}
            dataSource={this.state.dataSource}
            renderRow={(data) => <Row {...data} />}
          />
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
  notificationInfo:{
    flex: 1,
  } 
});
