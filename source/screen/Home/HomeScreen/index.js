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
  ImageBackground,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Products from "../../../service/Products";
import Header from "../../../component/Header";
import FormatMoney from '../../../Program/FormatMoney'


const ViewItem = ({ item, navigation }) => {
  //const navigation = useNavigation();
 
  const choiseColor = (a) => {
    if (a === "Red") return "red";
    if (a === "Multicoloured") return "red";
    if (a === "Brown") return "brown";
    if (a === "White") return "white";
    if (a === "Anthracite grey") return "#343E40";

    return "#000";
  };
  const backGround=(a)=>{
    if (a === "White") return "gray";
    if (a === "Multicoloured") return "yellow";
    return 'white';
  }
  return (
    <TouchableOpacity
      style={styles.viewItem}
      onPress={() => {
        navigation.navigate("ProductDetail", { transData: item });
      }} //
    >
      <View style={styles.viewContent}>
        <Image source={{ uri: item.thumbImage }} style={styles.imageItem} />
        <View style={styles.viewText}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#ff8003",
              textAlign: "center",
            }}
          >
            {item.name}
          </Text>

          <Text style={styles.price}>
            <Ionicons name="card-outline" color="#0632F7" size={16} />{" "}
            {FormatMoney.moneyFormat(item.price)}{" "}
          </Text>
          <Text>
            Màu
            <Ionicons
              name="color-palette-outline"
              color="#f70672"
              size={16}
            />{" "}
            <Text style={{ color: choiseColor(item.colour),backgroundColor:backGround(item.colour) }}>
              {item.colour}
              </Text>
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
      <ImageBackground
        source={{
          uri:
            "https://img1.kienthucvui.vn/uploads/2019/10/27/hinh-nen-dien-thoai-android_111220873.jpg",
        }}
        style={styles.imageBackground}
      >
        <StatusBar backgroundColor="#123E9C" hidden={hidden} />
        <Header title="Home" onBack="Home" navigation={navigation} />
        {/* <Button title='click' }></Button> */}
        <Button
          title="Xem gio hang"
          onPress={() => {
            navigation.navigate("Order");
          }}
        />
        <FlatList
          data={Products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ViewItem navigation={navigation} item={item}></ViewItem>
          )}
          numColumns={2}
        ></FlatList>
      </ImageBackground>
    </View>
  );
}
