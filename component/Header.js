
import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { height, width } = Dimensions.get('screen');

export const Header = (props) => {
    return (
        <View style={styles.viewHeader}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
           {/* LeftLebel */}
           <TouchableOpacity style={styles.viewlableleft} onPress={props.onPressLeft}>
             <Icon name={props.leftIcon} size={22}color={'#fff'}style={{paddingRight: 15}}/>
             
            </TouchableOpacity>
            <View style={{justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.text}>{props.nameScreen}</Text>
            </View>
          
             {/* right */}
          <TouchableOpacity style={styles.lebleRight}>
            {/* <Icon name={props.rightIcon} size={25} color={'#000'} /> */}
            <Image source={{uri:props.avatar}} style={{width: 50, height: 50,borderRadius:25}} />
          </TouchableOpacity>
        </View>

        </View>
    )
}
const styles = StyleSheet.create({
    // lebleleft:{
    //     justifyContent: 'center', marginRight: 15,width:60,height:60,
    //   },
    lebleRight:{
        justifyContent:'center',
        alignItems:'center',
        marginRight: 10
    },
      viewlableleft:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
    
      },
      text:{
          fontSize:25,
          fontWeight:'bold',
          color:'#fff',
          fontFamily:'times new roman',
      },
      viewHeader:{
        width:'100%', height:"10%",backgroundColor:'orange',justifyContent:'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 2.22,
        elevation: 10,
        // borderBottomLeftRadius:20,
        // borderBottomRightRadius:20,
        
        
      }

    
})

