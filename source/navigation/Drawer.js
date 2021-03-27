import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabHome from "./TabHome";
import Login from "../screen/Login";
import Person from "../screen/Home/Person";
import Help from "../screen/Home/Help";
import Notification from "../screen/Home/Notification";
import Logout from "../screen/Home/Logout";
import DrawerContent from '../component/Drawer'
const Drawer = createDrawerNavigator();
function DrawerScreen({ navigation }) {
  return (
    <Drawer.Navigator
    drawerContent={()=><DrawerContent navigation={navigation}/>}
    initialRouteName="HomeScreen">
      <Drawer.Screen name="TabHome" component={TabHome} />
      <Drawer.Screen name="Person" component={Person} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="Logout" component={Logout} />
      <Drawer.Screen name="Help" component={Help} />
    </Drawer.Navigator>
  );
}
export default DrawerScreen;
