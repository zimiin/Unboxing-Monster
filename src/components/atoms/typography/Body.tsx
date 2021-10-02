import React from 'react'
import {
  Text, TextStyle,
} from 'react-native'

const Body = ({ content, style }: { content?: string, style?: TextStyle }) => {
  return (
    <Text
      style={[{
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'NotoSansCJKkr-Regular',
        letterSpacing: -0.3,
      }, style]}
    >
      {content}
    </Text>
  )
}

export default Body
