import { scale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageStyle,
} from 'react-native'

const InfoIcon = ({style}: {style?: ImageStyle}) => {
  return (
    <Image
      source={IMAGES.info}
      style={[styles.icon, style]}
    />
  )
}

export default InfoIcon

const styles = StyleSheet.create({
  icon: {
    width: scale(66),
    height: scale(66)
  }
})