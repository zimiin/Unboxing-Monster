import BoxMakingStep1Template, { RenderItem } from '@components/templates/BoxMakingStep1Template'
import { BoxMakingStep1Props } from '@constants/navigationTypes'
import { CustomBoxContext, CustomBoxItem } from '@src/stores/CustomBoxContext'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useContext } from 'react'
import { Item } from '@constants/types'
import { URLS } from '@constants/urls'
import { debounce } from 'lodash'
import { log } from '@src/utils/debug'

const BoxMakingStep1Page = ({ route, navigation }: BoxMakingStep1Props) => {
  const [{ selectedItems }, { replaceSelectedItems }] = useContext(CustomBoxContext)
  const [ascendingParsedItemData, setAscendingParsedItemData] = useState<RenderItem[]>([])
  const [descendingParsedItemData, setDescendingParsedItemData] = useState<RenderItem[]>([])
  const [rawItemData, setRawItemData] = useState<Item[]>()
  const [error, setError] = useState<string>('')
  const [searchInput, setSearchInput] = useState<string>('')
  const sortOptions = ['낮은가격순', '높은가격순']
  const [sorted, setSorted] = useState<string>(sortOptions[0])
  const [showModal, setShowModal] = useState<boolean>(false)

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
      setRawItemData(result)
    })
  }, [])

  useEffect(() => {
    if (rawItemData === undefined) {
      return
    }

    const data: RenderItem[] = rawItemData.map(
      (item) => {
        return {
          itemData: {
            id: item.id,
            image: { uri: item.image },
            name: item.title,
            price: item.price,
            checked: false,
          },
          filtered: true,
          searched: true,
        }
      } 
    )

    const ascendingData = data.sort((a, b) => a.itemData.price - b.itemData.price)
    const descendingData = ascendingData.slice().reverse()

    setAscendingParsedItemData(ascendingData)
    setDescendingParsedItemData(descendingData)
  }, [rawItemData])

  const modifyItemData = useCallback((data: { index: number, item: RenderItem }[]) => {
    let newAscendingData = ascendingParsedItemData.slice()
    let newDescendingData = descendingParsedItemData.slice()

    for (var i = 0; i < data.length; i++) {
      const index = data[i].index
      const reverseIndex = ascendingParsedItemData.length - data[i].index - 1
      
      newAscendingData[index] = data[i].item
      newDescendingData[reverseIndex] = data[i].item
    }
      
    setAscendingParsedItemData(newAscendingData)
    setDescendingParsedItemData(newDescendingData)
  }, [ascendingParsedItemData, descendingParsedItemData])

  const onPressItemRadioButton = useCallback((id: number) => {
    if (ascendingParsedItemData === undefined) {
      console.log('undefined itemRadiobuttondata')
      return
    }

    setError('')

    const index = ascendingParsedItemData.findIndex(elem => elem.itemData.id === id)
    const curData = ascendingParsedItemData[index]
    
    curData.itemData.checked = !curData.itemData.checked
    modifyItemData([{index: index, item: curData}])
  }, [ascendingParsedItemData])

  const onPressNext = () => {
    let items: CustomBoxItem[] = []
    const length = descendingParsedItemData.length
  
    for (let i = 0; i < length; i++) {
      const data = descendingParsedItemData[i]
  
      if (data.itemData.checked === true) {
        items.push({
          id: data.itemData.id,
          name: data.itemData.name,
          image: data.itemData.image,
          price: data.itemData.price,
        })
      }
    }
  
    if (items.length === 0) {
      setError('하나 이상의 상품을 선택해주세요.')
      return
    }
  
    replaceSelectedItems(items)
    setShowModal(true)
  }
  
  const moveToStep2 = () => {
    navigation.navigate('BoxMakingStep2')
  }
  
  const search = useCallback(
    debounce((input: string) => {
      console.log('===search', input)
      let output: {index: number, item: RenderItem}[] = []
      const len = ascendingParsedItemData.length

      if (input === '') {
        for (var i = 0; i < len; i++) {
          var curItem = ascendingParsedItemData[i]
          curItem.searched = true
          output.push({index: i, item: curItem})
        }
      } else {
        for (var i = 0; i < len; i++) {
          var curItem = ascendingParsedItemData[i]

          if (curItem.itemData.name.indexOf(input) > -1) {
            curItem.searched = true
            output.push({index: i, item: curItem})
          } else {
            curItem.searched = false
          }
        }
      }

      modifyItemData(output)
    }, 1000)
  , [ascendingParsedItemData])

  const onChangeSearchInput = (input: string) => {
    setSearchInput(input)
    search(input)
  }

  return (
    <BoxMakingStep1Template
      hasPreviousScreen={true}
      screenTitle='커스텀 박스 만들기'
      sorted={sorted}
      itemData={sorted === '낮은가격순' ? ascendingParsedItemData : descendingParsedItemData}
      error={error}
      searchInput={searchInput}
      sortOptions={sortOptions}
      showModal={showModal}
      moveToStep2={moveToStep2}
      closeModal={() => setShowModal(false)}
      onPressSortOption={setSorted}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={onPressNext}
      onPressItemRadioButton={onPressItemRadioButton}
      onChangeSearchInput={onChangeSearchInput}
    />
  )
}

export default BoxMakingStep1Page