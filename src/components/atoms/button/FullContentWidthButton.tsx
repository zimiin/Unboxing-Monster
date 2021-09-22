import { COLORS } from '@constants/colors'
import { scale, verticalScale } from '@constants/figure'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Bold from '@components/atoms/typography/Bold'

interface Props extends TouchableOpacityProps {
  children: string,
  onPress?: () => void,
  fontColor?: string,
}

const FullContentWidthButton = (props: Props) => {
  const { children, onPress, style, fontColor, ...rest } = props

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.button, style]}
      {...rest}
    >
      <Bold style={[
        styles.text,
        fontColor ? { color: fontColor } : styles.defaultFontColor
      ]}>
        {children}
      </Bold>
    </TouchableOpacity>
  )
}

export default FullContentWidthButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.main,
    width: scale(312),
    height: verticalScale(48),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
  defaultFontColor: {
    color: 'white',
  }
})
