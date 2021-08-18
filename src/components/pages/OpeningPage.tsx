import OpeningTemplate from '@components/templates/OpeningTemplate'
import { OpeningProps } from '@constants/navigationTypes'
import React from 'react'

const OpeningPage = ({route, navigation}: OpeningProps) => {
  console.log(route.params.result)
  return (
    <OpeningTemplate 
      onAnimationEnd={() => navigation.push('OpenResult', { result: route.params.result })}
    />
  )
}

export default OpeningPage
