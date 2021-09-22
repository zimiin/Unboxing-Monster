import React, { useState } from 'react'
import PaymentCompleteTemplate from '@components/templates/PaymentCompleteTemplate'
import { PaymentCompleteProps } from '@constants/navigationTypes'
import { useEffect, useContext } from 'react'
import { CartContext } from '@src/stores/CartContext'

const PaymentCompletePage = ({route, navigation}: PaymentCompleteProps) => {
  const [{ cart }, { modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll }] = useContext(CartContext)
  const [isLoading, setIsLoaing] = useState<boolean>(true)
  const paymentSuccess = route.params?.success

  console.log(route.params)

  useEffect(() => {
    try {
      if (paymentSuccess === false) {
        setIsLoaing(false)
        return
      }

      
      // validation 진행
        // 실패면 에러 띄우기

        // 성공이면 성공 페이지
        // 장바구니에서 삭제
    } catch (error) {
      console.log('Error in useEffect of PaymentCompletePage ', error)
    }
  }, [])

  return (
    <PaymentCompleteTemplate
      isLoading={isLoading}
      paymentSuccess={paymentSuccess}
      onPressGoHome={() => navigation.replace('Main')}
      onPressGoStorage={() => navigation.replace('Main', {screen: 'Storage'})}
    />
  )
}

export default PaymentCompletePage
