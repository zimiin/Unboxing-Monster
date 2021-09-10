import React from 'react'
import Bold from '@components/atoms/typography/Bold'
import Header from '@components/organisms/header/Header'
import CustomBoxProgressBar from '@components/atoms/CustomBoxProgressBar'
import FullWidthButton from '@components/atoms/button/FullWidthButton'
import { scale, verticalScale } from '@constants/figure'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'
import { BOXES } from '@constants/images'

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  onPressGoBack: () => void,
  onPressNext: () => void,
}

const BoxMakingStep3Template = (props: Props) => {
  return (
    <>
      <Header
        title={props.screenTitle}
        canGoBack={props.hasPreviousScreen}
        goBackAction={props.onPressGoBack}
      />

      <View style={styles.screen}>
        <CustomBoxProgressBar
          progress={3 / 3}
          style={styles.progressBar}
        />

        <Bold style={styles.instruction}>
          {'박스의 정보를 설정해주세요.'}
        </Bold>

        <ScrollView style={styles.scrollView}>
          <Text style={styles.subtitle}>
            박스 이미지
          </Text>
          <Text style={styles.subtitle}>
            박스 이름
          </Text>
          <Text style={styles.subtitle}>
            박스 가격
          </Text>
        </ScrollView>
      </View>

      <FullWidthButton
        onPress={props.onPressNext}
        content={'다음'}
      />
    </>
  )
}

export default BoxMakingStep3Template

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scale(24)
  },
  progressBar: {
    marginTop: verticalScale(12),
  },
  instruction: {
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.6,
    marginTop: verticalScale(32),
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '400',
  }
})
