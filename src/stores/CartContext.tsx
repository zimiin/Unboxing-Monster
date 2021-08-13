import React, {useState} from 'react'
import {ViewProps} from 'react-native'
import {BoxId, CartItem} from '@constants/types'

type Context = [
  {cart: Map<BoxId, CartItem>},
  {
    addToCart: (boxId: number, count: number) => void,
    deleteFromCart: (boxId: number) => void,
    setChecked: (boxId: number, bool: boolean) => void,
    setCheckedToAll: (bool: boolean) => void
  }
]

const defaultContext: Context = [
  {cart: new Map<BoxId, CartItem>()},
  {
    addToCart: (boxId: number, count: number) => {},
    deleteFromCart: (boxId: number) => {},
    setChecked: (boxId: number, bool: boolean) => {},
    setCheckedToAll: (bool: boolean) => {}
  }
]

export const CartContext = React.createContext<Context>(defaultContext)

interface Props extends ViewProps {
  children: React.ReactNode
}

const CartContextProvider = (props: Props) => {
  const [cart, setCart] = useState(new Map<BoxId, CartItem>())
  
  const addToCart = (boxId: number, amount: number) => {
    let curCart = new Map(cart)
  
    let item = curCart.get(boxId)
    if (item) {
      item.count += amount
  
      if (item.count < 0) {
        item.count = 0
      }
    } else {
      let item: CartItem = {
        count: amount,
        checked: true
      }
      curCart.set(boxId, item)
    }
  
    setCart(curCart)
  }

  const deleteFromCart = (boxId: number) => {
    let curCart = new Map(cart)

    if (curCart.has(boxId)) {
      curCart.delete(boxId)
    }

    setCart(curCart)
  }

  const setChecked = (boxId: number, bool: boolean) => {
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

  return (
  <CartContext.Provider value={[{cart}, {addToCart, deleteFromCart, setChecked, setCheckedToAll}]}>
    {props.children}
  </CartContext.Provider>
  )
}

export default CartContextProvider