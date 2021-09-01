import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native'
import Header from '@components/organisms/header/Header'
import { IMAGES } from '@constants/images'
import { SCREEN_WIDTH, verticalScale } from '@constants/figure'
import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton'

interface Props {
  screenTitle: string,
  hasPreviousScreen: boolean,
  onPressMakeCustomBox: () => void,
  onPressMyCustomBox: () => void,
}

const CustomBoxInitTemplate = (props: Props) => {
  return (
    <>
      <Header
        canGoBack={props.hasPreviousScreen}
        title={props.screenTitle}
      />

      <View style={styles.screen}>
        <Image
          source={IMAGES.img_custom_box_intro}
          style={styles.image}
        />

        <View style={styles.buttonContainer}>
          <FullContentWidthButton
            onPress={props.onPressMakeCustomBox}
          >
            커스텀박스 만들기
          </FullContentWidthButton>

          <FullContentWidthButton
            onPress={props.onPressMyCustomBox}
            style={styles.myCustomBoxButton}
            fontColor='black'
          >
            나의 커스텀박스
          </FullContentWidthButton>
        </View>
      </View>
    </>
  )
}

export default CustomBoxInitTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: SCREEN_WIDTH,
    height: verticalScale(216),
    resizeMode: 'contain',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: verticalScale(24),
  },
  myCustomBoxButton: {
    marginTop: verticalScale(7),
    backgroundColor: '#eef1f2',
  }
})