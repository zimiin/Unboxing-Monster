import React from 'react'
import {
  Image,
} from 'react-native'

import { IMAGES } from '@constants/images'

const Logo = () => {
  return (
    <Image
      source={IMAGES.logo}
      style={{
        flex: 1,
        width: undefined,
        height: undefined,
      }}
    />
  )
}

export default Logo