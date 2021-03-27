import React, { useState, useContext } from "react";
import styles from "./style";
import {

  View,
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
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Text } from "react-native-elements";

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
          <Ionicons name="rocket"  color='#FF460E'size={50}></Ionicons>
          <Text h3 >Forgot Your Password</Text>
          <Text h5>Enter your email address </Text>
          <Input
         
              placeholder="Email address"
              leftIcon={<Icon name="envelope" size={24} color="black" />}
            />
           <TouchableOpacity style={styles.continue}>
               <Text style={{color:'#fff',fontSize:18}}>Continue</Text>
           </TouchableOpacity>
            <Text style={{color:'#0E5353',marginTop:10}}  onPress={()=>navigation.goBack()}>  Back to My App </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
