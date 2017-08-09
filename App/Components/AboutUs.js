import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ScrollView, View, Image, Text, Linking,
  TouchableOpacity
} from 'react-native';
// import Swiper from 'react-native-swiper';
import { Images } from '../Themes';
import styles from './Styles/AboutUsStyle';
import swiperImg1 from '../Images/swiperImg1.png';

export default class AboutUs extends Component {
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

  render() {
    const { container, main, pointCover, point, menu, access, imgSwiper,
            accessContent, accessText, accessTextBold, link, button, buttonAccess,
            outline, title, textTitle, lineTitle, content, titleContent,
            titleLeftContent, titleRightContent, detailContent, titleRightBrow
    } = styles;
    const {
      mainAboutus, pointAboutus, menuAboutus, ButtonAccess
    } = Images;
    return (
      <ScrollView style={container}>
        <Image source={mainAboutus} style={main} />
        <View style={pointCover}>
          <Image source={pointAboutus} style={point} />
        </View>
        <Image source={menuAboutus} style={menu} />

        <View style={access}>
          <Image source={swiperImg1} style={imgSwiper} />
          <View style={accessContent}>
            <Text style={accessTextBold}> blayn cafe / ブレインカフェ </Text>
            <Text style={accessText}> 10:30-23:00(L.O. 22:30) </Text>
            <Text style={accessText}> 定休日／土・日・祝 </Text>
            <Text style={accessText}> 〒162-082 </Text>
            <Text style={accessText}> tel.03-0000-0000 </Text>
            <Text
              style={link}
              onPress={() => Linking.openURL('http://blayncafe.com')}
            >
              http://blayncafe.com
            </Text>
          </View>
          <View style={button}>
            <TouchableOpacity style={{ flex: 1 }}>
              <Image source={ButtonAccess} style={buttonAccess} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={outline}>
          <View style={title}>
            <Text style={textTitle}> 運営会社 </Text>
            <View style={lineTitle} />
          </View>
          <View style={content}>
            <View style={titleContent}>
              <Text style={titleLeftContent}> 会社名 </Text>
              <Text style={titleLeftContent}> 所在地{'\n\n'} </Text>
              <Text style={titleLeftContent}> TEL </Text>
              <Text style={titleLeftContent}> FAX </Text>
              <Text style={titleLeftContent}> 代表取締役 </Text>
              <Text style={titleLeftContent}> URL </Text>
              <Text style={titleLeftContent} />
            </View>
            <View style={detailContent}>
              <Text style={titleRightContent}> ブレイン株式会社 </Text>
              <Text style={titleRightContent}>
                〒106-6117{'\n'}東京都港区六本木6丁目10番1号{'\n'}六本木ヒルズ森タワー17F
              </Text>
              <Text style={titleRightContent}> 03-6328-0542() </Text>
              <Text style={titleRightContent}> 03-6328-0543 </Text>
              <Text style={titleRightContent}> 埼玉県 </Text>
              <Text
                style={titleRightBrow}
                onPress={() => Linking.openURL('http://www.komy.jp/')}
              >
                http://www.blayn.co.jp/
              </Text>
              <Text style={titleRightContent} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// <Swiper showsPagination style={swiper} >
//   <View>
//     <Image source={swiperImg1} style={imgSwiper} />
//   </View>
// </Swiper>
