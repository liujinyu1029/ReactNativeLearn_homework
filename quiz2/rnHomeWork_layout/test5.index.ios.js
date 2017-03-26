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
  Image,
  TextInput,
  Button
} from 'react-native';

export default class rnHomeWork_layout1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '请输入用户名',
      userPassword:'请输入密码'
    }
  }
  render() {
      

    return (
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('./mao.jpg')} style={{width:100,height:80}} ></Image>
        <View style={{marginTop:30,width:240,borderBottomWidth:2,borderBottomColor:'#000',justifyContent:'center',alignItems:'center'}}>
          <TextInput
            style={{textAlign:'center',height: 30,fontSize:18,color:'#bbb'}}
            onChangeText={(userName) => this.setState({userName})}
            value={this.state.userName}
          />
        </View>
        <View style={{marginTop:30,width:240,borderBottomWidth:2,borderBottomColor:'#000',justifyContent:'center',alignItems:'center'}}>
          <TextInput
            style={{height: 30,textAlign:'center',fontSize:18,color:'#bbb'}}
            onChangeText={(userPassword) => this.setState({userPassword})}
            value={this.state.userPassword}
          />
        </View>
        <View style={{marginTop:40,width:150,lineHeight:40,backgroundColor:'#bbb'}}>
          <Button title='登录' color="#000" />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  
})

AppRegistry.registerComponent('rnHomeWork_layout', () => rnHomeWork_layout1);
