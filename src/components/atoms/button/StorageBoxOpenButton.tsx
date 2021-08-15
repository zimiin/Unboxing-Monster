import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
import {
  TouchableOpacity,
} from 'react-native'
import { scale } from 'react-native-size-matters'
import Bold from '../typography/Bold'

interface Props {
  onPress: () => void,
  buttonStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  children: string,
}

const StorageBoxOpenButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.buttonStyle]}
      onPress={props.onPress}
    >
      <Bold style={[styles.text, props.textStyle]}>
        {props.children}
      </Bold>
    </TouchableOpacity>
  )
}

export default StorageBoxOpenButton

const styles = StyleSheet.create({
  button: {
    width: scale(94),
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  text: {
    fontSize: 13,
  }
})