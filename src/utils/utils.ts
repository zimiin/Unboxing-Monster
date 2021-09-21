import { Linking } from 'react-native'

export const openUrl = async (url: string) => {
  const supported = await Linking.canOpenURL(url)

  if (supported) {
    Linking.openURL(url)
  } else {
    console.log("Don't know how to open URI: " + url)
  }
}