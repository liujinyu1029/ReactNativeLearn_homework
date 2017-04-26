import React, {Component} from 'react'
import {Animated, Text, View, StyleSheet, Easing,Image,Dimensions} from 'react-native'


class Swiper extends Component{
  static defaultProps = {
    height:200,
    width:Dimensions.get('window').width,
    to:5,
    duration:600,
    gap:1000
  }
  constructor(){
    super()
    this.state = {
      marginLeft : new Animated.Value(0)
    }
  }
  componentDidMount(){
    var index = 0,
        len = this.props.children.length;
    setInterval( () => {
      Animated.timing(this.state.marginLeft, {
        easing : Easing.easing,
        toValue: index++,
        duration : this.props.duration,
      }).start()
      console.log(index,len,index>=len)
      if(index>len+1){
        index=0;
        this.setState({marginLeft : new Animated.Value(0)});
      }else if(index==len){
      }
    }, this.props.gap)
  }
  render(){
    const {height,width} = this.props;

    return <View style={{height:height,width:width,overflow:'hidden'}}>
        <Animated.View style={[styles.cont,{
          marginLeft:this.state.marginLeft.interpolate({
            inputRange : [0, 1],
            outputRange : [0,-width]
          })
        }]}>
          {this.props.children.concat(this.props.children.slice()).map((v,i) =>{
            return v;
          })}
        </Animated.View>
    </View>
  }
}
  const styles = StyleSheet.create({
    imgStyle :{
      width:Dimensions.get('window').width,
      resizeMode:"cover"
    },
    cont:{
      flexDirection : 'row',
    },
    loginStyle:{
      marginTop:40,width:150,backgroundColor:'#bbb'
    }
  })


module.exports = {
  "Swiper":Swiper
}
