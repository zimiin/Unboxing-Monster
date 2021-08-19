import React from 'react'
import {
  Image,
} from 'react-native'
import { ICONS } from '@constants/icons'
import { ImageStyle } from 'react-native'

interface Props {
  style?: ImageStyle
}

const BackIcon = (props: Props) => {
  return (
    <Image
      source={ICONS.leftArrow}
      style={[{
        width: 24,
        height: 24,
      }, props.style]}
    />
  )
}

export default BackIcon