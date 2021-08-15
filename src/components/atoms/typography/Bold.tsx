import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import {
  Text
} from 'react-native'

interface Props { 
  children: string,
  style?: StyleProp<TextStyle>
  numberOfLines?: number,
}

const Bold = (props: Props) => {
  return (
    <Text 
      style={[
        { fontWeight: 'bold' }, 
        props.style
      ]}
      numberOfLines={props.numberOfLines}
    >
      {props.children}
    </Text>
  )
}

export default Bold

