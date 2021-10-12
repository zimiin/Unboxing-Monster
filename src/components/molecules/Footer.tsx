import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import { IMAGES } from '@constants/images'
import { scale } from '@constants/figure'
import Bold from '@components/atoms/typography/Bold'
import { openUrl } from '@src/utils/utils'

const openBizNumConfirmWeb = () => openUrl('http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2460302264')
const openPersonalInfoWeb = () => openUrl('https://unboxing.monster/privacy-policy.html')
const openTermsOfServiceWeb = () => openUrl('https://unboxing.monster/terms_of_use.html')

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.teamName}
        style={styles.teamName}
      />

      <Text style={[styles.text, styles.textMargin]}>
        상호명 : 꾸러기원정대   대표 : 신지민{'\n'}
        통신판매업신고 : 2000-서울어디-0000호
      </Text>

      <View style={styles.buisnessNumberRow}>
        <Text style={styles.text}>
          사업자등록번호 : 246-03-02264
        </Text>

        <TouchableOpacity
          onPress={openBizNumConfirmWeb}
        >
          <Bold style={styles.text}>
            {' [사업자정보확인]'}
          </Bold>
        </TouchableOpacity>
      </View>

      <Text 
        style={styles.text}
      >
        사업장소재지 : 서울특별시 서초구 강남대로107길 21, 2층{'\n'}
        E-mail : ask.unboxing.monster@gmail.com{'\n'}
        Tel: 02-544-5559
      </Text>

      <View
        style={styles.flexRow}
      >
        <TouchableOpacity
          onPress={openPersonalInfoWeb}
        >
          <Text
            style={styles.text}
          >
          개인정보처리방침
          </Text>
        </TouchableOpacity>

        <Text
          style={styles.text}
        >
          {' | '}
        </Text>

        <TouchableOpacity
          onPress={openTermsOfServiceWeb}
        >
          <Text
            style={styles.text}
          >
            서비스이용약관
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={styles.text}
      >
        Copyright @ 꾸러기원정대  All rights reserved.
      </Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dee3e5',
    paddingTop: 33,
    paddingHorizontal: scale(24),
    paddingBottom: 27,
  },
  teamName: {
    width: 99,
    height: 15,
  },
  textMargin: {
    marginTop: 16,
  },
  flexRow: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontFamily: 'NotoSansCJKkr-Regular',
    letterSpacing: -0.3,
    color: 'rgba(6, 6, 6, 0.5)',
    lineHeight: 20,
  },
  buisnessNumberRow: {
    flexDirection: 'row',
  }
})
