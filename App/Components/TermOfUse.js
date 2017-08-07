import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView, Image } from 'react-native';
import styles from './Styles/TermOfUseStyle';
import { Images } from '../Themes';

export default class TermOfUse extends Component {
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
      container, termContent
    } = styles;
    return (
      <ScrollView style={container}>
        <View>
          <Image source={Images.termContent} style={termContent} />
        </View>
      </ScrollView>
    );
  }
}

// <View style={titleContent}>
//   <Text style={titleText}> 利用規約 </Text>
// </View>

// <View style={contentIntro}>
//   <Image source={Images.introTos} style={introduce} />
// </View>
//
// <View style={section1Intro}>
//   <Image source={Images.section1} style={section1} />
// </View>
// <Image source={Images.section1Content} style={section1Content} />
//
// <View style={section2Intro}>
//   <Image source={Images.section2} style={section2} />
// </View>
// <Image source={Images.section2Content} style={section2Content} />
