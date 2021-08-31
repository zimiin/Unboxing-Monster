import SignUpInputTemplate from '@components/templates/SignUpInputTemplate'
import { SignUpNicknameInputProps } from '@constants/navigationTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SignUpContext } from '@src/stores/SignUpContext'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AccessToken } from 'react-native-fbsdk-next'

const SignUpNicknameInputPage = ({route, navigation}: SignUpNicknameInputProps) => {
  const [{email, phone, phoneConfirm, nickname, provider, providerToken}, {setNickname}] = useContext(SignUpContext)
  const [error, setError] = useState<string>()

  const requestJoin = async () => {
    try {
    const response = await fetch(
      'http://3.37.238.160/auth/join/' + provider, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + providerToken,
        },
        body: JSON.stringify({
          email: email
          // phone, nickname 추가
        })
      }
    )

    const json = await response.json()

    if (response.status !== 201) {
      console.log('Error in requestJoin, status:', response.status,
      'message:', json.message, 'url:', response.url)
      console.log('provider Token', providerToken)
      return 'failed'
    }

    return 'succeed'
    } catch (error) {
      console.log('Error in requestJoin', error)
      return 'failed'
    }
  }

  const requestLogin = async () => {
    try {
      const response = await fetch(
        'http://3.37.238.160/auth/login/' + provider, {
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
        throw 'status:' + response.status +
        ', message:' + json.message + ', url:' + response.url
      }

      return json.access_token
    } catch (error) {
      console.log('Error in requestLogin:', error)
      return ''
    }
  }

  const Login = async () => {
    const loginResult = await requestLogin()

    if (loginResult === '') {
      return 'failed'
    } else {
      AsyncStorage.setItem('@access_token', loginResult)
      return 'succeed'
    }
  }

  const onPressComplete = async () => {
    if (await requestJoin() === 'succeed') {
      if (await Login() === 'succeed') {
        navigation.replace('Main')
      } else {
        console.log('Failed to login')
      }
    } else {
      console.log('Failed to join')
    }
  }

  return (
    <SignUpInputTemplate
      title='닉네임 입력'
      canGoBack={true}
      onPressGoBack={() => navigation.goBack()}
      label='닉네임을 입력해주세요'
      keyboardType='default'
      input={nickname}
      onChangeText={setNickname}
      canGoNext={nickname !== '' ? true : false}
      onPressNext={onPressComplete}
      error={error}
      buttonText='완료'
    />
  )
}

export default SignUpNicknameInputPage