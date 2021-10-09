import { COLORS } from '@constants/colors'
import React from 'react'
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
  TextStyle,
  View,
  Platform,
} from 'react-native'
import MediumText from '@components/atoms/typography/MediumText'

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
      <View
        style={[
          styles.field,
          borderBottomColor()
        ]}
      >
        <TextInput
          placeholderTextColor='rgba(6, 6, 6, 0.3)'
          onChangeText={onChangeText}
          value={input}
          style={[
            styles.input,
            style,
            {top: Platform.OS === 'android' ? -9 : 0}
          ]}
          {...rest}
        />
      </View>

      <MediumText style={styles.error}>
        {error}
      </MediumText>
    </>
  )
}

export default InputField

const styles = StyleSheet.create({
  field: {
    width: '100%',
    height: 49,
    borderBottomWidth: 2,
  },
  input: {
    position: 'absolute',
    zIndex: 1,
    letterSpacing: -0.47,
    fontSize: 17,
    color: 'black',
    marginTop: 11,
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
    letterSpacing: -0.28,
  }
})
