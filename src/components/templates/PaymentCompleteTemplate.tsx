import GreyButton from '@components/atoms/button/GreyButton'
import DoneIcon from '@components/atoms/icon/DoneIcon'
import Title from '@components/atoms/typography/Title'
import React from 'react'
import { StyleSheet } from 'react-native'
import {
  View,
} from 'react-native'
import { verticalScale } from 'react-native-size-matters'

interface Props {
  onPressGoHome: () => void,
  onPressGoStorage: () => void,
}

const PaymentCompleteTemplate = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <DoneIcon />

        <View style={styles.madePayment}>
          <Title content='결제 완료'/>
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
}

export default PaymentCompleteTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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