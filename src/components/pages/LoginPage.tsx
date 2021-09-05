import React from 'react'
import LoginTemplate from '@components/templates/LoginTemplate'
import { LoginProps } from '@constants/navigationTypes'
import { LoginManager, AccessToken, Profile } from 'react-native-fbsdk-next'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useContext } from 'react'
import { SignUpContext } from '@src/stores/SignUpContext'
import { URLS } from '@constants/urls'

const LoginPage = ({route, navigation}: LoginProps) => {
  const [{}, {setEmail, setProvider, setProviderToken}] = useContext(SignUpContext)

  const getFacebookToken = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(["public_profile", 'email'])
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

  const getFacebookEmail = async () => {
    const data = await AccessToken.getCurrentAccessToken()
    const facebookToken = data?.accessToken
    const userId = data?.userID

    const response = await fetch(
      'https://graph.facebook.com/' + userId + '?fields=email&access_token=' + facebookToken
    )

    const json = await response.json()

    if (response.status !== 200) {
      console.log('Response status:', response.status, 'Message:', json.message)
      return ''
    }

    return json.email
  }

  const facebookLogin = async () => {
    const facebookToken = await getFacebookToken()

    console.log(facebookToken)
    if (facebookToken === undefined) {
      return
    }

    const response = await fetch(
      URLS.unboxing_api + 'auth/login/facebook', {
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
      navigation.replace('Main')
      console.log('@access_token:', json.access_token)
    } else if (response.status === 404) {
      console.log('need to sign up')
      setProvider('facebook')
      setProviderToken(facebookToken)
      const email = await getFacebookEmail()

      if (email === undefined || email === '' || email === null) {
        navigation.push('SignUpEmailInput')
      } else {
        setEmail(email)
        navigation.push('SignUpPhoneInput')
      }
    } else {
      // 로그인 에러 안내창 띄우기
      console.log('Error occured while executing fetch login!!!')
      return
    }
  }

  const appleLogin = async () => {
    
  }
  
  return (
    <LoginTemplate
      onPressLookAround={() => navigation.replace('Main')}
      onPressFacebook={facebookLogin}
      onPressApple={appleLogin}
    />
  )
}

export default LoginPage