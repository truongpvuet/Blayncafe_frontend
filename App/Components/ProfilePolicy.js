import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native'
import styles from './Styles/ProfilePolicyStyle'
// import { Images } from '../Themes';

export default class ProfilePolicy extends Component {
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
    const {
      container, titleContent, titleText, sectionTerm, topicSentence,
      topicText, sectionContent, sectionText
    } = styles
    return (
      <ScrollView style={container}>
        <View style={titleContent}>
          <Text style={titleText}> 個人情報の取扱いについて </Text>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 事業者の名称 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            ブレイン株式会社{'\n\n\n'}
            個人情報保護管理者{'\n\n'}
            河村賢人
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 個人情報の利用目的 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            取得した個人情報は、問合せ対応のために利用いたします。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 個人情報の第三者提供について </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            本人の同意がある場合または法令に基づく場合を除き、取得し
            た個人情報を第三者に提供することはありません。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 個人情報の取扱いの委託について </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            取得した個人情報の全部または一部を委託する場合があります
            。その場合には、個人情報の管理水準が、当社が設定する基準
            を満たす企業を選定し、適切な管理、監督を行います。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 開示対象個人情報の開示等 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            本人からの求めにより、当社が保有する開示対象個人情報の利
            用目的の通知・開示・内容の訂正・追加または削除・利用の停
            止・消去（「開示等」といいます。）に応じます。 開示等をご
            希望される場合は、下記のお問合せ先にご連絡ください。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> お問合せ先 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            当社は、個人情報の照会・修正等または問合せや苦情・相談の
            対応窓口を下記の通り設置しております。{'\n\n'}
            〒106-6117 東京都港区六本木6丁目10番1号{'\n'}
            六本木ヒルズ森タワー17F{'\n'}
            ブレイン株式会社{'\n'}
            報保護管理責任者：河村賢人{'\n'}
            3-6328-0542 E-mail：info@blayn.co.jp
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 個人情報を入力するにあたっての注意事項 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            各項目の入力は任意となっております。
            正確な情報をご入力いただけない場合には、ご連絡を差し上げ
            ることができず、お問合せに対応できないことがあります。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 本人が容易に認識できない方法による個人情報の取得 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            当社では、アクセス状況の計測を目的として、クッキーを利用
            することがありますが、クッキーの利用によって、個人を特定
            することはありません。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 個人情報の安全管理措置について </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            不正アクセスなどを防止するための措置万全の体制及び漏えい、
            紛失または破壊・改ざんの防止その他の安全管理のために必
            要かつ適切な措置を整え、管理体制に関して継続的に改善に努
            めます。個人情報の取得を行う場合は、SSL（Secure Socket
             Layer）による暗号化措置を講じています。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 個人情報保護方針 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            当社の<Text style={{ textDecorationLine: 'underline' }}>個人情報保護方針</Text>をご覧ください。
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

// <ScrollView style={container}>
//   <View>
//     <Image source={Images.termContent} style={termContent} />
//   </View>
// </ScrollView>
