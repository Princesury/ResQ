import { StyleSheet, Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Products() {
  const navigation = useNavigation();

  const page = ['Restaurents', 'Hospitals', 'Banks', 'Public-Services'];

  const data = [
    {
      id: "1",
      name: "Restaurants",
      image: require('../img/ResIcon.png'),
    },
    {
      id: "2",
      name: "Hospitals",
      image: require('../img/HosIcon.png'),
    },
    {
      id: "3",
      name: "Bank",
      image: require('../img/BankIcon.png'),
    },
    {
      id: "4",
      name: "Public \nServices",
      image: require('../img/busIcon.png'),
    },
  ];

  const onhandleScreen = (item) => {
    // You can use the `item` parameter directly to get the selected item data
    // and navigate to the appropriate screen based on the item name
    navigation.navigate(item);
  };

  const renderItem = ({ item, index }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onhandleScreen(page[index])}>
          <View style={{ backgroundColor: '#fff', margin: 7, borderRadius: 15, elevation:10,shadowOpacity:0.2,shadowOffset:{height:10,width:10}}}>
            <Image source={item.image} style={{ height: 55, width: 55, backgroundColor: '#fff', borderRadius: 10, margin: 10, }} />
            <Text style={{ fontSize: 12, fontWeight: '400', alignSelf:'center'}}>{item.name}</Text>
          </View>
        </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Services</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    fontWeight: '400',
    alignSelf:'center',

  },
  flatView: {
    alignItems: 'center',
    height:200
  },
});
