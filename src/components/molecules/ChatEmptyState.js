import {View, Text} from 'react-native';
import React from 'react';
import {Spacing, Typography} from '../../styles';
import {Image} from 'react-native-elements';

const ChatEmptyState = () => {
  return (
    <View style={[Spacing.AS_CENTER]}>
      <Image
        source={require('../../../assets/EmptyState.jpg')}
        style={{height: 300, width: 300, resizeMode: 'contain'}}
      />

      <Text
        style={[
          Typography.FONT_CENTER,
          Typography.FONT_COLOR_GREYDARK,
          Typography.FONT_SIZE_20,
        ]}>
        Ask me anything....
      </Text>
    </View>
  );
};

export default ChatEmptyState;
