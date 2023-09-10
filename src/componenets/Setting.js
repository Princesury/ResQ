import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'

export default function Setting() {
  return (
    <View style={styles.container}>
    <View style={styles.headerView}>
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
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerView: {
    backgroundColor: "#00A877",
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "row",
    opacity: 0.8,
  },
  name:{
    flexDirection:'row'
  },
  headertxt: {
    fontSize: 25,
    fontWeight: "800",
    color: "white",
  },
})