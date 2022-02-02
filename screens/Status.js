import React from 'react';
import { Text, View } from 'react-native';
import { FlowBtn } from '../component/Button';
const Status = ({
    params,
}) => (
    <View style={{flex:1}}>
        <Text>Status</Text>
        <FlowBtn iconName ='plus-circle' onPress={()=>console.warn('Hello')} />
    </View>
);

export default Status;
