import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
import styles from './Styles/TermOfUseStyle';
// import { Images } from '../Themes';

export default class TermOfUse extends Component {
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
          <Text style={titleText}> 利用規約 </Text>
        </View>
        <View style={topText}>
          <Text style={tostopText}>
            このアプリ（blayncafe以下、「当アプリ」という。）はプレ
            イン株式会社（以下、「当社」という。）が運営しております
            。お客様が当サイトを利用されるにあたっては、以下の利用規
            約をお読み頂き、同意される場合にのみご利用下さい。なお
            本規約につきましては予告なく変更することがございますので
            、あらかじめ御了承下さい。
          </Text>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第1条（注意事項） </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            1. 当サイトのご利用に際してはウェブにアクセスする必要が
            ありますが、利用者は自らの費用と責任で必要な機器・ソフ
            トウェア・通信手段等を用意し適切に接続・操作することとします
            。{'\n'}{'\n'}
            2. 当サイトでは、自動車に掲載する広告に関する情報の提供
            を行っておりますが、将来様々なサービスを追加したり、
            変更・削除することもあります。{'\n'}{'\n'}
            3. 当社は、当サイトが提供及び付随するサービスに対する保証
            行為を一切しておりません。また、当社は、当サイトの提供す
            るサービスの不確実性・サービス停止等に起因する利用者への
            損害について、一切責任を負わないものとします。詳細につい
            ては、「免責事項について」をご覧下さい。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第2条（個人情報の取り扱い）</Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            当サイトのご利用に際して、利用者から取得した氏名、年齢、性別、メールア
            ドレス、住所、電話番号等の個人情報は、別途定める「プライバシーポリシー」
            に則り取り扱われます。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第3条（著作権等知的財産権） </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            1. 当サイト内のプログラム、商品写真その他の知的財産権は当社に帰属します。
            利用者は、当該情報を私用目的で利用される場合にかぎり使用できます。当社
            に無断で、それを越えて、使用（複製、送信、譲渡、二次利用等を含む）
            することは禁じます。{'\n'}{'\n'}
            2. 当社の商標は、当社に帰属しますので、無断で使用することはできません。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第4条（禁止事項） </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            1. 当社は、利用者が以下の行為を行うことを禁じます。{'\n'}{'\n'}
            ➀ 当社または第三者に損害を与える行為、または損害を与えるおそれのある行為{'\n'}{'\n'}
            ➁ 当社または第三者の財産、名誉、プライバシー等を侵害する行為、
            または侵害するおそれのある行為{'\n'}{'\n'}
            ➂ 公序良俗に反する行為、またはそのおそれのある行為{'\n'}{'\n'}
            ➃ 他人のメールアドレスを登録するなど、虚偽の申告、届出を行う行為{'\n'}{'\n'}
            ➄ コンピュータウィルス等有害なプログラムを使用または提供する行為{'\n'}{'\n'}
            ➅ 迷惑メールやメールマガジン等を一方的に送付する行為{'\n'}{'\n'}
            ➆ その他、法令に違反する行為、またはそのおそれがある行為{'\n'}{'\n'}
            ➇ その他当社が不適切と判断する行為{'\n'}{'\n'}
            2. 上記に違反した場合、当社は利用者に対し損害賠償請求をすることができることに利用者は同意します。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第5条（反社会的勢力の排除） </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            1. 当社は、利用者が反社会的勢力（暴力団、暴力団員、暴力団員でなくなっ
            た時から5年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、
            社会運動等標ぼうゴロ又は特殊知能暴力集団、その他これに準ずる者をいう。
            以下同じ。）に該当し、又は、反社会的勢力と以下の各号の一にでも該当する関係を有
            することが判明した場合には、何らの催告を要せず、本契約を解除します。{'\n'}{'\n'}
            ➀ 反社会的勢力が経営を支配していると認められるとき{'\n'}{'\n'}
            ➁ 反社会的勢力が経営に実質的に関与していると認められるとき{'\n'}{'\n'}
            ➂ 自己、自社若しくは第三者の不正の利益を図る目的又は第三者に損害を加える目
            的をもってするなど、不当に反社会的勢力を利用したと認められるとき{'\n'}{'\n'}
            ➃ 反社会的勢力に対して資金等を提供し、又は便宜を供与す
            るなどの関与をしていると認められるとき{'\n'}{'\n'}
            ➄ その他役員等又は経営に実質的に関与している者が、反社会的勢
            力と社会的に非難されるべき関係を有しているとき{'\n'}{'\n'}
            2. 当社は、利用者が自ら又は第三者を利用して以下の各号の一にでも該当す
            る行為をした場合には、何らの催告を要せず、本契約を解除します。{'\n'}{'\n'}
            ➀ 暴力的な要求行為{'\n'}{'\n'}
            ➁ 法的な責任を超えた不当な要求行為{'\n'}{'\n'}
            ➂ 取引に関して、脅迫的な言動をし、又は暴力を用いる行為{'\n'}{'\n'}
            ➃ 風説を流布し、偽計又は威力を用いて当社の信用を棄損し、又は当社の業
            務を妨害する行為{'\n'}{'\n'}
            ➄ その他前各号に準ずる行為{'\n'}{'\n'}
            3.{'\n'}
            ➀ 利用者は、利用者又は利用者の下請又は再委託先業者（下請又は再委
            託契約が数次にわたるときには、その全てを含む。以下同じ。）が第１項に該当しない
            ことを確約し、将来も同項若しくは第２項各号に該当しないことを確約します。{'\n'}{'\n'}
            ➁ 利用者は、その下請又は再委託先業者が前号に該当することが
            契約後に判明した場合には、ただちに契約を解除し、又は契約解
            除のための措置を採らなければなりません。{'\n'}{'\n'}
            ➂ 利用者が、前各号の規定に反した場合には、当社は本契約を解除します。{'\n'}{'\n'}
            4.{'\n'}
            ➀ 利用者は、利用者又は利用者の下請若しくは再委託先業者が、反社会的勢力か
            ら不当要求又は業務妨害等の不当介入を受けた場合は、これを拒否し、又は下請
            若しくは再委託先業者をしてこれを拒否させるとともに、不当介入があった時
            点で速やかに不当介入の事実を当社に報告し、当社の捜査機関への
            通報及び当社への報告に必要な協力をしなければなりません。{'\n'}{'\n'}
            ➁ 利用者が、前号の規定に違反した場合、当社は何らの催告を要さずに、
            本契約を解除します。{'\n'}{'\n'}
            5. 当社が本条各項の規定により本契約を解除した場合には、利用者に損害
            が生じても当社は何らこれを賠償ないし補償することは要せず、またかかる解除によ
            り当社に損害が生じたときは、利用者はその損害を賠償します。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第6条（免責事項） </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            1. 当社は、当サイトに掲載されている全ての情報を慎重に作成し、ま
            た管理しますが、その正確性および完全性などに関して、いか
            なる保証もするものではありません。{'\n'}{'\n'}
            2. 当社は、予告なしに、当サイトの運営を停止または中止し、また当サイ
            トに掲載されている情報の全部または一部を変更する場合があります。{'\n'}{'\n'}
            3. 利用者が当サイトを利用したこと、または何らかの原因によりこれを利
            用できなかったことにより生じる一切の損害及び第三者によるデータの書
            き込み、不正なアクセス、発言、メールの送信等に関して生じる一切の損
            害について、当社は、何ら責任を負うものではありません。{'\n'}{'\n'}
            4. 天災、洪水、津波、稲妻、台風、嵐、地震、疫病その他の伝染病、
            戦争、戦争の脅威、戦争状態、テロ、反乱、革命、火災、爆発、海難、
            封鎖、暴動、ストライキ、工場封鎖その他の労働争議、騒擾、エネルギ
            ー供給または原材料の不足または統制、その他の法令または政府機関
            の行政指導による規制、その他の法定のまたは政府による規制、また
            は他の類似した、もしくは類似しない当社の合理的支配の及ばない状
            況で、直接または間接的に生じた本規約上の義務の不履行や履行遅滞
            につき、当社は、利用者その他の第三者に一切責任を負いません。{'\n'}{'\n'}
            5. 前項の事態が発生したときは、被害に遭った当事者は、相手方に直
            ちに不可抗力の発生の旨を伝え、その予想される継続期間を通知し
            なければなりません。{'\n'}{'\n'}
            6. 不可抗力が90日以上継続した場合は、当社と利用者は、相手方に対
            して、書面による通知にて本契約を解除することができます。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第7条（契約解除） </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            1. 当社は、利用者が本規約に反する行為をした場合、即時にサービ
            スを停止することができます。{'\n'}{'\n'}
            2. 前項の事由が発生したとき、当社は利用者に損害賠償請求を
            することができます。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第8条（損害賠償） </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            本規約に違反した場合、利用者には当社に発生した損害
            を賠償していただきます。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第9条（準拠法） </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            本規約の準拠法は日本法とします。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第10条（管轄裁判所） </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            万一、裁判所での争いとなったときは、当社の本店所在地を管轄する裁
            判所を第一審の専属的合意管轄裁判所とします。
            </Text>
          </View>
        </View>

        <View style={sectionTerm}>
          <View style={topicSentence}>
            <Text style={topicText}> 第11条（特例） </Text>
          </View>
          <View style={sectionContent}>
            <Text style={sectionText}>
            1. 本規約に基づき、特別の規定が別途定められている場合があります。{'\n'}
            2. 当社の各サービスの説明のページに当規約と抵触する規定があった場合は、
            各サービスの説明ページに記載してある規定を適用します。{'\n'}{'\n'}{'\n'}
            （附則）{'\n'}
            本規約は、平成２５年１１月１日より施行致します。{'\n'}
            平成25年11月1日制定
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// <ScrollView style={container}>
//   <View>
//     <Image source={Images.termContent} style={termContent} />
//   </View>
// </ScrollView>
