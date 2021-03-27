import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: { flex: 1,backgroundColor:'#fff' },
  content: {
    alignItems: "center",
    textAlign: "center",
    backgroundColor:'#FFf',
    marginHorizontal: 15,
  },
  confirm: {
    flexDirection: "row",
    marginHorizontal: 20,
    height: 30,
    backgroundColor: "#20B2AA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textProduct: { fontSize: 25, marginVertical: 5 }, 
  viewDetail: {
    width: "100%",
    padding:5,
    borderRadius:3,
    backgroundColor: "#E5EEE9",
    marginVertical: 2,
  },
  textDetail: {
    marginBottom: 10,
  },
  viewPrice:{
    width:'100%',
    padding:5,
    borderRadius:3,
    backgroundColor: "#F3F1D9",
    marginVertical: 2,
    alignItems:'center'
  },
  textPrice: {
    fontSize: 20,
    fontWeight: "100",
    color: "red",
  },
  viewColor:{
    flexDirection:'row',
    width:'100%',
    padding:5,
    borderRadius:3,
    backgroundColor: "#E5EEE9",
    marginVertical: 1,
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
  },
  textColor: {
    fontSize: 17,
  },
  textSize:{
    fontSize: 17,
    marginBottom:50
  }
 
});
export default styles;
