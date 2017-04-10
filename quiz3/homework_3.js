import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

var imageData = require('./ImageData.json');
const Width = Dimensions.get('window').width;

export default class loginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage:0
    }
  }
  render(){
      return(
          <View style={styles.container}>
              {/* 实例化ScrollView */}
              <ScrollView style={styles.scrollViewStyle}
                          horizontal={true}   // 水平方向
                          showsHorizontalScrollIndicator={false}  // 隐藏水平指示器
                          showsVerticalScrollIndicator={false}    // 隐藏垂直指示器
                          pagingEnabled={true}    // 开启分页功能
                          onMomentumScrollEnd={this.onAnimationEnd.bind(this)}   // 当一帧滚动完毕的时候调用
              >
                  {this.renderItem()}
                  {/* 实例化分页指示器 */}
              </ScrollView>
              <View style={styles.pagingIndicatorStyle} >
                {this.renderPagingIndicator()}
              </View >
          </View>

      );
  }
  // 分页指示器
  renderPagingIndicator() {
      var itemAry = [], autoColor;
      // 获取json中图片
      var  imgAry = imageData.data;
      // 根据json数据实例化视图
      for (var i = 0; i<imgAry.length; i++) {
          // 取出单个对象
          var item = imgAry[i];
          // 跟随当前页改变对应 点 的颜色
          autoColor = (this.state.currentPage === i) ? {color:'orange'} : {color:'white'}
          // 将子视图放进 itemAry
          itemAry.push(
              // 实例化视图
              <Text key={i} style={[{fontSize:30}, autoColor]}>&bull;</Text>
          )
      }
      // 返回数组
      return itemAry;
  }
  // 监听滚动
   onAnimationEnd(e){
       // 求出水平方向上的偏移量
       var offSetX = e.nativeEvent.contentOffset.x;
       // 计算当前页码
       var currentPage = offSetX / Width;
       // 重新绘制UI
       this.setState({
           currentPage:currentPage
       });
   }
  // scrollView子视图
  renderItem() {
      var itemAry = [];
      // 获取json中图片
      var imgAry = imageData.data;
      // 根据json数据实例化视图
      for (var i = 0; i<imgAry.length; i++) {
          // 取出单个对象
          var item = imgAry[i];
          // 将子视图放进 itemAry
          itemAry.push(
              // 实例化子视图
              <Image key={i} style={styles.itemStyle} source={{uri:item.img}} />
          )
      }
      // 返回数组
      return itemAry;
  }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white'
    },
    scrollViewStyle: {
        // 背景色
        backgroundColor:'yellow',
        // 上边距
        marginTop:20
    },
    itemStyle: {
        // 尺寸
        width:Width,
        height:200,
    },
    pagingIndicatorStyle: {
        // 背景色(使背景色为全透明)
        backgroundColor:'rgba(255,255,255,0)',
        // 尺寸
        width:Width,
        // 主轴方向与对齐方式
        flexDirection:'row',
        justifyContent:'center',
        // 绝对定位,使页码指示器盖在scrollView上面
        position:'absolute',
        bottom:0
    }
});
