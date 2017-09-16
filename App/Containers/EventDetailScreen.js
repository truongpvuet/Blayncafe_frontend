import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container, Content, Text, Button } from 'native-base'
// import EventDetail from '../Components/EventDetail';
import { connect } from 'react-redux'
import { isLoggedIn } from '../Lib/authHelper'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import EventDetailActions from '../Redux/EventDetailRedux'
// Styles
import styles from './Styles/EventDetailScreenStyle'

class EventDetailScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showRegistered: false,
      showCancel: false,
      isFullDescription: false
    }
    this.toggerFullDescription = this.toggerFullDescription.bind(this)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.registered !== this.props.registered) {
      if (nextProps.registered) {
        this.setState({
          showRegistered: true
        })
      } else {
        this.setState({
          showCancel: true
        })
      }
      (new Promise(resolve =>
        setTimeout(() => resolve(), 2000)
      )).then(() => this.setState({
        showRegistered: false,
        showCancel: false
      }))
    }
  }
  toggerFullDescription () {
    this.setState({
      isFullDescription: !this.state.isFullDescription
    })
  }
  render () {
    const { eventDetail, registered, accessToken } = this.props
    const isJoined = registered
    const loggedIn = isLoggedIn(accessToken)
    const registerButton = (
      <Button
        style={styles.registerButton}
        full
        onPress={() => this.props.joinEvent(eventDetail.id)}
        disabled={!loggedIn}
      >
        <Text style={styles.registerButtonText}>このイベントに申込む</Text>
      </Button>
    )
    const cancelButton = (
      <Button style={styles.cancelButton} full onPress={() => this.props.cancelEvent(eventDetail.id)}>
        <Text style={styles.cancelButtonText}>キャンセルする</Text>
      </Button>
    )
    const registerOrCancelBtn = !isJoined ? registerButton : cancelButton
    return (
      <Container style={styles.container}>
        <Content style={{ backgroundColor: '#222527', width: '100%' }}>
          <Image
            style={styles.mainImage}
            source={{ uri: eventDetail && eventDetail.images }}
          >
            {this.state.showCancel &&
              <View>
                <View style={styles.notifyMessageCancel} />
                <View style={styles.notifyMessageTextContainerCancel}>
                  <Text style={styles.notifyMessageTextCancel}>キャンセルしました</Text>
                </View>
              </View>
            }
            {this.state.showRegistered &&
              <View>
                <View style={styles.notifyMessageRegistered} />
                <View style={styles.notifyMessageTextContainerRegistered}>
                  <Text style={styles.notifyMessageTextRegistered}>申込みが完了しました</Text>
                </View>
              </View>
            }
          </Image>
          <View style={styles.blockView1}>
            <View style={styles.redNewTextContainer}>
              <Text style={styles.redNewText}>
                New
              </Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.shortDescriptionText}>
                {eventDetail && eventDetail.eventTitle}
              </Text>
              <Text style={styles.shortDescriptionContactText}>
                主催：@ kayo-coco
              </Text>
            </View>
          </View>
          <View style={styles.registerButtonContainer}>
            {registerOrCancelBtn}
          </View>
          <View style={styles.timeBlockView}>
            <Text style={styles.timeBlockViewTextLine}>
              {eventDetail && `${eventDetail.date} (±) ${eventDetail.startingTime} ~ ${eventDetail.endTime}`}
            </Text>
            <Text style={styles.timeBlockViewTextLine}>7/12 人（先着順）</Text>
          </View>
          <View style={styles.moreDetailBlock}>
            <Text style={styles.moreDetailBlockText}>
              {eventDetail && this.state.isFullDescription
                ? eventDetail.description
                : `${eventDetail.description.substring(0, 100)}${eventDetail.description.length > 100 && ' ...'}`
              }
            </Text>
            <View style={styles.showMoreButtonContainer}>
              <Button style={styles.showMoreButton} onPress={this.toggerFullDescription}>
                <Text style={styles.showMoreButtonText}>+もっと読む</Text>
              </Button>
            </View>
            {registerOrCancelBtn}
            <View style={styles.bottomDecoin} />
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { eventDetail, auth } = state
  return {
    eventDetail: eventDetail.data,
    registered: eventDetail.registered,
    accessToken: auth.accessToken
  }
}

export default connect(mapStateToProps, {
  joinEvent: EventDetailActions.joinEventRequest,
  cancelEvent: EventDetailActions.cancelEventRequest
})(EventDetailScreen)
