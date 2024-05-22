import {View, Text, Image} from 'react-native';
import React from 'react';
import {Spacing, Typography} from '../../styles';
import {CommonStyle} from '../../styles/styles';

const ChatMessage = ({isUser, message}) => {
  return (
    <View
      style={[
        Spacing.P10,
        Spacing.MB10,
        Spacing.FD_R,
        Spacing.AC_FS,
        isUser && Spacing.AS_FE,
        {
          borderRadius: 6,
          ...(isUser && {borderTopEndRadius: 0}),
          ...(!isUser && {borderTopLeftRadius: 0}),
          width: '90%',
          alignContent: 'flex-end',
          backgroundColor: isUser ? '#ECECEC' : '#FFEEF3',
        },
        CommonStyle.OnlyShadow,
      ]}>
      {isUser ? (
        <Image
          source={require('../../../assets/user.png')}
          style={{height: 20, width: 20, resizeMode: 'contain'}}
        />
      ) : (
        <Image
          source={require('../../../assets/Logoicon.png')}
          style={{height: 20, width: 20, resizeMode: 'contain'}}
        />
      )}

      <Text
        style={[
          Spacing.ML5,
          Spacing.PR10,
          Typography.FONT_SIZE_16,
          {lineHeight: 20},
        ]}>
        {message}
      </Text>
    </View>
  );
};

export default ChatMessage;
