import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  Button,
  Keyboard
} from 'react-native';

export default class loginPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName: '请输入用户名',
      userPassword:'请输入密码',
      imgIsShow : true
    }
  }
  componentWillMount () {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow.bind(this));
    // this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardWillHide.bind(this));
  }
  // componentWillUnmount () {
  //   this.keyboardWillShowListener.remove();
  //   this.keyboardWillHideListener.remove();
  // }
  _keyboardWillShow () {
    console.log(this.state.imgIsShow)
    this.setState({imgIsShow: !this.state.imgIsShow});
  }
  _keyboardWillHide () {
    this.setState({imgIsShow: true});
  }
  render() {
    //  const {inputViewStyle,inputStyle} = style;
     const {userName,userPassword,imgIsShow} = this.state;
    return (
      <View style={{flex:1,flexDirection:'column',justifyContent:!imgIsShow?'flex-start':'center',alignItems:'center'}}>
        <Image source={require('../image/mao.jpg')} style={{width:100,height:80,opacity:imgIsShow?1:0}} ></Image>

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
