import { AsynchStorage } from 'react-native';
import { FACEBOOK_LOGIN_SUCCESS } from './types';

export const facebookLogin = () => async dispatch => {
  let token = await AsynchStorage.getItem('fb_token');

  if (token) {
    // dispatch an action that fb login is done
  } else {
    // start up fb login steps
  }
};
