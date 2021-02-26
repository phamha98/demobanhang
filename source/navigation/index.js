import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screen/Login'
import Register from '../screen/Register'
import DrawerScreen from './Drawer'

const Stack =createStackNavigator();
function Navigation(){
return(
<NavigationContainer>
<Stack.Navigator initialRouteName="Login"
  screenOptions={{headerShown: false}}>
<Stack.Screen name="Login" component={Login}/>
<Stack.Screen name="Drawer" component={DrawerScreen}/>
<Stack.Screen name="Registers" component={Register}/>
</Stack.Navigator>
</NavigationContainer>
)
}
export default Navigation;