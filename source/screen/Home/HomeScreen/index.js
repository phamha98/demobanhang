import React, { useState } from "react";
import styles from "./styles";
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
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Products from "../../../service/Products";
import Header from "../../../component/Header";

function moneyFormat(price, sign = "VND") {
  const pieces = parseFloat(price).toFixed(0).split(""); //phantach chuoi thaeo ki tu
  let ii = pieces.length - 3; //toFixed:chuyen thanh chuoi giu lai thap phan()
  while (ii > 0) {
    pieces.splice(ii, 0, "."); //xoa 0 pt vt ii them vao .
    ii -= 3; //1,234,567
  }
  return pieces.join("") + " " + sign;
}

const viewItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.viewItem}>
      <View style={styles.viewContent}>
        <Image source={{ uri: item.thumbImage }} style={styles.imageItem} />
        <View style={styles.viewText}>
          <Text style={{fontWeight:'bold',fontSize:16,color:'#ff8003'}}>{item.name}</Text>
          <Text style={styles.price}>
            <Ionicons name="card-outline" color="#0632F7" size={16} />{" "}
            {moneyFormat(item.price)}{" "}
          </Text>
          <Text>
            Màu
            <Ionicons
              name="color-palette-outline"
              color="#f70672"
              size={16}
            />{" "}
            {item.colour}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Home({ navigation }) {
  const [hidden, setHidden] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#123E9C"
        hidden={hidden} />
      <Header title="Home" onBack="Home" navigation={navigation} />
      <FlatList data={Products} renderItem={viewItem} numColumns={2} />
    </View>
  );
}
