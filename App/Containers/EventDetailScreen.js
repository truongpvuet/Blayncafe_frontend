import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';
// import EventDetail from '../Components/EventDetail';
import EventDetailHeader from '../Components/EventDetailHeader';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from './Styles/EventDetailScreenStyle';
import { Images } from '../Themes';

const heighImage = 41;
const widthImage = 44;

class EventDetailScreen extends Component {
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
    const { eventDetail } = this.props
    return (
      <Container style={styles.container}>
        <Content style={{ backgroundColor: '#222527', width: '100%' }}>
          <Image
            style={styles.mainImage}
            source={{ uri: eventDetail && eventDetail.images }}
          />
          <View style={styles.blockView1}>
            <View style={styles.redNewTextContainer}>
              <Text style={styles.redNewText}>
                New
              </Text>
            </View>
            <View>
              <Text style={styles.shortDescriptionText}>
                {eventDetail && eventDetail.eventTitle}
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
            <Text style={styles.timeBlockViewTextLine}>{eventDetail && `${eventDetail.date} (±) ${eventDetail.startingTime}`}</Text>
            <Text style={styles.timeBlockViewTextLine}>7/12 人（先着順）</Text>
          </View>
          <View style={styles.moreDetailBlock}>
            <Text style={styles.moreDetailBlockText}>
              {eventDetail && eventDetail.description}
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

const mapStateToProps = (state) => {
  return {
    eventDetail: state.eventDetail.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailScreen)
