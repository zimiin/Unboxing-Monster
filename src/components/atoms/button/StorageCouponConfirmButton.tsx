import React from 'react'
import { StyleProp, Text, TextStyle, ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
import {
  TouchableOpacity,
} from 'react-native'
import { scale } from 'react-native-size-matters'
import Bold from '../typography/Bold'

interface Props {
  onPress?: () => void,
  buttonStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  children: string,
}

const StorageCouponConfirmButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.buttonStyle]}
      onPress={props.onPress}
    >
      <Text style={[styles.text, props.textStyle]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}

export default StorageCouponConfirmButton

const styles = StyleSheet.create({
  button: {
    width: scale(88),
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  text: {
    fontSize: 13,
    fontFamily: 'NotoSansCJKkr-Medium',
    letterSpacing: -0.32,
    lineHeight: 19,
  }
})