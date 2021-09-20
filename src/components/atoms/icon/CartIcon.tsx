import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import { IMAGES } from '@constants/images'

const CartIcon = () => {
  return (
    <Image
      source={IMAGES.cart}
      style={{
        width: 20,
        height: 20,
      }}
    />
  )
}

export default CartIcon