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
import { getUserInfoFromToken } from '@src/utils/loginUtils'

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
  // {
  //   value: 'kakaopay',
  //   label: '카카오페이',
  // },
]

const toHundreds = (num: number) => {
  return num - (num % 100)
}

const PaymentPage = ({route, navigation}: PaymentProps) => {
  const [{ cart, boxData }, { }] = useContext(CartContext)
  const [point, setPoint] = useState<number>(0)
  const [usingPoint, setUsingPoint] = useState<number>(0)
  const [useAllPoint, setUseAllPoint] = useState<boolean>(false)
  const [pointInputError, setPointInputError] = useState<string>('')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>(PAYMENT_METHODS[0])
  const [phoneInput, setPhoneInput] = useState<string>('')
  const [phoneInputError, setPhoneInputError] = useState<string>('')
  const [savePhone, setSavePhone] = useState<boolean>(true)
  const [personalInfoUsageAgree, setPersonalInfoUsageAgree] = useState<boolean>(false)
  const [personalInfoError, setPersonalInfoError] = useState<string>('')

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
    const getPoint = async (): Promise<number | undefined> => {
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
        })

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

    getPoint().then(userPoint => {
      if (userPoint) {
        setPoint(userPoint)
      }
    })
    getPhoneFromAsyncStorage().then(phone => setPhoneInput(phone || ''))
  }, [])

  const setUsingPointFromInput = (input: string) => {
    setPointInputError('')

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
    setPointInputError('')
    
    if (useAllPoint) {
      setUsingPoint(0)
    } else {
      let availablePoint: number

      if (point > totalPrice) {
        availablePoint = toHundreds(totalPrice)
      } else {
        availablePoint = toHundreds(point)
      }

      const amount = totalPrice - availablePoint

      if (0 < amount && amount < 100) {
        setUsingPoint(availablePoint - 100)
      } else {
        setUsingPoint(availablePoint)
      }
    }
    setUseAllPoint(!useAllPoint)
  }

  const merchantTitle = useMemo(() => {
    if (boxIdCounts.length > 0) {
      const box = boxData.get(boxIdCounts[0].boxId)
      let title = box?.title || ''

      if (boxIdCounts.length > 1) {
        title += ' 외 ' + (boxIdCounts.length - 1).toString() + '개'
      }

      return title
    }
  }, [boxData, boxIdCounts])

  const onChangePhoneInput = (input: string) => {
    setPhoneInputError('')
    setPhoneInput(input)
  }

  const getMerchantUid = async () => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage()
      if (accessToken === null) {
        throw 'Access token is null'
      }

      const user: User = await getUserInfoFromToken(accessToken)
      const userId = user.id
      const date = new Date()
      let uid = ''

      if (userId[0] === 'a') {
        uid = 'apple-'
      } else {
        uid = userId + '-'
      }

      uid = uid + date.getFullYear() + "/" + + (((date.getMonth() + 1) < 10) ? "0" : "") + (date.getMonth() + 1) + "/" + ((date.getDate() < 10) ? "0" : "") + date.getDate()
      uid = uid + '-' + ((date.getHours() < 10) ? "0" : "") + date.getHours() + ":" + ((date.getMinutes() < 10) ? "0" : "") + date.getMinutes() + ":" + ((date.getSeconds() < 10) ? "0" : "") + date.getSeconds() + ":" + date.getMilliseconds()

      console.log('getMerchantUid', uid)
      return uid
    } catch (error) {
      console.log('Error in getMerchantUid', error)
      throw error
    }
  }

  const validatePointInput = () => {
    if (usingPoint % 100 !== 0) {
      setPointInputError('포인트는 100P 단위로 사용가능합니다.')
      return false
    }
    return true
  }

  const validatePhoneInput = () => {
    if (validatePhone(phoneInput) === false) {
      setPhoneInputError('올바른 핸드폰 번호를 입력해주세요.')
      return false
    }
    return true
  }

  const onPressMakePayment = async () => {
    try {
      if (validatePointInput() === false) {
        throw 'Invalid point input: ' + usingPoint
      }

      const amount = totalPrice - usingPoint
      console.log('amount', amount)
      if (amount === 0) {
        navigation.replace('PaymentComplete', { response: { merchant_uid: await getMerchantUid(), imp_uid: 'no' }, point: usingPoint })
        return
      }

      if (amount < 100) {
        setPointInputError('포인트 사용 후 최종 결제 금액은 100원 이상이어야 합니다.')
        throw 'Amount is under 100'
      }

      if (validatePhoneInput() === false) {
        throw 'Invalid phone number input: ' + phoneInput
      }

      if (personalInfoUsageAgree === false) {
        setPhoneInputError('제3자 정보 제공에 동의하지 않으시면 결제 진행이 불가능합니다.')
        throw `Not agree privacy usage agreement.`
      }

      const phone = removeHyphens(phoneInput)
      if (savePhone) {
        setPhoneToAsyncStorage(phone)
      }

      const merchantUid = await getMerchantUid()
      const email = await getEmailFromAsyncStorage()

      if (email === null) {
        throw 'No email address in async storage'
      }

      const data: PaymentParams = {
        params: {
          pg: selectedPaymentMethod.label === '카카오페이' ? 'kakaopay' : 'danal_tpay',
          pay_method: selectedPaymentMethod.value,
          display: {card_quota: []},
          merchant_uid: merchantUid,
          amount: amount.toString(),
          name: merchantTitle || '',
          buyer_tel: phone,
          buyer_name: '',
          buyer_email: email,
          app_scheme: 'unboxing.monster',
          biz_num: '2460302264',
          m_redirect_url: IMPConst.M_REDIRECT_URL,
          escrow: false,
        },
        tierCode: '',
      }

      navigation.navigate('PGPayment', { data: data, point: usingPoint })
    } catch (error) {
      console.log('Error in onPressMakePayment ', error)
    }
  }

  const onPressPersonalInfoCheckBox = () => {
    setPhoneInputError('')
    setPersonalInfoUsageAgree(!personalInfoUsageAgree)
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
      pointInputError={pointInputError}
      personalInfoChecked={personalInfoUsageAgree}
      onSubmitPhoneInput={validatePhoneInput}
      onPressSavePhone={() => setSavePhone(!savePhone)}
      onChangePhoneInput={onChangePhoneInput}
      onPressBack={() => navigation.goBack()}
      onChangeUsingPointAmount={setUsingPointFromInput}
      onPressUseAllPoint={onPressUseAllPoint}
      onChangePaymentMethod={setSelectedPaymentMethod}
      onPressMakePayment={onPressMakePayment}
      onSubmitPointInput={validatePointInput}
      onPressPersonalInfoUsage={() => navigation.push('PGPersonalInfoAgreement')}
      onPressPersonalInfoCheckBox={onPressPersonalInfoCheckBox}
    />
  )
}

export default PaymentPage