import { Box, BoxId } from "@constants/types"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const getPhoneFromAsyncStorage = async () => {
  try {
    return await AsyncStorage.getItem('@phone')
  } catch (error) {
    console.log('Error in getPhoneFromAsyncStorage', error)
    throw error
  }
}

export const setPhoneToAsyncStorage = async (phone: string) => {
  try {
    await AsyncStorage.setItem('@phone', phone)
  } catch (error) {
    console.log('Error in setPhoneToAsyncStorage', error)
    throw error
  }
}

export const getUserIdFromAsyncStorage = async () => {
  try {
    return await AsyncStorage.getItem('@userId')
  } catch (error) {
    console.log('Error in getUserIdFromAsyncStorage', error)
    throw error
  }
}

export const setUserIdToAsyncStorage = async (userId: string) => {
  try {
    await AsyncStorage.setItem('@userId', userId)
  } catch (error) {
    console.log('Error in setUserIdToAsyncStorage', error)
    throw error
  }
}

export const getNicknameFromAsyncStorage = async () => {
  try {
    return await AsyncStorage.getItem('@nickname')
  } catch (error) {
    console.log('Error in getNicknameFromAsyncStorage', error)
    throw error
  }
}

export const setNicknameToAsyncStorage = async (nickname: string) => {
  try {
    await AsyncStorage.setItem('@nickname', nickname)
  } catch (error) {
    console.log('Error in setNicknameToAsyncStorage', error)
    throw error
  }
}

export const getEmailFromAsyncStorage = async () => {
  try {
    return await AsyncStorage.getItem('@email')
  } catch (error) {
    console.log('Error in getEmailFromAsyncStorage', error)
    throw error
  }
}

export const setEmailToAsyncStorage = async (email: string) => {
  try {
    await AsyncStorage.setItem('@email', email)
  } catch (error) {
    console.log('Error in setEmailToAsyncStorage', error)
    throw error
  }
}

export const getAccessTokenFromAsyncStorage = async () => {
  try {
    return await AsyncStorage.getItem('@access_token')
  } catch (error) {
    console.log('Error in getAccessTokenFromAsyncStorage', error)
    throw error
  }
}

export const setAccessTokenToAsyncStorage = async (accessToken: string) => {
  try {
    await AsyncStorage.setItem('@access_token', accessToken)
  } catch (error) {
    console.log('Error in setAccessTokenToAsyncStorage', error)
    throw error
  }
}

export const getRecentlySearchedBoxes = async () => {
  try {
    const boxesJson = await AsyncStorage.getItem('@recently_searched_boxes')
    return boxesJson != null ? JSON.parse(boxesJson) : null
  } catch (error) {
    console.log('Error in getRecentlySearchedBoxes', error)
    throw error
  }
}

export const setRecentlySearchedBoxes = async (boxes: Box[]) => {
  try {
    const boxesJson = JSON.stringify(boxes)
    await AsyncStorage.setItem('@recently_searched_boxes', boxesJson)
  } catch (error) {
    console.log('Error in getRecentlySearchedBoxes', error)
    throw error
  }
}

export const addRecentlySearchedBoxes = async (box: Box): Promise<Box[]> => {
  try {
    let curBoxes: Box[] = await getRecentlySearchedBoxes() || []
    curBoxes.unshift(box)

    const maxLength = 10
    if (curBoxes.length > maxLength) {
      curBoxes.length = maxLength
    }

    setRecentlySearchedBoxes(curBoxes)
    return curBoxes
  } catch (error) {
    console.log('Error in addRecentlySearchedBoxes', error)
    throw error
  }
}