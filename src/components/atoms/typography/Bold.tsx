import React from 'react'
import { 
  StyleProp, 
  TextStyle,
  TextProps,
} from 'react-native'
import {
  Text
} from 'react-native'

interface Props extends TextProps {
  children: string,
  // style?: StyleProp<TextStyle>
  // numberOfLines?: number,
}

const Bold = (props: Props) => {
  const { style, children, ...rest } = props

  return (
    <Text 
      {...rest}
      style={[
        { fontWeight: 'bold' }, 
        style
      ]}
    >
      {children}
    </Text>
  )
}

export default Bold

