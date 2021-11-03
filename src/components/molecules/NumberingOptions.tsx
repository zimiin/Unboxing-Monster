import React from 'react'
import { Text, StyleSheet } from 'react-native'
import SelectItemCheckBox from './SelectItemCheckBox'
import SelectItemNumbering from './SelectItemNumbering'

interface Props {
  optionList: string[],
  selectedOptions: number[],
  storeSelectOptions: (options: number[]) => void,
}

const NumberingOptions = (props: Props) => {
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
        (option, index) => {
          const selectedOrder = props.selectedOptions.indexOf(index)

          return (
            <SelectItemNumbering
              key={index}
              checked={selectedOrder !== -1 ? true : false}
              onPress={() => onPress(index)}
              style={{
                marginVertical: 6,
              }}
              number={selectedOrder !== -1 ? selectedOrder + 1 : undefined}
            >
              <Text
                style={styles.text}
              >
                {option}
              </Text>
            </SelectItemNumbering>
          )
        }
      )}
    </>
  )
}

export default NumberingOptions

const styles = StyleSheet.create({
  text: {
    fontFamily: 'NotoSansCJKkr-Regular',
    fontSize: 16,
    lineHeight: 20,
    flexShrink: 1,
  }
})