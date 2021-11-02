import PollQuestion, { ANSWER_TYPE } from '@components/organisms/PollQuestion';
import React, { useState, useMemo } from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';

interface Props {
  hahah: () => void,
}

function PollTemplate(props: Props) {
  const [focus, setFocus] = useState<number>(0)
  
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <PollQuestion
        question={'대답해 보세요'}
        answerType={ANSWER_TYPE.SINGLE_SELECT}
        options={['초콜릿', '초콜릿', '초콜릿']}
      />
    </SafeAreaView>
  )
}

export default PollTemplate
