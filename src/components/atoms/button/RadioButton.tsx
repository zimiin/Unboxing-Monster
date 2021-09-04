import { scale } from '@constants/figure'
import { ICONS } from '@constants/icons'
import React from 'react'
import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  Image,
} from 'react-native'

interface Props extends TouchableOpacityProps {
  checked: boolean,
}

const RadioButton = (props: Props) => {
  const { onPress, style, checked, ...rest } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style]}
      {...rest}
    >
      <Image
        source={checked ? ICONS.radio_box_chkd : ICONS.radio_box_unchkd}
        style={styles.icon}
      />
    </TouchableOpacity>
  )
}

export default RadioButton

const styles = StyleSheet.create({
  icon: {
    width: scale(20),
    height: scale(20),
  }
})
