import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Icon, Avatar } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";

export default function ButtonBuy({ number, handleAdd, handleSub }) {
  if (number === 0)
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonFirt} onPress={handleAdd}>
          <Icon name="add-circle" color="#E46613" />
          <Text style={styles.textFirt}>Add to card</Text>
        </TouchableOpacity>
      </View>
    );
  if (number !== 0)
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={[styles.buttonAdd, {  borderColor: "#CF0C26", }] }onPress={handleAdd}>
            <Ionicons name="add-outline" size={25} color="#fff" />
          </TouchableOpacity>
          <View style={[styles.buttonAdd, { backgroundColor: "#fff", borderColor: "#fff", }]}>
            <Text style={{ fontSize: 20 }}>{number}</Text>
          </View>

          <TouchableOpacity
            style={[styles.buttonAdd, { backgroundColor: "#fff", borderColor: "gray", }]}
            onPress={handleSub}
          >
            <Ionicons name="remove-outline" size={25} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal:50,
    backgroundColor: "#FFF",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth:1,
    borderTopColor:'#F12CC7'
  },
  content: {
    flexDirection: "row",

    alignItems: "center",
  },
  buttonFirt: {
    backgroundColor: "#fff",
    width: 150,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",
  },
  textFirt: {
    color: "#D87A0F",
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonAdd: {
    width: 30,
    backgroundColor: "#CF0C26",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "black",
  },
});
