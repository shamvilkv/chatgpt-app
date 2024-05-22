import {StyleSheet} from 'react-native';
import common from './common';
import {Colors} from './index';

const CommonStyle = StyleSheet.create({
  container: {
    ...common.container,
  },
  top: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  bottom: {
    flex: 0.4,
    flexDirection: 'column-reverse',
  },
  modal: {
    justifyContent: 'flex-end',
    marginHorizontal: 0,
    marginVertical: 0,
  },
  modal1: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  cardWhite: {
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
  OnlyShadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 8,
  },
  OnlyShadowCart: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 8,
  },
});

export {CommonStyle};
