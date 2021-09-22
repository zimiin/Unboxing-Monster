import React, { useMemo } from 'react'
import CartTemplate from '@components/templates/CartTemplate'
import { CartContext } from '@src/stores/CartContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartNavigationProp } from '@constants/navigationTypes'
import { getUserInfoFromToken, hasLoggedIn } from '@src/utils/loginUtils'
import { getAccessTokenFromAsyncStorage } from '@src/utils/asyncStorageUtils'
import { Box, BoxWithItems, Item } from '@constants/types'
import { URLS } from '@constants/urls'

const CartPage = ({ navigation }: {navigation: CartNavigationProp}) => {
  const [{cart, boxData}, {modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll}] = useContext(CartContext)
  const [totalBoxPrice, setTotalBoxPrice] = useState(0)
  const [checkAll, setCheckAll] = useState(false)
  const [totalBoxCount, setTotalBoxCount] = useState(0)
  const [othersCustomBoxes, setOthersCustomBoxes] = useState<BoxWithItems[]>([])
  const [showCustomBoxModal, setShowCustomBoxModal] = useState<boolean>(false)

  useEffect(() => {
    let price = 0
    
    for (let [boxId, item] of cart) {
      if (item.checked) {
        if (boxData?.has(boxId)) {
          price += item.count * boxData?.get(boxId)?.price!
        } else {
          price = 0
          break
        }
      }
    }

    setTotalBoxPrice(price)
  }, [cart, boxData])
  
  useEffect(() => {
    let count = 0
    
    for (let [boxId, item] of cart) {
      if (item.checked) {
        count += item.count
      }
    }
    
    setTotalBoxCount(count)
  }, [cart])

  useEffect(() => {
    const getOthersCustomBoxes = async () => {
      try {
        let boxes: BoxWithItems[] = []
        const accessToken = await getAccessTokenFromAsyncStorage()
        if (accessToken === null) throw 'access token is null'
        const user = await getUserInfoFromToken(accessToken)

        for (let [boxId, cartValue] of cart) {
          if (cartValue.checked === true) {
            const box = boxData.get(boxId)

            if (box && box?.isManager === false && box.ownerId !== user.id) {
              boxes.push(box)
            }
          }
        }

        return boxes
      } catch (error) {
        console.log('Error in getOthersCustomBoxList', error)
      }
    }

    getOthersCustomBoxes().then(boxes => setOthersCustomBoxes(boxes || []))
  }, [cart, boxData])

  const canBeginPayment = () => {
    for (let [boxId, item] of cart) {
      if (item.checked) {
        return true
      }
    }

    return false
  }

  const beginPayment = async () => {
    if (await hasLoggedIn() === false) {
      navigation.navigate('Auth', {screen: 'LoginRequest'})
      return
    }

    if (canBeginPayment() === false) {
      return
    }

    if (othersCustomBoxes && othersCustomBoxes.length > 0) {
      setShowCustomBoxModal(true)
    } else {
      navigation.push('Payment')
    }
  }

  const createNewCustomBox = async (box: BoxWithItems) => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage()
      const response = await fetch(
        URLS.unboxing_api + 'box', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          },
          body: JSON.stringify({
            title: box.title,
            price: box.price,
            image: box.image,
            isLocal: box.isLocal,
            detail: box.detail,
            boxItems: Array.from(box.items, (item: Item) => item.id)
          })
        }
      )

      if (response.status !== 201) {
        const json = await response.json()
        throw 'Failed to POST ' + response.url + ' status ' + response.status + ', ' + json.message
      }
    } catch (error) {
      console.log('Error in createNewCustomBox', error)
      throw error
    }
  } 

  const onCloseCustomBoxModal = async () => {
    try {
      setShowCustomBoxModal(false)

      for (let box of othersCustomBoxes) {
        await createNewCustomBox(box)
      }
    } catch (error) {
      console.log('Error in onCloseCustomBoxModal', error)
    }

    navigation.push('Payment')
  }

  return (
    <CartTemplate 
      onPressBack={() => navigation.goBack()}
      checkAll={checkAll}
      onPressCheckAll={() => {
        setCheckedToAll(!checkAll)
        setCheckAll(!checkAll)
      }}
      totalBoxCount={totalBoxCount}
      totalBoxPrice={totalBoxPrice}
      showCustomBoxModal={showCustomBoxModal}
      onCloseCustomBoxModal={onCloseCustomBoxModal}
      onPressPurchase={beginPayment}
    />
  )
}

export default CartPage
