import React,{useState} from 'react';
import styles from './styles'
import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
	Keyboard,
    ScrollView,
    Alert,
    ImageBackground
} from 'react-native';
export default function Login({navigation}){
	const [user, setuser] = useState('');
	const [password, setpassword] = useState('');
	const dangnhap=()=>{
		if(user.trim()==='1' && password==='1'){
			return navigation.navigate('Drawer');
		}
		 Alert.alert('Tài khoản hoặc mật khẩu không chính xác !');

	}
	const handleDangky=()=>{
		return navigation.navigate('Registers');
	}
	const textDangky=useState('Đăng ký');
    const image = { uri: "https://reactjs.org/logo-og.png" };
return(
<View style={styles.containerRoot}> 
<ImageBackground source={require('../../../source/image/hinhnen.jpg')} style={{flex: 1}}>
<ScrollView style={{flex:1}}>
     <View style={styles.cont1Logo}>
	 	
		<Image
			 source={require('../../../source/image/logo1.png')}
			 style={styles.imgLogo}/>
	 </View>
	 <View style={styles.cont2Input}>
	 	<View style={styles.cont2User}>
			<Image
				 source={require('../../../source/image/user.png')}
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
				 source={require('../../../source/image/pass.png')}
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
			onPress={dangnhap}
			>
			<Text style={{color:'#fff',fontSize:20}}>Đăng Nhập</Text>
		</TouchableOpacity>
		<View style={styles.viewRegister}>
			<Text 
				style={styles.textRegiter}
				onPress={handleDangky}
			>{textDangky}</Text>
			<Text style={styles.textForget}>Quên</Text>			
		</View>	
	 </View>
	 <View style={styles.cont3Loginwith}>
	 <TouchableOpacity style={[styles.buttonLoginwith,{backgroundColor:'#fff'}]}>
			 <Image
				 source={require('../../../source/image/google.png')}
				 style={styles.imgLoginwith}/>
			 <Text style={{color:'#000'}}>  Login with Google</Text>
		 </TouchableOpacity>
		 <TouchableOpacity style={[styles.buttonLoginwith,{backgroundColor:'#4267b2',borderColor:'#4267b2'}]}>
		 	<Image
				 source={require('../../../source/image/facebook.png')}
				 style={styles.imgLoginwith}/>
			 <Text style={{color:'#fff'}}>  Login with Facebook</Text>
		 </TouchableOpacity>
		 <TouchableOpacity style={[styles.buttonLoginwith,{backgroundColor:'#CCCC99',borderColor:'#cd2893'}]}
		 	 
			 >
			 <Image
				 source={require('../../../source/image/instagram.png')}
				 style={styles.imgLoginwith}/>
			 <Text style={{color:'#000'}}>  Login with Instagram</Text>
		 </TouchableOpacity>
	 
	 </View>
     </ScrollView> 
     </ImageBackground>
</View>

)}