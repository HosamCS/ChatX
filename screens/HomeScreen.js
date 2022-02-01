import React from 'react';
import { Text, View } from 'react-native';
import { FlowBtn } from '../component/Button';

const Home = ({navigation}) => (
    <>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Home</Text>
    </View>
    <FlowBtn onPress={()=>navigation.navigate('Chat')} />
    </>
);

export default Home;
