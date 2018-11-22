import { AsynchStorage } from 'react-native';
import { Facebook } from 'expo';
import dotenv from 'dotenv';
import { FACEBOK_LOGIN_FAIL, FACEBOOK_LOGIN_SUCCESS } from './types';

dotenv.config();

export const facebookLogin = () => async dispatch => {
  let token = await AsynchStorage.getItem('fb_token');

  if (token) {
    // dispatch an action that fb login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
    // start up fb login step
  }
};

const doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(process.env.FACEBOOK_APPID, {
    permissions: ['public_profile']
  });

  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsynchStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
