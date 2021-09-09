import BoxMakingStep1Template from '@components/templates/BoxMakingStep1Template'
import { BoxMakingStep1Props } from '@constants/navigationTypes'
import { CustomBoxContext, CustomBoxItem } from '@src/stores/CustomBoxContext'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useContext } from 'react'
import { Item } from '@constants/types'
import { URLS } from '@constants/urls'
import { ItemRadioButtonProps } from '@components/molecules/ItemRadioButton'

const BoxMakingStep1Page = ({ route, navigation }: BoxMakingStep1Props) => {
  const [{ selectedItems }, { addSelectedItems, clearSelectedItems }] = useContext(CustomBoxContext)
  const [itemRadioButtonData, setItemRadioButtonData] = useState<ItemRadioButtonProps[]>([])
  const [itemList, setItemList] = useState<Item[]>()
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const getItemData = async () => {
      try {
        const response = await fetch(URLS.unboxing_api + 'item')
        
        if (response.status !== 200) {
          const json = await response.json()
          throw 'status: ' + response.status + ', message: ' + json.message + ', url: ' + response.url
        }

        const json: Item[] = await response.json()

        return json
      } catch (error) {
        console.log('Error in setItemDataState', error)
        throw error
      }
    }

    getItemData().then(result => {
      setItemList(result)      
    })
  }, [])

  useEffect(() => {
    const data = itemList?.map(
      (item) => {
        return {
          id: item.id,
          image: { uri: item.image },
          name: item.title,
          price: item.price,
          checked: false,
        }
      } 
    )

    setItemRadioButtonData(data || [])
  }, [itemList])

  const onPressItemRadioButton = useCallback((id: number) => {
    if (itemRadioButtonData === undefined) {
      console.log('undefined itemRadiobuttondata')
      return
    } 

    setError('')

    let newData = itemRadioButtonData.slice()
    const index = newData.findIndex(elem => elem.id === id)

    const curCheckedValue = newData[index].checked
    newData[index].checked = !curCheckedValue

    setItemRadioButtonData(newData)
  }, [itemRadioButtonData])

  const onPressNext = () => {
    clearSelectedItems()
    
    let items: CustomBoxItem[] = []
    const length = itemRadioButtonData.length

    for (let i = 0; i < length; i++) {
      const data = itemRadioButtonData[i]
      
      if (data.checked === true) {
        items.push({
          id: data.id,
          name: data.name,
          image: data.image,
          price: data.price,
        })
      }
    }

    if (items.length === 0) {
      setError('하나 이상의 상품을 선택해주세요.')
      return
    }

    addSelectedItems(items)

    navigation.navigate('BoxMakingStep2')
  }
  
  return (
    <BoxMakingStep1Template
      hasPreviousScreen={true}
      screenTitle='커스텀 박스 만들기'
      itemRadioButtonData={itemRadioButtonData}
      error={error}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={onPressNext}
      onPressItemRadioButton={onPressItemRadioButton}
    />
  )
}

export default BoxMakingStep1Page