import React from 'react'
import CartTemplate from '@components/templates/CartTemplate'
import { CartContext } from '@src/stores/CartContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartNavigationProp } from '@constants/navigationTypes'

const CartPage = ({ navigation }: {navigation: CartNavigationProp}) => {
  const [{cart, boxData}, {modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll}] = useContext(CartContext)
  const [totalBoxPrice, setTotalBoxPrice] = useState(0)
  const [checkAll, setCheckAll] = useState(false)
  const [totalBoxCount, setTotalBoxCount] = useState(0)

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
      count += item.count
    }
    
    setTotalBoxCount(count)
  }, [cart])

  const beginPayment = () => {
    let canBeginPayment: boolean = false

    for (let [boxId, item] of cart) {
      if (item.checked) {
        canBeginPayment = true
        break
      }
    }

    if (canBeginPayment) {
      navigation.push('Payment')
    }
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
      onPressPurchase={beginPayment}
    />
  )
}

export default CartPage
