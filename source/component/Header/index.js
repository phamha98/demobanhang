import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { AppContext } from "../../AppContext";
function Header({ title, onBack, navigation, card }) {
  const { theme } = useContext(AppContext);
  const styleTheme = () => {
    return theme.is ? theme.light : theme.dark;
  };
  const styleBox = () => {
    return theme.is ? theme.light.backgroundBox : theme.dark.backgroundBox;
  };
  //const navigation = useNavigation();
  const styleColor = () => {
    return theme.is ? theme.light.color : theme.dark.color;
  };
  const CheckVisibleBackBtn = () => {
    if (onBack === null) return null;
    if (onBack === "Home") {
      return (
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons
            name="menu-outline"
            size={30}
            color={styleColor()}
          ></Ionicons>
          <Text style={[styles.backText, { color: styleColor() }]}>Menu</Text>
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
          <Ionicons
            name="caret-back-circle-outline"
            size={26}
            color={styleColor()}
          ></Ionicons>
          <Text style={[styles.backText, { color: styleColor() }]}>Back</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: styleBox() }]}>
      <View style={{ position: "absolute", top: 5, left: 0 }}>
        <CheckVisibleBackBtn />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      {card && (
        <TouchableOpacity style={styles.iconCart}>
          <Ionicons
            style={styles.backCard}
            name="cart-outline"
            size={24}
            color={styleColor()}
            onPress={() => navigation.navigate("Order")}
          ></Ionicons>
        </TouchableOpacity>
      )}
    </View>
  );
}

Header.defaultProps = {
  title: "Title",
  onBack: null,
  card: true,
};

const styles = StyleSheet.create({
  container: {
    minHeight: 35,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#DAD7BA",
  },
  title: {
    fontSize: 20,
    color: "tomato",
    maxWidth: 270,
    paddingHorizontal: 5,
    textAlign: "center",
  },
  backBtn: {
    height:'100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 12,

  },
  backText: {
    fontSize: 15,
    color: "#1a3e6c",
  },
  backCard: {},
  iconCart: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 0.2,
    borderColor: "#2A45DD",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1E7E7",
    position: "absolute",
    right: 7,
  },
});

export default Header;
