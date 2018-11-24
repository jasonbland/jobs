import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    // check if user logged in case (may not be necassary)
    this.onAuthComplete(this.props);

    AsyncStorage.removeItem('fb_token'); // testing
  }

  componentWillReceiveProps(nextProps) {
    // user logs in case
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return <View />;
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(
  mapStateToProps,
  actions
)(AuthScreen);
