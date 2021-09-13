import React, { useState, useEffect, useMemo, useContext } from 'react'
import BoxMakingStep2Template from '@components/templates/BoxMakingStep2Template'
import { BoxMakingStep2Props } from '@constants/navigationTypes'
import { ImageSourcePropType } from 'react-native'
import { BOXES, defaultBoxUri } from '@constants/images'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CustomBoxContext } from '@src/stores/CustomBoxContext'

const BoxMakingStep2Page = ({ route, navigation }: BoxMakingStep2Props) => {
  const [{selectedItems}, {setBoxPrice, setBoxName, setBoxImage}] = useContext(CustomBoxContext)
  const [boxImageInput, setBoxImageInput] = useState<number>(4)
  const [showBoxListModal, setShowBoxListModal] = useState<boolean>(false)
  const [boxNameInput, setBoxNameInput] = useState<string>()
  const [boxPriceInput, setBoxPriceInput] = useState<number>()

  const boxes: { id: number, image: ImageSourcePropType }[] = useMemo(() => {
    return (
      BOXES.map(
        (box, index) => {
          return { id: index, image: {uri: box} }
        }
      )
    )
  }, [])
  
  const getDefaultBoxName = async () => {
    let name = ''

    await AsyncStorage.getItem('@nickname').then(
      nickname => name = nickname + '님의 박스'
    )

    return name
  }

  useEffect(() => {
    getDefaultBoxName().then(
      name => setBoxNameInput(name)
    )
  }, [])

  const onPressBoxListElem = (id: number) => {
    setBoxImageInput(id)
    setShowBoxListModal(false)
  }

  const maxBoxPrice = useMemo(() => {
    return selectedItems[0]?.price
  }, [selectedItems])

  const minBoxPrice = useMemo(() => {
    if (selectedItems.length) {
      const lastIdx = selectedItems.length - 1
      return selectedItems[lastIdx].price
    }
    return 0
  }, [selectedItems])

  const completeStep2 = async () => {
    setBoxName(boxNameInput || await getDefaultBoxName())
    setBoxPrice(boxPriceInput || minBoxPrice)
    setBoxImage(BOXES[boxImageInput] || defaultBoxUri)
    navigation.navigate('BoxMakingStep3')
  }

  return (
    <BoxMakingStep2Template
      screenTitle={'커스텀 박스 만들기'}
      hasPreviousScreen={true}
      boxImage={boxImageInput}
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
      onPressNext={completeStep2}
      onPressBoxListElem={onPressBoxListElem}
      onChangeBoxName={setBoxNameInput}
    />
  )
}

export default BoxMakingStep2Page
