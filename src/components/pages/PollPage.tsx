import { PollProps } from '@constants/navigationTypes'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

const PollPage = ({route, navigation}: PollProps) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
      >
        <Text>Touch me!!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default PollPage
