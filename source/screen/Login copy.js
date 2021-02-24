import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

export default function login(){
return(
<View style={styles.container}>  
     <View style={styles.cont1}>
	 	
		<Image
			 source={require('../../image/logo.png')}
			 style={styles.cont1_anh}/>
	 </View>
	 <View style={styles.cont2}>
	 	<View style={styles.cont2x}>
			<Image
				 source={require('../../image/user.png')}
				 style={styles.cont2_anh}/>
			<TextInput
				style={styles.textInput}
				placeholder='Nhập vào tên đăng nhập'
			/>
		</View>
		<View style={styles.cont2x}>
			<Image
				 source={require('../../image/pass.png')}
				 style={styles.cont2_anh}/>
			<TextInput
				style={styles.textInput}
				placeholder='Nhập vào mật khẩu'
			/>
		</View>
		<TouchableOpacity style={styles.cont2_btn}>
		<Text style={styles.cont2_text}>Đăng Nhập</Text>
		</TouchableOpacity>
		<View style={styles.cont2_dangky}>
			<Text style={styles.cont2_textdangky1}>Đăng ký</Text>
			<Text style={styles.cont2_textdangky2}>Quên</Text>			
		</View>	
	 </View>
	 <View style={styles.cont3}>
	 	<View style={styles.cont3x}>
			<Image
				 source={require('../../source/image/logo_google.png')}
				 style={styles.cont2_anh}/>
			<Text style={styles.cont3_text1}>Tiếp tục với Google</Text>
		</View>
		<View style={styles.cont3x}>
			<Image
				 source={require('../../source/image/logo_facebook.png')}
				 style={styles.cont2_anh}/>
			<Text style={styles.cont3_text2}>Tiếp tục với Facebook</Text>
		</View>
		<View style={styles.cont3x}>
			<Image
				 source={require('../../image/logo_instagram.png')}
				 style={styles.cont2_anh}/>
			<Text style={styles.cont3_text3}>Tiếp tục với Instagram</Text>
		</View>
	 
	 </View>
</View>

)}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eaf2f4',

    },
	cont1:{ flex:4,
			justifyContent:'center',
        	alignItems:'center',
			},
	cont2:{ flex:4,  
			flexDirection:'column',
			 alignItems:'center',
		  justifyContent:'center',
		  
			},
	cont2x:{ marginTop:20,
		
		 alignItems:'center',
		 justifyContent:'center',
		 flexDirection:'row'
		},
	
	
	
    textInput:{
		width:250,
        height:40,
        backgroundColor:'#a5f3fd',
		marginLeft:5,
		paddingLeft:20,
		color:'#fff',
		borderRadius:20,
    },
    cont2_btn:{
		marginTop:20,
        width:300,
        height:40,
        backgroundColor:'#2696c8',
        alignItems:'center',
        justifyContent:'center',
		borderRadius:20,
		opacity:0.5
		
    },
	cont2_text:{
		color:'#fff',
		fontSize:20
		},
	cont2_dangky:{
		marginTop:10,
		flexDirection:'row'
		},
	cont2_textdangky1:{
		flex:1,
		textAlign:'left',
		color:'#4684b3',
		fontSize:18,
		paddingLeft:20,
		},
	cont2_textdangky2:{
		flex:1,
		textAlign:'right', 
		color:'#4684b3',
		fontSize:18,
		paddingRight:20,
		},
    cont1_anh:{
        width:300,
        height:300,
        resizeMode:'contain'

    },
	cont2_anh:{
        width:36,
        height:36,
       

    },
	cont3:{ 
		flex:3, 
		flexDirection:'column',
		
		},
	cont3x:{ 
		marginTop:5,
		flexDirection:'row',
		alignItems:'center',
        justifyContent:'center',
	},
	cont3_text1:{
		width:280,
		height:40,
		marginLeft:5,
		backgroundColor:'#2acfe3',
		color:'#FFF',
		textAlignVertical:'center',
		paddingLeft:30,
		fontSize:16,
		borderRadius:20,
		},
	cont3_text2:{
		width:280,
		height:40,
		marginLeft:5,
		backgroundColor:'#2baec0',
		color:'#FFF',
		textAlignVertical:'center',
		paddingLeft:30,
		fontSize:16,
		borderRadius:20,
		},
	cont3_text3:{
		width:280,
		height:40,
		marginLeft:5,
		backgroundColor:'#bb9765',
		color:'#FFF',
		textAlignVertical:'center',
		paddingLeft:30,
		fontSize:16,
		borderRadius:20,
		}
	

})

