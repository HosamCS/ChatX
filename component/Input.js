import React from 'react';
import { TextInput, View, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get('screen');

export const Input = (props) => {
    return (
        <>
        <TextInput
            style={[styles.input, props.style]}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            placeholderTextColor={props.placeholderTextColor}
            secureTextEntry={props.secureTextEntry}
            autofocus={props.autofocus}
            onBlur={props.onBlur}

        >
            
        </TextInput>
        </>
    )
}
const styles = StyleSheet.create({

    input: {
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
    }
})