import React from 'react'
import LoginTemplate from '@components/templates/LoginTemplate'
import { LoginProps } from '@constants/navigationTypes'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginPage = ({route, navigation}: LoginProps) => {
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
    const token = await getFacebookToken()
    if (token === undefined) return

    // 가입된 유저인지 확인
      // 가입안된 유저라면
      // await sendUserPostRequest(token)

    console.log('token: ' + token)
    await AsyncStorage.setItem('@token', token)
    await AsyncStorage.setItem('@socialLoginProvider', 'facebook')

    navigation.replace('Main')
  }
  
  return (
    <LoginTemplate
      onPressLookAround={() => navigation.replace('Main')}
      onPressFacebook={facebookLogin}
    />
  )
}

export default LoginPage