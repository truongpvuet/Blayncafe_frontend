import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

class MainStack extends React.Component {
  render () {
    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {})(MainStack)
