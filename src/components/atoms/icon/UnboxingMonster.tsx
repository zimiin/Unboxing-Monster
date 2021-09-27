import { scale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  StyleSheet,
  Image,
  ImageStyle,
} from 'react-native'

const UnboxingMonster = ({style}: {style?: ImageStyle}) => {
  return (
    <Image
      source={IMAGES.unboxingMonster}
      style={[styles.image, style]}
    />
  )
}

export default UnboxingMonster

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  }
})