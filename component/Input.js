import React from 'react';
import { TextInput, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
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

export const InpuChat = (props) => {
    return(
     <View style={{flexDirection:'row',alignItems:'flex-end',marginBottom:3,}}>
       <ScrollView horizontal={false} style={{}}>
        <TextInput
            style={[styles.inpuChat, props.style]}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder='Type a message...'
            keyboardType= 'default'
            multiline={true}
        >   
        </TextInput>

        {/* <TouchableOpacity style={styles.cameraBtn}>
            <MaterialCommunityIcons name='camera' size={23} color='#000'/>
        </TouchableOpacity> */}
      </ScrollView>     
      
      {/* <View style={{flexDirection:'row' ,justifyContent:'flex-end',alignItems:'flex-end',height:130,}}> */}
     
        <TouchableOpacity style={styles.sendBtn} onPress={props.sendBtn}>
                <MaterialCommunityIcons name='send' size={30} color='orange'  />
        </TouchableOpacity>
         {/* </View> */}
        </View>
        

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
    },
    inpuChat:{
        width:'99%',
        borderRadius:40,
        borderWidth:1,
        borderColor:'#F6F7FB',
        fontSize:20,
        color:'#333',
        padding: 15,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width : 0,
            height : 2
        },
        elevation:5,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    sendBtn:{
        width:55,
        height:55,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff' ,
        borderRadius:30,
        
    },
    cameraBtn:{
        width:55,
        height:55,
        position:'absolute',
        right:0,
        marginRight:10,marginVertical:2,
        justifyContent:'center',alignItems:'center',
        backgroundColor:'rgba(0,0,0,0)' ,
        borderRadius:30,
    }
})