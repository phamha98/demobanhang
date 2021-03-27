import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { IonIcons, FontAwesome } from "react-native-vector-icons";
import Header from "../../component/Header";
import { Tile } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getData } from "../../component/AsyncStorage";
import { AppContext } from "../../AppContext";

export default function Notification({ navigation }) {
  const { notify } = useContext(AppContext);
  const [valueData, setValueData] = useState();
  //   getData("notifi").then((result) => {
  //     const data = JSON.parse(result);
  //     return data;
  //   })
  // );

  // const getDataStore = () => {
  //   getData("notifi").then((result) => {
  //     // alert("value"+result)
  //     // const js = JSON.parse(result);
  //     setValueData(result);
  //   });
  // };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Notification" onBack="Back" navigation={navigation} />
      <ScrollView>
        {notify
          .filter((item) => item.count !== 0) //filter !=0
          .map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => alert("xoa")}
                style={styles.content}
              >
                <Image
                  style={{ height: 100, width: 100, resizeMode: "contain" }}
                  source={{
                    uri: item.thumbImage,
                  }}
                />
                <TouchableOpacity style={{ flexDirection: "column" }}>
                  <Text>Name:{item.name}</Text>
                  <Text>Total:{item.name}</Text>
                  <Text>Number:</Text>
                  <Text>Time</Text>
                  <Button title="get"></Button>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "gray",
    marginHorizontal: 10,
    flexDirection: "row",
    marginVertical: 5,
    borderRadius: 5,
  },
});
