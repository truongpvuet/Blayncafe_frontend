import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import '../Lib/reactotron'
import '../Config';
// import DebugConfig from '../Config/DebugConfig';
import RootContainer from './RootContainer';
import createStore from '../Redux';

// create our store
const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

StatusBar.setHidden(false);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
// export default DebugConfig.useReactotron
//   ? console.tron.overlay(App)
//   : App;
