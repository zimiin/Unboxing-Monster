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
  mandatory?: boolean,
}

interface Props {
  pollData: PollData[],
  endPoll: () => void,
  answers: (number[] | string)[],
  storeAnswer: (questionIndex: number, answer: number[] | string) => void,
}

function PollTemplate(props: Props) {
  const [prevQuestions, setPrevQuestions] = useState<Array<number>>([])
  const [curQuestion, setCurQuestion] = useState(0)
  const [error, setError] = useState<string>('')

  const isAnswered = () => {
    const answer = props.answers[curQuestion]

    if (props.pollData[curQuestion].answerType === ANSWER_TYPE.NUMBERING && answer?.length !== props.pollData[curQuestion].options?.length) {
      return false
    }

    if (answer === undefined || (typeof answer === 'string' && answer === '') || (Array.isArray(answer) && answer === [])) {
      return false
    } else {
      return true
    }
  }

  const moveToNextQuestion = () => {
    if (props.pollData[curQuestion].mandatory !== false && isAnswered() === false) {
      setError('답변을 입력해주세요.')
      return
    }

    setError('')

    let newPrevQuestions = prevQuestions.slice()
    newPrevQuestions.push(curQuestion)
    setPrevQuestions(newPrevQuestions)

    setCurQuestion(curQuestion + 1)
  }

  const moveToPrevQuestion = () => {
    setError('')

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
          answers={props.answers}
          storeAnswer={props.storeAnswer}
          questionIndex={curQuestion}
          question={props.pollData[curQuestion].question}
          answerType={props.pollData[curQuestion].answerType}
          options={props.pollData[curQuestion].options}
        />

        <View
          style={{
            marginTop: 35,
          }}
        >
          {error ?
            <Text
              style={{
                color: COLORS.error,
                fontSize: 12,
                fontFamily: 'NotoSansCJKkr-Regular',
                lineHeight: 15,
                alignSelf: 'center',
                marginBottom: 10,
              }}
            >
              {error}
            </Text>
            : undefined}

          <View style={{ flexDirection: 'row' }}>
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
      </View>

      <SafeAreaView />
    </View>
  )
}

export default PollTemplate
