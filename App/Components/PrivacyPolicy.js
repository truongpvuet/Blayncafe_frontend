import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
import styles from './Styles/PrivacyPolicyStyle';
// import { Images } from '../Themes';

export default class PrivacyPolicy extends Component {
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
    const {
      container
    } = styles;
    return (
      <ScrollView style={container}>
        <View>
          <Text> Term of use </Text>
        </View>
      </ScrollView>
    );
  }
}
// <ScrollView style={container}>
//   <View>
//     <Image source={Images.privacyPolicyContent} style={privacyContent} />
//   </View>
// </ScrollView>
