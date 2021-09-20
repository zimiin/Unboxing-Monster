import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import { IMAGES } from '@constants/images'

const SearchIcon = () => {
  return (
    <Image
      source={IMAGES.search}
      style={{
        width: 20,
        height: 20,
      }}
    />
  )
}

export default SearchIcon