import React from 'react'
import {
  TouchableOpacity,
  Image,
} from 'react-native'
import { IMAGES } from '@constants/images'

const BackButton = () => {
  return (
    <TouchableOpacity>
      <Image
        source={IMAGES.leftArrow}
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  )
}

export default BackButton