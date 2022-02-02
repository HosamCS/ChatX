import React from 'react';
import { Image, ScrollView, Text, View,StyleSheet,TouchableOpacity } from 'react-native';
import { FlowBtn } from '../component/Button';
const data =[
    {
        id:1,
        name:'Nguyen A',
        avatar:'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'

    },
    {
        id:1,
        name:'Nguyễn  B',
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKhAad0x694NNPVBMBmHINWhnivu_SsqvKp96BZ_QBc7TjjNXxqc2FIjTwLO6WX4w5LQ&usqp=CAU'

    },
    {
        id:1,
        name:'Nguyễn Văn C',
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYhXaUkzrNQ3LKx5ZEhwDYaCWg9If8dubE61P337SNyXy4egU0_K0RPu2gPy1KXxqtFpk&usqp=CAU'

    },
    {
        id:1,
        name:'Nguyen Van A',
        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmW4Sa1kjQRifatfe4s9TMfzAj55K-5OL6klpl72Y52_7EolZ6h8SxIxWio5yFWYJHYQ8&usqp=CAU'

    },
]

const Card = (props) => {
    return(
 
        <View style={styles.card}>
            <View style={styles.viewCardIamge}>
             <Image
                source={{uri: props.avatar,}}
                style={{width: 70, height: 70,borderRadius:35}}
             />
            </View>
            <View style={{justifyContent:'flex-start',marginTop:20}}>
              <Text style={{fontSize: 16, fontWeight: '600'}}>{props.name}</Text>
            </View>
        </View>

    )
  
}

export default function Chat ({navigation}){
    return(
       <>
         <ScrollView> 
           {data.length > 0 &&
            data.map((d) => (
               <TouchableOpacity 
                onPress={()=>  navigation.navigate('ChatPerson', {
                    avatar:d.avatar,
                    name: d.name,
                  })}
               >
                 <Card name={d.name} avatar={d.avatar} />
               </TouchableOpacity>
            ))}
          </ScrollView> 
          <FlowBtn iconName ='wechat' onPress={()=>console.warn('Hello')} />
       </>
 
    )
 
};

const styles = StyleSheet.create({
 card:{
    flexDirection:'row',marginTop:10,
    width:'100%',height:100,
    borderTopColor:'#00033222',borderTopWidth:1,
    borderBottomColor:'#00033222',borderBottomWidth:1,
    backgroundColor:'#fff',
    flexDirection:'row'
   },
    viewCardIamge:{
        width:110,height:100,
        justifyContent:'center',
        alignItems:'center',
        marginRight:20,
    }

})
