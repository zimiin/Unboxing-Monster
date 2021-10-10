import Bold from '@components/atoms/typography/Bold'
import Header from '@components/organisms/header/Header'
import { scale } from '@constants/figure'
import { PGPersonalInfoAgreementProps } from '@constants/navigationTypes'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native'

const PGPersonalInfoAgreement = ({route, navigation}: PGPersonalInfoAgreementProps) => {
  return (
    <>
      <Header
        canGoBack={true}
        goBackAction={() => navigation.goBack()}
      />

      <SafeAreaView
        style={styles.screen}
      >
        <Text
          style={styles.contentMargin}
        >
          <Bold>
            {'[개인정보 제3자 제공에 대한 별도 동의]\n'}
          </Bold>

          ① 개인정보를 제공받는 자 : 아임포트, 결제 수단에 따라 다날 또는 카카오페이{'\n'}
          ② 개인정보를 제공받는 자의 개인정보 이용 목적 : 아임포트-결제연동 및 결제데이터 분석 등 솔루션 제공, 다날/카카오페이-전자금융거래 서비스 제공{'\n'}
          ③ 제공하는 개인정보의 항목 : 전화번호{'\n'}
          ④ 개인정보를 제공받는 자의 개인정보 보유 및 이용 기간 : 5년{'\n'}
          ⑤ 동의를 거부할 수 있으며, 동의 거부시 결제 서비스가 제공되지 않습니다.{'\n'}
        </Text>
      </SafeAreaView>
    </>
  )
}

export default PGPersonalInfoAgreement

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
  },
  contentMargin: {
    marginHorizontal: scale(24),
    marginTop: 20,
  }
})
