import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/CompanyStyle'
import { Images } from '../Themes'

export default class Company extends Component {
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

  render () {
    const { container, line, titleLine, gridLine, gridLine1, gridLine2,
      gridLine3, imageLine
    } = styles
    return (
      <View style={container}>
        <View style={line}>
          <Text style={titleLine}> 各企業が協力してます </Text>
        </View>
        <View style={gridLine}>
          <TouchableOpacity style={gridLine1}>
            <Image source={Images.Google} style={imageLine} />
          </TouchableOpacity>
          <TouchableOpacity style={gridLine2}>
            <Image source={Images.Blayn} style={imageLine} />
          </TouchableOpacity>
          <TouchableOpacity style={gridLine3}>
            <Image source={Images.Tenga} style={imageLine} />
          </TouchableOpacity>
        </View>
        <View style={gridLine}>
          <TouchableOpacity style={gridLine1}>
            <Image source={Images.Eureka} style={imageLine} />
          </TouchableOpacity>
          <TouchableOpacity style={gridLine2}>
            <Image source={Images.Amazon} style={imageLine} />
          </TouchableOpacity>
          <TouchableOpacity style={gridLine3}>
            <Image source={Images.Facebook} style={imageLine} />
          </TouchableOpacity>
        </View>
        <View style={gridLine}>
          <TouchableOpacity style={gridLine1}>
            <Image source={Images.StartToday} style={imageLine} />
          </TouchableOpacity>
          <TouchableOpacity style={gridLine2}>
            <Image source={Images.Mercari} style={imageLine} />
          </TouchableOpacity>
          <TouchableOpacity style={gridLine3}>
            <Image source={Images.Hatena} style={imageLine} />
          </TouchableOpacity>
        </View>
        <View style={gridLine}>
          <TouchableOpacity style={gridLine1}>
            <Image source={Images.PowerElite} style={imageLine} />
          </TouchableOpacity>
          <TouchableOpacity
            style={gridLine2}
            onPress={this.props.onCompanyDetail}
          >
            <Image source={Images.KomyMirror} style={imageLine} />
          </TouchableOpacity>
          <TouchableOpacity style={gridLine3}>
            <Image source={Images.Payroll} style={imageLine} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
