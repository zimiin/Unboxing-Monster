import { COLORS } from '@constants/colors'
import { SCREEN_WIDTH } from '@constants/figure'
import React from 'react'
import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native'
import { scale } from 'react-native-size-matters'

interface Props extends TouchableOpacityProps {
  children: string,
  onPress: () => void,
  status: string
}

const TextRadioButton = (props: Props) => {
  const { style, children, onPress, status, ...rest } = props

  return (
    <TouchableOpacity
      {...rest}
      style={[{
        width: SCREEN_WIDTH * 100 / 360,
        height: 40,
        backgroundColor: COLORS.grey_box,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
      },
      status === children ?
      {
        borderWidth: 1,
        borderColor: COLORS.main,
      } : null,
      style
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 13,
          fontFamily: 'NotoSansCJKkr-Medium',
          letterSpacing: -0.32,
          color: COLORS.bold_black,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default TextRadioButton