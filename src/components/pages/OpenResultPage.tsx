import OpenResultTemplate from '@components/templates/OpenResultTemplate'
import { OpenResultProps } from '@constants/navigationTypes'
import React, { useState } from 'react'
import { useEffect } from 'react'

const OpenResultPage = ({route, navigation}: OpenResultProps) => {
  const [item, setItem] = useState()
  // const result = route.params.result
  const result: number[] = [1, 2, 3]
  // const result: number[] = [1]

  useEffect(() => {
    for (let itemId of result) {
      
    }
  }, [])

  return (
    <OpenResultTemplate 
      onPressGoToStorage={() => console.log('보관함 이동 처리')}
    />
  )
}

export default OpenResultPage
