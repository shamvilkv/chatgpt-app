import {View, Text} from 'react-native';
import React from 'react';
import {Spacing, Typography} from '../../styles';
import {Image} from 'react-native-elements';

const HeaderBar = () => {
  return (
    <View style={[Spacing.FD_R, Spacing.AI_CENTER]}>
      <Image
        source={require('../../../assets/logo.png')}
        style={{height: 30, width: 30, resizeMode: 'contain'}}
      />
      <Text style={[Typography.FONT_WEIGHT_MEDIUM, Typography.FONT_SIZE_16]}>
        Fliki
      </Text>
    </View>
  );
};

export default HeaderBar;
