import { User } from "@constants/types"
import { URLS } from "@constants/urls"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getAccessTokenFromAsyncStorage } from "./asyncStorageUtils"

export const storeUserInfo = async (accessToken: string, nickname: string, email: string, phone: string) => {
  await AsyncStorage.setItem('@access_token', accessToken)
  await AsyncStorage.setItem('@nickname', nickname)
  await AsyncStorage.setItem('@email', email)
  await AsyncStorage.setItem('@phone', phone)
}

export const printAsyncStorage = async () => {
  console.log('@access_token', await AsyncStorage.getItem('@access_token'))
  console.log('@nickname', await AsyncStorage.getItem('@nickname'))
  console.log('@email', await AsyncStorage.getItem('@email'))
  console.log('@phone', await AsyncStorage.getItem('@phone'))
}

// 이게 결국 필요없어짐. 나중에 삭제
const getUserIdFromToken = async (accessToken: string | null) => {
  try {
    if (accessToken === null) {
      throw 'No access token passed'
    }

    const response = await fetch(
      URLS.unboxing_api, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }
    )
    
    const json = await response.json()

    if (response.status !== 200) {
      throw 'status: ' + response.status + ', message: ' + json.message + ', url: ' + response.url
    }

    return json.userId
  } catch (error) {
    console.log('Error in getUserIdUsingToken', error)
    throw error
  }
}

export const getLoginUserId = async () => {
  try {
    const access_token = await getAccessTokenFromAsyncStorage()
    const id = await getUserIdFromToken(access_token)
    return id
  } catch (error) {
    console.log('Error in getLoginUserId', error)
    throw error
  }
}

export const getUserInfoFromToken = async (accessToken: string) => {
  try {
    const response = await fetch(
      URLS.unboxing_api + 'users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    })

    if (response.status !== 200) {
      const json = await response.json()
      throw 'GET ' + response.url + ' error status ' + response.status + ' ' + json.message
    }

    const user: User = await response.json()
    return user
  } catch (error) {
    console.log('Error in getUserInfoFromToken', error)
    throw error
  }
}

export const hasLoggedIn = async () => {
  try {
    const access_token = await getAccessTokenFromAsyncStorage()

    if (access_token === null) {
      return false
    }

    const response = await fetch(
      URLS.unboxing_api, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      }
    })

    if (response.status === 401) {
      return false
    } else if (response.status === 200) {
      return true
    }
  } catch (error) {
    console.log('Error in hasLoggedIn', error)
    throw error
  }
}