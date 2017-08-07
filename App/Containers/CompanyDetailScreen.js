import React, { Component } from 'react';
import { Image } from 'react-native';
import CompanyDetail from '../Components/CompanyDetail';
import CompanyDetailHeader from '../Components/CompanyDetailHeader';
// import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import tabCompany from '../Images/tabCompany.png';

const heighImage = 44;
const widthImage = 44;

// Styles
// import styles from './Styles/CompanyDetailScreenStyle';

export default class CompanyDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <CompanyDetailHeader
          onOpen={() => navigate('DrawerOpen')}
          goBack={() => navigation.goBack()}
        />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={tabCompany}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      )
    };
  };

  render() {
    return (
      <CompanyDetail />
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
// export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetailScren)
