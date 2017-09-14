import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container, Content, Text, Button } from 'native-base'
// import EventDetail from '../Components/EventDetail';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import EventDetailActions from '../Redux/EventDetailRedux'
// Styles
import styles from './Styles/EventDetailScreenStyle'

class EventDetailScreen extends Component {
  render () {
    const { eventDetail, registered } = this.props
    const isJoined = registered
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
            {!isJoined
            ? <Button style={styles.registerButton} full onPress={() => this.props.joinEvent(eventDetail.id)}>
              <Text style={styles.registerButtonText}>このイベントに申込む</Text>
            </Button>
            : <Button style={styles.cancelButton} full>
              <Text style={styles.cancelButtonText}>キャンセルする</Text>
            </Button>}
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
            {!isJoined
              ? <Button style={styles.registerButton} full>
                <Text style={styles.registerButtonText}>このイベントに申込む</Text>
              </Button>
              : <Button style={styles.cancelButton} full>
                <Text style={styles.cancelButtonText}>キャンセルする</Text>
              </Button>}
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { eventDetail } = state
  return {
    eventDetail: eventDetail.data,
    registered: eventDetail.registered
  }
}

export default connect(mapStateToProps, {
  joinEvent: EventDetailActions.joinEventRequest
})(EventDetailScreen)
