import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentTop: {
    marginHorizontal: 3,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  rowProduct: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#343697",
    paddingVertical: 2,
    marginVertical: 2,
  },
  imageProduct: {
    flex: 3,
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  contentProduct: {
    flex: 7,
    flexDirection: "column",
    padding: 3,
  },

  textProduct: {
    color: "#295BE4",
    fontSize: 18,
    maxWidth: 200,
    fontWeight: "400",
  },
  textNumber: {
    color: "#000",
    fontSize: 16,
    position: "absolute",
    bottom: 3,
    left: 4,
  },
  textMoney: {
    position: "absolute",
    bottom: 3,
    right: 10,
    color: "#F30A0A",
  },
  /////////////////////////////
  rowTotal: {
    flexDirection: "row",
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#F7CF64",
    margin: 5,
    borderRadius: 5,
    marginTop:10
  },

  textTotal: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#0084FF",
  },
  ///////////////////////
  contentBottom: {
    marginTop: 30,
    marginHorizontal: 4,
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 0.2,
    minHeight:250,
    paddingTop:10
    //backgroundColor:'red'
  },
  viewAddress: {
    flexDirection: "row",
    marginVertical: 5,
    width: "95%",
    minHeight: 40,
    paddingHorizontal: 20,
    borderRadius: 3,
    backgroundColor: "#E5EEE9",
    
  },

  buttonBuy: {
    width: 300,
    height: 40,
    backgroundColor: "#12BEF3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth:1,
    borderColor:'#32C00E',
    marginBottom: 80,
    marginTop:20,
     
    
  },
  buttonText: {
    fontSize: 23,
    color: "#0702FF",
  },
});

export default styles;
