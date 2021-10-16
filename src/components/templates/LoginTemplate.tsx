import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton'
import Loading from '@components/atoms/Loading'
import RegularText from '@components/atoms/typography/RegularText'
import { DESIGN_HEIGHT, scale, SCREEN_HEIGHT } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

interface Props {
  isLoading: boolean,
  onPressLookAround: () => void,
  onPressFacebook: () => void,
  onPressApple: () => void,
  onPressKakao: () => void,
}

const calHeight = (height: number) => {
  const totalContentHeight = 63 + 48 + 82
  const designMargin = DESIGN_HEIGHT - totalContentHeight
  const screenMargin = SCREEN_HEIGHT - totalContentHeight

  return height * screenMargin / designMargin
}

const LoginTemplate = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.contentView}>
        <View style={styles.unboxingTextView}>
          <Text style={styles.unboxingText}>
            언박싱 몬스터
          </Text>

          <Text style={styles.welcomText}>
            에
          </Text>
        </View>

        <Text style={styles.welcomText}>
          오신 것을 환영합니다!
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={IMAGES.unboxingMonster}
            style={styles.logo}
          />
        </View>

        <FullContentWidthButton
          style={styles.lookAroundButton}
          onPress={props.onPressLookAround}
        >
          구경먼저하기
        </FullContentWidthButton>

        <RegularText style={styles.SNSText}>
          SNS로 계속하기
        </RegularText>

        <View style={styles.SNSIconView}>
          <TouchableOpacity onPress={props.onPressKakao}>
            <Image
              source={IMAGES.kakao_square}
              style={styles.SNSIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={props.onPressFacebook}>
            <Image
              source={IMAGES.facebook_square}
              style={styles.SNSIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={props.onPressApple}>
            <View
              style={[
                styles.SNSIcon,
                styles.appleContainer
              ]}
            >
              <Image
                source={IMAGES.apple_white}
                style={styles.appleLogo}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {props.isLoading === true ? <Loading /> : null}
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
    paddingHorizontal: scale(24),
  },
  unboxingTextView: {
    flexDirection: 'row',
    marginTop: calHeight(78),
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
  imageContainer: {
    marginTop: calHeight(44),
    width: scale(312),
    height: calHeight(240),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: scale(200),
    height: scale(250),
    resizeMode: 'contain',
  },
  lookAroundButton: {
    marginTop: calHeight(58),
    justifyContent: 'center',
  },
  SNSText: {
    marginTop: calHeight(33),
    fontSize: 13,
    alignSelf: 'center',
    letterSpacing: -0.32,
    lineHeight: 19,
  },
  SNSIconView: {
    flexDirection: 'row',
    marginTop: 15,
    alignSelf: 'center',
  },
  SNSIcon: {
    width: 48,
    height: 48,
    borderRadius: 9,
    marginHorizontal: 10,
  },
  appleContainer: {
     backgroundColor: 'black',
     alignItems: 'center',
     justifyContent: 'center',
  },
  appleLogo: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  }
})
