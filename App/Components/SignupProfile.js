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
        coverTitle, aboveCover, studentCard,
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
                  <Text style={titleField}> 氏名 </Text>
                </View>
                <Text style={infoField}> 宮川知之 </Text>
              </View>

              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 性別 </Text>
                </View>
                <Text style={infoField}> 男性 </Text>
              </View>

              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 生年月日 </Text>
                </View>
                <Text style={infoField}> 1969年2月9日 </Text>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> E-mail </Text>
                </View>
                <Text style={infoField}> miyakawa.tomoyuki@tus.ac.jp </Text>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 学部 </Text>
                </View>
                <Text style={infoField}> 理工学部 </Text>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 学籍番号 </Text>
                </View>
                <Text style={infoField}> A 0226063 </Text>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 入学年度 </Text>
                </View>
                <Text style={infoField}> 2014年度 </Text>
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
