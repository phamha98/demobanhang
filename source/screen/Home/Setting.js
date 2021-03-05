import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../component/Header";

export default function Setting({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Setting"  onBack="Home" navigation={navigation} />
      <Text style={styles.textItem}> Xinchao</Text>
       
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textItem: {
    color: "red",
    fontSize: 30,
  },
  back2:{
      backgroundColor:'red',
      width:300,
      height:50,
      alignItems:'center',
      justifyContent:'center'
  }
});
