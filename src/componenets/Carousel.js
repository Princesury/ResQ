import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Carousel() {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef();

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatListRef.current.scrollToIndex({
          index: 0,
          animated: true, // Corrected to "animated"
        });
      } else {
        flatListRef.current.scrollToIndex({
          index: activeIndex + 1,
          animated: true, // Corrected to "animated"
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]); // Added dependency array to avoid unnecessary setInterval calls

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const carouselData = [
    {
      id: "01",
      image: require("../img/Queimg.jpg"),
    },
    {
      id: "02",
      image: require("../img/Queue.jpg"),
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={{ height: 170, width: screenWidth-70,marginRight:30,borderRadius:15,marginLeft:10,marginTop:10}} />
      </View>
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  // const RenderDotIndicator = () => {
  //   return (
  //     <View style={styles.dotIndicatorContainer}>
  //       {carouselData.map((dot, index) => (
  //         <View
  //           key={`dot-${index}`}
  //           style={[
  //             styles.dot,
  //             activeIndex === index ? styles.activeDot : styles.inactiveDot,
  //           ]}
  //         />
  //       ))}
  //     </View>
  //   );
  // };

  return (
    <View>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ref={flatListRef}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dotIndicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop:5,
   backgroundColor:'#E7E7E7',
   marginLeft:135,
   marginRight:135,
   borderRadius:10,
   height:15,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 6,
    marginTop:2
  },
  activeDot: {
    backgroundColor: "grey",
  },
  inactiveDot: {
    backgroundColor: "#fff",
  },
});
