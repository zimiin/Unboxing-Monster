import React from 'react'
import {
  Text, TextStyle,
} from 'react-native'

interface Props {
  content?: string,
  style?: TextStyle,
}

const Title = (props: Props) => {
  return (
    <Text
      style={[{
        fontSize: 20,
        lineHeight: 26,
        fontFamily: 'NotoSansCJKkr-Bold',
      }, props.style]}
    >
      {props.content}
    </Text>
  )
}

export default Title
