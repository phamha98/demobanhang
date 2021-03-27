import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { AppContext } from "../../AppContext";

import { Ionicons } from "react-native-vector-icons";
const { width } = Dimensions.get("screen");
export default function TabBar({ state, descriptors, navigation }) {
  const { theme } = useContext(AppContext);
  const styleTheme = () => {
    return theme.is ? theme.light : theme.dark;
  };
  const styleBox = () => {
    return theme.is ? theme.light.backgroundBox: '#1E293D' ;
  };
  const styleColor = (routerName) => {
    return theme.is ? renderColor(routerName) : renderColor2(routerName);
  };
  const [select, setSelect] = useState("HomeScreen");
  const { routes } = state;
  const renderColor = (currentTab) =>
    currentTab === select ? "tomato" : "#54D669";
  const renderColor2 = (currentTab) =>
    currentTab === select ? "tomato" : "#FF01F2";

  //   const renderIcon = (currentTab, route) => {
  //     console.log(route.params.icon+'cout');
  //     return currentTab === select ? route.params.icon : route.params.icon;
  //   };
  const handlePress = (active) => {
    navigation.navigate(active);
    setSelect(active);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, {backgroundColor:styleBox()}]}>
        {routes.map((route) => (
          <View key={route.key}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => handlePress(route.name)}
            >
              <Ionicons
                name={route.params.icon}
                //name={renderIcon(route.name, route)}
                color={styleColor(route.name)}
                size={25}
              />
              <Text style={{ color: styleColor(route.name), fontSize: 13 }}>
                {route.params.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: 'green',
    width,
  },
  wrapper: {
    width: 350,
    borderRadius: 20,
    height: 40,
    backgroundColor: "#fff",
    flexDirection: "row",
    position: "absolute",
    bottom:2,
    //marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth:0.2,
    borderColor:'#E00FB3'
    
  },
  item: {
    alignItems: "center",
    margin: 20,
  },
});
