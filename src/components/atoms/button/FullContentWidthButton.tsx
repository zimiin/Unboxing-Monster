import { COLORS } from '@constants/colors'
import { DESIGN_HEIGHT, DESIGN_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants/figure'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Bold from '../typography/Bold'

interface Props extends TouchableOpacityProps {
  children: string,
  onPress: () => void,
}

const FullContentWidthButton = (props: Props) => {
  const { children, onPress, style, ...rest } = props

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.button, style]}
      {...rest}
    >
      <Bold style={styles.text}>{children}</Bold>
    </TouchableOpacity>
  )
}

export default FullContentWidthButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.main,
    width: 312 / DESIGN_WIDTH * SCREEN_WIDTH,
    height: 48 / DESIGN_HEIGHT * SCREEN_HEIGHT,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'white',
  }
})
