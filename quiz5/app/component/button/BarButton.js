import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default class BarButton extends Component{
  static defaultProps = {

  }
  render(){
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.btn}>
        
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  btn : {
    height : 40,
    justifyContent : 'center',
    backgroundColor : 'white',
    borderBottomWidth : StyleSheet.hairlineWidth
  },
  row: {  
    flexDirection : 'column',  
    justifyContent: 'flex-start', 
    alignItems : 'center',
    padding: 10
  },  
  con:{
    flex:1,
    borderBottomWidth :1, 
    borderBottomColor:'#666'
  },
  thumb: {  
    width: 50,  
    height: 50,  
  },  
})
