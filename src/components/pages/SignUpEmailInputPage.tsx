import SignUpInputTemplate from '@components/templates/SignUpInputTemplate'
import { SignUpEmailInputProps } from '@constants/navigationTypes'
import { SignUpContext } from '@src/stores/SignUpContext'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'

const SignUpEmailInputPage = ({ route, navigation }: SignUpEmailInputProps) => {
  const [{email}, {setEmail}] = useContext(SignUpContext)
  const [error, setError] = useState<string>()
  const [canGoNext, setCanGoNext] = useState<boolean>(false)

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }

  const checkAndSetError = async () => {
    if (validateEmail() === false) {
      setCanGoNext(false)
      setError('유효한 이메일 주소를 입력해주세요.')
    } else {
      setCanGoNext(true)
    }
  }

  const onPressNext = () => {
    if (validateEmail() === false) {
      setCanGoNext(false)
      setError('유효한 이메일 주소를 입력해주세요.')
    } else {
      navigation.navigate('SignUpNicknameInput')
    }
  }

  const onChangeText = (input: string) => {
    setError('')
    setCanGoNext(false)
    setEmail(input)
  }

  return (
    <SignUpInputTemplate
      title='이메일 입력'
      label='이메일을 입력해주세요'
      input={email}
      keyboardType='email-address'
      onChangeText={onChangeText}
      canGoBack={true}
      onPressGoBack={() => navigation.goBack()}
      canGoNext={canGoNext}
      onPressNext={onPressNext}
      error={error}
      onSubmitEditing={checkAndSetError}
      buttonText='다음'
    />
  )
}

export default SignUpEmailInputPage
