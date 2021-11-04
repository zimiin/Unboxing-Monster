import GreyButton from '@components/atoms/button/GreyButton'
import DoneIcon from '@components/atoms/icon/DoneIcon'
import Title from '@components/atoms/typography/Title'
import React from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native'
import {
  View,
} from 'react-native'
import { scale, verticalScale } from '@constants/figure'
import NoticeIcon from '@components/atoms/icon/NoticeIcon'
import Bold from '@components/atoms/typography/Bold'
import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton'
import { COLORS } from '@constants/colors'
import Loading from '@components/atoms/Loading'

interface Props {
  isLoading: boolean,
  paymentSuccess?: boolean,
  onPressGoHome: () => void,
  onPressGoStorage: () => void,
}

const PaymentCompleteTemplate = (props: Props) => {
  const successScreen = (
    <>
      <View style={styles.iconContainer}>
        <DoneIcon />

        <Bold style={styles.titleText}>
          결제 완료
        </Bold>
      </View>

      <GreyButton
        onPress={props.onPressGoStorage}
      >
        보관함으로 가기
      </GreyButton>

      <GreyButton
        onPress={props.onPressGoHome}
        style={styles.goHomeButton}
      >
        홈으로 돌아가기
      </GreyButton>
    </>
  )

  const failureScreen = (
    <>
      <View style={styles.centerView}>
        <NoticeIcon />

        <Bold style={styles.titleText}>
          결제 실패
        </Bold>
      </View>

      <GreyButton
        onPress={props.onPressGoHome}
        style={styles.goHomeButton}
      >
        홈으로 돌아가기
      </GreyButton>
    </>
  )
  
  const resultScreen = (
    props.paymentSuccess === true ? successScreen : failureScreen
  )

  const loading = (
    <View style={styles.centerView}>
      <Loading />
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      {props.isLoading ? loading : resultScreen}
    </SafeAreaView>
  )
}

export default PaymentCompleteTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: scale(20),
    marginTop: verticalScale(7),
  },
  goHomeButton: {
    marginTop: 8,
    marginBottom: verticalScale(60),
  }
})