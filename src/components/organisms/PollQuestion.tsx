import ShortAnswerField from '@components/atoms/ShortAnswerField'
import CheckBoxOptions from '@components/molecules/CheckBoxOptions'
import SelectItemCheckBox from '@components/molecules/SelectItemCheckBox'
import SelectItemRadio from '@components/molecules/SelectItemRadio'
import React, { useState } from 'react'
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export type AnswerTypeValue = number

type AnswerType = {
  SINGLE_SELECT: number,
  MULTIPLE_SELECT: number,
  SHORT_ANSWER: number,
}

export const ANSWER_TYPE: AnswerType = {
  SINGLE_SELECT: 0,
  MULTIPLE_SELECT: 1,
  SHORT_ANSWER: 2,
}

interface Props {
  questionIndex: number,
  question: string,
  answerType: AnswerTypeValue,
  options?: string[],
}

const PollQuestion = (props: Props) => {
  const [answers, setAnswers] = useState<(number[] | string)[]>([])

  const storeAnswer = (answer: string | number[]) => {
    let newAnswers = answers.slice()
    newAnswers[props.questionIndex] = answer
    setAnswers(newAnswers)
  }

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
          value={answers[props.questionIndex] as string || ''}
          onChangeText={storeAnswer}
        />
        :
        props.answerType === ANSWER_TYPE.MULTIPLE_SELECT ?
          <CheckBoxOptions
            optionList={props.options || []}
            selectedOptions={answers[props.questionIndex] as number[] || []}
            storeSelectOptions={storeAnswer}
          />
          :
          props.options?.map(
            (option, index) => (
              <SelectItemRadio
                key={index}
                checked={true}
                style={{
                  marginVertical: 6,
                }}
              >
                <Text
                  style={styles.text}
                >
                  {option}
                </Text>
              </SelectItemRadio>
            )
          )
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