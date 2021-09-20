import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import { IMAGES } from '@constants/images'

const MinusButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Image
        source={IMAGES.minus}
        style={{
          width: 16,
          height: 16,
        }}
      />
    </TouchableOpacity>
  )
}

export default MinusButton