import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  imageBackground: {
    resizeMode: "contain",
    flex: 1,
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
    marginVertical: 2,
   
  },
  viewContent: {
       width: "100%",
    minHeight: 250,
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    padding: 5,
  },
  viewText: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  filterContent:{
    flexDirection:'row',
    marginHorizontal:10,
    marginTop:5,
    marginBottom:2,
    height:38,
    justifyContent:'center'
   // backgroundColor:'red'
  },
  filterButton:{
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:2,
    minWidth:80,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#0E72F5',
    backgroundColor:'#DAC386',
    flexDirection:'row'
  }
});

export default styles;
