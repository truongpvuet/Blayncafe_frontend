import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { List, ListItem } from 'native-base'
import CoffeeHistory from '../Components/CoffeeHistory'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import UserProfileActions from '../Redux/UserProfileRedux'
import { Images } from '../Themes'
// Styles
import styles from './Styles/CoffeeHistoryScreenStyle'

class CoffeeHistoryScreen extends Component {
  componentWillMount () {
    this.props.getHistory()
  }
  render () {
    const { pointBg, textPoint, history, historyTitle, historyText, historyContent,
      listItem, item
    } = styles
    return (
      <View style={styles.container}>
        <Image source={Images.pointBg} style={pointBg} >
          <Text style={textPoint}> {this.props.history && this.props.history.score} </Text>
        </Image>

        <View style={history}>
          <View style={historyTitle}>
            <Text style={historyText}> 来店履歴 </Text>
          </View>

          <ScrollView>
            <List style={historyContent}>
              {this.props.history && this.props.history.logs && this.props.history.logs.map((historyItem, idx) =>
                <ListItem key={idx} style={listItem}>
                  <CoffeeHistory
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.profile.history
  }
}

export default connect(mapStateToProps, {
  getHistory: UserProfileActions.userHistoryRequest
})(CoffeeHistoryScreen)
