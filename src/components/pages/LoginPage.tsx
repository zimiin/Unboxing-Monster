import React from 'react'
import LoginTemplate from '@components/templates/LoginTemplate'
import { LoginProps } from '@constants/navigationTypes'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginPage = ({route, navigation}: LoginProps) => {
  // AsyncStorage.setItem('@access_token', )
  const getFacebookToken = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(["public_profile"])
      console.log('result: ', result)
      
      if (result.isCancelled) {
        console.log("Login cancelled")
        return undefined
      }

      console.log("Permissions: " + result.grantedPermissions!.toString())
      const data = await AccessToken.getCurrentAccessToken()
      return data?.accessToken.toString()
    } catch (error) {
      console.log('Error from getFacebookToken: ', error)
    }
  }

  const sendUserPostRequest = async (token: string) => {
    try {
      const url = "http://3.37.238.160/users"
      const response = await fetch(
        url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
            email: 'wlals6105@naver.com',
            co: 'facebook',
          })
        }
      )

      console.log('response: ', response)

      // let json = await response.json()
      let json = await response.text()
      console.log('text: ', json)

      if (response.status !== 201) {
        console.log('url: ' + url)
        console.log('status: ' + response.status)
        // console.log(json.message)
      }
    } catch (error) {
      console.log('Error from sendUserPostRequest: ', error)
    }
  }

  const facebookLogin = async () => {
    const facebookToken = await getFacebookToken()

    console.log(facebookToken)
    if (facebookToken === undefined) {
      return
    }

    const response = await fetch(
      'http://3.37.238.160/auth/login/facebook', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + facebookToken,
        }
      }
    )

    const json = await response.json()

    if (response.status === 200) {
      await AsyncStorage.setItem('@access_token', json.access_token)
      console.log('@access_token:', json.access_token)
    } else if (response.status === 404) {
      console.log('need registration')
      // 회원가입 진행
    } else {
      // 로그인 에러 안내창
      console.log('에러!! while executing fetch login')
      return
    }
    // 1. /auth/login 날리기
    // 1-1. 결과가 200
    // 토큰 저장 & 홈으로 네비게이트

    // 1-2. 결과가 404
    // 2. /auth/join에 날리기

    // 2-1. 409나 201이 아니면 둘도 아니면 안내창 띄우고 로그인 다시 시킴

    // 2-2. 결과가 201 성공
    // /auth/login 진행
    // 토컨 저장 & 홈으로 네비게이트
  }
  
  return (
    <LoginTemplate
      onPressLookAround={() => navigation.replace('Main')}
      onPressFacebook={facebookLogin}
    />
  )
}

export default LoginPage