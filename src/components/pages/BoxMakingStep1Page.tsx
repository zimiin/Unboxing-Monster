import BoxMakingStep1Template from '@components/templates/BoxMakingStep1Template'
import { BoxMakingStep1Props } from '@constants/navigationTypes'
import { CustomBoxContext } from '@src/stores/CustomBoxContext'
import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { Item } from '@constants/types'
import { URLS } from '@constants/urls'

const BoxMakingStep1Page = ({ route, navigation }: BoxMakingStep1Props) => {
  const [{ selectedItems }, { addSelectedItems }] = useContext(CustomBoxContext)
  const [itemData, setItemData] = useState<Item[]>([])
  const [selectedItem, setSelectedItem] = useState<number>()
  const [error, setError] = useState<string>('')
  // itemData에는 아이템 데이터만 갖고있고, 선택 정보는 selectedItem활용

  useEffect(() => {
    const setItemDataState = async () => {
      try {
        const response = await fetch(URLS.unboxing_api + 'item')

      } catch (error) {
        console.log('Error in setItemDataState', error)
      }
    }

    setItemDataState()
  }, [])

  // next 눌렀을 때 처리 함수
  // 선택된거 없으면 에러
  
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