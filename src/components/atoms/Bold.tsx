import React from 'react'
import {
  Text
} from 'react-native'

const Bold = (props: { children: string }) => {
  return (
    <Text style={{ fontWeight: 'bold' }}>
      {props.children}
    </Text>
  )
}

export default Bold

