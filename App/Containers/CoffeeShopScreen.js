import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { List, ListItem } from 'native-base';
import CoffeeShop from '../Components/CoffeeShop';
import CoffeeShopHeader from '../Components/CoffeeShopHeader';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Images } from '../Themes';
// Styles
import styles from './Styles/CoffeeShopScreenStyle';

const heighImage = 44;
const widthImage = 51;

export default class CoffeeShopScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <CoffeeShopHeader
          gobackMenu={() => { navigate('HomeScreen'); navigate('DrawerOpen'); }}
        />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: () => (
        <Image
          source={Images.tabHome}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      historyList: [{
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }, {
        date: '2017.10.01',
        time: '13:45'
      }]
    };
  }

  render() {
    const { pointBg, textPoint, history, historyTitle, historyText, historyContent,
      listItem, item
    } = styles;
    return (
      <View style={styles.container}>
        <Image source={Images.pointBg} style={pointBg} >
          <Text style={textPoint}> 100 </Text>
        </Image>

        <View style={history}>
          <View style={historyTitle}>
            <Text style={historyText}> 来店履歴 </Text>
          </View>

          <ScrollView>
            <List style={historyContent}>
              {this.state.historyList && this.state.historyList.map((historyItem, idx) =>
                <ListItem key={idx} style={listItem}>
                  <CoffeeShop
                    date={historyItem.date}
                    time={historyItem.time}
                    style={item}
                  />
                </ListItem>
              )}
            </List>
          </ScrollView>
        </View>
      </View>
    );
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
// export default connect(mapStateToProps, mapDispatchToProps)(CoffeeShopScreen);
