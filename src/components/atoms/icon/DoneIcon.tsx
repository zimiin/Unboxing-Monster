import { ICONS } from '@constants/icons'
import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import FastImage from 'react-native-fast-image'

const DoneIcon = () => {
  return (
    <FastImage
      source={ICONS.done}
      style={{
        width: 88,
        height: 88,
      }}
    />
  )
}

export default DoneIcon
