import React from 'react';
import {View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from 'react-native-vector-icons'
import HomeScreen from '../screen/Home/HomeScreen'
const Tab =createBottomTabNavigator();
function TabHome(){
return(
<Tab.Navigator initialRouteName="HomeScreen"
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'HomeScreen') {
        iconName = focused
          ? 'home'
          : 'home-outline';
      } else if (route.name === 'Favorite') {
        iconName = focused 
        ?'heart' 
        : 'heart-outline';
      }else if (route.name === 'Setting') {
        iconName = focused 
        ? 'settings' 
        : 'settings-outline';
      }else if (route.name === 'Person') {
        iconName = focused
        ?'person' 
        : 'person-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }}
  >
  <Tab.Screen name="HomeScreen" component={HomeScreen}/>
  <Tab.Screen name="Favorite" component={View}/>
  <Tab.Screen name="Setting" component={View}/>
  <Tab.Screen name="Person" component={View}/>
</Tab.Navigator>
)
}
export default TabHome;