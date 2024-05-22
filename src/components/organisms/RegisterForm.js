import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {HelperText, TextInput} from 'react-native-paper';
import {Button} from 'react-native-elements';
import {Spacing, Colors, Typography} from '../../styles';
import {useNavigation} from '@react-navigation/native';

import {auth} from '../../config/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const SignupForm = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const createAccount = async () => {
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        setError("Passwords don't match");
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists');
      } else {
        setError('There was a problem with your request');
      }
    }
  };

  return (
    <View style={[Spacing.FG1, Spacing.P5]}>
      <View style={[Spacing.MB10]}>
        <Text
          style={[
            Typography.FONT_SEMIBOLD,
            Typography.FONT_SIZE_24,
            Spacing.MB5,
          ]}>
          Create Account
        </Text>

        <Text
          style={[
            Typography.FONT_SIZE_16,
            Typography.FONT_COLOR_GREYDARK,
            {lineHeight: 20},
          ]}>
          Create an account to get started with Fliki,Its simple!!
        </Text>
      </View>
      <TextInput
        label="Name"
        mode="outlined"
        style={[Spacing.MB10, {backgroundColor: 'white'}]}
        activeOutlineColor={Colors.GREYDARK}
      />
      <TextInput
        label="Email"
        mode="outlined"
        style={[Spacing.MB10, {backgroundColor: 'white'}]}
        activeOutlineColor={Colors.GREYDARK}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={[Spacing.MB10, {backgroundColor: 'white'}]}
        activeOutlineColor={Colors.GREYDARK}
        onChangeText={setPassword}
      />
      <TextInput
        label="Confirm Password"
        mode="outlined"
        secureTextEntry
        style={[Spacing.MB10, {backgroundColor: 'white'}]}
        activeOutlineColor={Colors.GREYDARK}
        onChangeText={setConfirmPassword}
      />

      <Button
        // loading={loginLoadingState}
        title="Create Account"
        titleStyle={[Typography.FONT_MEDIUM, Typography.FONT_SIZE_16]}
        onPress={createAccount}
        buttonStyle={[
          {backgroundColor: Colors.SECONDARY},
          Spacing.P15,
          Spacing.MT10,
        ]}
        disabled={!email || !password || !confirmPassword}
      />
      {error && <HelperText type="error">{error}</HelperText>}
      <View style={[Spacing.MT10, Spacing.FD_R]}>
        <Text style={[Typography.FONT_WEIGHT_MEDIUM, Typography.FONT_SIZE_14]}>
          Already have an account?
        </Text>
        <TouchableOpacity
          style={[Spacing.FG1]}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={[
              Typography.FONT_WEIGHT_MEDIUM,
              Typography.FONT_SIZE_14,
              Typography.FONT_COLOR_PRIMARY,
            ]}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupForm;
