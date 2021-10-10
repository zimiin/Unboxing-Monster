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
  const [agreeToPersonalInfoUsage, setAgreeToPersonalInfoUsage] = useState<boolean>(false)

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
        setError('제3자 정보 제공에 동의하지 않으시면 쿠폰 확정이 불가능합니다.')
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

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to PATCH ' + response.url + ' status ' + response.status + ', ' + json.message
      }
      console.log('onPressConfirmCoupon status 200')
    } catch (error) {
      console.log('Error in requestConfirmCoupon', error)
      throw error
    }
  }

  const onCheckPhoneNumber = async () => {
    try {
      setIsLoaing(true)
      await requestConfirmCoupon(route.params.coupon, phoneInput)
      navigation.popToTop()
    } catch (error) {
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
      onConfirmPhone={onCheckPhoneNumber}
      onPressPersonalInfoCheckBox={onPressPersonalInfoCheckBox}
      onPressPersonalInfoUsage={() => navigation.push('CouponPersonalInfoAgreement')}
    />
  )
}

export default CouponConfirmPage
