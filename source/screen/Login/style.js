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
  },
  viewContent: {
    alignItems: "center",
  },
  rowInput: {
    marginVertical: 10,
    width: 290,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2feb1",
    borderRadius: 25,
  },
  textInput: {
    width:'100%',
    paddingLeft:50,
    color: "#000",
    fontSize: 18,
  },
  rowLogin: {
    marginTop: 20,
    width: 290,
    height: 50,
    backgroundColor: "#2696c8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  rowRegister: {
    marginTop: 10,
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowLink: {
    flexDirection: "row",
    width: 200,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    marginVertical:3,
  },
  imgLoginwith: {
    width: 20,
    height: 20,
  },
 
});
export default styles;
