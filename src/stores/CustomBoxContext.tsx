import React, { useState } from "react"
import { ImageSourcePropType } from "react-native"

export type CustomBoxItem = {
  id: number,
  image: ImageSourcePropType,
  name: string,
  price: number,
}

type Context = [
  {
    boxPrice: number,
    selectedItems: CustomBoxItem[],
  },
  {
    setBoxPrice: (price: number) => void,
    addSelectedItems: (ids: CustomBoxItem[]) => void,
    clearSelectedItems: () => void,
  }
]

const defaultContext: Context = [
  {
    boxPrice: 0,
    selectedItems: [],
  },
  {
    setBoxPrice: (price: number) => { },
    addSelectedItems: (ids: CustomBoxItem[]) => { },
    clearSelectedItems: () => { },
  }
]

export const CustomBoxContext = React.createContext<Context>(defaultContext)

interface Props {
  children?: React.ReactNode
}

const CustomBoxContextProvider = (props: Props) => {
  const [boxPrice, setBoxPrice] = useState<number>(0)
  const [selectedItems, setSelectedItems] = useState<CustomBoxItem[]>([])

  const addSelectedItems = (ids: CustomBoxItem[]) => {
    let newItems = selectedItems
    newItems.push(...ids)
    setSelectedItems(newItems)
  }

  const clearSelectedItems = () => {
    setSelectedItems([])
  }

  return (
    <CustomBoxContext.Provider value={[{ boxPrice, selectedItems }, { setBoxPrice, addSelectedItems, clearSelectedItems }]}>
      {props.children}
    </CustomBoxContext.Provider>
  )
}

export default CustomBoxContextProvider