import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'

import {Home, Page1, Page2,Page3} from 'screen';
import listData from './data/listData.json';

/**
 * 代表一个完整的APP
 * APP的入口
 * Navigator 参考文档 https://reactnavigation.org/docs/intro/
 * 目前没有中文资料
 */
 console.log(22,Page1)
 export default (
   StackNavigator({
     Home : {
       screen : Home,
       navigationOptions : {
         title : "首页"
       }
     },
     Page1 : {
       screen : Page1,
       navigationOptions : {
         title : listData.d[0].title
       }
     },
     Page2 : {

       screen : Page2,
       navigationOptions : {
         title : listData.d[1].title
       }
     },
     Page3 : {

       screen : Page3,
       navigationOptions : {
         title : listData.d[2].title
       }
     }
   })
 )
