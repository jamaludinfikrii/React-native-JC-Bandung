import React, { Component } from 'react';
import { View, Text,ScrollView,Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
// VIEW == DIV
// TEXT == H, P
  render() {
    return (
      // <View style={{flex:1,flexDirection:'row'}}>
      //     <View style={{flex:3,backgroundColor:'blue',height:100}}>
      //       {/* <Text>Ini View 1</Text> */}
      //     </View>
      //     <View style={{flex:3,backgroundColor:'red',height:100}}>
      //       {/* <Text>Ini View 1</Text> */}
      //     </View>
      //     <View style={{flex:3,backgroundColor:'pink',height:100}}> 
      //       {/* <Text>Ini View 2</Text> */}
      //     </View>
      // </View>
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{height:80,backgroundColor:'red'}}></View>
        <ScrollView>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
          <Text>INi TEXT</Text>
        </ScrollView>
        <View style={{height:80,backgroundColor:'white',flexDirection:'row',
        paddingHorizontal:30,
        borderTopColor:'#E8E8E8',borderTopWidth:5}}>
            <View style={{flex:1}}>
              <Image 
                style={{width:100,height:100}}
                source={require('./assets/tab-beranda.png')}
              />
            </View>
            <View style={{flex:1}}></View>
            <View style={{flex:1}}></View>
            <View style={{flex:1}}></View>
            <View style={{flex:1}}></View>
        </View>
      </View>
    );
  }
}
