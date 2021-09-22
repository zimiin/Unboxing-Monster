import AsyncStorage from "@react-native-async-storage/async-storage"

export const getPhoneFromAsyncStorage = async () => {
  return await AsyncStorage.getItem('@phone')
}

export const setPhoneToAsyncStorage = async (phone: string) => {
  await AsyncStorage.setItem('@phone', phone)
}

export const getNicknameFromAsyncStorage = async () => {
  return await AsyncStorage.getItem('@nickname')
}

export const setNicknameToAsyncStorage = async (nickname: string) => {
  await AsyncStorage.setItem('@nickname', nickname)
}

export const getEmailFromAsyncStorage = async () => {
  return await AsyncStorage.getItem('@email')
}

export const setEmailToAsyncStorage = async (email: string) => {
  await AsyncStorage.setItem('@email', email)
}

export const getAccessTokenFromAsyncStorage = async () => {
  return await AsyncStorage.getItem('@access_token')
}

export const setAccessTokenToAsyncStorage = async (accessToken: string) => {
  await AsyncStorage.setItem('@access_token', accessToken)
}