import React, { useState, useContext } from "react";
import Header from "../../../component/Header";
import Context from "../../../Context";
import styles from "./styles";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { Button } from "react-native";
import FormatMoney from "../../../Program/FormatMoney";

export default function Order({ navigation }) {
  const [context, setContext] = useContext(Context);
  const handleBuy = () => {
    setContext([]);
    Alert.alert("Thành công");
    navigation.navigate("HomeScreen");
  };
  const showPrice = () => {
    let price = 0;
    context
      .filter((item) => item.count !== 0) //filter !=0
      .map((item, index) => {
        price = price + item.count * item.price;
      });
    return FormatMoney.moneyFormat(price);
  };
  return (
    <View style={styles.container}>
      <Header title="Order" onBack="Back" navigation={navigation} />
      {/* <Text>Xin chao</Text> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {context
            .filter((item) => item.count !== 0) //filter !=0
            .map((item, index) => {
              return (
                <View style={styles.rowProduct} key={index}>
                  <Image
                    style={styles.imageProduct}
                    source={{ uri: item.thumbImage }}
                  />
                  <View style={styles.contentProduct}>
                    <Text style={styles.textProduct}>{item.name}</Text>
                    <Text style={styles.textNumber}>Number:{item.count}</Text>
                    <Text style={styles.textMoney}>
                      {FormatMoney.moneyFormat(item.count * item.price)}
                    </Text>
                  </View>
                </View>
              );
            })}

          <View style={[styles.rowTotal, { borderBottomWidth: 0 }]}>
            <Text style={styles.textTotal}>Total</Text>
            <Text style={styles.textTotal}>{showPrice()}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text>Dia chi nhan hang</Text>
          <Text>So dien thoai giao hang</Text>
          <TouchableOpacity
            style={styles.buttonBuy}
            onPress={Object.keys(context).length !== 0 ? handleBuy : () => {}}
          >
            <Text style={styles.buttonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
