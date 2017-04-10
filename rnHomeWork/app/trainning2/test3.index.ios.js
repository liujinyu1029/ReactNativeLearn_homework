
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image
} from 'react-native';

export default class rnHomeWork_layout extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>

        <ActivityIndicator
          animating={true}
          style={[styles.centering, {height: 80}]}
          size="large"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
});

AppRegistry.registerComponent('rnHomeWork_layout', () => rnHomeWork_layout);
