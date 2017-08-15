import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';
import Timer from './Timer';
import styles from './Styles/AnimatedTimerStyle';

const ATimer = Animated.createAnimatedComponent(Timer);

export default class AnimatedTimer extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  state = {
    animatedValue: new Animated.Value(this.props.value)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      Animated.timing(                  // Animate over time
        this.state.animatedValue,            // The animated value to drive
        {
          toValue: nextProps.value,                   // Animate to opacity: 1 (opaque)
          duration: 500              // Make it take a while
        }
      ).start();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ATimer {...this.props} value={this.state.animatedValue} />
      </View>
    );
  }
}

AnimatedTimer.defaultProps = {
  value: 0
};

AnimatedTimer.propTypes = {
  value: PropTypes.number
};
