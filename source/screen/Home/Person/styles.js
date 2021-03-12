import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
  contentView: {
    marginTop: 10,
    marginHorizontal: 5,
    backgroundColor: "yellow",
    alignItems: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 100,
    backgroundColor: "red",
    overflow: "hidden",
    borderWidth: 7,
    borderColor: "#fff",
  },
  add: {
    backgroundColor: "#1878f3",
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 8,
    flexDirection: "row",
  },
  infomation: {
    marginTop: 40,
    backgroundColor: "#f1d77d",
  },
  fontAwesome: {
    width: 350,
    height: 30,
    marginTop: 5,
    borderBottomWidth: 1,
  },
  textFont: {
    fontSize: 20,
    color: "#000",
    paddingLeft: 20,
  },
  sign: {
    height: 35,
    width: 250,
  },
});

export default styles;
