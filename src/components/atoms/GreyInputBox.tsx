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
  TextStyle,
} from 'react-native'

interface Props {
  style?: ViewStyle,
  value?: string,
  keyboardType?: KeyboardTypeOptions,
  returnKeyType?: ReturnKeyTypeOptions,
  placeHolder?: string,
  textInputStyle?: TextStyle,
  onChangeText?: (input: string) => void,
  onSubmitEditing?: () => void,
}

const GreyInputBox = (props: Props) => {
  return (
    <View style={[styles.box, props.style]}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        placeholder={props.placeHolder}
        style={props.textInputStyle}
        onSubmitEditing={props.onSubmitEditing}
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