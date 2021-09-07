import BoxMakingStep1Template from '@components/templates/BoxMakingStep1Template'
import { BoxMakingStep1Props } from '@constants/navigationTypes'
import { CustomBoxContext } from '@src/stores/CustomBoxContext'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useContext } from 'react'
import { Item } from '@constants/types'
import { URLS } from '@constants/urls'
import { ItemRadioButtonProps } from '@components/molecules/ItemRadioButton'

const BoxMakingStep1Page = ({ route, navigation }: BoxMakingStep1Props) => {
  const [{ selectedItems }, { addSelectedItems }] = useContext(CustomBoxContext)
  const [itemData, setItemData] = useState<Item[]>([])
  const [selectedItem, setSelectedItem] = useState<number>()
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const setItemDataState = async () => {
      try {
        const response = await fetch(URLS.unboxing_api + 'item')
        const json = await response.json()

        if (response.status !== 200) {
          throw 'status: ' + response.status + ', message: ' + json.message + ', url: ' + response.url
        }

        setItemData(json)
      } catch (error) {
        console.log('Error in setItemDataState', error)
      }
    }

    setItemDataState()
  }, [])

  const itemRadioButtonData: ItemRadioButtonProps[] = useMemo(() => {
    if (itemData === undefined) {
      return []
    }

    const newData: ItemRadioButtonProps[] = itemData.map(
      (item) => {
        return {
          id: item.id,
          image: { uri: item.image },
          name: item.title,
          price: item.price,
          checked: selectedItem === item.id ? true : false,
          onPress: () => setSelectedItem(item.id),
        }
      }
    )

    return newData
  }, [itemData, selectedItem])

  // next 눌렀을 때 처리 함수
  // 선택된거 없으면 에러
  
  return (
    <BoxMakingStep1Template
      hasPreviousScreen={true}
      screenTitle='커스텀 박스 만들기'
      itemRadioButtonData={itemRadioButtonData}
      error={error}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={() => navigation.navigate('BoxMakingStep2')}
    />
  )
}

export default BoxMakingStep1Page