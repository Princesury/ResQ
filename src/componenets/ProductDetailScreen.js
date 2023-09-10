import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const ProductDetailScreen = ({ route }) => {
  const ScreenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();
  const { productName, productDescription } = route.params;
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={true}
      />
        <View
          style={{
            marginTop: 50,
            paddingBottom: 15,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../img/close.png")}
            style={{
              height: 16,
              width: 16,
              marginLeft: 30,
              marginBottom: 10,
            }}
          />
           </TouchableOpacity>
        </View>
      <View style={styles.boxView}>
        <Image
          source={require("../img/cutlery.png")}
          style={{ height: 80, width: 80, marginRight: 20, borderRadius: 10 }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.title}>BarbeQ</Text>
          <Text style={{ fontSize: 15 }}>Pune</Text>
          <Text>Wait: 06</Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "column", alignItems: "center", marginTop: 30 }}
      >
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            marginRight: 90,
            marginLeft: 70,
            
          }}
        >
          Add Member
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={incrementCount} style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.countText}>{count}</Text>
        <TouchableOpacity onPress={decrementCount} style={styles.btn}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        </View>
      </View>

        <View
          style={{
            height: 50,
            width: ScreenWidth-30,
            backgroundColor: "#00A877",
            opacity: 0.8,
            marginTop: 100,
            marginLeft:15,
            borderRadius:15
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Token")}>
          <Text style={{ fontSize: 25, alignSelf: "center", paddingTop: 5 , color:'#fff',fontWeight:'600'}}>
            Reserve
          </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 1,
  },
  productDescription: {
    fontSize: 16,
    color: "#666",
  },
  boxView: {
    backgroundColor: "#fff",
    padding: 30,
    marginTop: 10,
    borderRadius: 15,
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    elevation:17,
    shadowOpacity:0.8
  },
  btn: {
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight:10,
    paddingTop:2,
    paddingBottom:2,
    borderRadius: 5,
    marginHorizontal: 5,
    borderColor:'#00A877',
    borderWidth:2
  },
  btnText: {
    fontSize: 30,
    fontWeight: "bold",
    color:'#00A877'
  },
  countText: {
    fontSize: 50,
    color:'#00A877'
  },
});

export default ProductDetailScreen;
