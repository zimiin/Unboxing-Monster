// Box Product Information
export type boxProductInfo = {
  id: number
  title: string
  price: number
  image: string
  detail: string
  ownerId: string
  sales: number
}

export type BoxItemType = {
  id: number
  title: string
  price: number
  image: string
  detail: string
}

export type BoxDataType = {
  id: number
  title: string
  price: number
  image: string
  detail: string
  ownerId: string
  sales: number
  items: BoxItemType[]
}

// Notice Information
export type noticeInfo = {
  id: number
  imgUrl: string
  srcUrl: string
}

export type BoxId = number

export type CartItem = {
  count: number
  checked: boolean
}