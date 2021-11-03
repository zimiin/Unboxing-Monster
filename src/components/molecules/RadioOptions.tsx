import React from 'react'
import { Text, StyleSheet } from 'react-native'
import SelectItemRadio from './SelectItemRadio'

interface Props {
  optionList?: string[],
  selectedOption: number[],
  storeSelectOption: (selectOption: number[]) => void
}

const RadioOptions = (props: Props) => {
  return (
    <>
      {props.optionList?.map(
        (option, index) => (
          <SelectItemRadio
            key={index}
            checked={props.selectedOption[0] === index ? true : false}
            style={{
              marginVertical: 6,
            }}
            onPress={() => props.storeSelectOption([index])}
          >
            <Text
              style={styles.text}
            >
              {option}
            </Text>
          </SelectItemRadio>
        )
      )}
    </>
  )
}

export default RadioOptions

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NotoSansCJKkr-Regular',
    fontSize: 16,
    lineHeight: 20,
    flexShrink: 1,
  }
})