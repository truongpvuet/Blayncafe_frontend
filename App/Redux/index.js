import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import routes from './Router'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    event: require('./ListEventsRedux').reducer,
    profile: require('./UserProfileRedux').reducer,
    eventDetail: require('./EventDetailRedux').reducer,
    auth: require('./LoginRedux').reducer,
    routes
  })

  return configureStore(rootReducer, rootSaga)
}
