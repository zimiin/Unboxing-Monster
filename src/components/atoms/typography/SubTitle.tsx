import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import {
  Text,
} from 'react-native'

interface Props {
  content: string, 
  style?: StyleProp<TextStyle>
}

const SubTitle = (props: Props) => {
  return (
    <Text
      style={[{
        fontSize: 15,
        fontWeight: 'bold',
      },
      props.style
    ]}
    >
      {props.content}
    </Text>
  )
}

export default SubTitle