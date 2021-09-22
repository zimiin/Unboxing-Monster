import MyPageTemplate from "@components/templates/MyPageTemplate"
import { MyPageProps } from "@constants/navigationTypes"
import { URLS } from "@constants/urls"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { CommonActions } from "@react-navigation/native"
import { getNicknameFromAsyncStorage } from "@src/utils/asyncStorageUtils"
import { getLoginUserId, hasLoggedIn } from "@src/utils/loginUtils"
import React, { useCallback, useEffect, useMemo, useState } from "react"

const MyPagePage = ({route, navigation}: MyPageProps) => {
  const [loginState, setLoginState] = useState<boolean>(false)
  const [nickname, setNickname] = useState<string>()
  const [point, setPoint] = useState<number>()

  const getPoint = useCallback(async () => {
    try {
      const userId = await getLoginUserId()
      const response = await fetch(URLS.unboxing_api + 'users/' + userId)

      if (response.status !== 200) {
        const json = await response.json()
        throw 'status ' + response.status + ', message: ' + json.message + ', url: ' + response.url
      }

      const userData = await response.json()
      return userData.point
    } catch (error) {
      console.log('Error in getPoint::', error)
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