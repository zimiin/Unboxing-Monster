import 'react-native-get-random-values'
import React, { useEffect, useState } from 'react'
import LoginTemplate from '@components/templates/LoginTemplate'
import { LoginProps } from '@constants/navigationTypes'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import { useContext } from 'react'
import { SignUpContext } from '@src/stores/SignUpContext'
import { URLS } from '@constants/urls'
import { getUserInfoFromToken, storeUserInfo } from '@src/utils/loginUtils'
import { User } from '@constants/types'
import { Platform } from 'react-native'
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication'
import { v4 as uuid } from 'uuid'
import { UserContext } from '@src/stores/UserContext'
import { KakaoOAuthToken, login, getProfile, KakaoProfile } from '@react-native-seoul/kakao-login'

const LoginPage = ({route, navigation}: LoginProps) => {
  const [{}, {setEmail, setProvider, setProviderToken}] = useContext(SignUpContext)
  const [{}, {setUserData}] = useContext(UserContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedProvider, setSelectedProvider] = useState<string>('')
  const [showUnableEventModal, setShowUnableEventModal] = useState<boolean>(false)

  const requestLogin = async (provider: string, token: string) => {
    try {
      setIsLoading(true)

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

        await setUserData(user.id, user.nickname, user.email, json.access_token, '')

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
    } finally {
      setIsLoading(false)
    }
  }

  const storeSignUpInfoInContext = (provider: string, providerToken: string, email?: string) => {
    setProvider(provider)
    setProviderToken(providerToken)
    setEmail(email || '')
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
        const email = await getFacebookEmail()
        storeSignUpInfoInContext('facebook', facebookToken, email)

        if (email === undefined || email === '' || email === null) {
          navigation.push('SignUpEmailInput')
        } else {
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

  const getAppleCodeEmailIOS = async (): Promise<{code: string, email?: string}> => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      })

      if (appleAuthRequestResponse === undefined) {
        throw 'appleAuthRequestResponse is null'
      }

      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user)

      if (credentialState !== appleAuth.State.AUTHORIZED) {
        throw 'credentialState is ' + credentialState + '(not authorized)'
      }

      if (appleAuthRequestResponse.authorizationCode === null) {
        throw 'appleAuthRequestResponse.authorizationCode is null'
      }

      return {code: appleAuthRequestResponse.authorizationCode, email: appleAuthRequestResponse.email || ''}
    } catch (error) {
      console.log('Error in getAppleRequestResponse', error)
      throw error
    }
  }
  
  const getAppleCodeEmailAndroid = async (): Promise<{code: string, email?: string}> => {
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
      return {code: response.code, email: response.user?.email}
    } catch (error) {
      console.log('Error in getAppleCodeAndroid', error)
      throw error
    }
  }
  
  const getAppleToken = async (isAndroid: boolean, code: string) => {
    try {
      let url = new URL(URLS.unboxing_api + 'auth/token/apple')

      url.searchParams.append('code', code)
      if (isAndroid) {
        url.searchParams.append('isAndroid', 'true')
      }

      const response = await fetch(
        url.toString(), {
        method: 'GET',
        headers: {
          Accept: 'text/plain',
          'Content-Type': 'application/json'
        }
      })

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }

      return await response.text()
    } catch (error) {
      console.log('Error in getAppleToken', error)
      throw error
    }
  }
  
  const appleLogin = async () => {
    try {
      if (Platform.OS === 'android') {
        var {code, email} = await getAppleCodeEmailAndroid()
        console.log('code', code)
        console.log('email', email)
        var token = await getAppleToken(true, code)
        var loginResult = await requestLogin('apple-a', token)
      } else {
        var {code, email} = await getAppleCodeEmailIOS()
        var token = await getAppleToken(false, code)
        var loginResult = await requestLogin('apple', token)
      }

      if (loginResult) {
        navigation.replace('Main')
      } else {
        let provider = 'apple'
        if (Platform.OS === 'android') {
          provider += '-a'
        }

        storeSignUpInfoInContext(provider, token, email)

        if (email) {
          navigation.navigate('SignUpNicknameInput')
        } else {
          navigation.navigate('SignUpEmailInput')
        }
      }
    } catch (error) {
      console.log('Error in appleLoginAndroid', error)
    }
  }
  
  const kakaoLogin = async () => {
    try {
      const kakaoOAuthToken: KakaoOAuthToken = await login();
      const kakaoToken: string = kakaoOAuthToken.accessToken
      console.log('kakao accesstoken', kakaoToken)
      const loginResult = await requestLogin('kakao', kakaoToken)

      if (loginResult) {
        navigation.replace('Main')
      } else {
        const profile: KakaoProfile = await getProfile()
        const email = profile.email
        storeSignUpInfoInContext('kakao', kakaoToken, email)

        if (email === undefined || email === '' || email === null) {
          navigation.push('SignUpEmailInput')
        } else {
          navigation.push('SignUpNicknameInput')
        }
      }
    } catch (error) {
      console.log('Error in kakaoLogin', error)
    }
  }

  const ableToEnrollEvent = async (): Promise<boolean> => {
    try {
      const response = await fetch(URLS.unboxing_api + 'event/join/check')

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }

      const numOfEnrollments = parseInt(await response.text())

      if (numOfEnrollments < 200) {
        return true
      } else {
        return false
      }
    } catch (error) {
      console.log('Error in ableToEnrollEvent', error)
      throw error
    }
  }

  const loginWith = (provider: string) => {
    setIsLoading(false)

    if (provider === 'kakao') {
      kakaoLogin()
    } else if (provider === 'facebook') {
      facebookLogin()
    } else if (provider === 'apple') {
      appleLogin()
    }
  }

  const openModal = () => {
    setIsLoading(false)
    setShowUnableEventModal(true)
  }

  const checkEventAndLogin = async (provider: string) => {
    try {
      setIsLoading(true)
      const eventStatus = await ableToEnrollEvent()

      if (eventStatus === true) {
        loginWith(provider)
      } else if (eventStatus === false) {
        setSelectedProvider(provider)
        openModal()
      }
    } catch (error) {
      console.log('Error in checkEventAndLogin', error)
    }
  }

  return (
    <LoginTemplate
      isLoading={isLoading}
      showUnableEventModal={showUnableEventModal}
      onPressLookAround={() => navigation.replace('Main')}
      onPressFacebook={() => checkEventAndLogin('facebook')}
      onPressApple={() => checkEventAndLogin('apple')}
      onPressKakao={() => checkEventAndLogin('kakao')}
      closeUnableEventModal={() => setShowUnableEventModal(false)}
      onConfirmEventStatus={() => { loginWith(selectedProvider); setShowUnableEventModal(false) }}
    />
  )
}

export default LoginPage