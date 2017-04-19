import React, {Component} from 'react'
import {Animated, Text, View, StyleSheet, Easing} from 'react-native'


class ANumber extends Component{
  static defaultProps = {
    height:60,
    to:5,
    duration:200,
    gap:200
  }
  constructor(){
    super()
    this.state = {
      marginTop : new Animated.Value(0)
    }
  }
  componentDidMount(){
    setTimeout( () => {
      Animated.timing(this.state.marginTop, {
        easing : Easing.easing,
        toValue: 1,
        duration : this.props.duration + this.props.gap,
      }).start()
    }, 500)
  }
  render(){
    const arrNumber =  [0,9,8,7,6,5,4,3,2,1];
    const {height,to} = this.props;

    return <View style={{height:height,overflow:'hidden'}}>
        <Animated.View style={{
          marginTop:this.state.marginTop.interpolate({
            inputRange : [0, 1],
            outputRange : [0,-(10-to) * height]
          })
        }}>
          {arrNumber.map( v => {
            return <Text style={[{lineHeight:height},this.props.fontStyle]}>{v}</Text>;
          })}
        </Animated.View>
    </View>
  }
}

module.exports = {
  "ANumber":ANumber
}
