import React, { useState } from "react"

type Context = [
  {
    boxPrice: number,
    selectedItems: number[],
  },
  {
    setBoxPrice: (price: number) => void,
    addSelectedItems: (ids: number[]) => void,
  }
]

const defaultContext: Context = [
  {
    boxPrice: 0,
    selectedItems: [],
  },
  {
    setBoxPrice: (price: number) => { },
    addSelectedItems: (ids: number[]) => { },
  }
]

export const CustomBoxContext = React.createContext<Context>(defaultContext)

interface Props {
  children?: React.ReactNode
}

const CustomBoxContextProvider = (props: Props) => {
  const [boxPrice, setBoxPrice] = useState<number>(0)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const addSelectedItems = (ids: number[]) => {
    let newItems = selectedItems
    newItems.push(...ids)
    setSelectedItems(newItems)
  }

  return (
    <CustomBoxContext.Provider value={[{ boxPrice, selectedItems }, { setBoxPrice, addSelectedItems }]}>
      {props.children}
    </CustomBoxContext.Provider>
  )
}

export default CustomBoxContextProvider