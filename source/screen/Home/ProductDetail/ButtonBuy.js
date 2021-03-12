import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Icon, Avatar } from "react-native-elements";

export default function ButtonBuy({ number, handleAdd, handleSub }) {
  if (number === 0)
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button1} onPress={handleAdd}>
          <Icon name="add-circle" color="#FFF" />
          <Text style={styles.text1}>Add to card</Text>
        </TouchableOpacity>
      </View>
    );
  if (number !== 0)
    return (
      <View style={styles.container}>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
            <Text style={styles.textButton2}>ADD</Text>
          </TouchableOpacity>
          <Text style={styles.text2}>{number}</Text>
          <TouchableOpacity style={styles.buttonSub} onPress={handleSub}>
            <Text style={styles.textButton2}>SUB</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    margin: 8,
    backgroundColor:'#fff'
  },
  button1: {
    backgroundColor: "#1878f3",
    width: 300,
    height: 40,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
  },
  text1: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  text2: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 25,
  },
  textButton2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  view2: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-between",
  },
  buttonAdd: {
    height: 40,
    width: 80,
    backgroundColor: "#1878f3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  
  },
  buttonSub: {
    height: 40,
    width: 80,
    backgroundColor: "#1878f3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
});
