import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import SearchTemplate from '@components/templates/SearchTemplate'
import { SearchProps } from '@constants/navigationTypes'

const SearchPage = (props: SearchProps) => {
  return (
    <SearchTemplate 
      onPressBack={() => props.navigation.goBack()}
    />
  )
}

export default SearchPage