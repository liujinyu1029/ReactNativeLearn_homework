import React, {Component} from 'react'
import { AppRegistry, ListView, Text, View,	StyleSheet,TouchableOpacity,Image,Dimensions } from 'react-native';

import {BarButton} from "component"
import listData from '../data/listData.json';

var THUMB_URLS = [
  require('./../../../image/mao.jpg'),
  require('./../../../image/mao1.jpg'),
  require('./../../../image/mao2.jpeg')
  ];
export default class Home extends Component{
  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(listData.d)
    };
  }
  _renderRow(rowData: string,sectionID: number, rowID: number) {
    return (
        <TouchableOpacity style={styles.row} onPress={this._goto(rowData.page)}>
            <View style={styles.con}>
              <Text style={{fontWeight:'bold',fontSize:20}}>{rowData.title}</Text>
              <Image style={styles.thumb} source={THUMB_URLS[rowID]} />
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              	<Text>讲师：{rowData.teacher}</Text>
              	<Text>更新到：{rowData.updata}</Text>
              </View>
              <Text style={{flex:1,fontSize:16,color:'#666',marginTop:5}}>
                {rowData.txt}
              </Text>
            </View>
        </TouchableOpacity>
    );
   }
  _goto = name => {
    return () => {
      this.props.navigation.navigate(name)
    }
  }
  render(){
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    )
  }
}

const styles =StyleSheet.create({
  row: {
  	flexDirection : 'column',
    justifyContent: 'flex-start',
    alignItems : 'center',
		backgroundColor:'#fff',
    padding:10
  },
  con:{
  	flex:1,
  	backgroundColor : '#fff',
  	borderBottomWidth: StyleSheet.hairlineWidth ,
  	borderBottomColor:'#666',
		paddingBottom:10
  },
  thumb: {
	   width:Dimensions.get('window').width-20,
  	resizeMode:"cover",

  },
});
