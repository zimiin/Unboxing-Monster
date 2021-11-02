import { ANSWER_TYPE } from '@components/organisms/PollQuestion'
import PollTemplate, { PollData } from '@components/templates/PollTemplate'
import { PollProps } from '@constants/navigationTypes'
import React from 'react'

const pollData: PollData[] = [
  {
    question: '랜덤박스를 구매해 본 적이 있으신가요? (ex. 의류 랜덤박스, 전자기기 랜덤박스, 게임 랜덤박스 등 온오프라인에서의 모든 랜덤박스)',
    options: ['네! 있어요', '아니요, 없어요'],
    answerType: ANSWER_TYPE.SINGLE_SELECT,
    nextQuestion: [1, 4]
  },
  {
    question: '만족도가 어땠나요?',
    options: ['매우 만족했어요', '만족했어요', '그저 그랬어요', '불만족했어요', '매우 불만족했어요'],
    answerType: ANSWER_TYPE.SINGLE_SELECT,
    nextQuestion: 2
  },
  {
    question: '만족스러운 부분은 어떤 것인가요?',
    answerType: ANSWER_TYPE.SHORT_ANSWER,
    nextQuestion: 3
  },
  {
    question: '불만족스러운 부분은 어떤 것인가요?',
    answerType: ANSWER_TYPE.SHORT_ANSWER,
    nextQuestion: 5
  },
  {
    question: '왜 랜덤박스를 구매하지 않으셨나요?',
    answerType: ANSWER_TYPE.SHORT_ANSWER,
    nextQuestion: 5,
  },
  {
    question: '다음 중 구매하고 싶은 5000원 랜덤박스 구성을 순서대로 골라주세요. (각 상품의 확률은 기댓값이 5000원이 되도록 설정됩니다.)',
    options: ['4900원 ~ 1만원 사이의 상품들로 구성된 박스', '4000원 ~ 2만원 사이의 상품들로 구성된 박스', '1000원 ~ 5만원 사이의 상품들로 구성된 박스', '100만원 가치의 상품 + 4500원 내외의 상품으로 구성된 박스', '100만원 가치의 상품 + 2000원 미만의 상품으로 구성된 박스'],
    answerType: ANSWER_TYPE.MULTIPLE_SELECT,
    nextQuestion: 6,
  },
  {
    question: '블록체인 기술에 대해 알고 계신가요?',
    options: ['전혀 몰라요', '이름만 들어봤어요', "블록체인이 어떤 특성을 가지고 있는지 정도만 알고 있어요 (투명성, 변조불가능성 등)", '어떤 기술인지 대체로 알고 있어요', '매우 잘 알고 있어요'],
    answerType: ANSWER_TYPE.SINGLE_SELECT,
    nextQuestion: 7,
  },
  {
    question: '저희 서비스는 블록체인 기술을 통한 투명하고 공정한 랜덤박스를 제공해요. 알고 계셨나요?',
    options: ['알고있었어요', '몰랐어요'],
    answerType: ANSWER_TYPE.SINGLE_SELECT,
    nextQuestion: 8,
  },
  {
    question: '블록체인 기술의 활용 유무가 랜덤박스 구입에 얼마나 영향을 주나요?',
    options: ['전혀 영향없어요', '거의 영향없어요', '그저그래요', '조금 영향있어요', '매우 영향있어요'],
    answerType: ANSWER_TYPE.SINGLE_SELECT,
    nextQuestion: 9,
  },
  {
    question: '언박싱 몬스터가 정식으로 서비스되면 알림을 받고 싶으신가요? 관심있으시면 이메일을 입력해주세요!',
    answerType: ANSWER_TYPE.SHORT_ANSWER,
    nextQuestion: 9,
  },
]

const submitAnswer = () => {

}

const PollPage = ({route, navigation}: PollProps) => {
  return (
    <PollTemplate
      pollData={pollData}
      endPoll={submitAnswer}
    />
  )
}

export default PollPage
