import SignUpInputTemplate from '@components/templates/SignUpInputTemplate'
import { SignUpPhoneConfirmInputProps } from '@constants/navigationTypes'
import { SignUpContext } from '@src/stores/SignUpContext'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { removeHyphensInPhone } from './SignUpPhoneInputPage'

const SignUpPhoneConfirmInputPage = ({ route, navigation }: SignUpPhoneConfirmInputProps) => {
  const [{ phone }, { }] = useContext(SignUpContext)
  const [phoneInput, setPhoneInput] = useState<string>('')
  const [validPhoneInput, setValidPhoneInput] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const validateInput = () => {
    const input = removeHyphensInPhone(phoneInput)

    if (phone === input) {
      setValidPhoneInput(true)
      setError('')
      return true
    } else {
      setValidPhoneInput(false)
      setError('휴대폰 번호가 일치하지 않습니다.')
      return false
    }
  }

  const onPressNext = () => {
    if (validateInput()) {
      navigation.navigate('SignUpNicknameInput')
    }
  }

  return (
    <SignUpInputTemplate
      title='핸드폰 번호 확인'
      canGoBack={true}
      onPressGoBack={() => navigation.goBack()}
      label='핸드폰 번호를 다시 한 번 입력해주세요'
      keyboardType='numeric'
      input={phoneInput}
      onChangeText={setPhoneInput}
      canGoNext={validPhoneInput}
      onPressNext={onPressNext}
      error={error}
      onSubmitEditing={validateInput}
      buttonText='다음'
    />
  )
}

export default SignUpPhoneConfirmInputPage
