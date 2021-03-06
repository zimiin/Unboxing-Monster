import Header from '@components/organisms/header/Header';
import PollQuestion, { AnswerTypeValue, ANSWER_TYPE } from '@components/organisms/PollQuestion';
import CustomBoxProgressBar from '@components/atoms/CustomBoxProgressBar'
import { scale } from '@constants/figure';
import React, { useState, useMemo } from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import FullWidthButton from '@components/atoms/button/FullWidthButton';
import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton';
import HalfWidthButton from '@components/atoms/button/HalfWidthButton';
import { COLORS } from '@constants/colors';
import Loading from '@components/atoms/Loading';
import { ResultCodeValue, RESULT_CODE } from '@components/pages/PollPage';
import ConfirmModal from '@components/molecules/ConfirmModal';
import NoticeModal from '@components/molecules/NoticeModal';
import RegularText from '@components/atoms/typography/RegularText';
import NoticeIcon from '@components/atoms/icon/NoticeIcon';

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
  isLoading: boolean,
  showModal: boolean,
  submitResult?: ResultCodeValue,
  onRequestCloseModal: () => void,
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
      setError('????????? ??????????????????.')
      return
    }

    setError('')

    let newPrevQuestions = prevQuestions.slice()
    newPrevQuestions.push(curQuestion)
    setPrevQuestions(newPrevQuestions)

    const nextQuestionIdx = props.pollData[curQuestion].nextQuestion
    if (Array.isArray(nextQuestionIdx)) {
      const selectedOption = props.answers[curQuestion] as number[]
      setCurQuestion(nextQuestionIdx[selectedOption[0]])
    } else {
      setCurQuestion(nextQuestionIdx)
    }
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
        title={'????????????'}
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
                text='????????????'
              />
            }

            {curQuestion + 1 === props.pollData.length ?
              undefined :
              <HalfWidthButton
                buttonStyle={{
                  position: 'absolute',
                  right: 0,
                }}
                text='????????????'
                onPress={moveToNextQuestion}
              />
            }
          </View>
        </View>
      </View>

      {curQuestion + 1 === props.pollData.length ?
        <FullContentWidthButton
          onPress={props.endPoll}
          style={{ position: 'absolute', bottom: 30, alignSelf: 'center' }}
        >
          ?????????????????? ???????????????
        </FullContentWidthButton>
        : undefined
      }

      <SafeAreaView />

      {props.isLoading === true ? <Loading /> : undefined}

      <NoticeModal
        visible={props.showModal}
        onRequestClose={props.onRequestCloseModal}
      >
        <View
          style={styles.modalContent}
        >
          {props.submitResult === RESULT_CODE.SUCCESS ?
            <>
              <RegularText
                style={styles.modalText}
              >
                ?????? ?????? ??????!
              </RegularText>

              <RegularText
                style={styles.modalText}
              >
                3000???????????? ??????????????????.
              </RegularText>
            </>
            : props.submitResult === RESULT_CODE.END_EVENT ?
              <>
                <RegularText
                  style={styles.modalText}
                >
                  ???????????? ??????????????????.
                </RegularText>

                <RegularText
                  style={styles.modalText}
                >
                  ??? ?????? ?????? ??????????????? ?????? ????????????.
                </RegularText>
              </>
              : props.submitResult === RESULT_CODE.DUPLICATED ?
                <>
                  <RegularText
                    style={styles.modalText}
                  >
                    ?????? ???????????? ??????????????????.
                  </RegularText>
                </>
                : 
                <>
                  <NoticeIcon />

                  <RegularText
                    style={styles.modalText}
                  >
                    {props.submitResult === RESULT_CODE.UNAUTHORIZED ?
                      '????????? ????????? ??????????????????.'
                      :
                      '????????? ????????? ??????????????????.'
                    }
                  </RegularText>
                </>
          }
        </View>
      </NoticeModal>
    </View>
  )
}

export default PollTemplate

const styles = StyleSheet.create({
  modalContent: {
    marginVertical: 20,
    alignItems: 'center'
  },
  modalText: {
    fontSize: 14,
    lineHeight: 20,
  }
})
