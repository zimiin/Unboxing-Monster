import React, { useState, useEffect } from 'react'
import { BoxMakingStep2Props } from '@constants/navigationTypes'
import BoxMakingStep3Template from '@components/templates/BoxMakingStep3Template'

const BoxMakingStep3Page = ({ route, navigation }: BoxMakingStep2Props) => {
  return (
    <BoxMakingStep3Template
      screenTitle={'커스텀 박스 만들기'}
      hasPreviousScreen={true}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={() => {}}
    />
  )
}

export default BoxMakingStep3Page
