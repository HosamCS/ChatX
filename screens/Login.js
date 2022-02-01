import React,{useState} from 'react';
import { Image, Text, View ,StyleSheet, Pressable, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase';
import { Button } from '../component/Button';
import { Input } from '../component/Input';
import { useTogglePasswordVisibility } from '../component/showpass';
const backImage = require('../assets/b2.jpg');

export default function Login ({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState(false);
    const [isLogin , setIsLogin] = useState(false);
    


    const handleLogin = () => {
        if (email !== '' && password !== '') {
        signInWithEmailAndPassword(auth,email, password)
        .then(() => {
            setIsLogin(true);

            setTimeout(() => {
                navigation.navigate('HomeScreen');
            }, 4000);
            
        })
        .catch(error => alert(error.message)
          
        );
        } else if (email === ''){
          alert('Please enter your email');
        }
        else if (password === ''){
            alert('Please enter your password');
        }
        return ;
    }
     const onfocus=()=> {
        setActive({backgroundColor:'orange'});
     }
    const onblur=()=> {
        setActive({backgroundColor:'orange'});
      
    }
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();


    return(
        <View style={Styles.Container}>
          <Image source={backImage} style={{width: '100%', height: '100%'}} resizeMode='cover'  />
          <View style={Styles.whiteSheet}>
             <View style={Styles.form} >
              <Text style={Styles.title}>Log In</Text>
             
              <Input
                style={[Styles.input,{borderColor : active ? 'orange' : '#fff'}]}
                placeholder='Email'
                keyboardType='email-address'
                autofocus={onfocus}
                onBlur={onblur}
                value={email}
                onChangeText={(email) => setEmail(email)}
             />
           <Input
              style={[Styles.input,{borderColor : active ? 'orange' : '#fff'}]} 
              secureTextEntry={passwordVisibility}
              placeholder='Password'
              autofocus={onfocus}
              onBlur={onblur}
              value={password}
              onChangeText={(password) => setPassword(password)}
           />
        
            <Pressable onPress={handlePasswordVisibility} style={Styles.eye}>
              <MaterialCommunityIcons name={rightIcon} size={22} color='#232323' />
            </Pressable>

                  {!isLogin ? 
                   (
                        <Button children='LogIn' onPress={()=>handleLogin()} >
                          
                        </Button>
                    ):
                    (
                        <Button children='LogIn' onPress={()=>handleLogin()} >
                             <ActivityIndicator size='large' color='#fff' />
                        </Button> 
                    )
                  }
               
                    {/* <Button children='LogIn' onPress={()=>handleLogin()} >
                        {!isLogin ? <Text>LogIn</Text> :<ActivityIndicator size='small' color='#fff' />}
                    </Button> */}
                   
                  
            
             
                <Text style={{color:'#000',marginTop:25}} onPress={()=>navigation.navigate('Signup')}>Don't Have An Account? 
                  { <Text style={{color:'orange',fontWeight:'bold'}}>Sign up here</Text>}</Text>
             </View>
          </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    whiteSheet:{
        width: '100%',
        height: '70%',
        borderTopLeftRadius:70,
        borderTopRightRadius:70,
        backgroundColor :'#fff',
        position : 'absolute',
        bottom: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 10,
    },
form:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    // backgroundColor:'#bbb'
},
title:{
    fontSize:50,
    fontWeight:'bold',
    color:'orange',
    marginTop:50,
},
input:{
    width:'80%',
    height:60,
    borderRadius:12,
    borderWidth:1,
    borderColor:'#F6F7FB',
    marginTop:30,
    padding:12,
    fontSize:16,
    color:'#333',
    backgroundColor:'#F6F7FB',
},
eye:{position:'relative',backgroundColor:'#bbb3',bottom:45,width:30,height:30,borderRadius:15,
 alignSelf:'flex-end',justifyContent:'center',alignItems:'center' ,right:50},

})


