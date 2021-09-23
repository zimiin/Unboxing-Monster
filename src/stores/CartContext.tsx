import React, {useState} from 'react'
import {ViewProps} from 'react-native'
import {Box, BoxId, BoxWithItems } from '@constants/types'

export type Cart = {
  count: number
  checked: boolean
}

type Context = [
  {cart: Map<BoxId, Cart>, boxData: Map<BoxId, BoxWithItems>},
  {
    modifyBoxCount: (boxId: BoxId, amount: number) => void,
    deleteFromCart: (boxes: number[]) => void,
    setChecked: (boxId: BoxId, bool: boolean) => void,
    setCheckedToAll: (bool: boolean) => void,
    addBoxData: (data: BoxWithItems) => void,
  }
]

const defaultContext: Context = [
  { cart: new Map<BoxId, Cart>(), boxData: new Map<BoxId, BoxWithItems>()},
  {
    modifyBoxCount: (boxId: BoxId, amount: number) => {},
    deleteFromCart: (boxes: number[]) => {},
    setChecked: (boxId: BoxId, bool: boolean) => {},
    setCheckedToAll: (bool: boolean) => {},
    addBoxData: (data: BoxWithItems) => {},
  }
]

export const CartContext = React.createContext<Context>(defaultContext)

interface Props extends ViewProps {
  children: React.ReactNode
}

const CartContextProvider = (props: Props) => {
  const [cart, setCart] = useState(new Map<BoxId, Cart>())
  const [boxData, setBoxData] = useState(new Map<BoxId, BoxWithItems>())
  
  const modifyBoxCount = (boxId: BoxId, amount: number) => {
    let curCart = new Map(cart)
  
    let item = curCart.get(boxId)
    if (item) {
      item.count += amount
  
      if (item.count < 0) {
        item.count = 0
      }
    } else {
      let item: Cart = {
        count: amount,
        checked: true
      }
      curCart.set(boxId, item)
    }
  
    setCart(curCart)
  }

  const deleteFromCart = (boxes: number[]) => {
    let curCart = new Map(cart)
    let curData = new Map(boxData)
    
    for (let boxId of boxes) {
      if (curCart.has(boxId)) {
        curCart.delete(boxId)
        curData.delete(boxId)
      }
    }
    
    setCart(curCart)
    setBoxData(curData)
  }

  const setChecked = (boxId: BoxId, bool: boolean) => {
    let curCart = new Map(cart)
    
    let item = curCart.get(boxId)!
    item.checked = bool

    setCart(curCart)
  }

  const setCheckedToAll = (bool: boolean) => {
    let curCart = new Map(cart)

    for (let [boxId, item] of curCart) {
      item.checked = bool
    }

    setCart(curCart)
  }

  const addBoxData = (data: BoxWithItems) => {
    if (boxData.get(data.id) === undefined) {
      let curData = new Map(boxData)
      curData.set(data.id, data)
      setBoxData(curData)
    }
  }

  return (
    <CartContext.Provider value={[{ cart, boxData }, { modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll, addBoxData}]}>
    {props.children}
  </CartContext.Provider>
  )
}

export default CartContextProvider