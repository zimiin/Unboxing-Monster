import BoxMakingStep1Template from '@components/templates/BoxMakingStep1Template'
import { BoxMakingStep1Props } from '@constants/navigationTypes'
import { CustomBoxContext } from '@src/stores/CustomBoxContext'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'

const BoxMakingStep1Page = ({ route, navigation }: BoxMakingStep1Props) => {
  const [{ boxPrice }, { setBoxPrice }] = useContext(CustomBoxContext)

  return (
    <BoxMakingStep1Template
      hasPreviousScreen={true}
      screenTitle='커스텀 박스 만들기'
      onPressGoBack={() => navigation.goBack()}
      onPressNext={() => navigation.navigate('BoxMakingStep2')}
      boxPrice={boxPrice}
    />
  )
}

export default BoxMakingStep1Page