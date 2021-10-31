import SignUpInputTemplate from '@components/templates/SignUpInputTemplate'
import { SignUpNicknameInputProps } from '@constants/navigationTypes'
import { SignUpContext } from '@src/stores/SignUpContext'
import { storeUserInfo } from '@src/utils/loginUtils'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { URLS } from '@constants/urls'
import { UserContext } from '@src/stores/UserContext'

const SignUpNicknameInputPage = ({route, navigation}: SignUpNicknameInputProps) => {
  const [{email, provider, providerToken}, { }] = useContext(SignUpContext)
  const [nicknameInput, setNicknameInput] = useState<string>('')
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [agreeToPolicy, setAgreeToPolicy] = useState<boolean>(false)

  const requestJoin = async () => {
    try {
      setIsLoading(true)

      const response = await fetch(
        URLS.unboxing_api + 'auth/join/' + provider, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + providerToken,
        },
        body: JSON.stringify({
          email: email,
          nickname: nicknameInput
        })
      })
      
      if (response.status !== 201) {
        const json = await response.json()

        if (response.status === 403) {
          setError('이미 존재하는 닉네임입니다. 다른 닉네임을 입력해주세요.')
        }

        throw 'Failed to POST ' + response.url + ', status ' + response.status + ', message: ' + json.message
      }
    } catch (error) {
      console.log('Error in requestJoin', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const requestLogin = async (): Promise<string> => {
    try {
      const response = await fetch(
        URLS.unboxing_api + 'auth/login/' + provider, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + providerToken,
          }
        }
      )

      const json = await response.json()

      if (response.status !== 200) {
        throw 'status:' + response.status + ', message:' + json.message + ', url:' + response.url
      }

      return json.access_token
    } catch (error) {
      console.log('Error in requestLogin:', error)
      throw error
    }
  }

  const requestJoinAndLogin = async () => {
    try {
      if (nicknameInput === '') {
        setError('닉네임을 입력해주세요')
        throw 'No nickname input'
      }

      if (agreeToPolicy === false) {
        setError('서비스 이용 약관에 동의해주세요')
        throw 'Not agree to policy'
      }
      
      await requestJoin()
      const accessToken = await requestLogin()

      await storeUserInfo(accessToken, nicknameInput, email, '')
      navigation.replace('Main')
    } catch (error) {
      console.log("Error in onPressComplete", error)
    }
  }

  const onChangeText = (input: string) => {
    setError('')
    setNicknameInput(input)
  }

  return (
    <SignUpInputTemplate
      isLoading={isLoading}
      title='닉네임 입력'
      label='언박싱 몬스터에서 사용할 닉네임을 입력해주세요'
      keyboardType='default'
      canGoBack={true}
      input={nicknameInput}
      canGoNext={nicknameInput !== '' ? true : false}
      error={error}
      buttonText='회원가입 및 포인트 받기'
      agreeToPolicy={agreeToPolicy}
      showPolicyAgreement={true}
      onPressGoBack={() => navigation.goBack()}
      onChangeText={onChangeText}
      onPressNext={requestJoinAndLogin}
      onSubmitEditing={requestJoinAndLogin}
      onPressAgreeToPolicyCheckBox={() => setAgreeToPolicy(!agreeToPolicy)}
      onPressAgreeToPolicy={() => navigation.push('TermsOfService')}
    />
  )
}

export default SignUpNicknameInputPage