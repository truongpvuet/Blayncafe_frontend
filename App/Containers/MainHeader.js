import React from 'react'
import { connect } from 'react-redux'
import Header from '../Components/Header'
import { isLoggedIn } from '../Lib/authHelper'

const MainHeader = (props) =>
  <Header
    onOpen={() => props.navigation.navigate('DrawerOpen')}
    loggedIn={isLoggedIn(props.accessToken)}
  />

const mapStateToProps = (state) => {
  const { auth } = state
  return {
    ...auth
  }
}

export default connect(mapStateToProps, {})(MainHeader)
