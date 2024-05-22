import React from 'react';

import HeaderBar from '../components/molecules/HeaderBar';
import ChatScreen from '../screens/Home/ChatScreen';

import {signOut} from 'firebase/auth';
import {auth} from '../config/firebase';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label="Logout"
        onPress={() => {
          logout();
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function HomeStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={ChatScreen}
        options={() => ({
          headerTitle: props => <HeaderBar {...props} />,
        })}
      />
    </Drawer.Navigator>
  );
}
