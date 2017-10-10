import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import styles from './Styles/PersonalContentStyle'
import { Images } from '../Themes'
const { height } = Dimensions.get('window')
// 640, 360
// 1334, 750
const heightIcon = (height / 4.17)
const widthIcon = heightIcon

// Image taking/uploading
var ImagePicker = require('react-native-image-picker')
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

export default class PersonalContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      phoneNumber: '',
      email: '',
      address: '',
      avatarSource: null,
      avatarData: null,
      studentCardSource: null,
      studentCardData: null
    }
    this.changeTextField = this.changeTextField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.pictureTaking = this.pictureTaking.bind(this)
    this.studentCardTaking = this.studentCardTaking.bind(this)
  }

  componentWillMount () {
    this.setState({
      ...this.props.profile
    })
  }

  changeTextField (name, value) {
    this.setState({
      [name]: value
    })
  }

  handleSubmit () {
    this.props.onSubmitInfo({
      profile: {
        email: this.state.email || '',
        address: this.state.address || '',
        phoneNumber: this.state.phoneNumber || ''
      },
      image: {
        profile: this.state.avatarData,
        studentCard: this.state.studentCardData
      }
    })
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
          studentCardSource: source,
          studentCardData: response.data
        })
      }
    })
  }

  render () {
    const { content, commonInfo, detailInfo, pictureTaking, camera,
            nameAndID, nameField, idFrame, IDCover, square, idField,
            detail, card, storage, titleField, eachField, infoField,
            coverTitle, coverEmail, aboveCover, studentCard,
            bottomCover, buttonStorage, titleStorage,
            cardUploading, cardTakingPhoto, takePicture, pictureGuide
    } = styles
    const { profile } = this.props
    const coverImage = this.state.avatarSource === null
      ? (
        <View style={pictureTaking}>
          <Image
            source={profile && profile.profileImage ? { uri: profile && profile.profileImage } : Images.profileImage}
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
      const studentCardImage = this.state.studentCardSource === null
        ? (
            <View style={cardUploading}>
              <TouchableOpacity onPress={() => this.studentCardTaking()}>
                <Image source={Images.cardFrame} style={cardTakingPhoto}>
                  <Image
                    source={{ uri: profile && profile.studentCard }}
                    style={{ resizeMode: 'cover', width: 255, height: ((255 * 390) / 606) }}
                  />
                </Image>
              </TouchableOpacity>
            </View>
          )
        : (
            <View style={cardUploading}>
              <TouchableOpacity onPress={() => this.studentCardTaking()}>
                <Image source={Images.cardFrame} style={cardTakingPhoto}>
                  <Image source={this.state.studentCardSource} style={{ resizeMode: 'cover', width: 255, height: ((255 * 390) / 606) }} />
                </Image>
              </TouchableOpacity>
            </View>
          )

    return (
      <View style={content}>
        <View style={commonInfo}>
          {coverImage}
          <View style={nameAndID}>
            <Text style={nameField}>{profile && `${profile.familyName} ${profile.giveName}`}</Text>
            <View style={idFrame}>
              <Image source={Images.idCover} style={IDCover}>
                <Image source={Images.idImg} style={square} />
              </Image>
              <Text style={idField}>{profile && profile.id}</Text>
            </View>
            <Text style={idField}>{profile && profile.deadline} </Text>
          </View>
        </View>

        <View style={detailInfo}>
          <View style={detail}>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}>生年月日 </Text>
              </View>
              <Text style={infoField}>{profile && profile.dateOfBirth}</Text>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}>E-mail </Text>
              </View>
              <View style={coverEmail}>
                <TextInput
                  multiline
                  underlineColorAndroid='transparent'
                  style={infoField}
                  value={this.state.email}
                  onChangeText={(text) => this.changeTextField('email', text)}
                />
              </View>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}>学部 </Text>
              </View>
              <Text style={infoField}>{profile && profile.department} </Text>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}>学籍番号 </Text>
              </View>
              <Text style={infoField}>{profile && profile.studentNumber}</Text>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}>入学年度 </Text>
              </View>
              <Text style={infoField}>{profile && profile.admissionYear} </Text>
            </View>
          </View>

          {studentCardImage}

          <View style={storage}>
            <TouchableOpacity
              style={buttonStorage}
              onPress={this.handleSubmit}
            >
              <Text style={titleStorage}> 保存 </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }
}
// source={profile && profile.profileImage ? { uri: profile && profile.profileImage } : Images.profileImage}
// <Text style={infoField}> miyakawa.tomoyuki@tus.ac.jp </Text>
