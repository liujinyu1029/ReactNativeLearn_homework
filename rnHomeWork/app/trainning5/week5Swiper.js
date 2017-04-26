import React, {Component} from 'react'
import { View, StyleSheet,Image,Dimensions} from 'react-native'

import {Swiper} from './Swiper';

export default class scrollImage extends Component{
	render(){
		return (
			<View style={{flex:1,justifyContent :'flex-start',paddingTop:20}} >
				<Swiper
					height={280}
					duration={200}//duration 值要小于gap
					gap={600}
				>
					<Image style={styles.imgStyle} source={require('./../image/mao.jpg')} />
          			<Image style={styles.imgStyle} source={require('./../image/mao1.jpg')} />
         			<Image style={styles.imgStyle} source={require('./../image/mao2.jpeg')} />
				</Swiper>
			</View>
		)
	}
};

const styles = StyleSheet.create({
    imgStyle :{
      width:Dimensions.get('window').width,
      resizeMode:"cover",
      height:300
    },
    cont:{
      flexDirection : 'row',
    },
    loginStyle:{
      marginTop:40,width:150,backgroundColor:'#bbb'
    }
  })