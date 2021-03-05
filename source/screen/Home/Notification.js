import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { IonIcons, FontAwesome } from "react-native-vector-icons";
import Header from "../../component/Header";
import { Tile } from "react-native-elements";
export default function Notification({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Help" onBack="Back" navigation={navigation} />
      <Tile
        imageSrc={require("../../../source/image/background.png")}
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
        featured
        caption="Some Caption Text"
      />
    </View>
  );
}
