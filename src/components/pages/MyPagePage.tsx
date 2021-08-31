import MyPageTemplate from "@components/templates/MyPageTemplate"
import { MyPageProps } from "@constants/navigationTypes"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { CommonActions } from "@react-navigation/native"
import React from "react"

const MyPagePage = ({route, navigation}: MyPageProps) => {
  const logout = async () => {
    await AsyncStorage.removeItem('@access_token')
    
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ 
          name: 'Auth',
          state: {
            routes: [{
              name: 'Login',
            }]
          }
        }]
      })
    )
  } 

  return (
    <MyPageTemplate
      onPressLogout={logout}
    />
  )
}

export default MyPagePage