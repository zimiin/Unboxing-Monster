import SelectItemCheckBox from '@components/molecules/SelectItemCheckBox'
import SelectItemRadio from '@components/molecules/SelectItemRadio'
import React from 'react'
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

      <View style={{ marginHorizontal: 25, }}>
        {props.answerType === ANSWER_TYPE.SHORT_ANSWER ?
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
            />
          </View>
          :
          props.answerType === ANSWER_TYPE.MULTIPLE_SELECT ?
            props.options?.map(
              (option, index) => (
                <SelectItemCheckBox
                  key={index}
                  checked={true}
                  style={{
                    marginVertical: 3,
                  }}
                >
                  <Text
                    style={styles.text}
                  >
                    {option}
                  </Text>
                </SelectItemCheckBox>
              )
            )
            :
            props.options?.map(
              (option, index) => (
                <SelectItemRadio
                  key={index}
                  checked={true}
                  style={{
                    marginVertical: 3,
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
    </View>
  )
}

export default PollQuestion

const styles = StyleSheet.create({
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  }
})