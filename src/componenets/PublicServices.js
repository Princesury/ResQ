import { StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

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
        <Image source={require('../img/Brt.jpeg')} style={{height:80,width:80,margin:10,borderRadius:10}}/>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:15,fontWeight:'bold',margin:5}}>{item.title}</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:18 , fontWeight:'400'}}>Wait:</Text>
          <Text style={{fontSize:18 , fontWeight:'400'}}>01</Text>
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
        <Image source={require('../img/LeftArrow.png')} style={{height:30,width:30,marginRight:20}} />
        </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "700"}}>
        View Results
      </Text>
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
