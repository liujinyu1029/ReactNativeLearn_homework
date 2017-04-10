import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

export default class loginPage extends Component {
   constructor(){
     super();
     this.state = {
       position:0,
       btnIsShow:false
     }
   }
   _onscroll(event){
     var endposition=event.nativeEvent.contentOffset.y;//取得拖拉后的位置
     if(endposition>this.state.position){
       this.setState({btnIsShow:true});
     }else{
       this.setState({btnIsShow:false});
     }
     this.state.position = endposition;
   }

  render() {
    var _scrollView: ScrollView;
    const {btnIsShow} = this.state;
    return (
      <View style={{flex:1}}>

        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          onScroll={(e) => {this._onscroll(e)} }
          scrollEventThrottle={200}
          contentContainerStyle={style.contentContainer}
        >
          <Text style={style.txt}>
          vs - which one to use? ScrollView simply renders all its react child components at once. That makes it very easy to understand and use. On the other hand, this has a performance downside. Imagine you have a very long list of items you want to display, worth of couple of your ScrollView’s heights. Creating JS components and native views upfront for all its items, which may not even be shown, will contribute to slow rendering of your screen and increased memory usage.
          </Text>
          <Image source={require('../image/mao.jpg')} style={{width:100,height:80}} ></Image>
          <Text style={style.txt}>This is where ListView comes into play. ListView renders items lazily, just when they are about to appear. This laziness comes at cost of a more complicated API, which is worth it unless you are rendering a small fixed set of items.</Text>

          <Text style={style.txt}>
          vs - which one to use? ScrollView simply renders all its react child components at once. That makes it very easy to understand and use. On the other hand, this has a performance downside. Imagine you have a very long list of items you want to display, worth of couple of your ScrollView’s heights. Creating JS components and native views upfront for all its items, which may not even be shown, will contribute to slow rendering of your screen and increased memory usage.
          </Text>
          <Image source={require('../image/mao.jpg')} style={{width:100,height:80}} ></Image>
          <Text style={style.txt}>This is where ListView comes into play. ListView renders items lazily, just when they are about to appear. This laziness comes at cost of a more complicated API, which is worth it unless you are rendering a small fixed set of items.</Text>
          <Text style={style.txt}>
          vs - which one to use? ScrollView simply renders all its react child components at once. That makes it very easy to understand and use. On the other hand, this has a performance downside. Imagine you have a very long list of items you want to display, worth of couple of your ScrollView’s heights. Creating JS components and native views upfront for all its items, which may not even be shown, will contribute to slow rendering of your screen and increased memory usage.
          </Text>
          <Text style={style.txt}>This is where ListView comes into play. ListView renders items lazily, just when they are about to appear. This laziness comes at cost of a more complicated API, which is worth it unless you are rendering a small fixed set of items.</Text>
          <Text style={style.txt}>
          vs - which one to use? ScrollView simply renders all its react child components at once. That makes it very easy to understand and use. On the other hand, this has a performance downside. Imagine you have a very long list of items you want to display, worth of couple of your ScrollView’s heights. Creating JS components and native views upfront for all its items, which may not even be shown, will contribute to slow rendering of your screen and increased memory usage.
          </Text>

          <Image source={require('../image/mao.jpg')} style={{width:100,height:80}} ></Image>
          <Text style={style.txt}>This is where ListView comes into play. ListView renders items lazily, just when they are about to appear. This laziness comes at cost of a more complicated API, which is worth it unless you are rendering a small fixed set of items.</Text>
          <Text style={style.txt}>
          vs - which one to use? ScrollView simply renders all its react child components at once. That makes it very easy to understand and use. On the other hand, this has a performance downside. Imagine you have a very long list of items you want to display, worth of couple of your ScrollView’s heights. Creating JS components and native views upfront for all its items, which may not even be shown, will contribute to slow rendering of your screen and increased memory usage.
          <Image source={require('../image/mao.jpg')} style={{width:100,height:80}} ></Image>
          </Text>

        </ScrollView>
        {btnIsShow?<TouchableOpacity
          style={style.button}
          onPress={() => { _scrollView.scrollTo({y: 0}); }}>
          <Image
            source={require('../image/iconfont-fudongxiangshang.png')}
            style={{width:50,height:50,resizeMode:'contain'}}>
          </Image>
        </TouchableOpacity>:null}
      </View>
    );
  }
}

const style = StyleSheet.create({
  contentContainer :{
    padding: 20,
  },
  txt:{
    marginTop:10
  },
  button: {
    padding: 40,
    flexDirection:'row',
    alignItems: 'center',
    borderRadius: 3,
    position:'absolute',
    bottom:0,
    right:0
  },

})
