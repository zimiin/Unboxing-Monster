import { User } from "@constants/types"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeUserInfo = async (accessToken: string, nickname: string, email: string, phone: string) => {
  await AsyncStorage.setItem('@access_token', accessToken)
  await AsyncStorage.setItem('@nickname', nickname)
  await AsyncStorage.setItem('@email', email)
  await AsyncStorage.setItem('@phone', phone)
}

export const getAccessToken = async () => {
  return await AsyncStorage.getItem('@access_token')
}

const getUserIdFromToken = async (accessToken: string | null) => {
  try {
    if (accessToken === null) {
      throw 'No access token passed'
    }

    const response = await fetch(
      // TODO server 주소 constant로 변경
      'http://3.37.238.160/', {
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
    console.log('=====Error in getUserIdUsingToken=====', error)
    throw error
  }
}

export const getLoginUserId = async () => {
  try {
    const access_token = await getAccessToken()
    const id = await getUserIdFromToken(access_token)
    return id
  } catch (error) {
    console.log('=====Error in getLoginUserId=====', error)
  }
}

const getUserFromId = async (id: string) => {
  try {
    const response = await fetch(
      'http://3.37.238.160/users/' + id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )

    if (response.status !== 200) {
      const json = await response.json()
      throw 'status: ' + response.status + ', message: ' + json.message + ', url: ' + response.url
    }

    const user: User = await response.json()
    return user

  } catch (error) {
    console.log('=====Error in getUserFromId=====', error)
    throw error
  }
}

export const getUserInfoFromToken = async (accessToken: string) => {
  try {
    const id = await getUserIdFromToken(accessToken)
    const user: User = await getUserFromId(id)
    return user

  } catch (error) {
    console.log('=====Error in getUserInfoFromToken=====', error)
    throw error
  }
}

export const printAsyncStorage = async () => {
  const token = await AsyncStorage.getItem('@access_token')
  console.log('@access_token: ', token)
  const nickname = await AsyncStorage.getItem('@nickname')
  console.log('@nickname: ', nickname)
  const email = await AsyncStorage.getItem('@email')
  console.log('@email: ', email)
  const phone = await AsyncStorage.getItem('@phone')
  console.log('@phone: ', phone)
}