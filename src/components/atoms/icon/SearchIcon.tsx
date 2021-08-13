import React from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import { ICONS } from '@constants/icons'

const SearchIcon = () => {
  return (
    <Image
      source={ICONS.search}
      style={{
        width: 20,
        height: 20,
      }}
    />
  )
}

export default SearchIcon