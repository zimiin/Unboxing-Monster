import 'react-native-get-random-values'
import React, { useEffect } from 'react'
import LoginTemplate from '@components/templates/LoginTemplate'
import { LoginProps } from '@constants/navigationTypes'
import { LoginManager, AccessToken, Profile } from 'react-native-fbsdk-next'
import { useContext } from 'react'
import { SignUpContext } from '@src/stores/SignUpContext'
import { URLS } from '@constants/urls'
import { getUserInfoFromToken, storeUserInfo } from '@src/utils/loginUtils'
import { User } from '@constants/types'
import { Platform } from 'react-native'
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication'
import { v4 as uuid } from 'uuid'

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
      const user: User = await getUserInfoFromToken(json.access_token)
      await storeUserInfo(json.access_token, 'test', user.email, '01029276105')
      navigation.replace('Main')

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

  useEffect(() => {
    if (appleAuth.isSupported) {
      return appleAuth.onCredentialRevoked(async () => {
        console.log('If this function executes, User Credentials have been Revoked');
      })
    }
  }, [])

  const appleLoginIOS = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      })

      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user)
      
      if (credentialState !== appleAuth.State.AUTHORIZED) {
        throw 'credentialState is ' + credentialState + '(not authorized)'
      }

      console.log('===appleLoginIOS')
      console.log(appleAuthRequestResponse.email)
      console.log(appleAuthRequestResponse.fullName)
      console.log(appleAuthRequestResponse.authorizationCode)
      console.log('Identity token', appleAuthRequestResponse.identityToken)
      // 애플 토큰을 받아올 수 있어야 함

      // 토큰으로 서버에 회원가입 여부 확인
      // auth/login

      // 돼잇으면 그대로 로그인
      // 아니면 회원가입 페이지로
        // 이메일, token, provider 저장하고 phone input부터 시작
    } catch (error) {
      console.log('Error in appleLoginIOS', error)
      console.log(error)
    }
  }

  const appleLoginAndroid = async () => {
    try {
      const rawNonce = uuid()
      const state = uuid()

      appleAuthAndroid.configure({
        clientId: 'monster.unboxing.client-android',
        redirectUri: 'https://unboxing.monster',
        responseType: appleAuthAndroid.ResponseType.ALL,
        scope: appleAuthAndroid.Scope.ALL,
        nonce: rawNonce,
        state,
      })

      const response = await appleAuthAndroid.signIn()
      console.log('response',response)

      // Send the authorization code to your backend for verification
    } catch (error) {
      console.log('Error in appleLoginAndroid', error)
      throw error
    }
  }

  const appleLogin = async () => {
    try { 
      if (Platform.OS === 'ios') {
        appleLoginIOS()
        // appleLoginAndroid()
      } else {
        appleLoginAndroid()
      }
    } catch (error) {
      console.log(error)
    }
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