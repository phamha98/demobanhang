import React, { useState, useContext } from "react";
import styles from "./style";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  ScrollView,
  Alert,
  ImageBackground,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import Users from "../../service/Users";
import { Ionicons } from "react-native-vector-icons";
import { AppContext } from "../../AppContext";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { acount, setAcount } = useContext(AppContext);
  const test = () => {
    const findAcount = Users.filter(
      (item) => item.username === user && item.password === password
    );
    if (findAcount.length === 0) {
      return false;
    }
    setAcount(findAcount[0]);
    return true;
  };
  const handleLogin = () => {
    if (user.trim() === "") {
      return Alert.alert("Tài khoản không được để trống");
    }

    if (password.trim() === "") {
      return Alert.alert("Mật khẩu không được để trống");
    }
    if (!test()) {
      return Alert.alert("Tài khoản hoặc mật khẩu không đúng");
    }

    navigation.replace("Drawer");
  };
  const handleRegister = () => {
    return navigation.navigate("Registers");
  };
  const handleForgot = () => {
    return navigation.navigate("Forgot");
  };
  const [statePass, setStatePass] = useState(true);
  const hindePass = () => {
    setStatePass(!statePass);
  };
  const imageBackground = "../../../source/image/hinhnen.jpg";
  return (
    <View style={styles.container}>
      <ImageBackground source={require(imageBackground)} style={{ flex: 1 }}>
        <ScrollView>
          {/*<StatusBar hidden={!hidden} />*/}
          <View style={styles.Logo}>
            <Image
              source={require("../../../source/image/logo1.png")}
              style={styles.imgLogo}
            />
          </View>
          <View style={styles.viewContent}>
            <View style={styles.rowInput}>
              <Ionicons
                name="person"
                size={30}
                color="black"
                style={{ position: "absolute", left:10 }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Nhập vào tên đăng nhập"
                value={user}
                onChangeText={(text) => setUser(text)}
              />
            </View>
            <View style={styles.rowInput}>
              <Ionicons
                name="key"
                size={30}
                color="black"
                style={{ position: "absolute", left:10 }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Nhập vào mật khẩu"
                secureTextEntry={statePass}
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <Ionicons
                onPress={hindePass}
                style={{ position: "absolute", right: 10 }}
                name={statePass ? "eye-off-outline" : "eye-outline"}
                color="gray"
                size={28}
              ></Ionicons>
            </View>
            <TouchableOpacity style={styles.rowLogin} onPress={handleLogin}>
              <Text style={{ color: "#fff", fontSize: 20 }}>Đăng Nhập</Text>
            </TouchableOpacity>
            <View style={styles.rowRegister}>
              <TouchableOpacity onPress={handleRegister}>
                <Text style={{ color: "#4684b3", fontSize: 15 }}>Đăng ký</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleForgot}>
                <Text style={{ color: "#4684b3", fontSize: 15 }}>Quên</Text>
              </TouchableOpacity>
            </View>
          
          <TouchableOpacity
            style={[styles.rowLink, { backgroundColor: "#fff" }]}
          >
             <Ionicons
                name="logo-google"
                size={20}
                color="tomato"    
              />
            <Text style={{ color: "#000" }}> Login with Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.rowLink,
              { backgroundColor: "#4267b2", borderColor: "#4267b2" },
            ]}
          >
            <Ionicons
                name="logo-facebook"
                size={20}
                color="#fff"    
              />
            <Text style={{ color: "#fff" }}> Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.rowLink,
              { backgroundColor: "#CCCC99", borderColor: "#cd2893" },
            ]}
          >
            <Ionicons
                name="logo-instagram"
                size={20}
                color="black"    
              />
            <Text style={{ color: "#000" }}> Login with Instagram</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
