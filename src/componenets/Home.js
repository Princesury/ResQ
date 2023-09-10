import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from "react-native";
import React, { useref, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Scanner from "./Scanner";
import LottieView from "lottie-react-native";
import { TextInput } from "react-native-gesture-handler";
import Search from "./Search";
import Carousel from "./Carousel";
import Product from "./Product";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { color } from "react-native-reanimated";


export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
          <StatusBar  barStyle = "dark-content" hidden = {false} backgroundColor = "#00A877" translucent = {true} />
      <View style={styles.headerrView}>
        <View style={styles.name}>
          <Text style={styles.headertxt}>Res</Text>
          <Image
            source={require("../img/Q.png")}
            style={{
              height: 26,
              width: 26,
              backgroundColor: "white",
              marginTop: 5,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.Scanbtn}
          onPress={() => navigation.navigate('Notify')}
        >
          <Image source={require('../img/bell.png')} style={{height:22,width:22,marginTop:8,marginLeft:10}} />
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            marginTop: 10,
            paddingBottom: 5,
            marginLeft: 15,
          }}
        >
          Which Services you Want to Use today ?
        </Text>
        <View style={styles.view}>
        <Image
          source={require("../img/search.png")}
          style={{ height: 25, width: 25, marginLeft: 20, marginTop: 11 }}
        />
        <TextInput
          placeholder='Search "Anything"'
          clearButtonMode="always"
          style={styles.inputtxt}
          onFocus={() => {
            navigation.navigate("Search");
          }}
        />
      </View>
      <View>
        <Image source={require('../img/BlackYellow.png')} style={styles.mainImg}
        resizeMode="contain" />
      </View>
        <Product />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerrView: {
    backgroundColor: "#00A877",
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    opacity: 0.8,
  },
  name: {
    flexDirection: "row",
  },
  headertxt: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
  },
  Scanbtn: {
    marginHorizontal: "65%",
  },

  animationStyle: {
    height: 390,
    elevation: 80,
    shadowColor: "grey",
  },
  view: {
    height: 235,
    backgroundColor: "white",
    flexDirection: "row",
    backgroundColor: "#E7E7E7",
    height: 45,
    width: 340,
    marginTop: 5,
    borderRadius: 15,
    marginLeft: 10,
  },
  lottieView: {
    height: 340,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  inputtxt: {
    paddingHorizontal: 20,
    height: 45,
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 7,
  },
  mainImg:{
    height:160,
    width:340,
    borderRadius:15,
    marginLeft:10,
    marginTop:15,
  }
});
