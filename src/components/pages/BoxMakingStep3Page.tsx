import React, { useState, useEffect, useContext } from 'react'
import { BoxMakingStep2Props } from '@constants/navigationTypes'
import BoxMakingStep3Template from '@components/templates/BoxMakingStep3Template'
import { CustomBoxContext } from '@src/stores/CustomBoxContext'

const BoxMakingStep3Page = ({ route, navigation }: BoxMakingStep2Props) => {
  const [{boxImage, boxPrice, boxName}, {}] = useContext(CustomBoxContext)

  return (
    <BoxMakingStep3Template
      screenTitle={'커스텀 박스 만들기'}
      hasPreviousScreen={true}
      boxImage={{uri: boxImage}}
      boxPrice={boxPrice}
      boxName={boxName}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={() => {}}
    />
  )
}

export default BoxMakingStep3Page
