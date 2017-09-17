import React, { Component } from 'react'
import CompanyDetail from '../Components/CompanyDetail'
// import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
// import styles from './Styles/CompanyDetailScreenStyle';

export default class CompanyDetailScreen extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   const { navigate } = navigation;
  //   return {
  //     header: (
  //       <CompanyDetailHeader
  //         onOpen={() => navigate('DrawerOpen')}
  //         goBack={() => navigation.goBack()}
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
    return (
      <CompanyDetail />
    )
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
// export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetailScren)
