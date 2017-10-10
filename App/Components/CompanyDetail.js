import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, ScrollView, Image, Text, Linking } from 'react-native'
import styles from './Styles/CompanyDetailStyle'
import moment from 'moment'
import { Images } from '../Themes'

export default class CompanyDetail extends Component {
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
    const { container, main, outline, title, textTitle, lineTitle,
            content, titleContent, detailContent, titleLeftContent, titleRightContent,
            titleRightBrow, description, textDescription
    } = styles
    const { KomyMirror } = Images
    console.log(this.props)
    const { companyInfo } = this.props
    return (
      <ScrollView style={container}>
        <Image source={companyInfo ? { uri: companyInfo.companyLogo } : KomyMirror} style={main} />

        <View style={description}>
          <Text style={textDescription}>
            {companyInfo && companyInfo.introduction1}
          </Text>
        </View>
        <View style={outline}>
          <View style={title}>
            <Text style={textTitle}> 会社情報 </Text>
            <View style={lineTitle} />
          </View>

          <View style={content}>
            <View style={titleContent}>
              <Text style={titleLeftContent}> 代表取締役 </Text>
              <Text style={titleLeftContent}> 設立年月日 </Text>
              <Text style={titleLeftContent}> 社員数 </Text>
              <Text style={titleLeftContent}> 関連業界 </Text>
              <Text style={titleLeftContent}> 住所 </Text>
              <Text style={titleLeftContent}> URL </Text>
            </View>

            <View style={detailContent}>
              <Text style={titleRightContent}> {companyInfo && companyInfo.ceoName} </Text>
              <Text style={titleRightContent}> {moment(companyInfo && companyInfo.dateOfEstablishedCompany).format('YYYY/MM/DD')} </Text>
              <Text style={titleRightContent}> {companyInfo && companyInfo.numberOfEmployees}人 </Text>
              <Text style={titleRightContent}> {companyInfo && companyInfo.industry} </Text>
              <Text style={titleRightContent}> {companyInfo && `${companyInfo.companyAddress3}`} </Text>
              <Text
                style={titleRightBrow}
                onPress={() => Linking.openURL(companyInfo ? companyInfo.websiteUrl : 'http://www.komy.jp/')}
              >
                {companyInfo && companyInfo.websiteUrl}
              </Text>
            </View>
          </View>

        </View>
      </ScrollView>
    )
  }
}
