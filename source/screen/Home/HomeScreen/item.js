import React, { useState ,useContext} from "react";
import styles from "./styles";
import FormatMoney from "../../../Program/FormatMoney";

import {
  Button,
  Platform,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { AppContext } from "../../../AppContext";

const ViewItem = ({ item, navigation }) => {
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
  const choiseColor = (a) => {
    if (a === "Red") return "red";
    if (a === "Multicoloured") return "red";
    if (a === "Brown") return "brown";
    if (a === "White") return "white";
    if (a === "Anthracite grey") return "#343E40";

    return "#000";
  };
  const backGround = (a) => {
    if (a === "White") return "gray";
    if (a === "Multicoloured") return "yellow";
    return "white";
  };
  return (
    <TouchableOpacity
      style={styles.viewItem}
      onPress={() => {
        navigation.navigate("ProductDetail", { transData: item });
      }} //
    >
      <View style={[styles.viewContent,{backgroundColor:styleBox()}]}>
        <Image source={{ uri: item.thumbImage }} style={styles.imageItem} />
        <View style={styles.viewText}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: "#ff8003",
              textAlign: "center",
            }}
          >
            {item.name}
          </Text>

          <Text style={[styles.price,{color:styleColor()}]}>
            <Ionicons name="card-outline" color="#0632F7" size={16} />{" "}
            {FormatMoney.moneyFormat(item.price)}{styleColor()}
          </Text>
          <Text style={{color:styleColor()}}>
            Màu
            <Ionicons
              name="color-palette-outline"
              color="#f70672"
              size={16}
            />{" "}
            <Text
              style={{
                color: choiseColor(item.colour),
                backgroundColor: backGround(item.colour),
              }}
            >
              {item.colour}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ViewItem;
