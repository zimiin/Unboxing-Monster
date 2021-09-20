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
import { appleAuth, appleAuthAndroid, AppleRequestResponse } from '@invertase/react-native-apple-authentication'
import { v4 as uuid } from 'uuid'

const LoginPage = ({route, navigation}: LoginProps) => {
  const [{}, {setEmail, setProvider, setProviderToken}] = useContext(SignUpContext)

  const requestLogin = async (provider: string, token: string) => {
    try {
      const response = await fetch(
        URLS.unboxing_api + 'auth/login/' + provider, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        }
      })

      if (response.status === 200) {
        const json: {"access_token": string} = await response.json()
        const user: User = await getUserInfoFromToken(json.access_token)

        await storeUserInfo(json.access_token, user.nickname, user.email, '')

        return true
      } else if (response.status === 404) {
        console.log('Need to sign up')
        return false
      } else {
        const json = await response.json()
        throw 'GET ' + response.url + ' error status ' + response.status + ', message: ' + json.message
      }
    } catch (error) {
      console.log('Error in requestLogin', error)
      throw error
    }
  }

  const getFacebookToken = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(["public_profile", 'email'])
      
      if (result.isCancelled) {
        throw "Login cancelled"
      }

      const data = await AccessToken.getCurrentAccessToken()
      
      if (data === null || data === undefined) {
        throw `Couldn't get current access token`
      }

      return data.accessToken.toString()
    } catch (error) {
      console.log('Error in getFacebookToken', error)
      throw error
    }
  }

  const getFacebookEmail = async () => {
    try {
      const data = await AccessToken.getCurrentAccessToken()
      const facebookToken = data?.accessToken
      const userId = data?.userID

      const response = await fetch(
        'https://graph.facebook.com/' + userId + '?fields=email&access_token=' + facebookToken
      )

      const json = await response.json()

      if (response.status !== 200) {
        throw 'Response status:' + response.status + 'Message:' + json.message
      }

      return json.email
    } catch (error) {
      console.log('Error in getFacebookEmail', error);
      throw error
    }
  }

  const facebookLogin = async () => {
    try {
      const facebookToken = await getFacebookToken()
      const loginResult = await requestLogin('facebook', facebookToken)
      
      if (loginResult) {
        navigation.replace('Main')
      } else {
        setProvider('facebook')
        setProviderToken(facebookToken)

        const email = await getFacebookEmail()

        if (email === undefined || email === '' || email === null) {
          navigation.push('SignUpEmailInput')
        } else {
          setEmail(email)
          navigation.push('SignUpNicknameInput')
        }
      }
    } catch (error) {
      console.log('Error in facebookLogin', error)
    }
  }

  useEffect(() => {
    if (appleAuth.isSupported) {
      return appleAuth.onCredentialRevoked(async () => {
        console.log('If this function executes, User Credentials have been Revoked');
      })
    }
  }, [])

  const getAppleRequestResponse = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      })

      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user)

      if (credentialState !== appleAuth.State.AUTHORIZED) {
        throw 'credentialState is ' + credentialState + '(not authorized)'
      }

      return appleAuthRequestResponse
    } catch (error) {
      console.log('Error in getAppleRequestResponse', error)
      throw error
    }
  }

  const getAppTokenForAppleLogin = async (appleAuthRequestResponse: AppleRequestResponse) => {
    try {
      const response = await fetch(
        URLS.unboxing_api + 'auth/token/apple?code=' + appleAuthRequestResponse.authorizationCode, {
          headers: {
            Accept: 'text/plain',
            'Content-Type': 'application/json'
          }
        })

      if (response.status !== 200) {
        const json = await response.json()
        throw 'GET ' + response.url + ' error status ' + response.status + ', message: ' + json.message
      }

      const token = await response.text()
      return token
    } catch (error) {
      console.log('Error in getTokenForAppleLogin', error)
      throw error
    }
  }

  const appleLoginIOS = async () => {
    try {
      const appleAuthRequestResponse = await getAppleRequestResponse()
      const token = await getAppTokenForAppleLogin(appleAuthRequestResponse)
      // const loginResult = await requestLogin(token)
      
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