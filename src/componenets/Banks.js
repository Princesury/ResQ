import { StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Restaurents() {
  const [products, setProducts] = useState([]);
  const navigation   = useNavigation();

  const getAPIData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setProducts(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);


  const navigateToProductDetail = (productName, productDescription) => {
    navigation.navigate('ProductDetail', {
      productName,
      productDescription,
    });
  };

  const renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={() => {
        navigateToProductDetail(item.title,item.body)
      }}>
      <View style={{marginBottom:10,marginLeft:5,flexDirection:'row',backgroundColor:'#fff'}}>
        <Image source={require('../img/rbi.jpeg')} style={{height:80,width:80,margin:10,borderRadius:10}}/>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:15,fontWeight:'500',marginTop:15,width:250}}>{item.title}</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:18 , fontWeight:'400'}}>Total:</Text>
          <Text style={{fontSize:18 , fontWeight:'400'}}>01</Text>
          <FontAwesome name='star' color={'#FFA500'}  size={16} style={{marginLeft:10,marginTop:4}}/>
          <Text style={{fontSize:16, fontWeight:'400',marginLeft:5}}>4.5</Text>
        </View>
        </View>
      </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
      <View style={{marginLeft: 10 ,marginTop: 50,marginBottom:10, flexDirection:'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={25} color={'black'} style={{marginLeft:10,marginRight:10}}/>
        </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "700"}}>
        View Results
      </Text>
      <TouchableOpacity>
        <MaterialCommunityIcons name="tune" size={25} color={'black'} style={{marginLeft:160}}/>
      </TouchableOpacity>
      </View>
      {
        products.length ? 
        <FlatList  
          data={products}
          renderItem={renderItem}
        />
        :null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#FFFFFF',
   },

});
