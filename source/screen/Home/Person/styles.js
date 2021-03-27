import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewAvatar: {
    marginTop: 10,
    marginHorizontal: 5,

    alignItems: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 100,
    backgroundColor: "red",
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#fff",
  },
  add: {
    backgroundColor: "#37E23F",
    width: 150,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 20,
    flexDirection: "row",
  },
  viewInfomation: {
    //backgroundColor: "#EBE4CA",
    marginHorizontal: 5,
    paddingHorizontal: 5,
    paddingTop: 10,
   
  },
  rowInfo: {
    flexDirection: "row",
    backgroundColor: "#DADBD2",
    paddingHorizontal: 5,
    marginVertical: 1,
    alignItems: "center",
    borderRadius:2
  },
  textInfo: {
    paddingLeft: 10,
    fontSize: 16,
    color: "#31AACF",
  },
  viewLogout: {
    marginHorizontal: 5,
    alignItems: "center",
    paddingTop: 50,
    marginBottom: 20,
  },
  buttonLogout: {
    width: 200,
    height: 35,
    backgroundColor: "#0C79F5",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#34D8D883",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
