import FullWidthButton from '@components/atoms/button/FullWidthButton'
import Bold from '@components/atoms/typography/Bold'
import Header from '@components/organisms/header/Header'
import { scale, verticalScale } from '@constants/figure'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native'
import { IMAGES } from '@constants/images'
import CustomBoxProgressBar from '@components/atoms/CustomBoxProgressBar'
import PrizeRadioButton from '@components/molecules/PrizeRadioButton'

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  error: string,
  onPressGoBack: () => void,
  onPressNext: () => void,
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
        <CustomBoxProgressBar 
          progress={1 / 4}
          style={styles.progressBar}
        />

        <Bold style={styles.instruction}>
          {'최소 보상 상품을 선택해주세요.'}
        </Bold>

        <Text style={styles.error}>
          {props.error}
        </Text>
        
        <PrizeRadioButton
          id={0}
          image={{ uri: 'https://user-images.githubusercontent.com/45932570/129475574-c89a6f3c-d7a4-4199-b481-69cb037872ec.jpeg'}}
          name='나는 낭만고양이나는 낭만고양이나는 낭만고양이나는 낭만고양이나는 낭만고양이나는 낭만고양이'
          price={1000}
          onPress={() => console.log('Hey!')}
          checked={true}
        />
      </View>

      <FullWidthButton
        onPress={props.onPressNext}
        content={'다음'}
      />
    </>
  )
}

export default BoxMakingStep1Template

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
  },
  error: {
    fontSize: 13,
    color: '#ec4f47',
    letterSpacing: -0.32,
    marginTop: verticalScale(2),
  }
})
