import {KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {Spacing} from '../../styles';
import LoginForm from '../../components/organisms/LoginForm';
import LogoHeader from '../../components/molecules/LogoHeader';

const LoginScreen = () => {
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
      <LogoHeader />
      <LoginForm />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
