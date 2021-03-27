import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "react-native-vector-icons";
import HomeScreen from "../screen/Home/HomeScreen";
import Favorite from "../screen/Home/Favorite";
import Person from "../screen/Home/Person/index";
import Order from "../screen/Home/Order";
import ProductDetail from "../screen/Home/ProductDetail";

import TabBar from '../component/TabBar'
const Tab = createBottomTabNavigator();
function TabHome({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreenParent} initialParams={{ icon: 'home',name:'Home' }} />
      <Tab.Screen name="Favorite" component={Favorite} initialParams={{ icon: 'heart',name:'Favorite' }} />
      <Tab.Screen name="Order" component={Order} initialParams={{ icon: 'cart',name:'Order' }} />
      <Tab.Screen name="Person" component={Person}  initialParams={{ icon: 'person' ,name:'Person'}}/>
    </Tab.Navigator>
  );
}
function HomeScreenParent({ navigation }) {
  const StackHome = createStackNavigator();

  return (
    <StackHome.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <StackHome.Screen name="HomeScreen" component={HomeScreen} />
      <StackHome.Screen name="ProductDetail" component={ProductDetail} />
      <StackHome.Screen name="Order" component={Order} />
    </StackHome.Navigator>
  );
}
export default TabHome;
