import { View, Text, TouchableOpacity, Image,Dimensions ,StyleSheet} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Final = () => {
    const navigation = useNavigation();
  const ScreenWidth = Dimensions.get("window").width;
  return (
    <View
      style={{
        marginTop: 45,
        paddingBottom: 15,
      }}
    >
      <TouchableOpacity >
        <Image
          source={require("../img/close.png")}
          style={{
            height: 16,
            width: 16,
            marginLeft: ScreenWidth - 40,
            marginBottom: 2,
          }}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={{flexDirection:'row'}}>
        <Image
          source={require("../img/cutlery.png")}
          style={{ height: 100, width: 100, marginRight: 20, borderRadius: 10 , marginLeft:30 , marginTop:25}}
        />
        
            <View style={{ flexDirection: "column" ,marginTop:25 , marginLeft:20}}>
          <Text style={{fontSize:25, fontWeight:'bold'}}>BarbeQ</Text>
          <Text style={{ fontSize: 18 }}>Pune</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',margin:40,justifyContent:'space-evenly',borderBottomWidth:1,borderColor:'grey'}}>
          <View style={{alignItems:'center',margin:20, borderRightWidth:1, paddingRight:18}}>
          <Text style={{ fontSize: 18 }}>Your Q Number</Text>
          <Text style={{ fontSize: 25, fontWeight:'700' }}>A1</Text>
          </View>
          <View style={{alignItems:'center',margin:20}}>
          <Text style={{ fontSize: 18 }}>Wait (Q)</Text>
          <Text style={{ fontSize: 25, fontWeight:'700' }}>6</Text>
          </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <Text style={{fontSize:20,fontWeight:'700'}}>28/07/2023</Text>
            <View>
                <Text style={{fontSize:20,fontWeight:'700'}}>4 Min</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
            <Text style={{fontSize:20,fontWeight:'700'}}>Number Of Guest:</Text>
            <Text style={{fontSize:20,fontWeight:'700'}}>5</Text>
        </View>
        </View>
      </View>
    
  );
};

export default Final;

const styles = StyleSheet.create({
content:{
    height:450,
    width:300,
    backgroundColor:'#fff',
    borderRadius:15,
    marginTop:50,
    marginLeft:30,
    elevation:14,
    shadowOpacity:0.8
}
})
