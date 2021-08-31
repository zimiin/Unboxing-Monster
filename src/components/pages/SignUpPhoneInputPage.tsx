import SignUpInputTemplate from '@components/templates/SignUpInputTemplate'
import { SignUpPhoneInputProps } from '@constants/navigationTypes'
import { SignUpContext } from '@src/stores/SignUpContext'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

const SignUpPhoneInputPage = ({ route, navigation }: SignUpPhoneInputProps) => {
  const [{ phone }, { setPhone }] = useContext(SignUpContext)
  const [canGoNext, setCanGoNext] = useState<boolean>(false)

  const onChangeText = (input: string) => {
    setPhone(input)
    if (input === '') {
      setCanGoNext(false)
    } else {
      setCanGoNext(true)
    }
  }

  const onPressNext = () => {
    if (canGoNext) {
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
      canGoNext={canGoNext}
      input={phone}
      onChangeText={onChangeText}
      onPressNext={onPressNext}
      buttonText='다음'
    />
  )
}

export default SignUpPhoneInputPage
