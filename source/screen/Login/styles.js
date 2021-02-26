import { StyleSheet } from 'react-native';

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
export default styles;