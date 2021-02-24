import React,{useState} from 'react';
import Home from '../../source/screen/Home'
import Test from '../../source/screen/test'

import {FontAwesome,Ionicons}  from '@expo/vector-icons'
import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
	Keyboard
} from 'react-native';

export default function login({navigation}){
	const [user, setuser] = useState('');
	const [password, setpassword] = useState('');
	const handleLogin=()=>{
		if(user.trim()==='p' && password==='1'){
			return navigation.navigate('Home');
		}
		else {alert('Tài khoản hoặc mật khẩu không chính xác !');}

	}
	const clickTohome=()=>{
		return navigation.navigate('Home');
	}
	const textDangky=useState('Đăng ký');
	const test=()=>{return navigation.navigate('Test')}
return(
<View style={styles.containerRoot}>  
     <View style={styles.cont1Logo}>
	 	
		<Image
			 source={require('../../source/image/logo.png')}
			 style={styles.imgLogo}/>
	 </View>
	 <View style={styles.cont2Input}>
	 	<View style={styles.cont2User}>
			<Image
				 source={require('../../source/image/user.png')}
				 style={styles.imgUser}/>
			<TextInput
				style={styles.inputUser}
				placeholder='Nhập vào tên đăng nhập'
				value={user}
				onChangeText={text=>setuser(text)}
			/>
		</View>
		<View style={styles.cont2User}>
			<Image
				 source={require('../../source/image/pass.png')}
				 style={styles.imgUser}/>
			<TextInput
				style={styles.inputUser}
				placeholder='Nhập vào mật khẩu'
				secureTextEntry={true}
				onSubmitEditing={Keyboard.dismiss} 
				onChangeText={text=>setpassword(text)}
				value={password}
			/>
		</View>
		<TouchableOpacity 
			style={styles.buttonLogin}
			onPress={handleLogin}
			>
			<Text style={{color:'#fff',fontSize:20}}>Đăng Nhập</Text>
		</TouchableOpacity>
		<View style={styles.viewRegister}>
			<Text 
				style={styles.textRegiter}
				onPress={clickTohome}
			>{textDangky}</Text>
			<Text style={styles.textForget}>Quên</Text>			
		</View>	
	 </View>
	 <View style={styles.cont3Loginwith}>
	 	<TouchableOpacity style={[styles.buttonLoginwith,{backgroundColor:'#FBBC05'}]}>
			 <Ionicons name='logo-google' color='#EA4335' size={18} />
			 <Text style={{color:'#fff'}}>  Login with Google</Text>
		 </TouchableOpacity>
		 <TouchableOpacity style={[styles.buttonLoginwith,{backgroundColor:'#3B5998'}]}>
			 <Ionicons name='logo-facebook' color='#fff' size={18} />
			 <Text style={{color:'#fff'}}>  Login with Facebook</Text>
		 </TouchableOpacity>
		 <TouchableOpacity style={[styles.buttonLoginwith,{backgroundColor:'#CCCC99'}]}
		 	onPress={test}
			 >
			 <Ionicons name='logo-instagram' color='#fa8223' size={18} />
			 <Text style={{color:'#000'}}>  Login with Instagram</Text>
		 </TouchableOpacity>
	 </View>
</View>

)}
const styles=StyleSheet.create({
	buttonLoginwith:{
		flexDirection:'row',
		width:200,
		height:30,
		alignItems:'center',
		justifyContent:'center',
		borderRadius:5,
		marginTop:5,
		borderWidth:1, 
	},
    containerRoot:{
        flex:1,
        backgroundColor:'#f4f4f4',
    },
	cont1Logo:{ flex:4,
			justifyContent:'center',
        	alignItems:'center',
			},
	cont2Input:{ flex:4,  
			flexDirection:'column',
				alignItems:'center',
			justifyContent:'center',	  
			},
	cont3Loginwith:{ 
		flex:3, 
		flexDirection:'column',
		alignItems:'center',  
		},
	cont2User:{
		 marginTop:20,
		 width:290,
		 height:50,
		 alignItems:'center',
		 justifyContent:'center',
		 flexDirection:'row',
		 backgroundColor:'#f2feb1',
		 borderRadius:25,
		},		
   inputUser:{
		width:250,
        height:50,
		paddingLeft:15,
		color:'#000',
		borderRadius:25,
		fontSize:18
    },
    buttonLogin:{
		marginTop:20,
        width:290,
        height:50,
        backgroundColor:'#2696c8',
        alignItems:'center',
        justifyContent:'center',
		borderRadius:25,		
    },
 
	viewRegister:{
		marginTop:10,
		flexDirection:'row'
		},
	textRegiter:{
		flex:1,
		textAlign:'left',
		color:'#4684b3',
		fontSize:15,
		paddingLeft:30,
		},
	textForget:{
		flex:1,
		textAlign:'right', 
		color:'#4684b3',
		fontSize:15,
		paddingRight:30,
		},
		
    imgLogo:{
        width:300,
        height:300,
        resizeMode:'contain'

    },
	imgUser:{
        width:30,
        height:30,
       marginLeft:20,

    },
	imgLoginwith:{
        width:20,
        height:20,
        
	},
	
	
	

})


