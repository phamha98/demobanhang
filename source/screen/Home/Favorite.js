import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import AwesomeAlert from "react-native-awesome-alerts";
import Header from "../../component/Header";
import { AppContext } from "../../AppContext";
import { setStatusBarBackgroundColor } from "expo-status-bar";

export default function Favorite({ navigation }) {
  const { theme,status, setStatus } = useContext(AppContext);
  const [showAlert, setShowAlert] = useState(false);
  const styleBox = () => {
    return theme.is ? theme.light.backgroundBox : theme.dark.backgroundBox;
  };
  return (
    <View style={[styles.container,{backgroundColor:styleBox()}]}>
      <Header title="Favorite" onBack="Back" navigation={navigation} />
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "red", fontSize: 18 }}>
            Danh sách các sản phẩm yêu thích
          </Text>
        </View>
        {status.map((item, index) => {
          return (
            <TouchableOpacity
              style={[styles.content,{backgroundColor:theme.is?'#FFE8B6':'#6D55F7'}]}
              onLongPress={() => setShowAlert(true)}
            >
              <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Bỏ thích ?"
                //message="Are you sure you want to log out !"
                closeOnTouchOutside={false} //outline
                closeOnHardwareBackPress={false} //back
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Không"
                confirmText="Bỏ"
                confirmButtonColor="#C0136A"
                cancelButtonColor="#1C4AE2"
                onCancelPressed={() => {
                  setShowAlert(false);
                }}
                onConfirmPressed={() => {
                  const valueToRemove = item.name;
                  const newArray = status.filter(
                    (item) => item.name !== valueToRemove
                  );
                  setStatus(newArray);
                  setShowAlert(false);
                }}
              />
              <Image style={styles.image} source={{ uri: item.thumbImage }} />
              <View style={styles.infomation}>
                <Text key={index}>{item.name} </Text>
              </View>
              <TouchableOpacity
                style={{ position: "absolute", right: 0, top: 20 }}
                onPress={() => {
                  const valueToRemove = item.name;
                  const newArray = status.filter(
                    (item) => item.name !== valueToRemove
                  );
                  setStatus(newArray);
                  setShowAlert(false);
                }}
              >
                <Ionicons
                  name="trash-outline"
                  size={40}
                  color="#F70E06"
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textItem: {
    color: "red",
    fontSize: 30,
  },
  content: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 2,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth:1,
    borderColor:'#FF9100'
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  infomation: {
    justifyContent: "center",
    alignItems: "center",
  },
});
