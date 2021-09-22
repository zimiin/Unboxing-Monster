import SignUpInputTemplate from '@components/templates/SignUpInputTemplate'
import { SignUpNicknameInputProps } from '@constants/navigationTypes'
import { SignUpContext } from '@src/stores/SignUpContext'
import { storeUserInfo } from '@src/utils/loginUtils'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { URLS } from '@constants/urls'

const SignUpNicknameInputPage = ({route, navigation}: SignUpNicknameInputProps) => {
  const [{email, provider, providerToken}, { }] = useContext(SignUpContext)
  const [nicknameInput, setNicknameInput] = useState<string>('')
  const [error, setError] = useState<string>()

  const isDuplicatedNickname = (json: any) => {
    // TODO 닉네임 듀플리케이션 코드 처리
    return true
  }

  const requestJoin = async () => {
    try {
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

        if (isDuplicatedNickname(json)) {
          setError('이미 존재하는 닉네임입니다. 다른 닉네임을 입력해주세요.')
        }

        throw 'Failed to POST ' + response.url + ', status ' + response.status + ', message: ' + json.message
      }
    } catch (error) {
      console.log('Error in requestJoin', error)
      throw error
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
      title='닉네임 입력'
      canGoBack={true}
      onPressGoBack={() => navigation.goBack()}
      label='닉네임을 입력해주세요'
      keyboardType='default'
      input={nicknameInput}
      onChangeText={onChangeText}
      canGoNext={nicknameInput !== '' ? true : false}
      onPressNext={requestJoinAndLogin}
      onSubmitEditing={requestJoinAndLogin}
      error={error}
      buttonText='완료'
    />
  )
}

export default SignUpNicknameInputPage