import { COLORS } from '@constants/colors'
import { scale } from '@constants/figure'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native'

interface Props {
  buttonStyle?: ViewStyle,
  text?: string,
  textStyle?: TextStyle,
  onPress?: () => void,
}

const HalfWidthButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.buttonStyle]}
    >
      <Text style={[styles.text, props.textStyle]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}

export default HalfWidthButton

const styles = StyleSheet.create({
  button: {
    width: scale(150),
    height: scale(48),
    borderRadius: scale(6),
    backgroundColor: COLORS.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'NotoSansCJKkr-Bold',
    lineHeight: 26,
  }
})
