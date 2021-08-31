import SignUpInputTemplate from '@components/templates/SignUpInputTemplate'
import { SignUpPhoneConfirmInputProps } from '@constants/navigationTypes'
import { SignUpContext } from '@src/stores/SignUpContext'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'

const SignUpPhoneConfirmInputPage = ({ route, navigation }: SignUpPhoneConfirmInputProps) => {
  const [{ phone, phoneConfirm }, { setPhoneConfirm }] = useContext(SignUpContext)
  const [canGoNext, setCanGoNext] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  const onChangeText = (input: string) => {
    setError('')
    setPhoneConfirm(input)
    if (input === '') {
      setCanGoNext(false)
    } else {
      setCanGoNext(true)
    }
  }

  const validateInput = () => {
    if (phone === phoneConfirm) {
      console.log('valid number')
      return true
    } else {
      console.log('invalid number')
      setError('휴대폰 번호가 일치하지 않습니다.')
      return false
    }
  }

  const onPressNext = () => {
    if (validateInput() && canGoNext) {
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
      input={phoneConfirm}
      onChangeText={onChangeText}
      canGoNext={canGoNext}
      onPressNext={onPressNext}
      error={error}
      onSubmitEditing={validateInput}
      buttonText='다음'
    />
  )
}

export default SignUpPhoneConfirmInputPage
