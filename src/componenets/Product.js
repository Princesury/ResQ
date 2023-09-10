import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Product() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{alignSelf:'center',fontSize:18,marginTop:10,fontWeight:'500'}}>Our Services</Text>
      <View style={{flexDirection:'column',justifyContent:'center' , marginTop:30}}>
      <View style={{marginRight:30 ,marginLeft:30,justifyContent:'space-evenly', flexDirection:'row',marginBottom:20}}> 
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Restaurents")}>
        <View style={styles.View}>
          <Image source={require("../img/ResIcon.png")} style={styles.img} />
          <Text style={styles.txt}>Restaurants</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={{}}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Hospitals")}>
        <View style={styles.View}>
          <Image source={require("../img/HosIcon.png")} style={styles.img}/>
          <Text style={styles.txt}>Hospitals</Text>
        </View>
      </TouchableWithoutFeedback>
      </View>
      </View>
      <View style={{flexDirection:'row',marginRight:30,marginLeft:30,justifyContent:'space-evenly',}}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Banks")}>
        <View style={styles.View}>
          <Image source={require("../img/BankIcon.png")} style={styles.img}/>
          <Text style={styles.txt}>Bank</Text>
        </View>
      </TouchableWithoutFeedback>
      <View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Public-Services")}>
        <View style={styles.View}>
          <Image source={require("../img/busIcon.png")} style={styles.img}/>
          <Text style={styles.txt}>Public-Services</Text>
        </View>
      </TouchableWithoutFeedback>
      </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    backgroundColor: "#f8f7f6",
    marginRight: 37,
    marginLeft:36,
    borderRadius: 15,
    elevation: 11,
    shadowOpacity: 0.8,
    height:120,
    width:150,
    alignItems:'center'
  },
  img: {
    height:70,
    width: 70,
    backgroundColor: "#f8f7f6",
    borderRadius: 10,
    margin: 10,
  },
  txt: {
    fontSize: 12,
    fontWeight: "400",
    alignSelf: "center",
  },
});
