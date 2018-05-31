import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Row = (props) => (
  <View style={styles.container}>
    <Text style={styles.textHeader}>
      {`${props.generalDesc}`}
    </Text>

    <View style={{flexDirection:'row', paddingRight:12}}>
      <Text style={styles.gardenTypeText}>
        {`${props.garden}`}
      </Text>
      <Text style={styles.text}> | </Text>
      <Text style={styles.description}>
        {`${props.details}`}
      </Text>
    </View>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    marginLeft: 12,
  },
  text: {
    fontSize: 12,
  },
  textHeader: {
    fontSize: 16,
    color: '#4A4A4A'
  },
  gardenTypeText: {
    fontSize: 12,
    color: '#EA5A6B'
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  description: {
    fontSize: 12,
    color: '#4A4A4A'
  }
});

export default Row;