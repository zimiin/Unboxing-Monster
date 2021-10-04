import React, { useState } from 'react'
import PaymentCompleteTemplate from '@components/templates/PaymentCompleteTemplate'
import { PaymentCompleteProps } from '@constants/navigationTypes'
import { useEffect, useContext } from 'react'
import { CartContext } from '@src/stores/CartContext'
import { URLS } from '@constants/urls'
import { getAccessTokenFromAsyncStorage } from '@src/utils/asyncStorageUtils'
import { BoxId } from '@constants/types'
import { CommonActions } from '@react-navigation/routers'

const PaymentCompletePage = ({route, navigation}: PaymentCompleteProps) => {
  const [{ cart, boxData }, { deleteFromCart }] = useContext(CartContext)
  const [isLoading, setIsLoaing] = useState<boolean>(true)
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>()

  console.log('PaymentCompletePage', route.params)

  useEffect(() => {
    const getPaidAmount = () => {
      let amount = 0

      for (let [boxId, cartValue] of cart) {
        if (cartValue.checked === true) {
          const box = boxData.get(boxId)
          if (box) {
            amount += box.price * cartValue.count
          }
        }
      }
      console.log('getPaidAmount')
      return amount
    }

    const getPaidBoxIdCounts = () => {
      let boxes: {boxId: BoxId, count: number}[] = []

      for (let [boxId, cartValue] of cart) {
        if (cartValue.checked === true) {
          boxes.push({boxId: boxId, count: cartValue.count})
        }
      }
      console.log('getPaidBoxIdCounts')
      return boxes
    }

    const validatePayment = async () => {
      try {
        const accessToken = await getAccessTokenFromAsyncStorage()
        const merchantUid = route.params?.merchant_uid
        if (merchantUid === undefined) throw 'undefined merchant_uid'
        const impUid = route.params?.imp_uid
        if (impUid === undefined) throw 'undefined imp_uid'
        const price: number = getPaidAmount()
        const boxIdCounts: {boxId: BoxId, count: number}[] = getPaidBoxIdCounts()

        const response = await fetch(
          URLS.unboxing_api + 'purchase', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          },
          body: JSON.stringify({
            merchant_uid: merchantUid,
            imp_uid: impUid,
            price: price,
            boxes: boxIdCounts
          })
        })

        if (response.status !== 201) {
          const json = await response.json()
          throw 'Failed to POST ' + response.url + ' status ' + response.status + ', ' + json.message
        }
        // 실패 내용 익셉션 추가????
        console.log('validatePayment')
        return true
      } catch (error) {
        console.log('Error in validatePayment', error)
        return false
      }
    }

    const deletePaidItemFromCart = async () => {
      let paidBoxIds: number[] = []

      for (let [boxId, cartValue] of cart) {
        if (cartValue.checked === true) {
          paidBoxIds.push(boxId)
        }
      }
      console.log('deletePaidItemFromCart')
      deleteFromCart(paidBoxIds)
    }

    try {
      validatePayment().then((result) => {
        setIsLoaing(false)

        if (result === true) {
          deletePaidItemFromCart()
          setPaymentSuccess(true)
        } else {
          setPaymentSuccess(false)
        }
      })
      console.log('useEffect of PaymentCompletePage')
    } catch (error) {
      setIsLoaing(false)
      console.log('Error in useEffect of PaymentCompletePage ', error)
    }
  }, [])

  return (
    <PaymentCompleteTemplate
      isLoading={isLoading}
      paymentSuccess={paymentSuccess}
      onPressGoHome={() => 
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{
              name: 'Main',
              state: {
                routes: [{
                  name: 'Home',
                }]
              }
            }]
          })
        )
      }
      onPressGoStorage={() =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{
              name: 'Main',
              state: {
                routes: [{
                  name: 'Storage',
                }]
              }
            }]
          })
        )
      }
    />
  )
}

export default PaymentCompletePage
