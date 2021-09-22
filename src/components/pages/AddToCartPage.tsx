import AddToCartTemplate from '@components/templates/AddToCartTemplate'
import React, { useMemo, useState } from 'react'
import { IMAGES } from '@constants/images'
import { CartContext } from '@src/stores/CartContext'
import { useContext } from 'react'
import { AddToCartProps } from '@constants/navigationTypes'

const AddToCartPage = ({ route, navigation }: AddToCartProps) => {
  const [count, setCount] = useState(1)
  const [{ cart }, { modifyBoxCount, addBoxData }] = useContext(CartContext)

  const boxData = useMemo(() => route.params.boxData, [])

  const minusAction = () => {
    if (count > 1)
      setCount(count - 1)
  }

  const plusAction = () => {
    setCount(count + 1)
  }

  const addAction = () => {
    modifyBoxCount(boxData.id, count)
    addBoxData(boxData)
    navigation.navigate('Main')
  }

  return (
    <AddToCartTemplate
      boxName={boxData.title}
      boxImage={boxData.isLocal ? IMAGES[boxData.image] : {uri: boxData.image}}
      boxPrice={boxData.price}
      count={count}
      goBackAction={() => navigation.goBack()}
      onPressPlus={plusAction}
      onPressMinus={minusAction}
      onPressAdd={addAction}
    />
  )
}

export default AddToCartPage
