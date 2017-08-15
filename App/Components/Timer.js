import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import PropTypes from 'prop-types'
import { View } from 'react-native';
// import { Circle, Svg, LinearGradient, Stop, Defs } from 'react-native-svg';
import styles from './Styles/TimerStyle';

export default class Timer extends Component {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      this.setState({ value: nextProps.value });
    }
  }

  render() {
    const { size, strokewidth, startColor, endColor, value, children } = this.props;

    const halfsize = (size * 0.5);
    const radius = halfsize - (strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((value * circumference) / 100);
    const dashval = [strokeval, circumference];

    const childrenAnchor = ((1 - Math.sqrt(2)) * halfsize) -
      (((1 / Math.sqrt(2)) * strokewidth) / 2);
    return (
      <View style={styles.container}>

        <View
          style={{
            position: 'absolute',
            left: -childrenAnchor,
            top: -childrenAnchor,
            bottom: -childrenAnchor,
            right: -childrenAnchor
          }}
        >
          {children}
        </View>
      </View>
    );
  }
}

Timer.propTypes = {
  value: PropTypes.number,        // value the chart should show
  valuelabel: PropTypes.string,   // label for the chart
  size: PropTypes.number,         // diameter of chart
  strokewidth: PropTypes.number,   // width of chart line
  startColor: PropTypes.string,   // start color of gradient
  endColor: PropTypes.string      // end color of gradient
};

Timer.defaultProps = {
  value: 50,
  valuelabel: 'Completed',
  size: 116,
  strokewidth: 26,
  startColor: '#77CD45',
  endColor: '#B6DE44'
};

// <Svg width={size} height={size} className='donutchart'>
//   <Circle
//     r={radius}
//     cx={halfsize}
//     cy={halfsize}
//     stroke='#DAE2E5'
//     strokeWidth={strokewidth}
//     rotate='-90'
//     origin={`${halfsize}, ${halfsize}`}
//     fill='transparent'
//   />
//   <Circle
//     r={radius}
//     cx={halfsize}
//     cy={halfsize}
//     fill='transparent'
//     stroke='url(#blue-gradient)'
//     strokeWidth={strokewidth}
//     rotate='-90'
//     origin={`${halfsize}, ${halfsize}`}
//     strokeDasharray={dashval}
//   />
//   <Defs>
//     <LinearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='blue-gradient'>
//       <Stop stopColor={startColor} stopOpacity='1' offset='0%' />
//       <Stop stopColor={endColor} stopOpacity='1' offset='100%' />
//     </LinearGradient>
//   </Defs>
// </Svg>

// <View style={container}>
//   <Image source={Images.Graph} style={graphImage} />
// </View>

// const mapStateToProps = (state) => {
//   return {
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(TimerScreen)
