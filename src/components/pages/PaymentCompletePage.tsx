import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import PaymentCompleteTemplate from '@components/templates/PaymentCompleteTemplate'
import { PaymentCompleteProps } from '@constants/navigationTypes'

const PaymentCompletePage = (props: PaymentCompleteProps) => {
  return (
    <PaymentCompleteTemplate
      onPressGoHome={() => props.navigation.navigate('Home')}
    />
  )
}

export default PaymentCompletePage
