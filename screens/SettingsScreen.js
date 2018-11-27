import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikes } from '../actions';

class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="Reset Liked Jobs"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearLikes}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { clearLikes }
)(SettingsScreen);
