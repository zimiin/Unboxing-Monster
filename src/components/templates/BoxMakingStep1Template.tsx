import FullWidthButton from '@components/atoms/button/FullWidthButton'
import Bold from '@components/atoms/typography/Bold'
import Header from '@components/organisms/header/Header'
import { scale, verticalScale } from '@constants/figure'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  onPressGoBack: () => void,
  onPressNext: () => void,
  boxPrice: number,
}

const BoxMakingStep1Template = (props: Props) => {
  return (
    <>
      <Header
        title={props.screenTitle}
        canGoBack={props.hasPreviousScreen}
        goBackAction={props.onPressGoBack}
      />

      <View style={styles.screen}>
        <Bold
          style={styles.instruction}
        >
          {'만들고 싶은 박스의' + '\n'
          + '크기를 선택해 주세요.'}
        </Bold>
      </View>

      <FullWidthButton
        onPress={props.onPressNext}
        content={props.boxPrice?.toString() + '원 박스에 담기'}
      />
    </>
  )
}

export default BoxMakingStep1Template

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  instruction: {
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.6,
    marginTop: verticalScale(32),
    marginLeft: scale(24)
  },

})
