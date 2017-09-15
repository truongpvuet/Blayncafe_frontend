import React, { Component } from 'react';
import { } from 'redux-form';
// import PropTypes from 'prop-types';
import { View, Text, ScrollView, Image, TextInput,
  TouchableOpacity
} from 'react-native';
// import { Content, Form, Item, Input, Label } from 'native-base';
import styles from './Styles/SignUpStyle';
import { Images } from '../Themes';


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: true
    };
    this.SelectMale = this.SelectMale.bind(this);
    this.SelectFemale = this.SelectFemale.bind(this);
  }
  SelectMale() {
    this.setState({ gender: this.state.gender });
  }
  SelectFemale() {
    this.setState({ gender: !this.state.gender });
  }

  render() {
    const { container, title, titleText, formCover, pictureTaking, icon, camera,
            mainForm, nameInfo, firtname, lastname, textInputName, studentCard, studentCardInside,
            textInputCard, university, universityInside, textBirthDay, dateInfo, year, month, day,
            textInputDate, admissionYear, admissionYearInside, email, emailInside,
            cardTakingPhoto, cardUploading, takePicture, pictureGuide, sumary,
            sumaryText, linkedText, button, registrationBtn, registrationText,
            radio, radioMale, radioFemale, radioText, radioFilledOutside, radioFilledInside,
            radioEmptyCover
    } = styles;
    const fillupSelection = (
      <TouchableOpacity
        style={radioFilledOutside}
        onPress={() => this.SelectMale()}
      >
        <View style={radioFilledInside} />
      </TouchableOpacity>
    );
    const emptySelection = (
      <TouchableOpacity
        style={radioEmptyCover}
        onPress={() => this.SelectFemale()}
      />
    );
    const maleSelection = this.state.gender ? fillupSelection : emptySelection;
    const femaleSelection = !this.state.gender ? fillupSelection : emptySelection;

    return (
      <View style={container}>
        <View style={title}>
          <Text style={titleText}> 新規会員登録 </Text>
        </View>

        <ScrollView style={formCover}>
          <View style={pictureTaking}>
            <Image source={Images.initCover} style={icon}>
              <TouchableOpacity>
                <Image source={Images.takePicture} style={camera} />
              </TouchableOpacity>
            </Image>
          </View>

          <View style={mainForm}>
            <View style={nameInfo}>
              <View style={firtname}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="姓"
                  style={textInputName}
                />
              </View>
              <View style={lastname}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="名"
                  style={textInputName}
                />
              </View>
            </View>

            <View style={radio}>
              <View style={radioMale}>
                {maleSelection}
                <Text style={radioText}> 男性 </Text>
              </View>
              <View style={radioFemale}>
                {femaleSelection}
                <Text style={radioText}> 女性 </Text>
              </View>
            </View>

            <Text style={textBirthDay}> 生年月日 </Text>
            <View style={dateInfo}>
              <View style={year}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="年"
                  style={textInputDate}
                />
              </View>
              <View style={month}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="月"
                  style={textInputDate}
                />
              </View>
              <View style={day}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="日"
                  style={textInputDate}
                />
              </View>
            </View>

            <View style={email}>
              <View style={emailInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="E-mail"
                  style={textInputCard}
                />
              </View>
            </View>

            <View style={university}>
              <View style={universityInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="学部"
                  style={textInputCard}
                />
              </View>
            </View>

            <View style={studentCard}>
              <View style={studentCardInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="学籍番号"
                  style={textInputCard}
                />
              </View>
            </View>

            <View style={admissionYear}>
              <View style={admissionYearInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="入学年度"
                  style={textInputCard}
                />
              </View>
            </View>
          </View>

          <View style={cardUploading}>
            <TouchableOpacity>
              <Image source={Images.cardFrame} style={cardTakingPhoto}>
                <Image source={Images.takePicture} style={takePicture} />
                <Image source={Images.pictureGuide} style={pictureGuide} />
              </Image>
            </TouchableOpacity>
          </View>

          <View style={sumary}>
            <Text style={sumaryText}>
              会員登録には「
              <Text
                style={linkedText}
                onPress={this.props.gotoTOS}
              >
                利用規約
              </Text>
              」「
              <Text
                style={linkedText}
                onPress={this.props.gotoProfilePolicy}
              >
                個人情報の取り扱いについ{'\n'}て
              </Text>
              」「
              <Text
                style={linkedText}
                onPress={this.props.gotoPrivacyPolicy}
              >
                個人情報保護方針
              </Text>
              」 への同意が必要です。内容に{'\n'}
              同意の上、確認画面へ進んでください。ます。
            </Text>
          </View>

          <View style={button}>
            <TouchableOpacity
              style={registrationBtn}
              onPress={this.props.gotoSignupProfile}
            >
              <Text style={registrationText}> 入力内容確認 </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// <Text
//   style={titleRightBrow}
//   onPress={() => Linking.openURL('http://www.komy.jp/')}
// >
//   http://www.komy.jp/
// </Text>

// <View style={emailForm}>
//   <TextInput
//     style={emailText}
//     underlineColorAndroid='transparent'
//     placeholder="Email"
//   />
// </View>
// <View style={passwordForm}>
//   <TextInput
//     style={passwordText}
//     underlineColorAndroid='transparent'
//     placeholder="Password"
//     secureTextEntry
//   />
// </View>
