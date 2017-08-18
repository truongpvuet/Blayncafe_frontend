import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
import styles from './Styles/PrivacyPolicyStyle';
// import { Images } from '../Themes';

export default class PrivacyPolicy extends Component {
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
    const {
      container, titleContent, titleText, topText, tostopText,
      sectionTerm, topicSentence, topicText, sectionContent, sectionText
    } = styles;
    return (
      <ScrollView style={container}>
        <View style={titleContent}>
          <Text style={titleText}> 個人情報保護方針 </Text>
        </View>
        <View style={topText}>
          <Text style={tostopText}>
          ブレイン株式会社(以下、「当社」といいます)は、ソフトウェアを中心
          としたサービス（以下「本サービス」といいます）の企画開発から販売
          までを一貫して行っている企業です。個人情報を適切に取扱うことは、
          お客様、お取引先様、及び従業員との信頼関係を維持するための重要事
          項であると認識しています。
          当社は、各種法令・条例及びJISQ15001を遵守して、個人情報を正確か
          つ安全に取扱うことに細心の注意を払っております。その徹底のため、
          各種規程等の社内ルールを整備し、役員及び全従業員にその運用を徹
          底させています。
          </Text>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 1.個人情報の保護についての考え方 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            (1). 個人情報に適用される「個人情報の保護に関する法律」その他
            の関係法令を遵守するとともに、一般に公正妥当と認められる個人情
            報の取扱いに関する慣行に準拠し、適切に取り扱い{'\n'}{'\n'}
            ます。また、適宜、取扱いの改善に努めます。{'\n'}{'\n'}
            (2). 個人情報の取扱いに関する社内規程を策定するとともに、従業
            員に対する個人情報保護についての教育訓練を行い、その内容を社内
            に周知徹底させます。また、取引先等に対しても適切に個人情報を取
            り扱うように要請します。{'\n'}{'\n'}
            (3). 個人情報の取得に際しては、利用目的を特定して通知または公表
            し、その利用目的に従って個人情報を取り扱います。{'\n'}{'\n'}
            (4). 保有する個人情報に関して、お客様が開示、訂正、削除、利用停
            止を希望される場合には、合理的かつ必要な範囲内において速やかに対
            応いたします。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 2.利用目的 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            2-1 当社は、当社定款所定の事業目的に照らし、この事業遂行上必要とな
            る個人情報を取得しますが、これらの個人情報は2-2に定める目的で利用させてい
            ただきます。なお、2-2に定める目的以外の目的で利用する場合は、法令に定めの
            ある場合を除いて、あらかじめ、本人の同意を得るものと致します。{'\n'}{'\n'}
            2-2 本サービスのサービス提供にかかわる個人情報の具体的な利用目的は以下のとおりです。{'\n'}{'\n'}
            (1). 本サービスに関する登録の受付、本人確認、利用料金の計算など本サー
            ビスの提供、維持、保護及び改善のため{'\n'}{'\n'}
            (2). 本サービスに関するご案内、お問い合わせ等への対応のため{'\n'}{'\n'}
            (3). 本サービスに関する当社の規約、約款、本方針等（以下、併せて「規約
            等」といいます）に違反する行為に対する対応のため{'\n'}{'\n'}
            (4). 本サービスに関する規約等の変更等を通知するため{'\n'}{'\n'}
            (5).上記の利用目的に付随する利用目的のため{'\n'}{'\n'}
            (6).上記の各利用目的達成のために必要な範囲での第三者への提供
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 3.第三者への提供 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            当社は、個人情報については、個人情報保護法その他の法令に基づき第三者への提供、
            開示が認められる場合を除くほか、あらかじめ利用者の同意を得ないで、第三者に提
            供しません。但し、次に掲げる場合はこの限りではありません。{'\n'}{'\n'}
            (1). 当社が利用目的の達成に必要な範囲内において個人情報の取扱の全部又は一
            部を委託、提供する場合{'\n'}{'\n'}
            (2). 人の生命、身体または財産の保護のために必要な場合であって、ご本人
            の同意を得ることが困難である場合{'\n'}{'\n'}
            (3). 公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある
            場合であって、本人の同意を得ることが困難であるとき{'\n'}{'\n'}
            (4). 国または地方公共団体等が公的な事務を実施するうえで、協力する必要がある場
            合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 4.セキュリティについて </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            個人情報への不正アクセスなどを防止するための措置、万全の体制及び
            個人情報の漏洩、紛失または破壊・改ざんの防止、その他の個人情報の
            安全管理のために必要かつ適切な措置を整え、個人情報の管理体制に関
            して継続的な改善に努めます。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 5.個人情報の利用目的の通知 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            当社の保有個人データに関して、利用者から、利用者ご本人が識別される当社の保有
            個人データの利用目的の通知のお求めがあったときは、お申し出いただいた方が利
            用者ご本人様であることを確認したうえで、次の(1)から(4)までの場合を除
            いて、合理的な期間および範囲で、回答いたします。{'\n'}{'\n'}
            (1). 利用者ご本人が識別される保有個人データの利用目的が明らかな場合{'\n'}{'\n'}
            (2). 利用者ご本人又は第三者の生命、身体、財産その他の権利利益を害するおそ
            れがある場合{'\n'}{'\n'}
            (3). 当社の権利又は利益を害するおそれがある場合{'\n'}{'\n'}
            (4). 国の機関又は地方公共団体が法令の定める事務を遂行することに対して協
            力する必要がある場合であって、当該事務の遂行に支障を及ぼすおそれがある場合
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 6.個人情報の開示 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            当社は、利用者から、個人情報保護法の定めに基づき個人情報の開示を求められた
            ときは、利用者ご本人からのご請求であることを確認のうえで、利用者に対し、
            遅滞なく開示を行います（当該個人情報が存在しないときにはその旨を通知致
            します）。但し、個人情報保護法その他の法令により、当社が開示の義務を負
            わない場合は、この限りではありません。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 7.個人情報の訂正及び利用停止等 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            当社の保有個人データに関して、ご本人の情報の利用停止、消去又は第三者へ
            の提供の停止（以下「利用停止等」といいます）を希望される場合には、お申し
            出いただいた方がご本人であることを確認したうえで、合理的な期間および範
            囲で利用停止等をいたします。{'\n'}
            なお、これらの情報の一部または全部に関し利用停止等をした場合、各種サー
            ビスの提供ができなくなることがあります。{'\n'}
            また、個人情報保護法その他の法令に違反しないで保有しておりま
            す情報については、利用停止等のお申し出には応じられない場合があります。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 8.お問い合わせ窓口 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            当社の保有個人データに関する上記5,6,7のお申し出、その他の個人情報に関す
            るご意見、ご質問、苦情のお申出その他個人情報の取扱いに関するお問い合
            わせは、下記の窓口まで、メール又はお電話によりお願い致します。応対時間
            は、平日の午前10時から午後6時までとさせていただきます。{'\n'}{'\n'}
            〒106-6117 東京都港区六本木6丁目10番1号{'\n'}
            六本木ヒルズ森タワー17階{'\n'}
            ブレイン株式会社{'\n'}
            E-mail：info@blayn.co.jp{'\n'}
            Tel：03-6328-0542{'\n'}
            個人情報保護管理責任者：河村賢人{'\n'}
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 9.個人情報保護方針の変更手続 </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            当社は、個人情報の取扱に関する運用状況を適宜見直し、継続的な改善に努
            めるものとし、必要に応じて、本個人情報保護方針を変更することがありま
            す。変更した場合には、ホームページに掲載する方法でお客様に通知します。
            但し、法令上利用者の同意が必要となるような内容の変更の場合は、当社所定
            の方法でお客様の同意を得るものとします。
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
// <ScrollView style={container}>
//   <View>
//     <Image source={Images.privacyPolicyContent} style={privacyContent} />
//   </View>
// </ScrollView>
