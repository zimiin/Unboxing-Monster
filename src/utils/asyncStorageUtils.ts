import AsyncStorage from "@react-native-async-storage/async-storage"

export const getPhoneFromAsyncStorage = async () => {
  return await AsyncStorage.getItem('@phone')
}

export const getNicknameFromAsyncStorage = async () => {
  return await AsyncStorage.getItem('@nickname')
}

export const getEmailFromAsyncStorage = async () => {
  return await AsyncStorage.getItem('@email')
}

export const getAccessToken = async () => {
  return await AsyncStorage.getItem('@access_token')
}