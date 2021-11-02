import React, { useState } from 'react'
import { View, TextInput, Platform } from 'react-native'

interface Props {
  value?: string,
  onChangeText?: (input: string) => void,
}

const ShortAnswerField = (props: Props) => {
  return (
    <View
      style={{
        borderBottomColor: '#b5b5b5',
        borderBottomWidth: 1,
        height: 40,
        width: '100%',
      }}
    >
      <TextInput
        placeholder='답변을 입력해주세요.'
        style={{
          position: 'absolute',
          bottom: Platform.OS === 'ios' ? 10 : -5
        }}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  )
}

export default ShortAnswerField