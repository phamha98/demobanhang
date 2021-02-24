import React,{useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import { Ionicons,
    FontAwesome,
    createIconSetFromIcoMoon}
     from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function Home(){
    
    
return(
<View style={styles.container}>  
     <Text>Home</Text>
      
</View>

)}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eaf2f4',
        alignItems:'center',
        justifyContent:'center',
    },
	

})

