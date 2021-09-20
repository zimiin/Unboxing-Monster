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
      // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
      return appleAuth.onCredentialRevoked(async () => {
        console.warn('If this function executes, User Credentials have been Revoked');
      });
    }
  }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.

  const appleLoginIOS = async () => {
    try {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // get current authentication state for user
      // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

      // use credentialState response to ensure the user is authenticated
      if (credentialState === appleAuth.State.AUTHORIZED) {
        // user is authenticated
      }
    } catch (error) {
      console.log('Error in appleLoginIOS', error)
      console.log(error)
    }
  }

  const appleLoginAndroid = async () => {
    try {
      // Generate secure, random values for state and nonce
      const rawNonce = uuid();
      // const state = uuid();

      // Configure the request
      appleAuthAndroid.configure({
        // The Service ID you registered with Apple
        clientId: 'com.example.client-android',

        // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
        // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
        redirectUri: 'https://example.com/auth/callback',

        // The type of response requested - code, id_token, or both.
        responseType: appleAuthAndroid.ResponseType.ALL,

        // The amount of user information requested from Apple.
        scope: appleAuthAndroid.Scope.ALL,

        // Random nonce value that will be SHA256 hashed before sending to Apple.
        nonce: rawNonce,

        // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
        // state,
      });

      // Open the browser window for user sign in
      const response = await appleAuthAndroid.signIn();

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