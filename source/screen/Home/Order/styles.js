import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  content: {
    width: "100%",
    backgroundColor: "lavender",
  },
  rowProduct: {
    margin: 5,

    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    backgroundColor: "green",
    // borderBottomWidth: 3,
    // borderBottomColor: "red",
    // borderRadius: 9,
    // padding: 10,
  },
  imageProduct: {
    width: 100,
    height: 100,
    margin:2,
    resizeMode: "contain",
  },
  contentProduct: {
    flexDirection: "column",
    backgroundColor:'gray',
    width:280,
    margin:2,
    padding:3
  },
  rowTotal: {
    flexDirection: "row",
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor:'gray',
    margin:5,
  },

  textTotal: {
    fontSize: 17,
    fontWeight: "bold",
    color:'red'
  },
  textProduct: {
    color: "red",
    fontWeight:'bold',
    fontSize:18
  },
  textNumber: {
    color: "red",
    fontSize:16,
    position:'absolute',
    bottom:3,
    left:4
  },
  textMoney: {
      position:'absolute',
      bottom:3,
      right:3,
    color: "#000",
    maxWidth: 200,
  },
  bottom: {
    width: "100%",
    height: 100,
    backgroundColor: "yellow",
    alignItems: "center",
  },
  buttonBuy: {
    width: 300,
    height: 40,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,

  },
  buttonText: {
    fontSize: 23,
    color: "#fff",
  },
});

export default styles;
