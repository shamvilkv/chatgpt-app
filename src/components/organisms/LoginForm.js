import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {HelperText, TextInput} from 'react-native-paper';
import {Button} from 'react-native-elements';
import {Spacing, Colors, Typography} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../config/firebase';

const LoginForm = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/wrong-password'
      ) {
        setError('Your email or password was incorrect');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists');
      } else if (error.code === 'auth/invalid-credential') {
        setError('Invalid credentials');
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
          Login
        </Text>
        <Text
          style={[
            Typography.FONT_SIZE_16,
            Typography.FONT_COLOR_GREYDARK,
            {lineHeight: 20},
          ]}>
          Get started with Fliki, get answers for your queries
        </Text>
      </View>
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
        style={{backgroundColor: 'white'}}
        activeOutlineColor={Colors.GREYDARK}
        onChangeText={setPassword}
        onSubmitEditing={handleSubmit}
      />

      <Button
        // loading={loginLoadingState}
        title="Login"
        titleStyle={[Typography.FONT_MEDIUM, Typography.FONT_SIZE_16]}
        onPress={handleSubmit}
        buttonStyle={[
          {backgroundColor: Colors.SECONDARY},
          Spacing.P15,
          Spacing.MT10,
        ]}
        disabled={!email || !password}
      />
      {error && <HelperText type="error">{error}</HelperText>}
      <View style={[Spacing.MT10, Spacing.FD_R]}>
        <Text style={[Typography.FONT_WEIGHT_MEDIUM, Typography.FONT_SIZE_14]}>
          Don’t have an account?
        </Text>
        <TouchableOpacity
          style={[Spacing.FG1]}
          onPress={() => navigation.navigate('Register')}>
          <Text
            style={[
              Typography.FONT_WEIGHT_MEDIUM,
              Typography.FONT_SIZE_14,
              Typography.FONT_COLOR_PRIMARY,
            ]}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
