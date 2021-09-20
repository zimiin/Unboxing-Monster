import SignUpInputTemplate from '@components/templates/SignUpInputTemplate'
import { SignUpPhoneInputProps } from '@constants/navigationTypes'
import { SignUpContext } from '@src/stores/SignUpContext'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

export const removeHyphensInPhone = (phone: string) => {
  let newPhone = phone.slice()
  while (newPhone.includes('-')) {
    newPhone = newPhone.replace('-', '')
  }
  return newPhone
}

const SignUpPhoneInputPage = ({ route, navigation }: SignUpPhoneInputProps) => {
  const [{ phone }, { setPhone }] = useContext(SignUpContext)
  const [phoneInput, setPhoneInput] = useState<string>('')
  const [validPhoneInput, setValidPhoneInput] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const validatePhone = () => {
    var phoneRule1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/
    var phoneRule2 = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/

    if (phoneRule1.test(phoneInput) || phoneRule2.test(phoneInput)) {
      setError('')
      setValidPhoneInput(true)
      return true
    } else {
      setError('올바른 형식으로 입력해주세요. 010-1234-5678 또는 01012345678')
      setValidPhoneInput(false)
      return false
    }
  }

  const onPressNext = () => {
    if (validatePhone()) {
      setPhone(removeHyphensInPhone(phoneInput))
      navigation.navigate('SignUpPhoneConfirmInput')
    }
  }

  return (
    <SignUpInputTemplate
      title='핸드폰 번호 입력'
      canGoBack={true}
      onPressGoBack={() => navigation.goBack()}
      label='상품을 수신할 핸드폰 번호를 입력해주세요'
      keyboardType='numeric'
      canGoNext={validPhoneInput}
      input={phoneInput}
      onChangeText={setPhoneInput}
      onPressNext={onPressNext}
      onSubmitEditing={validatePhone}
      buttonText='다음'
      error={error}
    />
  )
}

export default SignUpPhoneInputPage
