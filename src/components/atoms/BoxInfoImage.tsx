import React from 'react'
import {
  Image,
  ImageSourcePropType,
} from 'react-native'
import { SCREEN_WIDTH } from '@constants/figure'

const BoxInfoImage = ({ image }: { image: ImageSourcePropType }) => {
  return (
    <Image
      source={image}
      style={{
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
      }}
      resizeMode='contain'
    />
  )
}

export default BoxInfoImage
