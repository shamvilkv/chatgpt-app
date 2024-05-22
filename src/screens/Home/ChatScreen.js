import {KeyboardAvoidingView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors, Spacing, Typography} from '../../styles';
import ChatMessage from '../../components/molecules/ChatMessage';
import {TextInput} from 'react-native-paper';
import {OPENAPI_KEY} from '../../config/constants';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import ChatEmptyState from '../../components/molecules/ChatEmptyState';

const ChatScreen = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const openai = axios.create({
    baseURL: 'https://api.openai.com/v1/chat/completions',
  });

  const handleSend = async () => {
    console.log(userInput);
    if (userInput.trim()) {
      const userMessage = {content: userInput, role: 'user'};

      const inputMessage = [...messages, userMessage];
      setMessages(inputMessage);
      setUserInput('');

      try {
        const response = await openai.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: inputMessage,
          },
          {
            headers: {
              Authorization: `Bearer ${OPENAPI_KEY}`,
              'Content-Type': 'application/json',
            },
          },
        );
        console.log(response.data);
        setMessages(prev => [...prev, response.data.choices[0].message]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleClear = () => {
    console.log(new Date());
    setMessages([]);
  };

  return (
    <KeyboardAvoidingView
      enabled
      keyboardVerticalOffset={50}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      style={[
        Spacing.FG1,
        Spacing.P10,
        Spacing.FD_C,
        Spacing.JC_SB,
        {backgroundColor: 'white'},
      ]}>
      <View>
        <FlatList
          scrollEnabled
          contentContainerStyle={[Spacing.PL10, Spacing.MY10]}
          data={messages}
          // keyExtractor={(item, index) => item._id.toString()}
          ListEmptyComponent={<ChatEmptyState />}
          renderItem={({item}) => (
            <ChatMessage message={item.content} isUser={item.role === 'user'} />
          )}
        />
      </View>
      <View style={[Spacing.FD_R]}>
        <TextInput
          label="Message Fliki...."
          mode="outlined"
          style={[Spacing.MB10, Spacing.FG1, {backgroundColor: 'white'}]}
          activeOutlineColor={Colors.GREYDARK}
          right={<TextInput.Icon icon="arrow-up-circle" onPress={handleSend} />}
          onChangeText={setUserInput}
          value={userInput}
          onSubmitEditing={handleSend}
        />
        <Button
          // loading={loginLoadingState}
          title="Clear"
          type="clear"
          titleStyle={[
            Typography.FONT_MEDIUM,
            Typography.FONT_SIZE_16,
            {color: Colors.GREYDARK},
          ]}
          onPress={handleClear}
          buttonStyle={[
            {backgroundColor: Colors.WHITE},
            Spacing.PT10,
            Spacing.PB10,
            Spacing.MT10,
            Spacing.FG1,
          ]}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
