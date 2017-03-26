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
  ActivityIndicator,
  Dimensions,
  Image
} from 'react-native';

export default class rnHomeWork_layout extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',backgroundColor:'grey'}}>
          <View style={{justifyContent:'space-around',flexDirection:'column',alignItems:'center',backgroundColor:'white',height:Dimensions.get('window').width*0.8*0.7,marginLeft:Dimensions.get('window').width*0.1,marginRight:Dimensions.get('window').width*0.1,width:Dimensions.get('window').width*0.8,borderRadius:12,borderWidth:1,borderColor:'#a9a9a9',overflow:'hidden'}}>
            <View style={{marginTop:Dimensions.get('window').width*0.8*0.4*0.29}}>
              <Text style={{fontSize:25,fontWeight:'bold'}}>请输入六位交易密码</Text>
            </View>
            <View style={{flexDirection:'row',flexWrap:'nowrap',paddingTop:Dimensions.get('window').width*0.8*0.7*0.17,paddingBottom:Dimensions.get('window').width*0.8*0.7*0.17,marginBottom:Dimensions.get('window').width*0.8*0.7*0.02}}>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
                <View style={{borderWidth:1,borderColor:'#9f9f9f',width:Dimensions.get('window').width*0.8*0.12,height:Dimensions.get('window').width*0.8*0.12}}></View>
            </View>
          </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  box:{
    width:(Dimensions.get('window').width-70)/3,height:(Dimensions.get('window').width-70)/3,borderWidth:1,borderColor:'#797979',justifyContent:'center',alignItems:'center'
  },
  box_txt:{
    fontSize:42,
    color:'#021096'
  }
})

AppRegistry.registerComponent('rnHomeWork_layout', () => rnHomeWork_layout);
