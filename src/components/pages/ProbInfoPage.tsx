import React, { useState } from 'react'
import { ProbInfoProps } from '@constants/navigationTypes'
import ProbInfoTemplate from '@components/templates/ProbInfoTemplate'
import { generateProbability } from '@src/utils/probabilites'

const ProbInfoPage = ({route, navigation}: ProbInfoProps) => {
  const items = route.params.items.sort((a, b) => (a.price < b.price ? 1 : -1));
  const reverseSortedPrice = items.map((item) => item.price)
  const probabilities : number[] = generateProbability(reverseSortedPrice, route.params.boxPrice) 

  return (
    <>
      <ProbInfoTemplate
        boxId={route.params.boxId}
        navigation={navigation}
        items={items}
        probs={probabilities}
      />
    </>
  )
}

export default ProbInfoPage