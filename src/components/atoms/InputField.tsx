import { COLORS } from '@constants/colors'
import React from 'react'
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
  TextStyle,
} from 'react-native'

interface Props extends TextInputProps {
  style?: TextStyle,
  input?: string,
  onChangeText?: (input: string) => void,
  error?: string,
}

const InputField = (props: Props) => {
  const { style, input, onChangeText, error, ...rest } = props

  const borderBottomColor = () => {
    if (error !== undefined && error !== '') {
      return styles.errorBorder
    }
    if (input !== undefined && input !== '') {
      return styles.mainColorBorder
    }
    return styles.greyBorder
  }

  return (
    <>
      <TextInput
        placeholderTextColor='rgba(6, 6, 6, 0.3)'
        onChangeText={onChangeText}
        style={[
          styles.input,
          borderBottomColor(),
          style
        ]}
        {...rest}
      />

      <Text style={styles.error}>
        {error}
      </Text>
    </>
  )
}

export default InputField

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    fontSize: 17,
  },
  mainColorBorder: { 
    borderBottomColor: COLORS.main 
  },
  greyBorder: { 
    borderBottomColor: '#f8f8f8' 
  },
  errorBorder: {
    borderBottomColor: '#ec4f47'
  },
  error: {
    color: 'rgba(236, 79, 71, 0.7)',
    height: 17,
    marginTop: 4,
    fontSize: 11,
  }
})
