import { IMAGES } from '@constants/images'
import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  Image,
  ViewStyle,
} from 'react-native'

interface CheckBoxProps extends TouchableOpacityProps {
  style?: ViewStyle,
  checked: boolean,
  onPress?: () => void,
}

const CheckBox = (props: CheckBoxProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}
    >
      <Image
        source={props.checked ? IMAGES.checkBox_checked : IMAGES.checkBox_unchecked}
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