import { verticalScale } from '@constants/figure'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { scale } from 'react-native-size-matters'

interface Props extends TouchableOpacityProps {
  onPress: () => void,
  children: string
}

const GreyButton = (props: Props) => {
  const { onPress, children, style, ...rest } = props
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default GreyButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef1f2',
    width: scale(312),
    height: verticalScale(48),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})