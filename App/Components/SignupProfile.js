import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from './Styles/SignupProfileStyle'
import { Images } from '../Themes'

export default class SignupProfile extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
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

  onSubmit(submitStudent, images) {
    this.props.signUpRequest(submitStudent, images)
  }

  render () {
    const { content, title, titleText, commonInfo, detailInfo, pictureTaking,
        icon, detail, card, storage, titleField, eachField, infoField,
        coverTitle, aboveCover, studentCard,
        bottomCover, buttonStorage, titleStorage, fix, buttonFix, titleFix
    } = styles
    // console.log(this.props.signUpRequest)
    const { submitStudent, images } = this.props
    return (
      <View style={content}>
        <ScrollView>
          <View style={title}>
            <Text style={titleText}> 入力内容確認</Text>
          </View>

          <View style={commonInfo}>
            <View style={pictureTaking}>
              <Image source={images && images.profile} style={icon} />
            </View>
          </View>

          <View style={detailInfo}>
            <View style={detail}>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 氏名 </Text>
                </View>
                <Text style={infoField}> {submitStudent.familyName}{submitStudent.giveName} </Text>
              </View>

              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 性別 </Text>
                </View>
                <Text style={infoField}> {submitStudent.sex === 'male' ? '男性' : '女性'} </Text>
              </View>

              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 生年月日 </Text>
                </View>
                <Text style={infoField}> {submitStudent.dobYear}-{submitStudent.dobMonth}-{submitStudent.dobDay} </Text>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> E-mail </Text>
                </View>
                <Text style={infoField}> {submitStudent.email} </Text>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 学部 </Text>
                </View>
                <Text style={infoField}> {submitStudent.departure} </Text>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 学籍番号 </Text>
                </View>
                <Text style={infoField}> {submitStudent.studentNumber} </Text>
              </View>
              <View style={eachField}>
                <View style={coverTitle}>
                  <Text style={titleField}> 入学年度 </Text>
                </View>
                <Text style={infoField}> {submitStudent.admissionYear} </Text>
              </View>
            </View>
            <View style={card}>
              <Image source={Images.aboveCover} style={aboveCover} />
              <Image source={images && images.studentCard} style={studentCard} />
              <Image source={Images.bottomCover} style={bottomCover} />
            </View>
            <View style={storage} >
              <TouchableOpacity
                style={buttonStorage}
                onPress={this.props.gotoSignupSuccess}
              >
                <Text style={titleStorage}> 登録する </Text>
              </TouchableOpacity>
            </View>

            <View style={fix}>
              <TouchableOpacity
                style={buttonFix}
                onPressIn={this.props.gobackToRevision}
              >
                <Text style={titleFix}> 修正する </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
