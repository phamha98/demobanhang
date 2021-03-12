import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Platform,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet, //300dp
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import ViewImage from "./item";
import Products from "../../../service/Products";
import Header from "../../../component/Header";
import { Alert } from "react-native";
import ButtonBuy from "./ButtonBuy";
import Context from "../../../Context";
import FormatMoney from "../../../Program/FormatMoney";
import styles from "./style";
export default function ProductDetail({ route, navigation }) {
  const { transData } = route.params;
  const [product, setProduct] = useState({});
  const data = Products.find((item) => item.id === transData.id);
  const [context, setContext] = useContext(Context);
  const handleAdd = () => {
    if (Object.keys(product).length === 0) {
      //=>length
      return setProduct({ ...transData, count: 1 });
    }
    setProduct((state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    });
  };
  const handleSub = () => {
    setProduct((state) => {
      return {
        ...state,
        count: state.count - 1,
      };
    });
  };
  const renderNumber = () => {
    if (Object.keys(product).length === 0) {
      return 0;
    }
    return product.count;
  };
  const buttonBuy = () => {
    if (Object.keys(product).length === 0) {
      return;
    }
    setContext((state) => {
      return [...state, product];
    });
    navigation.navigate("HomeScreen");
  };
  return (
    <View style={styles.container}>
      <Header title="ProductDetail" onBack="Back" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          data={data.carouselImages}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <ViewImage uri={item}></ViewImage>;
          }}
        ></FlatList>
        <View style={{ backgroundColor: "#fff" }}>
          <ButtonBuy
            number={renderNumber()}
            handleAdd={handleAdd}
            handleSub={handleSub}
          />
        </View>
        <View style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity style={styles.confirm} onPress={buttonBuy}>
            <Text style={{ color: "#fff", fontSize: 14 }}>
              Purchase confirmation
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.textProduct}>{data.name}</Text>
          <Text>{data.details}</Text>
          <Text style={styles.textPrice}>
            Price: {FormatMoney.moneyFormat(data.price)}
          </Text>
          <Text style={styles.textColor}>Colour: {data.colour}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
