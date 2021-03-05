import React, { useState } from "react";
import styles from "./styles";
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

export default function Login({ navigation }) {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  const dangnhap = () => {
    if (user.trim() === "") {
      return Alert.alert("Trường tài khoản không được để trống");
    }

    if (password.trim() === "") {
      return Alert.alert("Trường mật khẩu không được để trống");
    }

    if (user !== Users.username || password !== Users.password) {
      return Alert.alert("Tài khoản hoặc mật khẩu không đúng");
    }

    navigation.replace("Drawer");
    //Stack{Login:Regiter:Drawer[TabHome(HomeScreen,Setting,Person,Favorite);Notification;Logout;Help]}
  };
  const handleDangky = () => {
    return navigation.navigate("Registers");
  };
  const textDangky = useState("Đăng ký");
  const [statePass, setStatePass] = useState(false);
  const hindePass = () => {
    setStatePass(!statePass);
  };
  return (
    <View style={styles.containerRoot}>
      <ImageBackground
        source={require("../../../source/image/hinhnen.jpg")}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1 }}>
          {/*<StatusBar hidden={!hidden} />*/}
          <View style={styles.cont1Logo}>
            <Image
              source={require("../../../source/image/logo1.png")}
              style={styles.imgLogo}
            />
          </View>
          <View style={styles.cont2Input}>
            <View style={styles.cont2User}>
              <Image
                source={require("../../../source/image/user.png")}
                style={styles.imgUser}
              />
              <TextInput
                style={styles.inputUser}
                placeholder="Nhập vào tên đăng nhập"
                value={user}
                onChangeText={(text) => setuser(text)}
              />
            </View>
            <View style={styles.cont2User}>
              <Image
                source={require("../../../source/image/pass.png")}
                style={styles.imgUser}
              />
              <TextInput
                style={styles.inputUser}
                placeholder="Nhập vào mật khẩu"
                secureTextEntry={statePass}
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={(text) => setpassword(text)}
                value={password}
              />
              <Ionicons
                onPress={hindePass}
                style={styles.eye}
                name={statePass?"eye-off-outline":"eye-outline"}
                color="gray"
                size={28}
              ></Ionicons>
            </View>
            <TouchableOpacity style={styles.buttonLogin} onPress={dangnhap}>
              <Text style={{ color: "#fff", fontSize: 20 }}>Đăng Nhập</Text>
            </TouchableOpacity>
            <View style={styles.viewRegister}>
              <Text style={styles.textRegiter} onPress={handleDangky}>
                {textDangky}
              </Text>
              <Text style={styles.textForget}>Quên</Text>
            </View>
          </View>
          <View style={styles.cont3Loginwith}>
            <TouchableOpacity
              style={[styles.buttonLoginwith, { backgroundColor: "#fff" }]}
            >
              <Image
                source={require("../../../source/image/google.png")}
                style={styles.imgLoginwith}
              />
              <Text style={{ color: "#000" }}> Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonLoginwith,
                { backgroundColor: "#4267b2", borderColor: "#4267b2" },
              ]}
            >
              <Image
                source={require("../../../source/image/facebook.png")}
                style={styles.imgLoginwith}
              />
              <Text style={{ color: "#fff" }}> Login with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonLoginwith,
                { backgroundColor: "#CCCC99", borderColor: "#cd2893" },
              ]}
            >
              <Image
                source={require("../../../source/image/instagram.png")}
                style={styles.imgLoginwith}
              />
              <Text style={{ color: "#000" }}> Login with Instagram</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
