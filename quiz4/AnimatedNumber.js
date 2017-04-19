import React, {Component} from 'react'
import {Animated, Text, View, StyleSheet, Easing} from 'react-native'

class AnimatedNumber extends Component{
  static defaultProps ={
    number:0,
    duration:300,
    gap:300
  }
  render (){
    const numberArr = (this.props.number+'').match(/[\d\.]/g)
    return (
      <View style={{flexDirection:'row'}}>
        {numberArr.map((v,i) => {
          if(v=="."){
            return <Text style={this.props.fontStyle}>{v}</Text>
          }else{
            return (
              <ANumber
                gap={this.props.gap*i}
                to={v}
                duration={this.props.duration}
                fontStyle={this.props.fontStyle}
              >
              </ANumber>
            )
          }
        })}
      </View>
    )
  }
}
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
  "ANumber":ANumber,
  "AnimatedNumber":AnimatedNumber
}
