import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Logo: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "pink",
  },
  imgLogo: {
    width: 300,
    resizeMode: "contain",
    position:'absolute',
    top:8
  },
  content: {
    flex:1,
    marginHorizontal:40,
    marginVertical:200,
    alignItems: "center",
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth:1,

  },
  continue:{
      width:200,
      height:40,
      backgroundColor:'#1A283A',
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'
  }
  
});
export default styles;
