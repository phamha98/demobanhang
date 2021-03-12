import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
const dimensions = Dimensions.get("window");
function ViewImage({ uri }) {
  return (
    <View style={styles.container}>
        <Image style={styles.containerImage} source={{ uri }} />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.width*1.1,
    alignItems:'center',
    backgroundColor:'#b0baba'
  },

  containerImage: {
    width: 500,
    height:'100%',
    resizeMode: "contain",
     
  },
});
export default ViewImage;
