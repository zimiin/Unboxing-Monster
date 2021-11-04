import CouponConfirmTemplate from '@components/templates/CouponConfirmTemplate'
import { CouponConfirmProps } from '@constants/navigationTypes'
import { Coupon } from '@constants/types'
import { URLS } from '@constants/urls'
import { getAccessTokenFromAsyncStorage, getPhoneFromAsyncStorage, setPhoneToAsyncStorage } from '@src/utils/asyncStorageUtils'
import { hasLoggedIn } from '@src/utils/loginUtils'
import { removeHyphens, validatePhone } from '@src/utils/utils'
import React, { useState, useEffect } from 'react'

const CouponConfirmPage = ({ route, navigation }: CouponConfirmProps) => {
  const [phoneInput, setPhoneInput] = useState<string>('')
  const [savePhone, setSavePhone] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoaing] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showResultModal, setShowResultModal] = useState<boolean>(false)
  const [agreeToPersonalInfoUsage, setAgreeToPersonalInfoUsage] = useState<boolean>(false)
  const [resultStatus, setResultStatus] = useState<number>()

  useEffect(() => {
    getPhoneFromAsyncStorage().then(
      phone => setPhoneInput(phone || '')
    )
  }, [])

  const onPressConfirmButton = async () => {
    try {
      if (validatePhone(phoneInput) === false) {
        setError('올바른 핸드폰 번호를 입력해주세요.')
        return
      }

      if (agreeToPersonalInfoUsage === false) {
        setError('정보 제공에 동의하지 않으시면 쿠폰 확정이 불가능합니다.')
        return
      }

      const phone = removeHyphens(phoneInput)

      if (savePhone) {
        await setPhoneToAsyncStorage(phone)
      }
      
      setPhoneInput(phone)
      setShowModal(true)
    } catch (error) {
      console.log('Error in onPressConfirmButton', error)
    }
  }

  const requestConfirmCoupon = async (coupon: Coupon, phone: string) => {
    try {
      if (await hasLoggedIn() === false) {
        navigation.navigate('Auth', {screen: 'LoginRequest'})
      }

      const accessToken = await getAccessTokenFromAsyncStorage()
      const url = new URL(URLS.unboxing_api + 'coupon/confirm/' + coupon.id)
      url.searchParams.append('phone', phone)

      const response = await fetch(
        url.toString(), {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      })

      if (response.status === 200 || response.status === 402 || response.status === 404 || response.status === 406 || response.status === 409 || response.status === 500) {
        return response.status
      } else {
        const json = await response.json()
        throw 'Failed to PATCH ' + response.url + ' status ' + response.status + ', ' + json.message
      }
    } catch (error) {
      console.log('Error in requestConfirmCoupon', error)
      throw error
    }
  }

  const onCheckPhoneNumber = async () => {
    try {
      const result = await requestConfirmCoupon(route.params.coupon, phoneInput)
      setIsLoaing(false)
      setResultStatus(result)
      setShowResultModal(true)
    } catch (error) {
      setIsLoaing(false)
      setResultStatus(666)
      setShowResultModal(true)
      console.log('Error in onCheckPhoneNumber', error)
    }
  }

  const onChangePhoneInput = (input: string) => {
    setError('')
    setPhoneInput(input)
  }

  const onPressPersonalInfoCheckBox = () => {
    setError('')
    setAgreeToPersonalInfoUsage(!agreeToPersonalInfoUsage)
  }

  const closeResultModal = () => {
    setShowResultModal(false)
    navigation.popToTop()
  }

  return (
    <CouponConfirmTemplate
      phoneInput={phoneInput}
      checked={savePhone}
      error={error}
      showModal={showModal}
      isLoading={isLoading}
      personalInfoChecked={agreeToPersonalInfoUsage}
      goBackToPreviousScreen={() => navigation.goBack()}
      onChangePhoneInput={onChangePhoneInput}
      onPressCheckBox={() => setSavePhone(!savePhone)}
      onPressCancel={() => navigation.goBack()}
      onPressConfirm={onPressConfirmButton}
      onRequestCloseModal={() => setShowModal(false)}
      onConfirmPhone={() => {
        setIsLoaing(true)
        onCheckPhoneNumber()
      }}
      onPressPersonalInfoCheckBox={onPressPersonalInfoCheckBox}
      onPressPersonalInfoUsage={() => navigation.push('CouponPersonalInfoAgreement')}
      showResultModal={showResultModal}
      resultStatus={resultStatus}
      closeResultModal={closeResultModal}
    />
  )
}

export default CouponConfirmPage
