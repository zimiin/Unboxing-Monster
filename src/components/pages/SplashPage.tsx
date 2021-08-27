import React, { useState } from "react"
import { SplashProps } from "@constants/navigationTypes"
import SplashTemplate from "@components/templates/SplashTemplate"
import { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const SplashPage = ({route, navigation} : SplashProps) => {
  const [animating, setAnimatinng] = useState(true)
  
  const checkTokenAndNavigate = async () => {
    const token = await AsyncStorage.getItem('@token')
    if (token === null) {
      navigation.replace('Login')
      return
    }
    
    // token 유효 확인하기
      // 유효하지 않으면 First로 보내기
  
    navigation.replace('Main')
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