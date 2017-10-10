import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/CompanyStyle'

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
    const { container, line, titleLine, gridLine, imageLine
    } = styles
    return (
      <View style={container}>
        <View style={line}>
          <Text style={titleLine}> 各企業が協力してます </Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.props.companyList && this.props.companyList.map(company =>
            <TouchableOpacity
              style={gridLine}
              onPress={() => this.props.onCompanyDetail(company)}
              key={company.id}
            >
              <Image source={{uri: company.companyLogo}} style={imageLine} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }
}
