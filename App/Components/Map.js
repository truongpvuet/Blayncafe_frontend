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
    const longitude = 105.781281;
    const latitude = 21.036661;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 21.036661,
            longitude: 105.781281,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{ latitude, longitude }}
            zoomEnabled
            minZoomLevel={15}
            maxZoomLevel={20}
            title="Blayncafe"
            description="Blayncafe address: 2-6-1,Kagurazaka,Shinjuku,Tokyo"
          />
        </MapView>
      </View>
    );
  }
}
