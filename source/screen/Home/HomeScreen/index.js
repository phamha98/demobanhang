import React, { useState, useContext, useRef } from "react";
import styles from "./styles";
import {
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
import { Button } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import Products from "../../../service/Products";
import Header from "../../../component/Header";
import FormatMoney from "../../../Program/FormatMoney";
import ViewItem from "./item";
import { AppContext } from "../../../AppContext";
import { Transition, Transitioning } from "react-native-reanimated";
export default function Home({ navigation }) {
  const [hidden, setHidden] = useState(false);
  const [productData, setProductData] = useState(Products);
  const [isFilter, setIsFilter] = useState(false);
  const [colorFilter, setColorFilter] = useState({
    color1: "red",
    color2: "black",
    color3: "black",
    color4: "black",
  });
  const defaultColor = {
    color1: "white",
    color2: "white",
    color3: "white",
    color4: "white", 
  };
  const [caseFilter, setCaseFilter] = useState();
  const { theme } = useContext(AppContext);

  const styleTheme = () => {
    return theme.is ? theme.light : theme.dark;
  };
  const choseFilter = (key) => {
    switch (key) {
      case 1: {
        setColorFilter(defaultColor);
        return setColorFilter((state) => {
          return {
            ...state,
            color1: "#2A06F7",
          };
        });
      }
      case 2: {
        setColorFilter(defaultColor);
        return setColorFilter((state) => {
          return {
            ...state,
            color2: "#00FFFF",
          };
        });
      }
      case 3: {
        setColorFilter(defaultColor);
        return setColorFilter((state) => {
          return {
            ...state,
            color3: "#F00CF0",
          };
        });
      }
      case 4: {
        setColorFilter(defaultColor);
        return setColorFilter((state) => {
          return {
            ...state,
            color4: "#FCE300",
          };
        });
      }
    }
  };
  const HeaderFilter = () => {
    const filter = (name) => {
      if (name === 0) {
        return setProductData(Products);
      }
      return setProductData(Products.filter((item) => item.genre === name));
    };

    if (isFilter) {
      return (
        <View style={styles.filterContent}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              filter(0);
              choseFilter(1);
            }}
          >
            <Text style={{ color: colorFilter.color1 }}>Tất cả</Text>
            <Ionicons name='stats-chart-outline'  size={18} color={colorFilter.color1}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              filter(1);
              choseFilter(2);
            }}
          >
            <Text style={{ color: colorFilter.color2 }}>Nam</Text>
            <Ionicons name='man-outline'  size={18} color={colorFilter.color2}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              filter(2);
              choseFilter(3);
            }}
          >
            <Text style={{ color: colorFilter.color3 }}>Nữ</Text>
            <Ionicons name='woman-outline'  size={16} color={colorFilter.color3}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              filter(3);
              choseFilter(4);
            }}
          >
            <Text style={{ color: colorFilter.color4 }}>Trẻ em</Text>
            <Ionicons name='medal-outline'  size={18} color={colorFilter.color4}/>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };
  const transition = (
    <Transition.Together>
      <Transition.In
        type="slide-top"
        durationMs={400}
        interpolation="easeOut"
        propagation="bottom"
      />
      <Transition.Change />
      <Transition.Out
        type="slide-top"
        durationMs={600}
        //interpolation="easeOut"
        propagation="left"
      />
    </Transition.Together>
  );
  const ref = useRef();
  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={[styles.container, styleTheme()]}
    >
      <StatusBar backgroundColor="#123E9C" hidden={hidden} />
      <Header title="Home" onBack="Home" navigation={navigation} />
      <HeaderFilter />
      <TouchableOpacity
        style={{ position: "absolute", right: 40, top: 5 }}
        onPress={() => {
          setIsFilter(!isFilter);
         // choseFilter(1);
          ref.current.animateNextTransition();
        }}
      >
        <Ionicons
          name={isFilter ? "flask" : "flask-outline"}
          size={26}
          color={isFilter ? "red" : "pink"}
        />
      </TouchableOpacity>
      <FlatList
        data={productData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ViewItem navigation={navigation} item={item} />
        )}
        numColumns={2}
      ></FlatList>
    </Transitioning.View>
  );
}
