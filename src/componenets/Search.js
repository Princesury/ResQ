import { StyleSheet, Text, View,Image,ActivityIndicator,TouchableOpacity  } from "react-native";
import React ,{useState,useEffect} from "react";
import { FlatList, TextInput, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import filter from "lodash.filter";

const API = 'https://dummyapi.online/api/movies'

export default function Search() {
const [searchQuery, setSearchQuery] = useState('');
const [data , setData] = useState([]);
const [IsLoading, setIsLoading] = useState(false)
const [error , setError] = useState(null);
const [FullData, setFullData] = useState([])

const handleSearch = (query) => {
  setSearchQuery(query)
  const formattedquery = query.toLowerCase()
  const filteredData = filter(FullData, (user) => {
    return contains(user , formattedquery)
});
setData(filteredData);
}

const contains = ({movie}, query) => {
  if(movie.includes(query)){
    return true;
  }
  return false;
}

useEffect(() => {
  setIsLoading(true)
  fetchData(API)
},[])

const fetchData = async(url) => {
 try {
 const response = await fetch(url);
 const data1 = await response.json()
 setData(data1)
 console.log(data1)
 setIsLoading(false)
 setFullData(data1)
}

 catch (error) {
    setError(error)
    console.log(error)
  }


}
if(IsLoading){
  return (
      <View style={{flex:1, justifyContent:'center' , alignItems:'center'}}>
        <ActivityIndicator size={"extralarge"} color="#5500dc" />
      </View>
    );
}

if(error){
  return (
    <View style={{flex:1, justifyContent:'center' , alignItems:'center'}}>
     <Text>Error in fetching data... Please check your internet</Text>
    </View>
  );
}


  return (
    
    <View style={styles.container}>
      <StatusBar  barStyle = "dark-content" hidden = {false} backgroundColor = "#FFFFFF" translucent = {true}  />
    <View style={styles.view}>
        <Image source={require('../img/search.png')} style={{height:25,width:25,marginLeft:20,marginTop:11}}/>
        <TextInput placeholder='Search "Anything"' clearButtonMode='always' autoCapitalize="none" autoCorrect={false} value={searchQuery} onChangeText={(query) => handleSearch(query)} style={styles.inputtxt} />
      </View>
      <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return(
          <TouchableOpacity>
                 <View style={styles.serchContainer}>
                  <View style={styles.serchview}>
                    <Text style={styles.txt} numberOfLines={1} adjustsFontSizeToFit={true}>{item.movie}</Text>
                    <Text>Rating: {item.rating}/10</Text>
                  </View>
                  </View>
                  </TouchableOpacity>
        )
      }}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',

  },
  view: {
    height: 235,
    backgroundColor:'white',
    flexDirection:"row",
    backgroundColor:'#fff',
    height:45,
    width:340,
    borderRadius:15,
    marginLeft:10,
    marginTop:45,
    borderWidth:1,
    borderColor:'#ccc',
  },
  inputtxt:{
    paddingHorizontal:20,
    height:45,
    fontWeight:'400',
     fontSize:16,
     marginLeft:7,
     width:200
  },
  serchContainer:{
    flexDirection:"row",
    alignItems:'center',
    marginTop:10,
    marginLeft:15,
    marginBottom:15
  },
  serchview:{
    flexDirection:"column",
  },
  txt:{
    fontSize:14,
    textAlign:"auto",
    marginBottom:5,
    fontWeight:'500'
  }
});
