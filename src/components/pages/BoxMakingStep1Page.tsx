import BoxMakingStep1Template from '@components/templates/BoxMakingStep1Template'
import { BoxMakingStep1Props } from '@constants/navigationTypes'
import { CustomBoxContext } from '@src/stores/CustomBoxContext'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'

const BoxMakingStep1Page = ({ route, navigation }: BoxMakingStep1Props) => {
  const [{ items }, { addItems }] = useContext(CustomBoxContext)
  const boxPrices: number[] = [5000, 10000, 20000, 50000]
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setError('한 개는 반드시 선택해야 합니다')
  }, [])
  
  return (
    <BoxMakingStep1Template
      hasPreviousScreen={true}
      screenTitle='커스텀 박스 만들기'
      error={error}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={() => navigation.navigate('BoxMakingStep2')}
    />
  )
}

export default BoxMakingStep1Page