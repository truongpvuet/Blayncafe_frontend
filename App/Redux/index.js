import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    event: require('./ListEventsRedux').reducer,
    profile: require('./UserProfileRedux').reducer,
    eventDetail: require('./EventDetailRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
