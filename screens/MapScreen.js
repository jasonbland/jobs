import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  state = {
    region: {
      latitude: 37,
      longitude: -122,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04
    }
  };

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} initialRegion={this.state.region} onRegionChange={this.onRegionChange} />
      </View>
    );
  }
}

export default MapScreen;
