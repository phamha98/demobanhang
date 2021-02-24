import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../../source/screen/Login'
import Home from '../../source/screen/Home'
import Test from '../../source/screen/test'
const Stack =createStackNavigator();
function Navigation(){
return(
<NavigationContainer>
<Stack.Navigator initialRouteName="Login"
  screenOptions={{headerShown: false}}>
<Stack.Screen name="Login" component={Login}/>
<Stack.Screen name="Home" component={Home}/>
<Stack.Screen name="Test" component={Test}/>
</Stack.Navigator>
</NavigationContainer>
)
}
export default Navigation;