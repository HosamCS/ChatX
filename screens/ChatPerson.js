import React,{useState,useEffect ,useCallback} from 'react';
import { Text, View,ScrollView,Alert, StyleSheet,KeyboardAvoidingView } from 'react-native';
import { Header } from '../component/Header';
import { InpuChat } from '../component/Input';
import { GiftedChat } from 'react-native-gifted-chat';
const ChatPerson = ({route,navigation}) => {
     const [messages , setMessages] = useState([]);
    // const [text , onChangeText] = useState('');
    
     const {name ,avatar} = route.params;

     useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])

      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        
        
      }, [])

    // const isEmpty = () => !/[^\s]+/.test(text); //alart ('Pls Fill')
    // const handelMsg =()=>{
    // if(!isEmpty()) {
    //     setMassage([...massage, text]);
    //   } 
    //  }
    return (
      <>
        <Header
          nameScreen={name}
          avatar={avatar}
          leftIcon="arrow-left"
          onPressLeft={() => {
            navigation.goBack();
          }}
        />
          {
      Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
   }
        <GiftedChat
        
            messages={messages}
            onSend={messages => onSend(messages)}
        
            user={{
              _id: 1,
            }}
        
        />
        {/* <ScrollView
          contentContainerStyle={{
            justifyContent: 'flex-end',
            backgroundColor: '#bbb',
          }}>
          <View style={{backgroundColor: 'red'}}>
            {massage.map(msg => (
              <View
                style={{
                  margin: 6,
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  height:'auto',
                }}>
                <Text>{msg}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        <InpuChat
          onChangeText={onChangeText}
          value={massage}
          sendBtn={() => handelMsg()}
        /> */}
      </>
    );
 
 };

 const styles = StyleSheet.create({
    hashtag:{
        
    }

 })
export default ChatPerson;
