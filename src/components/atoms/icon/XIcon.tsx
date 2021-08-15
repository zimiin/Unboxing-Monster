import { ICONS } from '@constants/icons'
import React from 'react'
import FastImage from 'react-native-fast-image'

const XIcon = () => {
  return (
    <FastImage
      source={ICONS.x}
      style={{
        width: 16,
        height: 16,
      }}
    />
  )
}

export default XIcon
