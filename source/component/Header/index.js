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
          <Ionicons name="menu-outline" size={35} color="#e42e7f"></Ionicons>
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
          <Ionicons name="arrow-back-outline" size={35} color="#fe7302"></Ionicons>
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
     
    height: 40,
    backgroundColor: "#E1F09D",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    flexDirection: "row",
    borderBottomWidth: 1.5,
    borderBottomColor: "#D349A9",
    marginHorizontal:5,
    borderRadius:7
  },
  title: {
    fontSize: 22,
    color: "#EE0251",
    paddingLeft: 100,
  },
  backBtn: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft:5
  },
  backText: {
    fontSize: 20,
    color: "green",
  },
});

export default Header;
