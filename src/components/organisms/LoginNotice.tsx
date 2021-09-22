import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton'
import Bold from '@components/atoms/typography/Bold'
import { scale, verticalScale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ViewProps,
} from 'react-native'

interface Props extends ViewProps {
  onPressLogin?: () => void,
}

const LoginNotice = (props: Props) => {
  return (
    <View style={[styles.screen]}>
      <View style={styles.iconTextContainer}>
        <Image
          source={IMAGES.info}
          style={styles.infoIcon}
        />

        <Bold style={styles.requestLoginText}>
          로그인이 필요합니다.
        </Bold>
      </View>

      <FullContentWidthButton
        onPress={props.onPressLogin}
        style={styles.login}
      >
        로그인
      </FullContentWidthButton>
    </View>
  )
}

export default LoginNotice

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  iconTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoIcon: {
    width: scale(66),
    height: scale(66),
  },
  requestLoginText: {
    color: '#060606',
    fontSize: scale(16),
    letterSpacing: -0.68,
    marginTop: verticalScale(11),
  },
  login: {
    marginBottom: verticalScale(50),
  }
})