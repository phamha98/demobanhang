import React, { useState } from "react";
import styles from "./styles";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { IonIcons, FontAwesome } from "react-native-vector-icons";
import Header from "../../../component/Header";
import { Icon, Avatar } from "react-native-elements";
import Users from "../../../service/Users";

export default function Person({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Person" onBack='Back' navigation={navigation}/>
      <ScrollView>
        <View style={styles.contentView}>
          <Avatar
            rounded
            size="xlarge"
            activeOpacity={0.7}
            onPress={() => Alert.alert("Ban muon thay doi anh dai dien")}
            source={{ uri: Users.avatar }}
            style={styles.avatar}
          ></Avatar>
          <Text style={{ fontSize: 30 }}>{Users.fullname}</Text>
          <TouchableOpacity style={styles.add}>
            <Icon name="add-circle" color="#FFF" />
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              {" "}
              Chỉnh sửa
            </Text>
          </TouchableOpacity>
          <View style={styles.infomation}>
            <FontAwesome
              name="map-marker"
              size={30}
              color="#8a8d94"
              style={styles.fontAwesome}
            >
              <Text style={styles.textFont}> Dia chi:{Users.address} </Text>
            </FontAwesome>
            <FontAwesome
              name="birthday-cake"
              size={30}
              color="#8a8d94"
              style={styles.fontAwesome}
            >
              <Text style={styles.textFont}> Ngày sinh:{Users.birth} </Text>
            </FontAwesome>
            <FontAwesome name="phone" size={30}color="#8a8d94" style={styles.fontAwesome}>
              <Text style={styles.textFont}> {Users.phone}</Text>
            </FontAwesome>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
