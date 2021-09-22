import React, { useContext, useMemo, useState, useCallback } from 'react'
import PaymentTemplate from '@components/templates/PaymentTemplate'
import { PaymentProps } from '@constants/navigationTypes'
import { CartContext } from '@src/stores/CartContext'
import { useEffect } from 'react'
import { URLS } from '@constants/urls'
import { IMPData, IMPConst } from 'iamport-react-native'
import {getAccessTokenFromAsyncStorage, getEmailFromAsyncStorage, getPhoneFromAsyncStorage, setPhoneToAsyncStorage} from '@src/utils/asyncStorageUtils'
import { User } from '@constants/types'
import { removeHyphens, validatePhone } from '@src/utils/utils'

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
    value: 'trans',
    label: '실시간 계좌이체',
  },
]

const PaymentPage = ({route, navigation}: PaymentProps) => {
  const [{ cart, boxData }, { }] = useContext(CartContext)
  const [point, setPoint] = useState<number>(0)
  const [usingPoint, setUsingPoint] = useState<number>(0)
  const [useAllPoint, setUseAllPoint] = useState<boolean>(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>(PAYMENT_METHODS[0])
  const [phoneInput, setPhoneInput] = useState<string>('')
  const [phoneInputError, setPhoneInputError] = useState<string>('')
  const [savePhone, setSavePhone] = useState<boolean>(true)

  const totalPrice = useMemo(() => {
    let sum = 0

    for (let [boxId, cartValue] of cart) {
      if (cartValue.checked) {
        const box = boxData.get(boxId)
        if (box) {
          sum += box.price * cartValue.count
        }
      }
    }

    return sum
  }, [cart, boxData])

  const boxIdCounts = useMemo(() => {
    let boxes: BoxIdCount[] = []

    for (let [boxId, cartValue] of cart) {
      if (cartValue.checked) {
        boxes.push({
          boxId: boxId,
          count: cartValue.count
        })
      }
    }

    return boxes
  }, [cart])

  useEffect(() => {
    const getPoint = async () => {
      try {
        const url = URLS.unboxing_api + 'users'
        const response = await fetch(
          url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + await getAccessTokenFromAsyncStorage()
          },
        }
        )

        if (response.status !== 200) {
          const json = await response.json()
          throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
        }

        const user: User = await response.json()
        return user.point
      } catch (error) {
        console.error('Error in getPoint', error)
      }
    }

    getPoint().then(result => setPoint(result || 0))
    getPhoneFromAsyncStorage().then(phone => setPhoneInput(phone || ''))
  }, [])

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

  const merchantTitle = useMemo(() => {
    const box = boxData.get(boxIdCounts[0].boxId)
    let title = box?.title || ''

    if (boxIdCounts.length > 1) {
      title += ' 외 ' + (boxIdCounts.length - 1).toString() + '개'
    }

    return title
  }, [boxData, boxIdCounts])

  const onChangePhoneInput = (input: string) => {
    setPhoneInputError('')
    setPhoneInput(input)
  }

  const makePayment = async () => {
    if (validatePhone(phoneInput) === false) {
      setPhoneInputError('올바른 핸드폰 번호를 입력해주세요.')
      return
    }

    const phone = removeHyphens(phoneInput)
    if (savePhone) {
      setPhoneToAsyncStorage(phone)
    }

    const data: PaymentParams = {
      params: {
        pg: 'danal_tpay',
        pay_method: selectedPaymentMethod.value,
        display: {card_quota: []},
        merchant_uid: "ORD20180131-0000011",
        amount: (totalPrice - usingPoint).toString(),
        name: merchantTitle,
        buyer_tel: phone,
        buyer_name: '',
        buyer_email: await getEmailFromAsyncStorage() || '',
        app_scheme: 'Unboxing_pre',
        biz_num: '2460302264',
        m_redirect_url: IMPConst.M_REDIRECT_URL,
        escrow: false,
      },
      tierCode: '',
    }

    navigation.navigate('PGPayment', data)
  }

  return (
    <PaymentTemplate
      screenTitle={'결제'}
      canGoBack={true}
      currentPoint={point}
      usingPoint={usingPoint}
      useAllPoint={useAllPoint}
      paymentMethods={PAYMENT_METHODS}
      selectedPaymentMethod={selectedPaymentMethod}
      totalPrice={totalPrice}
      finalPrice={totalPrice - usingPoint}
      phoneInput={phoneInput}
      savePhone={savePhone}
      phoneInputError={phoneInputError}
      onPressSavePhone={() => setSavePhone(!savePhone)}
      onChangePhoneInput={onChangePhoneInput}
      onPressBack={() => navigation.goBack()}
      onChangeUsingPointAmount={setUsingPointFromInput}
      onPressUseAllPoint={onPressUseAllPoint}
      onChangePaymentMethod={setSelectedPaymentMethod}
      onPressMakePayment={() => makePayment()}
    />
  )
}

export default PaymentPage