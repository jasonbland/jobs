import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    AsyncStorage.removeItem('fb_token'); //temp for testing
  }

  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(AuthScreen);
