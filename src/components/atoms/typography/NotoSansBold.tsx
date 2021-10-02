import React from 'react'
import {
  Text,
  StyleSheet,
  TextProps,
  TextStyle,
} from 'react-native'

interface Props extends TextProps {
  style?: TextStyle | TextStyle[],
  children?: (string | Element)[] | string | string[]
}

const NotoSansBold = (props: Props) => {
  const {style, children, ...rest} = props

  return (
    <Text 
      style={[styles.font, style]}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default NotoSansBold

const styles = StyleSheet.create({
  font: {
    fontFamily: 'NotoSansCJKkr-Bold',
  }
})