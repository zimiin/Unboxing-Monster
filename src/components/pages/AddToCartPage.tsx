import AddToCartTemplate from '@components/templates/AddToCartTemplate'
import React, { useState, useEffect } from 'react'
import { BoxDataType } from 'constants/types'
import { defaultBox } from '@constants/images'
import { CartContext } from '@src/stores/CartContext'
import { useContext } from 'react'
import { AddToCartNavigationProp, AddToCartRouteProp } from '@constants/navigationTypes'

const AddToCartPage = ({ route, navigation }: { route: AddToCartRouteProp, navigation: AddToCartNavigationProp }) => {
  const [data, setData] = useState<BoxDataType>()
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
    navigation.goBack()
  }

  useEffect(() => {
    const getBoxInfo = async (boxId: number) => {
      let url = 'http://3.37.238.160/box/' + boxId
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
      boxImage={data ? data.image : defaultBox}
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
