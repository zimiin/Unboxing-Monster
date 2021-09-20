import { IMAGES } from '@constants/images'
import React from 'react'
import {
  Image,
} from 'react-native'

const DoneIcon = () => {
  return (
    <Image
      source={IMAGES.done}
      style={{
        width: 88,
        height: 88,
      }}
    />
  )
}

export default DoneIcon
