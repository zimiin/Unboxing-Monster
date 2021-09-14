import React from 'react'
import {
  Image,
} from 'react-native'
import { IMAGES } from '@constants/images'
import { ImageStyle } from 'react-native'

interface Props {
  style?: ImageStyle
}

const BackIcon = (props: Props) => {
  return (
    <Image
      source={IMAGES.leftArrow}
      style={[{
        width: 24,
        height: 24,
      }, props.style]}
    />
  )
}

export default BackIcon