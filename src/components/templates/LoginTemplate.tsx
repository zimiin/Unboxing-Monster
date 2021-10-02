import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton'
import IconButton24 from '@components/atoms/button/IconButton24'
import NotoSansRegular from '@components/atoms/typography/NotoSansRegular'
import { DESIGN_HEIGHT, DESIGN_WIDTH, scale, SCREEN_HEIGHT, SCREEN_WIDTH, verticalScale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native'

interface Props {
  onPressLookAround: () => void,
  onPressFacebook: () => void,
  onPressApple: () => void,
}

const LoginTemplate = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.contentView}>
        <View style={styles.unboxingTextView}>
          <Text style={styles.unboxingText}>
            Unboxing
          </Text>

          <Text style={styles.welcomText}>
            에
          </Text>
        </View>

        <Text style={styles.welcomText}>
          오신 것을 환영합니다!
        </Text>

        <Image
          source={IMAGES.img_splash}
          style={styles.image}
        />

        <FullContentWidthButton
          style={styles.lookAroundButton}
          onPress={props.onPressLookAround}
        >
          구경먼저하기
        </FullContentWidthButton>

        <NotoSansRegular style={styles.SNSText}>
          SNS로 계속하기
        </NotoSansRegular>

        <View style={styles.SNSIconView}>
          <IconButton24
            image={IMAGES.kakao_talk}
            onPress={() => console.log("kakao_talk login pressed")}
            style={styles.SNSIcon}
          />

          <IconButton24
            image={IMAGES.facebook}
            onPress={props.onPressFacebook}
            style={styles.SNSIcon}
          />

          <IconButton24
            image={IMAGES.apple}
            onPress={props.onPressApple}
            style={styles.SNSIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginTemplate

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    flex: 1,
  },
  contentView: {
    paddingHorizontal: SCREEN_WIDTH * 24 / DESIGN_WIDTH
  },
  unboxingTextView: {
    flexDirection: 'row',
    marginTop: verticalScale(71),
  },
  unboxingText: {
    fontFamily: 'GmarketSansTTFBold',
    fontSize: 20,
    lineHeight: 31.5,
  },
  welcomText: {
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: 20,
    lineHeight: 31.5,
  },
  image: {
    width: scale(312),
    height: verticalScale(240),
    resizeMode: 'contain',
    marginTop: verticalScale(46)
  },
  lookAroundButton: {
    marginTop: verticalScale(70),
    justifyContent: 'center',
  },
  SNSText: {
    fontSize: scale(13),
    marginTop: verticalScale(33),
    alignSelf: 'center',
    letterSpacing: -0.32,
  },
  SNSIconView: {
    flexDirection: 'row',
    marginTop: verticalScale(12),
    alignSelf: 'center',
  },
  SNSIcon: {
    marginHorizontal: 14.5 / DESIGN_WIDTH * SCREEN_WIDTH
  }
})
