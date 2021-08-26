import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton'
import IconButton24 from '@components/atoms/button/IconButton24'
import { DESIGN_HEIGHT, DESIGN_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants/figure'
import { ICONS } from '@constants/icons'
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
}

const FirstTemplate = (props: Props) => {
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

        <Text style={styles.SNSText}>
          SNS로 계속하기
        </Text>

        <View style={styles.SNSIconView}>
          <IconButton24
            image={ICONS.naver}
            onPress={() => console.log("Naver login pressed")}
            style={styles.SNSIcon}
          />

          <IconButton24
            image={ICONS.kakao_talk}
            onPress={() => console.log("kakao_talk login pressed")}
            style={styles.SNSIcon}
          />

          <IconButton24
            image={ICONS.facebook}
            onPress={props.onPressFacebook}
            style={styles.SNSIcon}
          />

          <IconButton24
            image={ICONS.apple}
            onPress={() => console.log("apple login pressed")}
            style={styles.SNSIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FirstTemplate

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
    marginTop: SCREEN_HEIGHT * 75 / DESIGN_HEIGHT,
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
    width: SCREEN_WIDTH * 312 / DESIGN_WIDTH,
    height: SCREEN_HEIGHT * 240 / DESIGN_HEIGHT,
    resizeMode: 'contain',
    marginTop: SCREEN_HEIGHT * 56 / DESIGN_HEIGHT
  },
  lookAroundButton: {
    marginTop: 80 / DESIGN_HEIGHT * SCREEN_HEIGHT
  },
  SNSText: {
    fontSize: 13,
    marginTop: 33 / DESIGN_HEIGHT * SCREEN_HEIGHT,
    alignSelf: 'center',
  },
  SNSIconView: {
    flexDirection: 'row',
    marginTop: 12 / DESIGN_HEIGHT * SCREEN_HEIGHT,
    alignSelf: 'center',
  },
  SNSIcon: {
    marginHorizontal: 14.5 / DESIGN_WIDTH * SCREEN_WIDTH
  }
})
