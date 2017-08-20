import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
// import { connect } from 'react-redux';
import PasswordRecovery from '../Components/PasswordRecovery';
import HeaderSign from '../Components/HeaderSign';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PasswordRecoveryScreenStyle';
import { Images } from '../Themes';

const heighImage = 44;
const widthImage = 51;
// Styles

export default class PasswordRecoveryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <HeaderSign onClose={() => navigate('HomeScreen')} />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Images.tabHome : Images.untabHome}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      ),
      tabBarVisible: false
    };
  }
  constructor(props) {
    super(props);
    this.GotoRecoverySuccess = this.GotoRecoverySuccess.bind(this);
  }
  GotoRecoverySuccess() {
    const { navigate } = this.props.navigation;
    navigate('RecoverySuccess');
  }

  render() {
    const { container, title, titleText, verifyIntro, verifyText
    } = styles;
    return (
      <View style={container}>
        <View style={title}>
          <Text style={titleText}> パスワード再設定 </Text>
        </View>
        <View style={verifyIntro}>
          <Text style={verifyText}>
            パスワードの再設定を行います。{'\n'}
            新しいパスワードを入力し「再設定する」ボタン{'\n'}
            を押してください。{'\n\n'}
            ・半角英字、数字、アンダースコアを3〜16文字{'\n'}で使用できます。
          </Text>
        </View>
        <PasswordRecovery
          gotoRecoverySuccess={() => this.GotoRecoverySuccess()}
        />
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(EmailVerifyScreen)
