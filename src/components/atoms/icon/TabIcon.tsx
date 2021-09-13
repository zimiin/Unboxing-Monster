import React from 'react'
import {
  Image
} from 'react-native'
import { IMAGES } from '@constants/images'

const TabIcon = ({ tabName, focused }: { tabName: string, focused: boolean }) => {
  let icon = IMAGES.home
  if (tabName === 'Home') {
    icon = focused ? IMAGES.home_focused : IMAGES.home
  } else if (tabName === 'CustomBox') {
    icon = focused ? IMAGES.customBox_focused : IMAGES.customBox
  } else if (tabName === 'Storage') {
    icon = focused ? IMAGES.storage_focused : IMAGES.storage
  } else if (tabName === 'MyPage') {
    icon = focused ? IMAGES.myPage_focused : IMAGES.myPage
  }

  return (
    <Image
      source={icon}
      resizeMethod={'auto'}
      style={{
        width: 20,
        height: 20,
      }}
    />
  )
}

export default TabIcon