import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,

  TouchableOpacity,
} from "react-native";
import Login from "../Login";
import Ionicons from "react-native-vector-icons";
export default function Logout({ navigation }) {
    
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
       
      <View style={styles.content}>
        <Text style={{ fontSize: 30,fontWeight:'bold', color: "#FF0A2F" }}>Bạn Muốn Thoát</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
          style={styles.btn}
            onPress={() => {
              navigation.replace("Login");
            }}
          >
            
            <Text style={styles.white}>Thoát</Text>
          </TouchableOpacity>
          <Text> </Text>
          <TouchableOpacity style={styles.btn}
            onPress={() => {
              navigation.goBack();
            }}
          >
          
            <Text style={styles.white}>Quay lại</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    width: 250,
    height: 200,
    backgroundColor: "#93f1a9",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btn:{
      width:100,
    height:50,
    backgroundColor:'#2196F3',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginHorizontal:10
  },
  white:{color:'#FFf',
fontSize:20}
});
