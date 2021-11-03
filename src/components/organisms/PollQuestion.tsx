import ShortAnswerField from '@components/atoms/ShortAnswerField'
import CheckBoxOptions from '@components/molecules/CheckBoxOptions'
import NumberingOptions from '@components/molecules/NumberingOptions'
import RadioOptions from '@components/molecules/RadioOptions'
import SelectItemRadio from '@components/molecules/SelectItemRadio'
import React, { useState } from 'react'
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export type AnswerTypeValue = number

type AnswerType = {
  SINGLE_SELECT: number,
  MULTIPLE_SELECT: number,
  SHORT_ANSWER: number,
  NUMBERING: number,
}

export const ANSWER_TYPE: AnswerType = {
  SINGLE_SELECT: 0,
  MULTIPLE_SELECT: 1,
  SHORT_ANSWER: 2,
  NUMBERING: 3,
}

interface Props {
  answers: (number[] | string)[],
  storeAnswer: (questionIndex: number, answer: number[] | string) => void,
  questionIndex: number,
  question: string,
  answerType: AnswerTypeValue,
  options?: string[],
}

const PollQuestion = (props: Props) => {
  return (
    <View>
      <View
        style={styles.questionContainer}
      >
        <Text
          style={styles.Q}
        >
          {'Q  '}
        </Text>

        <Text
          style={styles.text}
        >
          {props.question}
        </Text>
      </View>

      {props.answerType === ANSWER_TYPE.SHORT_ANSWER ?
        <ShortAnswerField
          value={props.answers[props.questionIndex] as string || ''}
          onChangeText={(input: string) => props.storeAnswer(props.questionIndex, input)}
        />
        :
        props.answerType === ANSWER_TYPE.MULTIPLE_SELECT ?
          <CheckBoxOptions
            optionList={props.options || []}
            selectedOptions={props.answers[props.questionIndex] as number[] || []}
            storeSelectOptions={(selected: number[]) => props.storeAnswer(props.questionIndex, selected)}
          />
          :
          props.answerType === ANSWER_TYPE.SINGLE_SELECT ?
            <RadioOptions
              optionList={props.options || []}
              selectedOption={props.answers[props.questionIndex] as number[] || []}
              storeSelectOption={(selected: number[]) => props.storeAnswer(props.questionIndex, selected)}
            />
            :
            <NumberingOptions
              optionList={props.options || []}
              selectedOptions={props.answers[props.questionIndex] as number[] || []}
              storeSelectOptions={(selected: number[]) => props.storeAnswer(props.questionIndex, selected)}
            />
      }
      </View>
  )
}

export default PollQuestion

const styles = StyleSheet.create({
  questionContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  Q: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: 'NotoSansCJKkr-Bold',
    color: '#29a3ff'
  },
  text: {
    fontFamily: 'NotoSansCJKkr-Regular',
    fontSize: 16,
    lineHeight: 20,
    flexShrink: 1,
  }
})