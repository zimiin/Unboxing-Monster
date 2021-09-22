import { COLORS } from '@constants/colors'
import { scale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  StyleSheet,
  Image,
  ViewStyle,
  Platform,
  TouchableOpacity,
} from 'react-native'

const FloatingCartButton = ({style, onPress}: {style?: ViewStyle, onPress: () => void}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.circle, 
        Platform.OS === 'ios' ? styles.iosShadow : styles.androidShadow,
        style
      ]}
      onPress={onPress}
    >
      <Image
        source={IMAGES.cart}
        style={styles.cartIcon}
      />
    </TouchableOpacity>
  )
}

export default FloatingCartButton

const styles = StyleSheet.create({
  circle: {
    width: scale(55),
    height: scale(55),
    borderRadius: scale(27.5),
    backgroundColor: COLORS.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartIcon: {
    width: scale(30),
    height: scale(30),
  },
  iosShadow: {
    shadowOffset: {
      width: scale(7),
      height: scale(7),
    },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
  androidShadow: {
    elevation: scale(7),
  },
})