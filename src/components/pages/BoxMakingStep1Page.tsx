import BoxMakingStep1Template, { RenderItem } from '@components/templates/BoxMakingStep1Template'
import { BoxMakingStep1Props } from '@constants/navigationTypes'
import { CustomBoxContext, CustomBoxItem } from '@src/stores/CustomBoxContext'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useContext } from 'react'
import { Item } from '@constants/types'
import { URLS } from '@constants/urls'
import { debounce } from 'lodash'

const BoxMakingStep1Page = ({ route, navigation }: BoxMakingStep1Props) => {
  const [{ selectedItems }, { replaceSelectedItems }] = useContext(CustomBoxContext)
  const [sortedItemList, setSortedItemList] = useState<RenderItem[]>([])
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

    const sortedData = data.sort((a, b) => a.itemData.price - b.itemData.price)
    setSortedItemList(sortedData)
  }, [rawItemData])

  const onPressItemRadioButton = useCallback((id: number) => {
    if (sortedItemList === undefined) {
      console.log('undefined itemRadiobuttondata')
      return
    }

    setError('')

    var newSortedItemList = sortedItemList.slice()
    const index = newSortedItemList.findIndex(elem => elem.itemData.id === id)
    const curItem = newSortedItemList[index]
    curItem.itemData.checked = !curItem.itemData.checked
    
    setSortedItemList(newSortedItemList)
  }, [sortedItemList])

  const onPressNext = () => {
    let items: CustomBoxItem[] = []
    const length = sortedItemList.length
  
    for (let i = length - 1; i >= 0; i--) {
      const data = sortedItemList[i]
  
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
      var newItemList = sortedItemList.slice()
      const len = newItemList.length

      if (input === '') {
        for (let i = 0; i < len; i++) {
          let curItem = newItemList[i]
          curItem.searched = true
        }
      } else {
        for (let i = 0; i < len; i++) {
          let curItem = newItemList[i]

          if (curItem.itemData.name.indexOf(input) > -1) {
            curItem.searched = true
          } else {
            curItem.searched = false
          }
        }
      }

      setSortedItemList(newItemList)
    }, 1000)
  , [sortedItemList])

  const onChangeSearchInput = (input: string) => {
    setSearchInput(input)
    search(input)
  }

  const reversedItemList = useMemo(() => {
    let newList = sortedItemList.slice()
    return newList.reverse()
  }, [sortedItemList])

  return (
    <BoxMakingStep1Template
      hasPreviousScreen={true}
      screenTitle='커스텀 박스 만들기'
      sorted={sorted}
      itemData={sorted === '낮은가격순' ? sortedItemList.filter(item => item.searched === true) : reversedItemList.filter(item => item.searched === true)}
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