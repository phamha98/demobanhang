import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b49d55",
  },
  textItem: {
    color: "red",
    fontSize: 30,
  },
  taskBar: {
    height: 30,
    width: "100%",
    marginTop: 0,
    flexDirection: "row",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    position: "absolute",
    top: 0,
    left: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  flatList: {},
  imageItem: {
    width: 100,
    height: 150,
    resizeMode: "contain",
  },
  viewItem: {
    padding: 5, //tránh bị xén vào content
    flexDirection: "column",
    overflow: "hidden",
    width: "50%",
    marginVertical: 5,
  },
  viewContent: {
    backgroundColor: "#fff",
    width: "100%",
    height: 230,
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    padding: 5,
  },
  viewText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
