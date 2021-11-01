import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

interface Props {
  onPressStartPoll: () => void,
  onPressGoToStorage: () => void,
}

function PollInitTemplate(props: Props) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={props.onPressStartPoll}
      >
        <Text>Start Poll!!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={props.onPressGoToStorage}
      >
        <Text>Just go to storage.</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default PollInitTemplate
