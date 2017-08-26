import React, { Component } from 'react';
import MapView from 'react-native-maps';
// import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './Styles/MapStyle';

export default class Map extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    const longitude = 139.741583;
    const latitude = 35.700690;

    return (
      <View style={styles.container}>
        <MapView
          minZoomLevel={1}
          toolbarEnabled
          style={styles.map}
          initialRegion={{
            latitude: 35.700690,
            longitude: 139.741583,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{ latitude, longitude }}
            title="Blayncafe Address"
            description="2-6-1,Kagurazaka,Shinjuku,Tokyo"
          />
        </MapView>
      </View>
    );
  }
}
