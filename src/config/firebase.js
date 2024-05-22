import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import {FIREBASE_CONFIG} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const app = initializeApp(FIREBASE_CONFIG);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
