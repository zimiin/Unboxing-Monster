import React from 'react'
import {
  View,
  StyleSheet,
  Image,
} from 'react-native'
import Header from '@components/organisms/header/Header'
import { IMAGES } from '@constants/images'
import { scale, verticalScale } from '@constants/figure'
import Bold from '@components/atoms/typography/Bold'
import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton'

interface Props {
  hasPreviousScreen: boolean,
  goBackToPrevScreen: () => void,
  onPressLogin: () => void,
}

const LoginRequestTemplate = (props: Props) => {
  return (
    <>
      <Header
        canGoBack={props.hasPreviousScreen}
        goBackAction={props.goBackToPrevScreen}
      />

      <View style={styles.screen}>
        <Image
          source={IMAGES.info}
          style={styles.infoIcon}
        />

        <Bold style={styles.requestLoginText}>
          로그인이 필요합니다.
        </Bold>
        
        <FullContentWidthButton
          onPress={props.onPressLogin}
        >
          로그인
        </FullContentWidthButton>
      </View>
    </>
  )
}

export default LoginRequestTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  infoIcon: { 
    width: scale(66), 
    height: scale(66),
    marginTop: verticalScale(156),
    marginBottom: verticalScale(12),
  },
  requestLoginText: {
    color: '#060606',
    fontSize: scale(16),
    letterSpacing: -0.68,
    marginTop: verticalScale(11),
    marginBottom: verticalScale(237),
  },
})