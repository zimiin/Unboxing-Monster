import Header from '@components/organisms/header/Header';
import PollQuestion, { AnswerTypeValue, ANSWER_TYPE } from '@components/organisms/PollQuestion';
import CustomBoxProgressBar from '@components/atoms/CustomBoxProgressBar'
import { scale } from '@constants/figure';
import React, { useState, useMemo } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

export type PollData = {
  question: string,
  answerType: AnswerTypeValue,
  options?: string[],
  nextQuestion: number | number[],
}

interface Props {
  pollData: PollData[],
}

function PollTemplate(props: Props) {
  const [prevQuestion, setPrevQuestion] = useState(0)
  const [curQuestion, setCurQuestion] = useState(5)

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <Header
        canGoBack={false}
        title={'설문응답'}
      />

      <CustomBoxProgressBar
        progress={(curQuestion + 1) / props.pollData.length}
        style={{alignSelf: 'center'}}
      />

      <View
        style={{
          marginTop: 20,
          marginHorizontal: scale(24),
        }}
      >
        <PollQuestion
          question={props.pollData[curQuestion].question}
          answerType={props.pollData[curQuestion].answerType}
          options={props.pollData[curQuestion].options}
        />
      </View>

      <SafeAreaView />
    </View>
  )
}

export default PollTemplate
