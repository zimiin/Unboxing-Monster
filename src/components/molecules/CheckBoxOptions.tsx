import React from 'react'
import { Text, StyleSheet } from 'react-native'
import SelectItemCheckBox from './SelectItemCheckBox'

interface Props {
  optionList: string[],
  selectedOptions: number[],
  storeSelectOptions: (options: number[]) => void,
}

const CheckBoxOptions = (props: Props) => {
  const onPress = (index: number) => {
    let newSelectedOptions = []
    let hadIndexInSelectedOptions = false

    for (let option of props.selectedOptions) {
      if (option !== index) {
        newSelectedOptions.push(option)
      } else {
        hadIndexInSelectedOptions = true
      }
    }

    if (hadIndexInSelectedOptions === false) {
      newSelectedOptions.push(index)
    }

    props.storeSelectOptions(newSelectedOptions)
  }

  return (
    <>
      {props.optionList?.map(
        (option, index) => (
          <SelectItemCheckBox
            key={index}
            checked={props.selectedOptions.indexOf(index) !== -1 ? true : false}
            onPress={() => onPress(index)}
            style={{
              marginVertical: 6,
            }}
          >
            <Text
              style={styles.text}
            >
              {option}
            </Text>
          </SelectItemCheckBox>
        )
      )}
    </>
  )
}

export default CheckBoxOptions

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NotoSansCJKkr-Regular',
    fontSize: 16,
    lineHeight: 20,
    flexShrink: 1,
  }
})