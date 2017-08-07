import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView, Image, Text, Linking } from 'react-native';
import styles from './Styles/CompanyDetailStyle';
import { Images } from '../Themes';

export default class CompanyDetail extends Component {
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
    const { container, main, overview, point, outline, title, textTitle, lineTitle,
            content, titleContent, detailContent, titleLeftContent, titleRightContent,
            titleRightBrow
    } = styles;
    const { Main, Overview, Point } = Images;
    return (
      <ScrollView style={container}>
        <Image source={Main} style={main} />
        <Image source={Overview} style={overview} />
        <Image source={Point} style={point} />

        <View style={outline}>
          <View style={title}>
            <Text style={textTitle}> 会社情報 </Text>
            <View style={lineTitle} />
          </View>

          <View style={content}>
            <View style={titleContent}>
              <Text style={titleLeftContent}> 代表取締役 </Text>
              <Text style={titleLeftContent}> 設立年月日 </Text>
              <Text style={titleLeftContent}> 社員数 </Text>
              <Text style={titleLeftContent}> 関連業界 </Text>
              <Text style={titleLeftContent}> 住所 </Text>
              <Text style={titleLeftContent}> URL </Text>
            </View>

            <View style={detailContent}>
              <Text style={titleRightContent}> 小宮山　栄 </Text>
              <Text style={titleRightContent}> 1978/02/12 </Text>
              <Text style={titleRightContent}> 000000人 </Text>
              <Text style={titleRightContent}> プラスチック製品製造業、化学繊維製造業 </Text>
              <Text style={titleRightContent}> 〒332-0034　埼玉県川口市並木1-5-13 </Text>
              <Text
                style={titleRightBrow}
                onPress={() => Linking.openURL('http://www.komy.jp/')}
              >
                http://www.komy.jp/
              </Text>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}
