import React, { Component } from 'react'
import { } from 'redux-form'
// import PropTypes from 'prop-types';
import { View, Text, ScrollView, Image, TextInput,
  TouchableOpacity, Dimensions
} from 'react-native'
// import { Content, Form, Item, Input, Label } from 'native-base';
import styles from './Styles/SignUpStyle'
import { Images } from '../Themes'
const { height, width } = Dimensions.get('window')
// 640, 360
// 1334, 750
const heightIcon = (height / 3.76)
const widthIcon = heightIcon

// Image taking/uploading
var ImagePicker = require('react-native-image-picker')

// More info on all the options is below in the README...just some common use cases shown here
var optionsAvatar = {
  title: 'Select avatar',
  customButtons: [
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}
var optionsStudentcard = {
  title: 'Select student card',
  customButtons: [
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      familyName: '',
      giveName: '',
      gender: true,
      dobYear: '',
      dobMonth: '',
      dobDay: '',
      email: '',
      departure: '',
      studentNumber: '',
      admissionYear: '',
      password: '',
      repassword: '',
      avatarSource: null,
      studentCard: null
    }
    this.SelectMale = this.SelectMale.bind(this)
    this.SelectFemale = this.SelectFemale.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.pictureTaking = this.pictureTaking.bind(this)
    this.studentCardTaking = this.studentCardTaking.bind(this)
  }
  SelectMale () {
    this.setState({ gender: this.state.gender })
  }
  SelectFemale () {
    this.setState({ gender: !this.state.gender })
  }
  onChangeText (field, value) {
    this.setState({
      [field]: value
    })
  }
  onSubmit () {
    const submitStudent = {
      ...this.state,
      dateOfBirth: `${this.state.dobYear}-${this.state.dobMonth}-${this.state.dobDay}`,
      sex: this.state.gender ? 'male' : 'female',
      admissionYear: parseInt(this.state.admissionYear),
      department: this.state.departure
    }
    const images = {
      profile: this.state.avatarData,
      studentCard: this.state.studentCardData
    }
    this.props.signUpRequest(submitStudent, images)
  }
  pictureTaking () {
    ImagePicker.showImagePicker(optionsAvatar, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
          avatarData: response.data
        })
      }
    })
  }
  studentCardTaking () {
    ImagePicker.showImagePicker(optionsStudentcard, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          studentCard: source,
          studentCardData: response.data
        })
      }
    })
  }

  render () {
    const { container, title, titleText, formCover, pictureTaking, icon, camera,
            mainForm, nameInfo, firtname, lastname, textInputName, studentCard, studentCardInside,
            textInputCard, university, universityInside, textBirthDay, dateInfo, year, month, day,
            textInputDate, admissionYear, admissionYearInside, email, emailInside,
            cardTakingPhoto, cardUploading, takePicture, pictureGuide, sumary,
            sumaryText, linkedText, button, registrationBtn, registrationText,
            radio, radioMale, radioFemale, radioText, radioFilledOutside, radioFilledInside,
            radioEmptyCover
    } = styles
    const fillupSelection = (
      <TouchableOpacity
        style={radioFilledOutside}
        onPress={() => this.SelectMale()}
      >
        <View style={radioFilledInside} />
      </TouchableOpacity>
    )
    const emptySelection = (
      <TouchableOpacity
        style={radioEmptyCover}
        onPress={() => this.SelectFemale()}
      />
    )
    const maleSelection = this.state.gender ? fillupSelection : emptySelection
    const femaleSelection = !this.state.gender ? fillupSelection : emptySelection
    const coverImage = this.state.avatarSource === null
      ? (
        <View style={pictureTaking}>
          <Image source={Images.initCover} style={icon} >
            <TouchableOpacity onPress={() => this.pictureTaking()}>
              <Image source={Images.takePicture} style={camera} />
            </TouchableOpacity>
          </Image>
        </View>
        )
      : (
        <View style={pictureTaking}>
          <Image
            source={this.state.avatarSource}
            width={widthIcon}
            height={heightIcon}
            resizeMode='cover'
            borderRadius={(heightIcon / 2)}
          >
            <TouchableOpacity onPress={() => this.pictureTaking()}>
              <Image source={Images.takePicture} style={camera} />
            </TouchableOpacity>
          </Image>
        </View>
        )
    const studentCardImage = this.state.studentCard === null
    ? (
      <View style={cardUploading}>
        <TouchableOpacity onPress={() => this.studentCardTaking()}>
          <Image source={Images.cardFrame} style={cardTakingPhoto}>
            <Image source={Images.takePicture} style={takePicture} />
            <Image source={Images.pictureGuide} style={pictureGuide} />
          </Image>
        </TouchableOpacity>
      </View>
      )
    : (
      <View style={cardUploading}>
        <TouchableOpacity onPress={() => this.studentCardTaking()}>
          <Image source={Images.cardFrame} style={cardTakingPhoto}>
            <Image source={this.state.studentCard} style={{ resizeMode: 'cover', width: 255, height: ((255 * 390) / 606) }} />
          </Image>
        </TouchableOpacity>
      </View>
      )

    return (
      <View style={container}>
        <View style={title}>
          <Text style={titleText}> 新規会員登録 </Text>
        </View>

        <ScrollView style={formCover}>
          {coverImage}

          <View style={mainForm}>
            <View style={nameInfo}>
              <View style={firtname}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='姓'
                  style={textInputName}
                  value={this.state.familyName}
                  onChangeText={text => this.onChangeText('familyName', text)}
                />
              </View>
              <View style={lastname}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='名'
                  style={textInputName}
                  value={this.state.giveName}
                  onChangeText={text => this.onChangeText('giveName', text)}
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
                  placeholder='年'
                  style={textInputDate}
                  value={this.state.dobYear}
                  onChangeText={text => this.onChangeText('dobYear', text)}
                />
              </View>
              <View style={month}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='月'
                  style={textInputDate}
                  value={this.state.dobMonth}
                  onChangeText={text => this.onChangeText('dobMonth', text)}
                />
              </View>
              <View style={day}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='日'
                  style={textInputDate}
                  value={this.state.dobDay}
                  onChangeText={text => this.onChangeText('dobDay', text)}
                />
              </View>
            </View>

            <View style={email}>
              <View style={emailInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='E-mail'
                  style={textInputCard}
                  value={this.state.email}
                  onChangeText={text => this.onChangeText('email', text)}
                />
              </View>
            </View>

            <View style={email}>
              <View style={emailInside}>
                <TextInput
                  secureTextEntry
                  underlineColorAndroid='transparent'
                  placeholder='password'
                  password
                  style={textInputCard}
                  value={this.state.password}
                  onChangeText={text => this.onChangeText('password', text)}
                />
              </View>
            </View>

            <View style={email}>
              <View style={emailInside}>
                <TextInput
                  secureTextEntry
                  underlineColorAndroid='transparent'
                  placeholder='re password'
                  password
                  style={textInputCard}
                  value={this.state.repassword}
                  onChangeText={text => this.onChangeText('repassword', text)}
                />
              </View>
            </View>

            <View style={university}>
              <View style={universityInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='学部'
                  style={textInputCard}
                  value={this.state.departure}
                  onChangeText={text => this.onChangeText('departure', text)}
                />
              </View>
            </View>

            <View style={studentCard}>
              <View style={studentCardInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='学籍番号'
                  style={textInputCard}
                  value={this.state.studentNumber}
                  onChangeText={text => this.onChangeText('studentNumber', text)}
                />
              </View>
            </View>

            <View style={admissionYear}>
              <View style={admissionYearInside}>
                <TextInput
                  underlineColorAndroid='transparent'
                  placeholder='入学年度'
                  style={textInputCard}
                  value={this.state.admissionYear}
                  onChangeText={text => this.onChangeText('admissionYear', text)}
                />
              </View>
            </View>
          </View>

          {studentCardImage}

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
              onPress={this.onSubmit}
            >
              <Text style={registrationText}> 入力内容確認 </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
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
