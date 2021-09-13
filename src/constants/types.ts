export type BoxId = number

export interface Box {
  id: BoxId
  title: string
  price: number
  image: string
  detail: string
  ownerId: string
  sales: number
}

export type Item = {
  id: number
  title: string
  price: number
  image: string
  detail: string
}

export type BoxWithItems = {
  id: BoxId
  title: string
  price: number
  image: string
  detail: string
  ownerId: string
  sales: number
  items: Item[]
}

export type BoxItem = {
  boxId: number,
  itemId: number,
}

export type Notice = {
  id: number
  imgUrl: string
  srcUrl: string
}

export type CartItem = {
  count: number
  checked: boolean
}

export interface User {
  id: string,
  email: string,
  point: number,
}

export interface BoxStorage {
  id: number,
  ownerId: string,
  boxId: number,
  count: number,
  owner: User,
  box: Box
}

export interface CouponWithItem {
  id: number,
  ownerId: string,
  itemId: number,
  qr: string,
  isUse: boolean,
  owner: User,
  item: Item,
}