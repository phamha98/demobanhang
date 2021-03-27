import React, { useState, useContext } from "react";
import Header from "../../../component/Header";
import { AppContext } from "../../../AppContext";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setData } from "../../../component/AsyncStorage";
export default function Order({ navigation }) {
  const {
    theme,
    acount,
    setNotify,
    productArray,
    setProductArray,
  } = useContext(AppContext);
  const background = () => {
    return theme.is ? theme.light.backgroundWhite : theme.dark.backgroundBlack;
  };
  // const setData = async (key, value) => {
  //   try {
  //     await AsyncStorage.setItem(key, JSON.stringify(value));
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };

  const handleBuy = () => {
    setNotify((state) => {
      return [...state, productArray];
    });

    Alert.alert("Xác nhận đặt hàng ", "Kiểm tra kĩ sản phẩm trước khi mua !", [
      {
        text: "Quay lại",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Tiếp tục",
        onPress: () => {
          Alert.alert("Đặt hàng thành công");
          navigation.navigate("HomeScreen");
          setProductArray([]);
        },
      },
    ]);
  };
  const showPrice = () => {
    if (Object.keys(productArray).length === 0) {
      return FormatMoney.moneyFormat(0);
    }
    let price = 0;
    productArray
      .filter((item) => item.count !== 0) //filter !=0
      .map((item, index) => {
        price = price + item.count * item.price;
      });
    return FormatMoney.moneyFormat(price);
  };
  return (
    <View style={[styles.container, { backgroundColor: background() }]}>
      <Header title="Order" onBack="Back" navigation={navigation}  card={false} />
      {/* <Text>Xin chao</Text> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.contentTop, { backgroundColor: background() }]}>
          {productArray
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
                    <Text style={styles.textNumber}>Number: {item.count}</Text>
                    <Text style={styles.textMoney}>
                      {FormatMoney.moneyFormat(item.count * item.price)}
                    </Text>
                  </View>
                </View>
              );
            })}

          <View style={[styles.rowTotal, { borderBottomWidth: 0 }]}>
            <Text
              style={[
                styles.textTotal,
                { paddingLeft: 20, color: "#3C19D6", fontWeight: "200" },
              ]}
            >
              Payment amount:
            </Text>
            <Text style={styles.textTotal}>{showPrice()}</Text>
          </View>
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.viewAddress}>
            <Text>Địa chỉ nhận hàng:</Text>
            <Text style={{ maxWidth: 210, color: "#087579" }}>
              {acount.address}
            </Text>
          </View>
          <View style={styles.viewAddress}>
            <Text>Số điện thoại giao hàng:</Text>
            <Text style={{ maxWidth: 210, color: "#750879" }}>
              {acount.phone}
            </Text>
          </View>
          <View style={styles.viewAddress}>
            <Text>Người nhận:</Text>
            <Text style={{ maxWidth: 210, color: "#750879" }}>
              {acount.fullname}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.buttonBuy}
            onPress={
              Object.keys(productArray).length !== 0 ? handleBuy : () => {}
            } //xoa trang
          >
            <Text style={styles.buttonText}>Payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
