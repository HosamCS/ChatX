import React from 'react';
import { Text, View } from 'react-native';
import { FlowBtn } from '../component/Button';
import { Header } from '../component/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from './Chat';
import Status from './Status';
import Me from './Me';



const Tab = createMaterialTopTabNavigator();

const Tabs=()=> {
  return (
   
     <Tab.Navigator
            swipeVelocityImpact={0.5}
            // swipeEnabled={true}
            screenOptions={({ route }) => ({
                
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Chat') {
                    iconName = focused
                      ? 'wechat'
                      : 'wechat';
                     size = 22
                      
                  }
                  else if (route.name === 'Profile') {
                    iconName = focused ? 'account-details' : 'account-details-outline';
                    size = 20
                  }
                  
                  else if (route.name === 'Status') {
                    iconName = focused ? 'camera-plus' : 'camera';
                    size=20
                  }
                 
      
                  // You can return any component that you like here!
                  return <MaterialCommunityIcons name={iconName} size={size} color={color}
                  style={{left:40,top:28,}} />;
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {backgroundColor:'orange',}
              })}
              
     >
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Profile" component={Me} />
     </Tab.Navigator>

  );
}


 
const myAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSye8_F5ZHKn2FQ51IdAmOKH3VaIfKkZLXVEA&usqp=CAU';
export default function Home ({navigation}){
    return(
        <>
            <View style={{flex:1,}}>
              <Header nameScreen='ChatX' leftIcon='search' avatar={myAvatar}/>
              <Tabs/>
            </View>
            
        </>
    )
};


