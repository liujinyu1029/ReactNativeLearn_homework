/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class rnHomeWork_layout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          标题栏
        </Text>
        <Image source={require('./mao.jpg')} ></Image>

        <View style={{flexDirection : 'row', position:'absolute',bottom:0,left:0,backgroundColor:"#fff",borderWidth:2,borderColor:'#888'}} >
          <Text style={{flex:1,height:48,color:"#999",lineHeight:44,textAlign:'center',fontSize:18}} >探索</Text>
          <Text style={{flex:1,height:48,color:"#999",lineHeight:44,textAlign:'center',fontSize:18}} >学习</Text>
          <Text style={{flex:1,height:48,color:"#999",lineHeight:44,textAlign:'center',fontSize:18}} >进步</Text>
        </View>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbb',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    width:"100%",
    top:0,
    lineHeight:44,
    position:'absolute',

    color:"#fff",
    backgroundColor:'blue'
  },
  footer:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height:44,
    lineHeight:44,

    color:"#fff",
    backgroundColor:'blue'
  }
  
});

AppRegistry.registerComponent('rnHomeWork_layout', () => rnHomeWork_layout);
