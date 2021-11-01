import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

interface Props {
  hahah: () => void,
}

function PollTemplate(props: Props) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={props.hahah}
      >
        <Text>Touch me!!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default PollTemplate
