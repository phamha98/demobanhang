import React, { useState, useContext } from "react";
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
import Header from "../../../component/Header";
import { Avatar } from "react-native-elements";
import { Ionicons } from "react-native-vector-icons";
import AwesomeAlert from "react-native-awesome-alerts";
import { AppContext } from "../../../AppContext";

export default function Person({ navigation }) {
  const [showAlert, setShowAlert] = useState(false);
  const { theme, acount, setAcount } = useContext(AppContext);
  const styleTheme = () => {
    return theme.is ? theme.light : theme.dark;
  };
  const styleBox = () => {
    return theme.is ? theme.light.backgroundBox : theme.dark.backgroundBox;
  };
  //const navigation = useNavigation();
  const styleColor = () => {
    return theme.is ? theme.light.color : theme.dark.color;
  };
  return (
    <View style={[styles.container, styleTheme()]}>
      <Header title="Person" onBack="Back" navigation={navigation} />
      <ScrollView>
        <View style={styles.viewAvatar}>
          <Avatar
            rounded
            size="xlarge"
            activeOpacity={0.7}
            onPress={() => Alert.alert("Ban muon thay doi anh dai dien")}
            source={{ uri: acount.avatar }}
            style={styles.avatar}
          ></Avatar>
          <Text style={{ fontSize: 24 }}>{acount.fullname}</Text>
          <TouchableOpacity style={styles.add}>
            <Ionicons
              name="add-circle-outline"
              size={26}
              color="#fff"
            ></Ionicons>
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
              {" "}
              Chỉnh sửa
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewInfomation}>
          <View style={[styles.rowInfo, { backgroundColor: styleBox() }]}>
            <Ionicons name="map" size={26} color="#E6A630" />
            <Text style={styles.textInfo}>Địa chỉ:{acount.address}</Text>
          </View>
          <View style={[styles.rowInfo, { backgroundColor: styleBox() }]}>
            <Ionicons name="today" size={26} color="#28E9D9" />
            <Text style={styles.textInfo}>Ngày sinh:{acount.birth}</Text>
          </View>
          <View style={[styles.rowInfo, { backgroundColor: styleBox() }]}>
            <Ionicons name="call" size={26} color="#44CC4F" />
            <Text style={styles.textInfo}>Số điện thoại:{acount.phone}</Text>
          </View>
        </View>
        <View style={styles.viewLogout}>
          <TouchableOpacity
            style={styles.buttonLogout}
            onPress={() => setShowAlert(true)}
          >
            <AwesomeAlert
              show={showAlert}
              showProgress={false}
              title="Bạn có chắc chắn muốn đăng xuất ?"
              message="Are you sure you want to log out !"
              closeOnTouchOutside={false} //outline
              closeOnHardwareBackPress={false} //back
              showCancelButton={true}
              showConfirmButton={true}
              cancelText="Quay lại"
              confirmText="Đồng ý"
              confirmButtonColor="red"
              cancelButtonColor="#DD6B55"
              onCancelPressed={() => {
                setShowAlert(false);
              }}
              onConfirmPressed={() => {
                navigation.replace("Login");
              }}
            />
            <Text style={{ color: "#fff" }}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
