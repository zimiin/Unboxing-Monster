import { ICONS } from '@constants/icons'
import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import FastImage from 'react-native-fast-image'

interface CheckBoxProps {
  checked: boolean,
  onPress: () => void,
}

const CheckBox = (props: CheckBoxProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <FastImage
        source={props.checked ? ICONS.checkBox_checked : ICONS.checkBox_unchecked}
        style={styles.checkBox}
      />

    </TouchableOpacity>
  )
}

export default CheckBox

const styles = StyleSheet.create({
  checkBox: {
    width: 16,
    height: 16,
  }
})