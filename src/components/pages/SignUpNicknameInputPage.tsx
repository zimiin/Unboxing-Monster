import SignUpInputTemplate from '@components/templates/SignUpInputTemplate'
import { SignUpNicknameInputProps } from '@constants/navigationTypes'
import { SignUpContext } from '@src/stores/SignUpContext'
import { storeUserInfo } from '@src/utils/loginUtils'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

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
      throw error
    }
  }

  const Login = async () => {
    try {
      const accessToken = await requestLogin()
      return accessToken
    } catch (error) {
      console.log('=====Error in Login()=====', error)
      throw error
    }
  }

  const onPressComplete = async () => {
    try {
      await requestJoin()
      const accessToken = await Login()
      await storeUserInfo(accessToken, nickname, email, phone)
      navigation.replace('Main')

    } catch (error) {
      console.log('=====Error in onPressComplete()=====', error)
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