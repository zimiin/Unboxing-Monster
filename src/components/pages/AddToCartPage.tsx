import AddToCartTemplate from '@components/templates/AddToCartTemplate'
import React, { useState, useEffect, useCallback } from 'react'
import { BoxWithItems } from 'constants/types'
import { defaultBox } from '@constants/images'
import { CartContext } from '@src/stores/CartContext'
import { useContext } from 'react'
import { AddToCartProps } from '@constants/navigationTypes'
import { URLS } from '@constants/urls'

const AddToCartPage = ({ route, navigation }: AddToCartProps) => {
  const [data, setData] = useState<BoxWithItems>()
  const [count, setCount] = useState(1)
  const [{ cart }, { modifyBoxCount, setChecked }] = useContext(CartContext)

  const minusAction = () => {
    if (count > 1)
      setCount(count - 1)
  }

  const plusAction = () => {
    setCount(count + 1)
  }

  const addAction = () => {
    if (data) {
      modifyBoxCount(data?.id, count)
    }
    navigation.navigate('Main')
  }

  useEffect(() => {
    const getBoxInfo = async (boxId: number) => {
      let url = URLS.unboxing_api + 'box/' + boxId
      let response = await fetch(url)
      if (response.status === 200) {
        let json = await response.json()
        setData(json)
      } else {
        console.log('No reponse! url:', url)
      }
    }

    getBoxInfo(route.params.boxId)
  }, [])

  return (
    <AddToCartTemplate
      boxName={data ? data.title : ''}
      boxImage={data ? {uri: data.image} : defaultBox}
      boxPrice={data ? data.price : 0}
      count={count}
      goBackAction={() => navigation.goBack()}
      onPressPlus={plusAction}
      onPressMinus={minusAction}
      onPressAdd={addAction}
    />
  )
}

export default AddToCartPage
