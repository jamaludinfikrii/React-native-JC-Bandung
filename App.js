import React, { Component } from 'react';
import { View, Text,ScrollView,Image,TextInput } from 'react-native';

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
        <View style={{height:80,flexDirection:'row',paddingVertical:10
        ,paddingHorizontal:15}}>
          
          <View style={{flex:3}}>
            <Image 
              style={{width:30,height:30,position:'absolute',left:10,top:5}}
              source= {require('./assets/search.png')}
            />
            <TextInput 
              placeholderTextColor='black'
              placeholder='Cari Layanan Gojek ....'
              style ={{height : 50, borderWidth:1 , borderColor:'#E8E8E8',borderRadius:50,
            paddingLeft:45}}
            />
          </View>

          <View style={{flex:1,flexDirection:'row',alignItems:'center',
          height:50 , borderWidth:0.1 , borderColor:'E8E8E8',borderRadius:50}}>
            <Image 
              source={require('./assets/promo.png')} 
              style ={{width:30,height:30}}
             />
             <Text>
               Promo
             </Text>

          </View>
          
          

        </View>
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
        paddingHorizontal:30, paddingVertical:10,
        borderTopColor:'#E8E8E8',borderTopWidth:5}}>
            <View style={{flex:1,alignItems:'center'}}>
              <Image 
                
                style={{width:45,height:45,resizeMode:'contain'}}
                source={require('./assets/tab-beranda.png')}
              />
              <Text style={{fontSize:12}}>Beranda</Text>
            </View>
            <View style={{flex:1,alignItems:'center'}}>
              <Image 
                
                style={{width:45,height:45,resizeMode:'contain'}}
                source={require('./assets/tab-pesanan.png')}
              />
              <Text style={{fontSize:12}}>Pesanan</Text>
            </View>
            <View style={{flex:1,alignItems:'center'}}>
              <Image 
                
                style={{width:45,height:45,resizeMode:'contain'}}
                source={require('./assets/tab-pesan.png')}
              />
              <Text style={{fontSize:12}}>Chat</Text>
            </View>
            <View style={{flex:1,alignItems:'center'}}>
              <Image 
                
                style={{width:45,height:45,resizeMode:'contain'}}
                source={require('./assets/tab-akun.png')}
              />
              <Text style={{fontSize:12}}>Akun</Text>
            </View>
            
        </View>
      </View>
    );
  }
}
