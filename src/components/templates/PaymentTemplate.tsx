import FullWidthButton from '@components/atoms/button/FullWidthButton'
import BaseHeader from '@components/organisms/header/BaseHeader'
import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

interface Props {
  screenTitle: string,
  canGoBack: boolean,
  totalPrice: number,
  onPressBack: () => void,
  onPressMakePayment: () => void,
}

const PaymentTemplate = (props: Props) => {
  return (
    <>
      <BaseHeader
        canGoBack={props.canGoBack}
        goBackAction={props.onPressBack}
        title={props.screenTitle}
      />
      
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        <Text>상품 금액 {props.totalPrice.toLocaleString()}원</Text>
      </ScrollView>

      <FullWidthButton
        content='결제'
        onPress={props.onPressMakePayment}
      />
    </>
  )
}

export default PaymentTemplate