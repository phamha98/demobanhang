import React from 'react';
import {View} from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import TabHome from './TabHome'
import Login from '../screen/Login'

const Drawer =createDrawerNavigator();
function DrawerScreen(){
return(
<Drawer.Navigator initialRouteName="HomeScreen"
  >
  <Drawer.Screen name="TabHome" component={TabHome}/>
  <Drawer.Screen name="Person" component={View}/>
  <Drawer.Screen name="Notification" component={View}/>
  <Drawer.Screen name="Logout" component={Login}/>
  <Drawer.Screen name="Help" component={View}/>
</Drawer.Navigator>
)
}
export default DrawerScreen;