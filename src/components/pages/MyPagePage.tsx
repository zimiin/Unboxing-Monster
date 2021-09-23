import MyPageTemplate from "@components/templates/MyPageTemplate"
import { MyPageProps } from "@constants/navigationTypes"
import { User } from "@constants/types"
import { URLS } from "@constants/urls"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { CommonActions } from "@react-navigation/native"
import { getAccessTokenFromAsyncStorage, getNicknameFromAsyncStorage } from "@src/utils/asyncStorageUtils"
import { getLoginUserId, hasLoggedIn } from "@src/utils/loginUtils"
import React, { useCallback, useEffect, useMemo, useState } from "react"

const MyPagePage = ({route, navigation}: MyPageProps) => {
  const [loginState, setLoginState] = useState<boolean>(false)
  const [nickname, setNickname] = useState<string>()
  const [point, setPoint] = useState<number>()

  const getPoint = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage()
      const response = await fetch(
        URLS.unboxing_api + 'users', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          }
        }
      )

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ', status ' + response.status + ', ' + json.message
      }

      const userData: User = await response.json()
      return userData.point
    } catch (error) {
      console.log('Error in getPoint', error)
    }
  }, [])

  useEffect(() => {
    let isSubscribed = true

    try {
      hasLoggedIn().then(
        result => {
          if (isSubscribed) {
            setLoginState(result || false)
          }
        }
      )

      getNicknameFromAsyncStorage().then(
        result => {
          if (isSubscribed) {
            setNickname(result || '')
          }
        }
      )

      navigation.addListener('focus', () => {
        getPoint().then(
          result => {
            if (isSubscribed) {
              setPoint(result)
            }
          }
        )
      })
    } catch (error) {
      console.log('Error in useEffect in MyPagePage::', error)
    }

    return () => {isSubscribed = false}
  }, [])

  const logout = async () => {
    await AsyncStorage.clear()
    navigation.replace('Auth', {screen: 'Login'})
  }

  return (
    <MyPageTemplate
      loginState={loginState}
      nickname={nickname || ''}
      point={point || 0}
      onPressLogout={logout}
      onPressLogin={() => navigation.replace('Auth', {screen: 'Login'})}
      onPressCart={() => navigation.navigate('Cart')}
      onPressPointHistory={() => console.log('Point History')}
      onPressPaymentHistory={() => console.log('Payment History')}
    />
  )
}

export default MyPagePage