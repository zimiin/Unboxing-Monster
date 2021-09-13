import React, { useState, useEffect, useContext, useMemo } from 'react'
import { BoxMakingStep2Props } from '@constants/navigationTypes'
import BoxMakingStep3Template from '@components/templates/BoxMakingStep3Template'
import { CustomBoxContext } from '@src/stores/CustomBoxContext'
import { generateProbability } from '@src/utils/probabilites'

const BoxMakingStep3Page = ({ route, navigation }: BoxMakingStep2Props) => {
  const [{boxImage, boxPrice, boxName, selectedItems}, {}] = useContext(CustomBoxContext)

  const itemPrices: number[] = useMemo(() => {
    return selectedItems.map(
      item => item.price
    )
  }, [selectedItems])

  const probabilites: number[] = useMemo(() => {
    return generateProbability(itemPrices, boxPrice, 0.5)
  }, [itemPrices, boxPrice])
  
  return (
    <BoxMakingStep3Template
      screenTitle={'커스텀 박스 만들기'}
      hasPreviousScreen={true}
      boxImage={{uri: boxImage}}
      boxPrice={boxPrice}
      boxName={boxName}
      probs={probabilites}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={() => {}}
    />
  )
}

export default BoxMakingStep3Page
