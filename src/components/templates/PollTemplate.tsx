import Header from '@components/organisms/header/Header';
import PollQuestion, { AnswerTypeValue, ANSWER_TYPE } from '@components/organisms/PollQuestion';
import CustomBoxProgressBar from '@components/atoms/CustomBoxProgressBar'
import { scale } from '@constants/figure';
import React, { useState, useMemo } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import FullWidthButton from '@components/atoms/button/FullWidthButton';
import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton';
import HalfWidthButton from '@components/atoms/button/HalfWidthButton';
import { COLORS } from '@constants/colors';

export type PollData = {
  question: string,
  answerType: AnswerTypeValue,
  options?: string[],
  nextQuestion: number | number[],
}

interface Props {
  pollData: PollData[],
  endPoll: () => void,
}

function PollTemplate(props: Props) {
  const [prevQuestions, setPrevQuestions] = useState<Array<number>>([])
  const [curQuestion, setCurQuestion] = useState(0)

  const moveToNextQuestion = () => {
    let newPrevQuestions = prevQuestions.slice()
    newPrevQuestions.push(curQuestion)

    setPrevQuestions(newPrevQuestions)
    setCurQuestion(curQuestion + 1)
  }

  const moveToPrevQuestion = () => {
    let newPrevQuestions = prevQuestions.slice()
    
    if (newPrevQuestions.length > 0) {
      const prev = newPrevQuestions.pop()

      if (prev !== undefined) {
        setCurQuestion(prev)
        setPrevQuestions(newPrevQuestions)
      }
    }
  }

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
          questionIndex={curQuestion}
          question={props.pollData[curQuestion].question}
          answerType={props.pollData[curQuestion].answerType}
          options={props.pollData[curQuestion].options}
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: 35,
          }}
        >
          {curQuestion + 1 < props.pollData.length ?
            <>
              {curQuestion === 0 ?
                undefined
                :
                <HalfWidthButton
                  buttonStyle={{
                    backgroundColor: COLORS.grey_box,
                    marginRight: scale(12),
                  }}
                  textStyle={{
                    color: 'black',
                  }}
                  onPress={moveToPrevQuestion}
                  text='이전으로'
                />
              }

              <HalfWidthButton
                buttonStyle={{
                  position: 'absolute',
                  right: 0,
                }}
                text='다음으로'
                onPress={moveToNextQuestion}
              />
            </>
            :
            <FullContentWidthButton
              onPress={props.endPoll}
            >
              응답완료하고 포인트받기
            </FullContentWidthButton>
          }
        </View>
      </View>

      <SafeAreaView />
    </View>
  )
}

export default PollTemplate
