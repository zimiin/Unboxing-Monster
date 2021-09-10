import React, { useState, useEffect, useMemo } from 'react'
import BoxMakingStep2Template from '@components/templates/BoxMakingStep2Template'
import { BoxMakingStep2Props } from '@constants/navigationTypes'
import { ImageSourcePropType } from 'react-native'
import { BOXES } from '@constants/images'
import AsyncStorage from '@react-native-async-storage/async-storage'

const BoxMakingStep2Page = ({ route, navigation }: BoxMakingStep2Props) => {
  const boxes: { id: number, image: ImageSourcePropType }[] = useMemo(() => {
    return (
      BOXES.map(
        (box, index) => {
          return { id: index, image: box }
        }
      )
    )
  }, [])
  const [boxImage, setBoxImage] = useState<number>(4)
  const [showBoxListModal, setShowBoxListModal] = useState<boolean>(false)
  const [boxName, setBoxName] = useState<string>()

  useEffect(() => {
    AsyncStorage.getItem('@nickname').then(
      nickname => setBoxName(nickname + '님의 박스')
    )
  }, [])

  const onPressBoxListElem = (id: number) => {
    setBoxImage(id)
    setShowBoxListModal(false)
  }

  return (
    <BoxMakingStep2Template
      screenTitle={'커스텀 박스 만들기'}
      hasPreviousScreen={true}
      boxImage={boxImage}
      boxList={boxes}
      showBoxListModal={showBoxListModal}
      boxName={boxName}
      onRequestCloseModal={() => setShowBoxListModal(false)}
      onPressBoxImage={() => setShowBoxListModal(true)}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={() => navigation.navigate('BoxMakingStep3')}
      onPressBoxListElem={onPressBoxListElem}
      onChangeBoxName={setBoxName}
    />
  )
}

export default BoxMakingStep2Page
