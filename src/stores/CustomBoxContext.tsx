import React, { useState } from "react"

type Context = [
  {
    boxPrice: number,
    items: number[],
  },
  {
    setBoxPrice: (price: number) => void,
    addItems: (ids: number[]) => void,
  }
]

const defaultContext: Context = [
  {
    boxPrice: 0,
    items: [],
  },
  {
    setBoxPrice: (price: number) => { },
    addItems: (ids: number[]) => { },
  }
]

export const CustomBoxContext = React.createContext<Context>(defaultContext)

interface Props {
  children?: React.ReactNode
}

const CustomBoxContextProvider = (props: Props) => {
  const [boxPrice, setBoxPrice] = useState<number>(0)
  const [items, setItems] = useState<number[]>([])

  const addItems = (ids: number[]) => {
    let newItems = items
    newItems.push(...ids)
    setItems(newItems)
  }

  return (
    <CustomBoxContext.Provider value={[{ boxPrice, items }, { setBoxPrice, addItems }]}>
      {props.children}
    </CustomBoxContext.Provider>
  )
}

export default CustomBoxContextProvider