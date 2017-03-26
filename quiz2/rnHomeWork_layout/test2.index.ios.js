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


        <View style={{flexDirection:'column',width:300,marginLeft:-150, height:299,marginTop:-150, position:'absolute',top:"50%",left:"50%",backgroundColor:"#fff",borderWidth:2,borderColor:'#888'}} >
          <View style={{flexDirection : 'row',flex:1, borderWidth:1,borderColor:'#ff0000'}} >
            <Text style={{flex:1,color:"blue",borderWidth:1,lineHeight:100, borderColor:'#ff0000',textAlign:'center' ,fontSize:18}} >1</Text>
            <Text style={{flex:1,color:"blue",borderWidth:1,lineHeight:100, borderColor:'#ff0000',textAlign:'center' ,fontSize:18}} >2</Text>
            <Text style={{flex:1,color:"blue",borderWidth:1,lineHeight:100, borderColor:'#ff0000',textAlign:'center' ,fontSize:18}} >3</Text>
          </View>
          <View style={{flexDirection : 'row',flex:1, borderWidth:1,borderColor:'#ff0000'}} >
            <Text style={{flex:1,color:"blue",borderWidth:1,lineHeight:100, borderColor:'#ff0000',textAlign:'center' ,fontSize:18}} >4</Text>
            <Text style={{flex:1,color:"blue",borderWidth:1,lineHeight:100, borderColor:'#ff0000',textAlign:'center' ,fontSize:18}} >5</Text>
            <Text style={{flex:1,color:"blue",borderWidth:1,lineHeight:100, borderColor:'#ff0000',textAlign:'center' ,fontSize:18}} >6</Text>
          </View>
          <View style={{flexDirection : 'row',flex:1, borderWidth:1,borderColor:'#ff0000'}} >
            <Text style={{flex:1,color:"blue",borderWidth:1,lineHeight:100, borderColor:'#ff0000',textAlign:'center' ,fontSize:18}} >7</Text>
            <Text style={{flex:1,color:"blue",borderWidth:1,lineHeight:100, borderColor:'#ff0000',textAlign:'center' ,fontSize:18}} >8</Text>
            <Text style={{flex:1,color:"blue",borderWidth:1,lineHeight:100, borderColor:'#ff0000',textAlign:'center' ,fontSize:18}} >9  </Text>
          </View>
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
