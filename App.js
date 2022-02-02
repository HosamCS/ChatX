import React from 'react';
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'; import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './screens/Chat'
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/HomeScreen';
import ChatPerson from './screens/ChatPerson';
const Stack = createNativeStackNavigator();
const StackScreen = () => (
  <Stack.Navigator screenOptions={{headerShown:false}}
    initialRouteName='HomeScreen'>
  
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="HomeScreen" component={Home}/>
    <Stack.Screen name="Signup" component={Signup}  />
    <Stack.Screen name="Chat" component={Chat}/>
    <Stack.Screen name='ChatPerson' component={ChatPerson} />
  </Stack.Navigator>
)
const Root = () => (
  <NavigationContainer>
    <StackScreen />
  </NavigationContainer>
)

export default function App (){ 
  return <Root />
}


const styles = StyleSheet.create({
 
});


