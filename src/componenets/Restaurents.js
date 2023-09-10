import { StyleSheet, Text, TouchableWithoutFeedback,TouchableOpacity, View,Image } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
export default function Restaurents({route}) {
  const [products, setProducts] = useState([]);
  const navigation   = useNavigation();

  const getAPIData = async () => {
    try{
    const url = "https://dummyapi.online/api/movies";
    let result = await fetch(url);
    result = await result.json();
    setProducts(result);
    }
    catch{
      console.error("Somthing went wrong", error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);



  const renderItem = ({item}) => {
    return(
      <TouchableWithoutFeedback onPress={() => {
      }}>
      <View style={{marginBottom:5,marginLeft:5,flexDirection:'row',backgroundColor:'#fff',}}>
        <Image source={require('../img/foods.jpg')} style={{height:80,width:80,margin:10,borderRadius:10}}/>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:15,fontWeight:'500',margin:5,width:200,marginTop:15}} >{item.movie}</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:16 , fontWeight:'400',marginLeft:5}}>Total:</Text>
          <Text style={{fontSize:16, fontWeight:'400'}}>30</Text>
          <FontAwesome name='star' color={'#FFA500'}  size={16} style={{marginLeft:10,marginTop:2}}/>
          <Text style={{fontSize:16, fontWeight:'400',marginLeft:5}}>4.5</Text>
        </View>
             
        </View>
      </View>
      </TouchableWithoutFeedback>
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
      <View style={{marginLeft:5 ,marginTop: 50,marginBottom:10, flexDirection:'row'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={25} color={'black'} style={{marginLeft:10,marginRight:10}}/>
        </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "500"}}>
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
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
        />
        :null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
   },

});
