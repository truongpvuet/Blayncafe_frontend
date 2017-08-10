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
    const { container, title, titleText, formCover, pictureTaking, icon, camera,
            mainForm, nameInfo, firtname, lastname, textInputName, studentCard, studentCardInside,
            textInputCard, textBirthDay, dateInfo, year, month, day, textInputDate,
            phoneNumber, phoneNumberInside, email, emailInside, address,
            addressInside, textInputAddress,
            cardTakingPhoto, cardUploading, takePicture, pictureGuide, sumary,
            sumaryText, button, registrationBtn, registrationText
    } = styles;
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

            <View style={studentCard}>
              <View style={studentCardInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="学籍番号"
                  style={textInputCard}
                />
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

            <View style={phoneNumber}>
              <View style={phoneNumberInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="電話番号"
                  style={textInputCard}
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

            <View style={address}>
              <View style={addressInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder="住所"
                  maxLength={500}
                  multiline
                  numberOfLines={3}
                  style={textInputAddress}
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
              「入力内容確認」ボタンをクリックすることで、{'\n'}利用規約と個人情報保護方針に同意するものとします。
            </Text>
          </View>

          <View style={button}>
            <TouchableOpacity style={registrationBtn} >
              <Text style={registrationText}> 入力内容確認 </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
