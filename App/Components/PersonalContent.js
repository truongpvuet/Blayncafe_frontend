import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Styles/PersonalContentStyle';
import { Images } from '../Themes';

export default class PersonalContent extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      studentByID: {}
    });
  }
  // componentDidMount() {
  //   return fetch(
  //     'http://192.168.1.16:3000/api/student/2',
  //     {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         'ADMIN-API-KEY': 'admin'
  //       }
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({ studentByID: responseJson });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  render() {
    const { content, commonInfo, detailInfo, pictureTaking, icon, camera,
            nameAndID, nameField, idFrame, IDCover, square, idField,
            detail, card, storage, titleField, eachField, infoField,
            coverTitle, coverEmail, coverAddress, aboveCover, studentCard,
            bottomCover, buttonStorage, titleStorage
    } = styles;
    return (
      <View style={content}>
        <View style={commonInfo}>
          <View style={pictureTaking}>
            <Image source={Images.personalIcon} style={icon}>
              <Image source={Images.takePicture} style={camera} />
            </Image>
          </View>
          <View style={nameAndID}>
            <Text style={nameField}> 宮川-知之 </Text>
            <View style={idFrame}>
              <Image source={Images.idCover} style={IDCover}>
                <Image source={Images.idImg} style={square} />
              </Image>
              <Text style={idField}> 00000174130001 </Text>
            </View>
          </View>
        </View>

        <View style={detailInfo}>
          <View style={detail}>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}> 学籍番号 </Text>
              </View>
              <Text style={infoField}> A 2006063 </Text>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}> 生年月日 </Text>
              </View>
              <Text style={infoField}> 1969年2月9日 </Text>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}> 電話番号 </Text>
              </View>
              <View style={coverEmail}>
                <Text style={infoField}> 090-1234-5678 </Text>
              </View>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}> E-mail </Text>
              </View>
              <View style={coverEmail}>
                <Text style={infoField}>
                  'this.state.studentByID.familyName'
                </Text>
              </View>
            </View>
            <View style={eachField}>
              <View style={coverTitle}>
                <Text style={titleField}> 住所 </Text>
              </View>
              <View style={coverAddress}>
                <Text style={infoField}> 〒102-0071 {'\n'} 東京都千代田区富士見1-11-2 </Text>
              </View>
            </View>
          </View>
          <View style={card}>
            <Image source={Images.aboveCover} style={aboveCover} />
            <Image source={Images.studentCard} style={studentCard} />
            <Image source={Images.bottomCover} style={bottomCover} />
          </View>
          <View style={storage}>
            <TouchableOpacity
              style={buttonStorage}
              onPress={this.props.gobackMenu}
            >
              <Text style={titleStorage}> 保存 </Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

// <Text style={infoField}> miyakawa.tomoyuki@tus.ac.jp </Text>
