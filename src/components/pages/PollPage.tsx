import PollTemplate from '@components/templates/PollTemplate'
import { PollProps } from '@constants/navigationTypes'
import React from 'react'

const PollPage = ({route, navigation}: PollProps) => {
  return (
    <PollTemplate
      hahah={() => navigation.replace('Main')}
    />
  )
}

export default PollPage
