import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../component/Header";
import {
  Icon,
  Tooltip,
  SocialIcon,
  Avatar,
  SearchBar,
  Rating,
  AirbnbRating,
} from "react-native-elements";
export default function Favorite({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Favorite" onBack="Back" navigation={navigation}/>
      <AirbnbRating
        count={11}
        reviews={[
          "Terrible",
          "Bad",
          "Meh",
          "OK",
          "Good",
          "Hmm...",
          "Very Good",
          "Wow",
          "Amazing",
          "Unbelievable",
          "Jesus",
        ]}
        defaultRating={11}
        size={20}
      />
      <Rating
        showRating
         
        style={{ paddingVertical: 10 }}
      />
      <Rating
        type="custom"
        ratingImage={require("../../../source/image/ngoisao.jpg")}
        ratingColor="#3498db"
        ratingBackgroundColor="#c8c7c8"
        ratingCount={10}
        imageSize={30}
        style={{ paddingVertical: 10 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
  textItem: {
    color: "red",
    fontSize: 30,
  },
  back2: {
    backgroundColor: "red",
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
