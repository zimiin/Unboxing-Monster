import React, { useState } from "react"
import { SplashProps } from "@constants/navigationTypes"
import SplashTemplate from "@components/templates/SplashTemplate"
import { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { URLS } from '@constants/urls'

const SplashPage = ({route, navigation} : SplashProps) => {
  const [animating, setAnimatinng] = useState(true)
  
  const checkHasToken = async () => {
    return await AsyncStorage.getItem('@access_token')
  }

  const checkValidToken = async () => {
    try {
      const token = await AsyncStorage.getItem('@access_token')

      const response = await fetch(
        URLS.unboxing_api + '', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        }
      )

      if (response.status === 200) {
        return true
      } else {
        const json = await response.json()
        throw 'Network error Status: ' + response.status + ' url: ' + response.url + ' message: ' + json.message
      }
    } catch (error) {
      console.log('Error in checkValidToken', error)
    }
  }

  const checkTokenAndNavigate = async () => {
    if (await checkHasToken() && await checkValidToken()) {
      navigation.replace('Main')
    } else {
      navigation.replace('Login')
    }
  }

  useEffect(() => {
   checkTokenAndNavigate()
  }, [])

  return (
    <SplashTemplate
      animating={animating}
    />
  )
}

export default SplashPage