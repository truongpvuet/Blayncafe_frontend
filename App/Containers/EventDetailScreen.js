import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
// import EventDetail from '../Components/EventDetail';
import EventDetailHeader from '../Components/EventDetailHeader';
// import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/EventDetailScreenStyle';
import { Images } from '../Themes';

const heighImage = 41;
const widthImage = 44;

export default class EventDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      header: (
        <EventDetailHeader
          onOpen={() => navigate('DrawerOpen')}
          goBack={() => navigation.goBack()}
        />
      ),
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
      tabBarIcon: ({ focused }) => (
        <Image
          source={focused ? Images.tabEvent : Images.untabEvent}
          style={{ width: (widthImage / 2), height: (heighImage / 2) }}
        />
      )
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content style={{ backgroundColor: '#222527', width: '100%' }}>
          <Image
            style={styles.mainImage}
            source={{ uri: 'https://pbs.twimg.com/media/DEp8exjU0AA7u1j.png' }}
          />
          <View style={styles.blockView1}>
            <View style={styles.redNewTextContainer}>
              <Text style={styles.redNewText}>
                New
              </Text>
            </View>
            <View>
              <Text style={styles.shortDescriptionText}>
                【参加無料】「起業したい」から「起業する」へ。起業を成功させる3つの本質を学ぶ無料セミナー
              </Text>
              <Text style={styles.shortDescriptionContactText}>
                主催：@ kayo-coco
              </Text>
            </View>
          </View>
          <View style={styles.registerButtonContainer}>
            <Button style={styles.registerButton} full>
              <Text style={styles.registerButtonText}>このイベントに申込む</Text>
            </Button>
          </View>
          <View style={styles.timeBlockView}>
            <Text style={styles.timeBlockViewTextLine}>2017/06/24（土）10:00〜12:30</Text>
            <Text style={styles.timeBlockViewTextLine}>7/12 人（先着順）</Text>
          </View>
          <View style={styles.moreDetailBlock}>
            <Text style={styles.moreDetailBlockText}>
              いつか起業してみたい{'\n'}
              ずっとそう思っているけれど、その一歩が踏み出せない。{'\n'}
              自分なんかに出来るだろうか？もっとしっかりと知識を得てからじゃないと
              失敗するのではないだろうか？漠然とモヤモヤした想いに足を取られている
              うちに、いつの間にか時間ばかりが過ぎていったりしてはいないでしょうか。
            </Text>
            <View style={styles.showMoreButtonContainer}>
              <Button style={styles.showMoreButton}>
                <Text style={styles.showMoreButtonText}>+もっと読む</Text>
              </Button>
            </View>
            <View style={styles.registerButtonContainer}>
              <Button style={styles.registerButton} full>
                <Text style={styles.registerButtonText}>このイベントに申込む</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
//
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
// export default connect(mapStateToProps, mapDispatchToProps)(EventDetailScreen)
