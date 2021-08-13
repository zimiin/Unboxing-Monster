import React from 'react'
import {
  Text,
} from 'react-native'

const Body = ({ content }: { content: string }) => {
  return (
    <Text
      style={{
        fontSize: 12,
        lineHeight: 20,
      }}
    >
      {content}
    </Text>
  )
}

export default Body
