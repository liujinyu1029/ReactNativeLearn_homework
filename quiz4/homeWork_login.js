import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  Button,
  Keyboard,
  Easing,
  Animated
} from 'react-native';

export default class loginPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName: '请输入用户名',
      userPassword:'请输入密码',
      imgIsShow : true,
      animatedValue : new Animated.Value(0),
      fadeInOpacity: new Animated.Value(1)
      // another : new Animated.Value(0),
    }
  }
  _fadeIn (){
    Animated.sequence([
      Animated.timing(
        this.state.animatedValue,
        {
          toValue : 1,
          duration : 400,// 动画时间
          easing: Easing.linear // 缓动函数
        }
      ),
      Animated.timing(
        this.state.fadeInOpacity,
        {
          toValue : 0,
          duration : 200  ,// 动画时间
          easing: Easing.linear // 缓动函数
        }
      )
    ]).start()
  }
  _fadeOut (){
    Animated.sequence([
      Animated.timing(
        this.state.animatedValue,
        {
          toValue : 0,
          duration : 400,
          easing: Easing.linear // 缓动函数
        }
      ),
      Animated.timing(
        this.state.fadeInOpacity,
        {
          toValue : 1,
          duration : 200  ,// 动画时间
          easing: Easing.linear // 缓动函数
        }
      )
    ]).start()
  }

  componentWillMount () {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow.bind(this));
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide.bind(this));
  }
  _keyboardWillShow () {
    this._fadeIn();
  }
  _keyboardWillHide () {
    this._fadeOut();
  }
  render() {
     const {userName,userPassword} = this.state;
    return (

      <View style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Animated.View style={{
          position:'absolute',
          top:Dimensions.get('window').height / 2 -170,
          opacity: this.state.fadeInOpacity,

        }}>
          <Image source={require('../image/mao.jpg')} style={{width : 100, height : 80}}  />
        </Animated.View>

        <Animated.View style={{
          alignItems:'center',
          position:'absolute',
          top : this.state.animatedValue.interpolate({
            inputRange : [0, 1],
            outputRange : [Dimensions.get("window").height / 2 - 90,100 ]
          }),
        }}>
          <View style={style.inputViewStyle}>
            <TextInput
              style={style.inputStyle}
              onChangeText={(userName) => this.setState({userName})}
              value={userName}
            />
          </View>
          <View style={style.inputViewStyle}>
            <TextInput
              style={style.inputStyle}
              onChangeText={(userPassword) => this.setState({userPassword})}
              value={userPassword}
            />
          </View>
          <View style={style.loginStyle}>
            <Button title='登录' color="#000" onPress={()=>{}}/>
          </View>
        </Animated.View>
      </View>

    );
  }
}

const style = StyleSheet.create({
  inputViewStyle :{
    marginTop:30,
    width:240,
    borderBottomWidth:2,
    borderBottomColor:'#000',
    justifyContent:'center',
    alignItems:'center'
  },
  inputStyle:{
    textAlign:'center',height: 30,fontSize:18,color:'#bbb'
  },
  loginStyle:{
    marginTop:40,width:150,backgroundColor:'#bbb'
  }
})
