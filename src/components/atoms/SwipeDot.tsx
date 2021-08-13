import React from 'react'
import {
  View
} from 'react-native'

const SwipeDot = (props: { backgroundColor: string }) => {
  const DotStyle = {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 8,
    marginRight: 8,
    bottom: 156,
  }
  return (
    <View style={{
      backgroundColor: props.backgroundColor,
      ...DotStyle
    }} />
  )
}

export default SwipeDot
