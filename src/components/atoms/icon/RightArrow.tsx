import { scale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  Image, ImageStyle, TouchableOpacity, TouchableOpacityProps,
} from 'react-native'

interface Props {
  style?: ImageStyle
}

const RightArrow = (props: Props) => {
  return (
    <Image
      source={IMAGES.rightArrow}
      style={[{
        width: scale(20),
        height: scale(20),
      }, props.style]}
    />
  )
}

export default RightArrow