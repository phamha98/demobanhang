import React, { useState, useContext } from "react";
import styles from "./style";
import {
  Text,
  View,
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
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";

export default function Registers({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [statePass, setStatePass] = useState(true);
  const hindePass = () => {
    setStatePass(!statePass);
  };
  const imageBackground =
    "https://images.pexels.com/photos/1172849/pexels-photo-1172849.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageBackground }} style={{ flex: 1 }}>
        
          <View style={styles.Logo}>
            <Image
              source={require("../../../source/image/logo1.png")}
              style={styles.imgLogo}
            />
          </View>

          <View style={styles.content}>
            <Input
              placeholder="User name"
              leftIcon={{ type: "font-awesome", name: "user" }}
            />
            <Input
              placeholder="Email"
              leftIcon={<Icon name="envelope" size={24} color="black" />}
            />
            <Input
              placeholder="Password"
              leftIcon={{ type: "font-awesome", name: "key" }}
              style={styles}
              secureTextEntry={true}
              //onChangeText={(value) => this.setState({ comment: value })}
            />
            <Input
              placeholder="Confirm password"
              leftIcon={{ type: "font-awesome", name: "lock" }}
              style={styles}
              secureTextEntry={true}
              //onChangeText={(value) => this.setState({ comment: value })}
            />
            <Button
              icon={<Icon name="check-circle" size={25} color="white" />}
              iconRight
              title="Đăng kí thành viên  "
              onPress={() => alert("succeessfull")}
            />
          </View>
        
      </ImageBackground>
    </View>
  );
}
