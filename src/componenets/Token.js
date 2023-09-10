import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";



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
    <TouchableOpacity 
     onPress={() => navigation.navigate('home')}
    >
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




export default function Token() {
  const ScreenWidth = Dimensions.get("window").width;
  const Screenheight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const [animation, setAnimation] = useState(null);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  const loadAnimation = async () => {
    setAnimationLoaded(false);
    setAnimation(
      <LottieView
        source={require("../Animation/homeanimation/TokenAnimation/data.json")}
        autoPlay
        loop={false} // Set loop to false to play the animation only once
        style={{height:370, marginRight:110,marginTop:90}}
        onAnimationFinish={() => {
          // Animation finishes, set animation to null
          setAnimation(null);
        }}
      />
    );
  };

  useEffect(() => {
    loadAnimation();
  }, []); // Run this effect only once when the component mounts

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00A877"
        translucent={true}
      />
     {animationLoaded ? ( // Conditional rendering based on the animationLoaded state
        animation // Render the animation if it's loaded
      ) : (
        <Final /> // Render the Final component if the animation is not yet loaded
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  lottieView: {
    height: 400,
    width:200
  },
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
});
