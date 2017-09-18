import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import styles from './Styles/PersonalContentStyle'
import { Images } from '../Themes'

export default class PersonalContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      phoneNumber: '',
      email: '',
      address: ''
    }
    this.changeTextField = this.changeTextField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.props.onSubmitInfo({ profile: {
      email: this.state.email || '',
      address: this.state.address || '',
      phoneNumber: this.state.phoneNumber || ''
    }})
  }

  render () {
    const { content, commonInfo, detailInfo, pictureTaking, icon, camera,
            nameAndID, nameField, idFrame, IDCover, square, idField,
            detail, card, storage, titleField, eachField, infoField,
            coverTitle, coverEmail, coverAddress, aboveCover, studentCard,
            bottomCover, buttonStorage, titleStorage
    } = styles
    const { profile } = this.props
    return (
      <View style={content}>
        <View style={commonInfo}>
          <View style={pictureTaking}>
            <Image source={profile && profile.profileImage ? { uri: profile && profile.profileImage } : Images.profileImage} style={icon} />
            <Image source={Images.takePicture} style={camera} />
          </View>
          <View style={nameAndID}>
            <Text style={nameField}>{profile && `${profile.familyName} ${profile.giveName}`}</Text>
            <View style={idFrame}>
              <Image source={Images.idCover} style={IDCover}>
                <Image source={Images.idImg} style={square} />
              </Image>
              <Text style={idField}>{profile && profile.id}</Text>
            </View>
            <Text style={idField}> deadline information </Text>
          </View>
        </View>

        <View style={detailInfo}>
          <View style={detail}>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}> 生年月日 </Text>
              </View>
              <Text style={infoField}>{profile && profile.dateOfBirth}</Text>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}> E-mail </Text>
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
                <Text style={titleField}> 学部 </Text>
              </View>
              <Text style={infoField}>dai hoc? </Text>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}> 学籍番号 </Text>
              </View>
              <Text style={infoField}>{profile && profile.studentNumber}</Text>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}>入学年度 </Text>
              </View>
              <Text style={infoField}>nam nhap hoc? </Text>
            </View>
          </View>
          <View style={card}>
            <Image source={Images.aboveCover} style={aboveCover} />
            <Image source={Images.studentCard} style={studentCard} />
            <Image source={Images.bottomCover} style={bottomCover} />
          </View>
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

// <Text style={infoField}> miyakawa.tomoyuki@tus.ac.jp </Text>
