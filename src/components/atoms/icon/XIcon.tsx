import { IMAGES } from '@constants/images'
import React from 'react'
import { Image } from 'react-native'

const XIcon = () => {
  return (
    <Image
      source={IMAGES.x}
      style={{
        width: 16,
        height: 16,
      }}
    />
  )
}

export default XIcon
