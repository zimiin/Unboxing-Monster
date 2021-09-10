import React, { useState, useEffect, useMemo } from 'react'
import BoxMakingStep2Template from '@components/templates/BoxMakingStep2Template'
import { BoxMakingStep2Props } from '@constants/navigationTypes'
import { ImageSourcePropType } from 'react-native'
import { BOXES } from '@constants/images'

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
      onRequestCloseModal={() => setShowBoxListModal(false)}
      onPressBoxImage={() => setShowBoxListModal(true)}
      onPressGoBack={() => navigation.goBack()}
      onPressNext={() => navigation.navigate('BoxMakingStep3')}
      onPressBoxListElem={onPressBoxListElem}
    />
  )
}

export default BoxMakingStep2Page
