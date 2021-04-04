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
import FormatMoney from "../../../Program/FormatMoney";
import styles from "./style";
import { AppContext } from "../../../AppContext";
export default function ProductDetail({ route, navigation }) {
  const { transData } = route.params;
  const [isColor, setIsColor] = useState(false);
  const data = Products.find((item) => item.id === transData.id);
  const {
    theme,
    setTheme,
    productArray,
    setProductArray,
    status,
    setStatus,
  } = useContext(AppContext);

  const background = () => {
    return theme.is ? theme.light.backgroundWhite : theme.light.backgroundWhite;
  };

  const [product, setProduct] = useState({});

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
      //dem phan tu product
      return 0;
    }
    return product.count;
  };
  const buttonBuy = () => {
    if (Object.keys(product).length === 0) {
      return;
    }
    setProductArray((state) => {
      return [...state, product];
    });
    setProduct({});
    navigation.navigate("HomeScreen");
  };
  const handleStatus = () => {
    setIsColor(!isColor);
    const findItem = status.find((item) => item.name === data.name);
    if (findItem) return;
    return setStatus((state) => {
      return [...state, data];
    });
  };
  const dimensions = Dimensions.get("window");

  return (
    <View style={[styles.container, { backgroundColor: background() }]}>
      <Header title={data.name} onBack="Back" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <TouchableOpacity
          style={{ width: '100%', height: dimensions.width * 1.1 }}
         // onLongPress={()=>handleStatus()}
        > */}
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
        {/* </TouchableOpacity> */}
        <View style={background()}>
          <ButtonBuy
            number={renderNumber()}
            handleAdd={handleAdd}
            handleSub={handleSub}
          />
        </View>
        <View style={background()}>
          <TouchableOpacity style={styles.confirm} onPress={buttonBuy}>
            <Ionicons name="card-outline" size={25} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 14 }}>
              Purchase confirmation
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.textProduct}>{data.name}</Text>
          <View style={styles.viewDetail}>
            <Text>{data.details}</Text>
          </View>
          <View style={styles.viewPrice}>
            <Text style={styles.textPrice}>
              Price: {FormatMoney.moneyFormat(data.price)}
            </Text>
          </View>
          <View style={styles.viewColor}>
            <Text style={styles.textColor}>Colour: {data.colour}</Text>
            <Text style={styles.textColor}>Genre: {data.genre}</Text>
          </View>
          <View
            style={[
              styles.viewColor,
              { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
            ]}
          >
            <Text style={styles.textSize}>Size: {data.sizes.toString()}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ position: "absolute", marginTop: 420, left: 10 }}
          onPress={() => handleStatus()}
        >
          <Ionicons name="heart" size={35} color={isColor ? "red" : "pink"} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
