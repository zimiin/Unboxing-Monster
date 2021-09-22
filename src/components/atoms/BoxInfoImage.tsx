import React from 'react'
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native'
import { SCREEN_WIDTH } from '@constants/figure'
import { defaultBox } from '@constants/images'

interface Props {
  image?: ImageSourcePropType
  style?: ImageStyle
}

const BoxInfoImage = (props: Props) => {
  return (
    <Image
      source={props.image || defaultBox}
      style={[{
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
      }, props.style]}
      resizeMode='contain'
    />
  )
}

export default BoxInfoImage
