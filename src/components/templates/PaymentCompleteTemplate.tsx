import GreyButton from '@components/atoms/button/GreyButton'
import DoneIcon from '@components/atoms/icon/DoneIcon'
import Title from '@components/atoms/typography/Title'
import React from 'react'
import { ActivityIndicator, StyleSheet, Text } from 'react-native'
import {
  View,
} from 'react-native'
import { verticalScale } from '@constants/figure'

interface Props {
  isLoading: boolean,
  paymentSuccess: boolean,
  onPressGoHome: () => void,
  onPressGoStorage: () => void,
}

const PaymentCompleteTemplate = (props: Props) => {
  const successScreen = (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <DoneIcon />

        <View style={styles.madePayment}>
          <Title content='결제 완료' />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <GreyButton
          onPress={props.onPressGoStorage}
        >
          보관함으로 가기
        </GreyButton>

        <GreyButton
          onPress={props.onPressGoHome}
          style={{
            marginTop: 8,
          }}
        >
          홈으로 돌아가기
        </GreyButton>
      </View>
    </View>
  )

  const failureScreen = (
    <Text>Failed</Text>
  )
  
  const resultScreen = (
    props.paymentSuccess === true ? successScreen : failureScreen
  )

  const loading = (
    <View style={[styles.container, styles.centerView]}>
      <ActivityIndicator
        size={'large'}
      />
    </View>
  )

  return (props.isLoading ? loading : resultScreen)
}

export default PaymentCompleteTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centerView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  madePayment: {
    marginTop: verticalScale(7)
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 60,
  }
})