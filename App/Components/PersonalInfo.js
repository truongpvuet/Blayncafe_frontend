import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
// import styles from './Styles/PersonalInfoStyle';
import PersonalContent from './PersonalContent';

export default class PersonalInfo extends Component {
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
    return (
      <View>
        <ScrollView>
          <PersonalContent gobackMenu={this.props.gobackMenu} />
        </ScrollView>
      </View>
    );
  }
}
