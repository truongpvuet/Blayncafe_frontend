import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Styles/MenuStyle';
import { Images } from '../Themes';

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

  render() {
    const { container, header, menu, backIcon, titleIcon, undefinedBlank,
            title, menuNavigation, betweenBlank, policy, featuredInfo,
            profile, eventList, coffeeShop, featuredImage, nameAndID,
            nameField, idFrame, idField, IDCover, square, userIcon, textProfile,
            eventIcon, textEvent, numberIcon, shopIcon, textShop,
            useTerm, privacyPolicy, blackBlank, logOut, policyText
    } = styles;
    // const { navigate } = this.props.navigation;
    return (
      <View style={container}>

        <View style={header}>
          <View>
            <TouchableOpacity onPress={this.props.onClose} >
              <Image style={backIcon} source={Images.buttonBack} />
            </TouchableOpacity>
          </View>
          <View style={title} >
            <Image style={titleIcon} source={Images.Title} />
          </View>
          <View style={undefinedBlank} />
        </View>

        <View style={menu}>
          <View style={menuNavigation}>
            <View style={featuredInfo}>
              <View style={{ justifyContent: 'center' }}>
                <Image style={featuredImage} source={Images.personalIcon} />
              </View>
              <View style={nameAndID}>
                <Text style={nameField}> 宮川-知之 </Text>
                <View style={idFrame}>
                  <Image source={Images.idCover} style={IDCover}>
                    <Image source={Images.idImg} style={square} />
                  </Image>
                  <Text style={idField}> 00000174130001 </Text>
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
              <Image source={Images.numberLogo} style={numberIcon}>
                <Text> 2 </Text>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={coffeeShop}
              onPress={this.props.gotoCoffeeShop}
            >
              <Image source={Images.shopLogo} style={shopIcon} />
              <Text style={textShop}> 参加イベント </Text>
            </TouchableOpacity>
          </View>

          <View style={betweenBlank} />

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
            <TouchableOpacity style={logOut}>
              <Text style={policyText}> ログアウト </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}
