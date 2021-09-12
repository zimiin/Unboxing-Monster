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
    boxName: string,
    boxImage: string,
    selectedItems: CustomBoxItem[],
  },
  {
    setBoxPrice: (price: number) => void,
    setBoxName: (name: string) => void,
    setBoxImage: (image: string) => void,
    addSelectedItems: (items: CustomBoxItem[]) => void,
    clearSelectedItems: () => void,
    replaceSelectedItems: (items: CustomBoxItem[]) => void,
  }
]

const defaultContext: Context = [
  {
    boxPrice: 0,
    boxName: '',
    boxImage: '',
    selectedItems: [],
  },
  {
    setBoxPrice: (price: number) => { },
    setBoxName: (name: string) => { },
    setBoxImage: (image: string) => { },
    addSelectedItems: (items: CustomBoxItem[]) => { },
    clearSelectedItems: () => { },
    replaceSelectedItems: (items: CustomBoxItem[]) => { },
  }
]

export const CustomBoxContext = React.createContext<Context>(defaultContext)

interface Props {
  children?: React.ReactNode
}

const CustomBoxContextProvider = (props: Props) => {
  const [boxPrice, setBoxPrice] = useState<number>(0)
  const [boxName, setBoxName] = useState<string>('')
  const [selectedItems, setSelectedItems] = useState<CustomBoxItem[]>([])
  const [boxImage, setBoxImage] = useState<string>('')

  const addSelectedItems = (items: CustomBoxItem[]) => {
    let newItems = selectedItems
    newItems.push(...items)
    setSelectedItems(newItems)
  }

  const clearSelectedItems = () => {
    setSelectedItems([])
  }

  const replaceSelectedItems = (items: CustomBoxItem[]) => {
    setSelectedItems(items)
  }

  return (
    <CustomBoxContext.Provider value={[{ boxPrice, boxName, boxImage, selectedItems }, { setBoxPrice, setBoxName, setBoxImage, addSelectedItems, clearSelectedItems, replaceSelectedItems }]}>
      {props.children}
    </CustomBoxContext.Provider>
  )
}

export default CustomBoxContextProvider