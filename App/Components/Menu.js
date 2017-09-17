import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/MenuStyle'
import { Images } from '../Themes'

export default class Menu extends Component {
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

  render () {
    const { container, menu, menuNavigation, policy, featuredInfo,
            profile, eventList, coffeeHistory, featuredImage, nameAndID,
            nameField, idFrame, idField, IDCover, square, userIcon, textProfile,
            eventIcon, textEvent, numberIcon, shopIcon, textShop,
            useTerm, privacyPolicy, blackBlank, logOut, policyText, textNumberIcon
    } = styles
    const { userProfile, willAttendedEvents } = this.props
    return (
      <View style={container}>
        <View style={menu}>
          <View style={menuNavigation}>
            <View style={featuredInfo}>
              <View style={{ justifyContent: 'center' }}>
                <Image style={featuredImage} source={userProfile && userProfile.profileImage ? { uri: userProfile.profileImage } : Images.initCover} />
              </View>
              <View style={nameAndID}>
                <Text style={nameField}>{userProfile && `${userProfile.giveName} ${userProfile.familyName}`}</Text>
                <View style={idFrame}>
                  <Image source={Images.idCover} style={IDCover}>
                    <Image source={Images.idImg} style={square} />
                  </Image>
                  <Text style={idField}> {userProfile && userProfile.id} </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={profile}
              onPress={this.props.openPersonalInfo}
            >
              <Image source={Images.profileIcon} style={userIcon} />
              <Text style={textProfile}> プロフィール </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={eventList}
              onPress={this.props.gotoAttendEvent}
            >
              <Image source={Images.eventLogo} style={eventIcon} />
              <Text style={textEvent}> 参加イベント </Text>
              {willAttendedEvents.length > 0 &&
                <View style={numberIcon}>
                  <Text style={textNumberIcon}> {willAttendedEvents.length} </Text>
                </View>
              }
            </TouchableOpacity>
            <TouchableOpacity
              style={coffeeHistory}
              onPress={this.props.gotoCoffeeHistory}
            >
              <Image source={Images.shopLogo} style={shopIcon} />
              <Text style={textShop}> 参加イベント </Text>
            </TouchableOpacity>
          </View>

          <View style={policy}>
            <TouchableOpacity
              style={useTerm}
              onPress={this.props.openTOS}
            >
              <Text style={policyText}> 利用規約 </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={privacyPolicy}
              onPress={this.props.openPrivacyPolicy}
            >
              <Text style={policyText}> 個人情報保護方針 </Text>
            </TouchableOpacity>
            <View style={blackBlank} />
            <TouchableOpacity style={logOut} onPress={this.props.doLogout}>
              <Text style={policyText}> ログアウト </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }
}
