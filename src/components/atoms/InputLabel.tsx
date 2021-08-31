import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextProps,
  TextStyle,
} from 'react-native'

interface Props extends TextProps {
  children?: string,
  style?: TextStyle,
}

const InputLabel = (props: Props) => {
  const { children, style, ...rest } = props

  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  )
}

export default InputLabel

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    color: 'rgba(6, 6, 6, 0.7)'
  }
})