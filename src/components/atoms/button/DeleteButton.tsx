import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { ICONS } from '@constants/icons'

const DeleteButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <FastImage
        source={ICONS.x}
        style={{
          width: 16,
          height: 16,
        }}
      />
    </TouchableOpacity>
  )
}

export default DeleteButton