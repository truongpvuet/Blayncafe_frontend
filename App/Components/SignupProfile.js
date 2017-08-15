import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Styles/SignupProfileStyle';
import { Images } from '../Themes';

export default class SignupProfile extends Component {
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
    const { content, title, titleText, commonInfo, detailInfo, pictureTaking,
        icon, detail, card, storage, titleField, eachField, infoField,
        coverTitle, coverEmail, coverAddress, aboveCover, studentCard,
        bottomCover, buttonStorage, titleStorage, fix, buttonFix, titleFix
    } = styles;
    return (
      <View style={content}>
        <ScrollView>
          <View style={title}>
            <Text style={titleText}> 入力内容確認 </Text>
          </View>

          <View style={commonInfo}>
            <View style={pictureTaking}>
              <Image source={Images.personalIcon} style={icon} />
            </View>
          </View>

          <View style={detailInfo}>
            <View style={detail}>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 生年月日 </Text>
                </View>
                <Text style={infoField}> A 2006063 </Text>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 学籍番号 </Text>
                </View>
                <Text style={infoField}> A 2006063 </Text>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 電話番号 </Text>
                </View>
                <View style={coverEmail}>
                  <Text style={infoField}> 090-1234-5678 </Text>
                </View>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> E-mail </Text>
                </View>
                <View style={coverEmail}>
                  <Text style={infoField}> miyakawa.tomoyuki@tus.ac.jp </Text>
                </View>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 住所 </Text>
                </View>
                <View style={coverAddress}>
                  <Text style={infoField}> 〒102-0071 {'\n'} 東京都千代田区富士見1-11-2 </Text>
                </View>
              </View>
            </View>
            <View style={card}>
              <Image source={Images.aboveCover} style={aboveCover}>
                <Image source={Images.studentCard} style={studentCard}>
                  <Image source={Images.bottomCover} style={bottomCover} />
                </Image>
              </Image>
            </View>
            <View style={storage} >
              <TouchableOpacity
                style={buttonStorage}
                onPress={this.props.goSuccessMessage}
              >
                <Text style={titleStorage}> 登録する </Text>
              </TouchableOpacity>
            </View>

            <View style={fix}>
              <TouchableOpacity
                style={buttonFix}
                onPress={this.props.goBack}
              >
                <Text style={titleFix}> 修正する </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
