import React, { useState, useEffect, useMemo, useContext } from 'react'
import BoxMakingStep2Template from '@components/templates/BoxMakingStep2Template'
import { BoxMakingStep2Props } from '@constants/navigationTypes'
import { ImageSourcePropType } from 'react-native'
import { BOXES } from '@constants/images'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CustomBoxContext } from '@src/stores/CustomBoxContext'

const BoxMakingStep2Page = ({ route, navigation }: BoxMakingStep2Props) => {
  const [{selectedItems}, {setBoxPrice, setBoxName}] = useContext(CustomBoxContext)
  const [boxImage, setBoxImage] = useState<number>(4)
  const [showBoxListModal, setShowBoxListModal] = useState<boolean>(false)
  const [boxNameInput, setBoxNameInput] = useState<string>()
  const [boxPriceInput, setBoxPriceInput] = useState<number>()

  const boxes: { id: number, image: ImageSourcePropType }[] = useMemo(() => {
    return (
      BOXES.map(
        (box, index) => {
          return { id: index, image: box }
        }
      )
    )
  }, [])
  
  useEffect(() => {
    AsyncStorage.getItem('@nickname').then(
      nickname => setBoxNameInput(nickname + '님의 박스')
    )
  }, [])

  const onPressBoxListElem = (id: number) => {
    setBoxImage(id)
    setShowBoxListModal(false)
  }

  const minBoxPrice = useMemo(() => {
    return selectedItems[0]?.price
  }, [selectedItems])

  const maxBoxPrice = useMemo(() => {
    if (selectedItems) {
      const lastIdx = selectedItems.length - 1
      return selectedItems[lastIdx].price
    }
    return 0
  }, [selectedItems])

  return (
    <BoxMakingStep2Template
      screenTitle={'커스텀 박스 만들기'}
      hasPreviousScreen={true}
      boxImage={boxImage}
      boxList={boxes}
      showBoxListModal={showBoxListModal}
      boxName={boxNameInput}
      minPrice={minBoxPrice}
      maxPrice={maxBoxPrice}
      boxPrice={boxPriceInput || minBoxPrice}
      onPriceInputChange={setBoxPriceInput}
      onRequestCloseModal={() => setShowBoxListModal(false)}
      onPressBoxImage={() => setShowBoxListModal(true)}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={() => navigation.navigate('BoxMakingStep3')}
      onPressBoxListElem={onPressBoxListElem}
      onChangeBoxName={setBoxNameInput}
    />
  )
}

export default BoxMakingStep2Page
