import React from 'react'
import {
  View,
  StyleSheet,
  ViewProps,
} from 'react-native'
import InputField from '@components/atoms/InputField'
import InputLabel from '@components/atoms/InputLabel'
import { KeyboardType } from 'react-native'

interface Props extends ViewProps {
  input: string,
  onChangeText: (input: string) => void,
  keyboardType?: KeyboardType,
  placeholder?: string,
  error?: string,
  onSubmitEditing?: () => void,
}

const InputBox = (props: Props) => {
  const { input, onChangeText, keyboardType, placeholder, error, onSubmitEditing, style, ...rest } = props

  return (
    <View 
      style={[style]}
      {...rest}
    >
      <InputLabel>{input !== '' ? placeholder : undefined}</InputLabel>
      <InputField
        keyboardType={keyboardType}
        returnKeyType='done'
        placeholder={placeholder}
        input={input}
        onChangeText={onChangeText}
        error={error}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({

})
