import {View, Text, Image} from 'react-native';
import React from 'react';
import {Spacing, Typography, Colors} from '../../styles';

const LoginSection = () => {
  return (
    <View style={[Spacing.FG1, Spacing.FD_C, Spacing.AS_AUTO]}>
      <View style={[Spacing.AI_CENTER, Spacing.JC_CENTER, Spacing.FG1]}>
        <Image
          source={require('../../../assets/logo.png')}
          style={{height: 80, width: 80, resizeMode: 'contain'}}
        />
        <Text style={[Typography.FONT_BOLD, Typography.FONT_SIZE_28]}>
          Fliki
        </Text>
        <Text>Your AI Assistant</Text>
      </View>
    </View>
  );
};

export default LoginSection;
