import React from 'react'
import {
  Image,
} from 'react-native'
import { ICONS } from '@constants/icons'

const BackIcon = () => {

  return (
    <Image
      source={ICONS.leftArrow}
      style={{
        width: 24,
        height: 24,
      }}
    />
  )
}

export default BackIcon