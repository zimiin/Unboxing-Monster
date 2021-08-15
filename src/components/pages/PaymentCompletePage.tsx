import React from 'react'
import PaymentCompleteTemplate from '@components/templates/PaymentCompleteTemplate'
import { PaymentCompleteProps } from '@constants/navigationTypes'
import { useEffect, useContext } from 'react'
import { CartContext } from '@src/stores/CartContext'

const PaymentCompletePage = (props: PaymentCompleteProps) => {
  const [{ cart }, { modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll }] = useContext(CartContext)

  useEffect(() => {
    const getPaidItemList = async () => {
      const paymentId = props.route.params.paymentId

      try {
        const response = await fetch(
          'http://3.37.238.160/purchase/' + paymentId, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })

        if (response.status !== 200) {
          throw "Couldn't get response from /purchase/" + paymentId
        }

        const json = await response.json()
        return json.boxes
      } catch (error) {
        console.log(error)
      }
    }

    interface PaidItem {
      id: number,
      title: string,
      price: number,
      image: string,
      detail: string,
      ownerId: string,
      sales: number,
      count: number
    }

    const deletePaidItemsFromCart = async () => {
      const paidItemList: PaidItem[] = await getPaidItemList()
      let boxes: number[] = []

      for (let item of paidItemList) {
        boxes.push(item.id)
      }
      
      deleteFromCart(boxes)
    }

    deletePaidItemsFromCart()
  }, [])

  return (
    <PaymentCompleteTemplate
      onPressGoHome={() => props.navigation.navigate('Home')}
      onPressGoStorage={() => {
        props.navigation.navigate('Home')
        props.navigation.jumpTo('Storage')
      }}
    />
  )
}

export default PaymentCompletePage
