import React, {Component} from 'react'
import {View,Text} from 'react-native'

import {ANumber,AnimatedNumber} from "./AnimatedNumber"

export default class  extends Component{

  render(){
    return (
      <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
        <AnimatedNumber
          number="12.34"
          fontStyle={{color : 'orange', fontSize : 48, fontWeight : 'bold'}}
          duration={600}
          gap={500}
        />
      </View>
    )
  }
}
