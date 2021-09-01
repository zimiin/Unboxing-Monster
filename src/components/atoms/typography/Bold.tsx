import React from 'react'
import { 
  TextProps,
} from 'react-native'
import {
  Text
} from 'react-native'

interface Props extends TextProps {
  children: string
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

