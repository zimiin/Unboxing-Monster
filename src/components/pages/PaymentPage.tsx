import React, { useContext, useState } from 'react'
import PaymentTemplate from '@components/templates/PaymentTemplate'
import { PaymentProps } from '@constants/navigationTypes'
import { CartContext } from '@src/stores/CartContext'
import { useEffect } from 'react'
import { BoxId } from '@constants/types'
import { BoxData } from '@components/templates/CartTemplate'
import { BoxInfo } from '@components/templates/CartTemplate'

const PaymentPage = (props: PaymentProps) => {
  const [{ cart }, { modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll }] = useContext(CartContext)
  const [boxData, setBoxData] = useState<BoxData>()
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const getItemInfo = async () => {
      let data: BoxData = new Map<BoxId, BoxInfo>()

      for (let [boxId, item] of cart) {
        let url = 'http://3.37.238.160/box/' + boxId
        let response = await fetch(url)

        if (response.status === 200) {
          let json = await response.json()

          let boxInfo: BoxInfo = {
            name: json.title,
            price: json.price,
            image: json.image
          }

          data.set(boxId, boxInfo)
        } else {
          console.log('No reponse! url:', url)
        }
      }

      setBoxData(data)
    }

    getItemInfo()
  }, [cart])

  useEffect(() => {
    let sum = 0

    for (let [boxId, item] of cart) {
      if (item.checked) {
        if (boxData?.has(boxId)) {
          const price = boxData.get(boxId)?.price!
          sum += price * item.count
        }
      }
    }

    setTotalPrice(sum)
  }, [cart, boxData])

  interface boxIdCount {
    boxId: number,
    count: number
  }

  const getBoxList = () => {
    let boxes: boxIdCount[] = []

    for (let [boxId, item] of cart) {
      if (item.checked) {
        boxes.push({
          boxId: boxId,
          count: item.count
        })
      }
    }
    
    return boxes
  }

  const makePayment = async () => {
    try {
      const response = await fetch(
        'http://3.37.238.160/purchase', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ownerId: "f4123798117741192",
            price: totalPrice,
            boxes: getBoxList()
          })
        }
      )

      if (response.status !== 201) {
        throw 'Payment failed.'
      }
      
      const json = await response.json()
      props.navigation.push('PaymentComplete', {paymentId: json.id})
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <PaymentTemplate
      screenTitle={'결제'}
      canGoBack={true}
      onPressBack={() => props.navigation.goBack()}
      onPressMakePayment={() => makePayment()}
      totalPrice={totalPrice}
    />
  )
}

export default PaymentPage