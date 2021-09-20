import { COLORS } from '@constants/colors'
import { scale } from '@constants/figure'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'
import SearchIcon from './icon/SearchIcon'

interface Props extends TouchableOpacityProps {
  input: string,
  onChangeText: (input: string) => void,
  style?: ViewStyle
}

const SearchBar = (props: Props) => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={[styles.searchBar]}>
        <SearchIcon />
      </View>
      <TextInput
        style={styles.textInput}
        value={props.input}
        onChangeText={props.onChangeText}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: COLORS.grey_box,
    height: 32,
    width: scale(312),
    borderRadius: 16,
    paddingHorizontal: scale(12),
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 14,
    position: 'absolute',
    marginLeft: scale(40),
    width: scale(262),
  }
})
