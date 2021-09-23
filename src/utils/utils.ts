import { Linking } from 'react-native'

export const openUrl = async (url: string) => {
  const supported = await Linking.canOpenURL(url)

  if (supported) {
    Linking.openURL(url)
  } else {
    console.log("Don't know how to open URI: " + url)
  }
}

export const validatePhone = (phone: string) => {
  var phoneRule1 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/
  var phoneRule2 = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/

  if (phoneRule1.test(phone) || phoneRule2.test(phone)) {
    return true
  } else {
    return false
  }
}

export const removeHyphens = (str: string) => {
  let newStr = str.slice()
  while (newStr.includes('-')) {
    newStr = newStr.replace('-', '')
  }
  return newStr
}

export const getDaysBetweenDates = (date1: Date, date2: Date) => {
  const time1 = date1.getTime()
  const time2 = date2.getTime()

  let diff = time1 - time2
  if (diff < 0) diff = diff * -1

  return Math.floor(diff / (1000 * 60 * 60 * 24))
}