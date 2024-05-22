import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Spacing, Typography, Colors} from '../../styles';
import LoginForm from '../../components/organisms/LoginForm';
import LogoHeader from '../../components/molecules/LogoHeader';
import SignupForm from '../../components/organisms/RegisterForm';

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView
      enabled
      keyboardVerticalOffset={50}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      style={[
        Spacing.FG1,
        Spacing.P10,
        Spacing.FD_C,

        {backgroundColor: 'white'},
      ]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <LogoHeader />
        <SignupForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
