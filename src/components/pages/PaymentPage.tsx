import React, { useContext, useState } from 'react'
import PaymentTemplate from '@components/templates/PaymentTemplate'
import { PaymentProps } from '@constants/navigationTypes'
import { CartContext } from '@src/stores/CartContext'
import { useEffect } from 'react'
import { PaymentBoxItemProps } from '@components/molecules/PaymentBoxItem'
import { IMPData, IMPConst } from 'iamport-react-native'
import { NavigationRouteContext } from '@react-navigation/native'

interface BoxIdCount {
  boxId: number,
  count: number
}

interface PaymentParams {
  params: IMPData.PaymentData;
  tierCode?: string;
}

export type PaymentMethod = {
  value: string,
  label: string,
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    value: 'card',
    label: '신용카드',
  },
  {
    value: 'vbank',
    label: '가상계좌',
  },
  {
    value: 'trans',
    label: '실시간 계좌이체',
  },
]

const PaymentPage = ({route, navigation}: PaymentProps) => {
  const [{ cart }, { modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll }] = useContext(CartContext)
  const [boxData, setBoxData] = useState<PaymentBoxItemProps[]>()
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [boxIdCounts, setBoxIdCounts] = useState<BoxIdCount[]>()
  const [point, setPoint] = useState<number>(0)
  const [usingPoint, setUsingPoint] = useState<number>(0)
  const [useAllPoint, setUseAllPoint] = useState<boolean>(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>(PAYMENT_METHODS[0])

  useEffect(() => {
    const setBoxDataState = async () => {
      let data: PaymentBoxItemProps[] = []
      
      try {
        for (let [boxId, item] of cart) {
          if (item.checked === true) {
            const url = 'http://3.37.238.160/box/' + boxId
            const response = await fetch(url)
            const json = await response.json()

            if (response.status !== 200) {
              throw json.message + ' url: ' + response.url
            }

            const paymentBoxItem: PaymentBoxItemProps = {
              id: json.id,
              image: { uri: json.image },
              name: json.title,
              count: item.count,
              price: item.count * json.price
            }

            data.push(paymentBoxItem)
          }
        }
      } catch (error) {
        console.error(error)
      }
      setBoxData(data)
    }

    setBoxDataState()
  }, [cart])

  useEffect(() => {
    let sum = 0

    if (boxData) {
      for (let item of boxData) {
        sum += item.price
      }
    }
    
    setTotalPrice(sum)
  }, [boxData])

  useEffect(() => {
    let boxes: BoxIdCount[] = []

    if (boxData) {
      for (let item of boxData) {
        boxes.push({
          boxId: item.id,
          count: item.count
        })
      }
    }

    setBoxIdCounts(boxes)
  }, [boxData])

  useEffect(() => {
    const setPointState = async () => {
      try {
        const url = 'http://3.37.238.160/users/' + 'k1804801727'
        const response = await fetch(url)
        const json = await response.json()

        if (response.status !== 200) {
          throw json.message + 'url : ' + response.url
        }

        setPoint(json.point)
      } catch (error) {
        console.error(error)
      }
    }
    
    setPointState()
  }, [])

  const requestPurchase = async () => {
    try {
      const response = await fetch(
        'http://3.37.238.160/purchase', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ownerId: "k1804801727",
            price: totalPrice - usingPoint,
            boxes: boxIdCounts,
          })
        }
      )
      
      const json = await response.json()
      
      if (response.status !== 201) {
        throw 'Payment failed. : ' + json.message
      }
      
      navigation.push('PaymentComplete', {paymentId: json.id})
    } catch (error) {
      console.error(error)
    }
  }

  const setUsingPointFromInput = (input: string) => {
    if (input === '') {
      setUsingPoint(0)
      return
    }
    
    const inputPoint = parseInt(input)
    if (inputPoint > point) {
      setUsingPoint(point)
    } else if (inputPoint > totalPrice) {
      setUsingPoint(totalPrice)
    } else if (inputPoint < 0) {
      setUsingPoint(0)
    } else {
      setUsingPoint(inputPoint)
    }
  }

  const onPressUseAllPoint = () => {
    if (useAllPoint) {
      setUsingPoint(0)
    } else {
      if (point > totalPrice) {
        setUsingPoint(totalPrice)
      } else {
        setUsingPoint(point)
      }
    }
    setUseAllPoint(!useAllPoint)
  }

  const makePayment = async () => {
    const data: PaymentParams = {
      params: {
        pg: 'danal_tpay',
        pay_method: PAYMENT_METHODS[1].value,
        currency: undefined,
        notice_url: undefined,
        display: undefined,
        merchant_uid: '000000',
        name: '엄청난 박스',
        amount: '5000',
        app_scheme: 'exampleforrn',
        tax_free: undefined,
        buyer_name: '',
        buyer_tel: '01029276105',
        buyer_email: 'wlals6105@naver.com',
        buyer_addr: undefined,
        buyer_postcode: undefined,
        custom_data: undefined,
        vbank_due: undefined,
        popup: undefined,
        digital: undefined,
        language: undefined,
        biz_num: '2460302264',
        customer_uid: undefined,
        naverPopupMode: undefined,
        naverUseCfm: undefined,
        naverProducts: undefined,
        m_redirect_url: IMPConst.M_REDIRECT_URL,
        escrow: false,
      },
      tierCode: 'ADD',
    }

    navigation.navigate('PGPayment', data)
  }

  return (
    <PaymentTemplate
      screenTitle={'결제'}
      canGoBack={true}
      onPressBack={() => navigation.goBack()}
      boxData={boxData || []}
      currentPoint={point}
      usingPoint={usingPoint}
      onChangeUsingPointAmount={setUsingPointFromInput}
      useAllPoint={useAllPoint}
      onPressUseAllPoint={onPressUseAllPoint}
      paymentMethods={PAYMENT_METHODS}
      selectedPaymentMethod={selectedPaymentMethod}
      onChangePaymentMethod={setSelectedPaymentMethod}
      totalPrice={totalPrice}
      finalPrice={totalPrice - usingPoint}
      onPressMakePayment={() => makePayment()}
    />
  )
}

export default PaymentPage