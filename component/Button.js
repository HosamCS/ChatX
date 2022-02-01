import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Image, View, SafeAreaView, ActivityIndicator } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const Button = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={[styles.button,props.button]}>
        <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
export const FlowBtn = (props) => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={[styles.flowBtn,props.button]}>
            <MaterialCommunityIcons name='wechat' color='#fff'  size={50}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    borderRadius: 12,
    width: '80%',
    height: 60,
    marginTop :30,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center'
  },
  flowBtn:{
    backgroundColor:'orange',
    borderRadius:12,
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:35,
    bottom:40,
    shadowColor: '#000',
  }

})
