import React from 'react'
import {
  Text,
} from 'react-native'

const SmallTitle = ({ content }: { content: string }) => {
  return (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: 12,
      }}
    >
      {content}
    </Text>
  )
}

export default SmallTitle
