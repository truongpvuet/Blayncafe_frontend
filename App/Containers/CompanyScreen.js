import React, { Component } from 'react'
import { View } from 'react-native'
import Company from '../Components/Company'
import {Actions} from 'react-native-router-flux'
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CompanyScreenStyle'

export default class CompanyScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { navigate } = navigation;
  //   return {
  //     header: (
  //       <CompanyHeader
  //         onOpen={() => navigate('DrawerOpen')}
  //       />
  //     ),
  //     // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  //     tabBarIcon: ({ focused }) => (
  //       <Image
  //         source={focused ? Images.tabCompany : Images.untabCompany}
  //         style={{ width: (widthImage / 2), height: (heighImage / 2) }}
  //       />
  //     )
  //   };
  // };

  render () {
    const { container } = styles
    return (
      <View style={container}>
        <Company onCompanyDetail={() => Actions.companyDetail()} />
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(CompanyScreen);
