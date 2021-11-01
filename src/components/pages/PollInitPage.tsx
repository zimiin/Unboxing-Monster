import PollInitTemplate from '@components/templates/PollInitTemplate'
import { PollInitProps } from '@constants/navigationTypes'
import React from 'react'

function PollInitPage({route, navigation}: PollInitProps) {
  return (
    <PollInitTemplate
      onPressStartPoll={() => navigation.navigate('Poll')}
      onPressGoToStorage={() => navigation.replace('Main', {screen: 'Storage'})}
    />
  )
}

export default PollInitPage
