import React,{useState} from 'react';
import { Image, Text, View ,StyleSheet, Pressable, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase';
import { Button } from '../component/Button';
import { Input } from '../component/Input';
import { useTogglePasswordVisibility } from '../component/showpass';
const backImage = require('../assets/b2.jpg');

export default function Signup ({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [active, setActive] = useState(false);
    const [isSignup , setIsSignup] = useState(false);

    const handleSignup = () => {
        if (email !== '' && password !== '') {
        createUserWithEmailAndPassword(auth,email, password)
        .then(() => {
            setIsSignup(true);
            setTimeout(() => {
                navigation.navigate('HomeScreen');
            }, 3000);
            
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
              <Text style={Styles.title}>Sign up</Text>
             
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

                  {!isSignup ? 
                   (
                        <Button children='Register' button={{backgroundColor:'#096798FF'}} onPress={()=>handleSignup()} >
                          
                        </Button>
                    ):
                    (
                        <Button children='Register' onPress={()=>handleSignup()} >
                             <ActivityIndicator size='large' color='#fff' />
                        </Button> 
                    )
                  }
               
                    {/* <Button children='LogIn' onPress={()=>handleLogin()} >
                        {!isLogin ? <Text>LogIn</Text> :<ActivityIndicator size='small' color='#fff' />}
                    </Button> */}
                   
                  
            
             
                <Text style={{color:'#000',marginTop:25}} onPress={()=>navigation.goBack()}>Do U Have An Account? 
                  { <Text style={{color:'#096798FF',fontWeight:'bold'}}>Login Account</Text>}</Text>
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
    color:'#096798FF',
    marginTop:50,
},
eye:{position:'relative',backgroundColor:'#bbb3',bottom:45,width:30,height:30,borderRadius:15,
 alignSelf:'flex-end',justifyContent:'center',alignItems:'center' ,right:50},

})


