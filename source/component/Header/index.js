import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
function Header({ title, onBack, navigation }) {
  const CheckVisibleBackBtn = () => {
    if (onBack === null) return null;
    if (onBack === "Home") {
      return (
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu-outline" size={30} color="#10151c"></Ionicons>
          <Text style={styles.backText}>Menu</Text>
        </TouchableOpacity>
      );
    }
    if (onBack === "Back") {
      return (
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back-outline" size={30} color="#10151c"></Ionicons>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={styles.container}>
      <CheckVisibleBackBtn />
      <View style={{ flex: 9 }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

Header.defaultProps = {
  title: "Title",
  onBack: null,
};

const styles = StyleSheet.create({
  container: {
    //
    height: 30,
    marginHorizontal:10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#1a3e6c",
    marginHorizontal:5,
    borderRadius:3
  },
  title: {
    fontSize: 20,
    color: "#1a3e6c",
  },
  backBtn: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft:12,
    position:'absolute',
    top:0,
    left:0
  },
  backText: {
    fontSize: 15,
    color: "#1a3e6c",
  },
});

export default Header;
