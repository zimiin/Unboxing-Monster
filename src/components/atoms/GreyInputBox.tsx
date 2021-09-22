import { COLORS } from '@constants/colors'
import { scale } from '@constants/figure'
import React from 'react'
import {
  View,
  StyleSheet,
  ViewStyle,
  TextInput,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native'

interface Props {
  style?: ViewStyle,
  value?: string,
  keyboardType?: KeyboardTypeOptions,
  returnKeyType?: ReturnKeyTypeOptions,
  onChangeText?: (input: string) => void,
  
}

const GreyInputBox = (props: Props) => {
  return (
    <View style={[styles.box, props.style]}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
      />
    </View>
  )
}

export default GreyInputBox

const styles = StyleSheet.create({
  box: {
    backgroundColor: COLORS.grey_box,
    height: scale(32),
    borderRadius: scale(6),
    justifyContent: 'center',
  }
})