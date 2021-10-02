import React from 'react'
import { TextStyle } from 'react-native'
import {
  Text,
} from 'react-native'

interface Props {
  content: string, 
  style?: TextStyle
}

const SubTitle = (props: Props) => {
  return (
    <Text
      style={[{
        fontSize: 15,
        fontWeight: 'bold',
        letterSpacing: -0.37,
        fontFamily: 'NotoSansCJKkr-Bold',
      },
      props.style
    ]}
    >
      {props.content}
    </Text>
  )
}

export default SubTitle