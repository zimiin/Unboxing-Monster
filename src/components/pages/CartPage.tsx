import React from 'react'
import CartTemplate, { CartData, BoxData, BoxInfo } from '@components/templates/CartTemplate'
import { CartContext } from '@src/stores/CartContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CartNavigationProp } from '@constants/navigationTypes'
import { BoxId } from '@constants/types'

const CartPage = ({ navigation }: {navigation: CartNavigationProp}) => {
  const [{cart}, {modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll}] = useContext(CartContext)
  const [cartData, setCartData] = useState<CartData[]>()
  const [boxData, setBoxData] = useState<BoxData>()
  const [totalBoxPrice, setTotalBoxPrice] = useState(0)
  const [checkAll, setCheckAll] = useState(false)
  const [totalBoxCount, setTotalBoxCount] = useState(0)
  
  useEffect(() => {
    let data: CartData[] = []

    for (let [boxId, item] of cart) {
      let newData: CartData = {
        boxId,
        count: item.count,
        deleteOneFromCart: () => {
          modifyBoxCount(boxId, -1)
        },
        addOneToCart: () => {
          modifyBoxCount(boxId, +1)
        },
        checked: item.checked,
        setChecked: () => {
          setChecked(boxId, !item.checked)
        },
        delete: () => {
          deleteFromCart([boxId])
        },
      }

      data.push(newData)
    }

    setCartData(data)
  }, [cart, modifyBoxCount, setChecked, deleteFromCart])

  useEffect(() => {
    const getItemInfo = async () => {
      let data: BoxData = new Map<BoxId, BoxInfo>()

      for (let [boxId, item] of cart) {
        let url = 'http://3.37.238.160/box/' + boxId
        let response = await fetch(url)

        if (response.status === 200) {
          let json = await response.json()
          
          let boxInfo: BoxInfo = {
            name: json.title,
            price: json.price,
            image: json.image
          }
          
          data.set(boxId, boxInfo)
        } else {
          console.log('No reponse! url:', url)
        }
      }

      setBoxData(data)
    }

    getItemInfo()
  }, [cart])

  useEffect(() => {
    let price = 0
    
    for (let [boxId, item] of cart) {
      if (item.checked) {
        if (boxData?.has(boxId)) {
          price += item.count * boxData?.get(boxId)?.price!
        } else {
          console.log('boxData does not have ', boxId)
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

  return (
    <CartTemplate 
      onPressBack={() => navigation.goBack()}
      cartData={cartData || []}
      boxData={boxData || new Map()}
      checkAll={checkAll}
      onPressCheckAll={() => {
        setCheckedToAll(!checkAll)
        setCheckAll(!checkAll)
      }}
      totalBoxCount={totalBoxCount}
      totalBoxPrice={totalBoxPrice}
      onPressPurchase={() => navigation.push('Payment')}
    />
  )
}

export default CartPage
