export type BoxId = number

export interface Box {
  id: BoxId
  title: string
  price: number
  image: string
  isLocal: boolean
  detail: string
  ownerId: string
  sales: number
}

export type ItemId = number

export type Item = {
  id: ItemId
  title: string
  price: number
  image: string
  detail: string
}

export interface BoxWithItems extends Box {
  items: Item[]
}

export type BoxItem = {
  boxId: BoxId,
  itemId: ItemId,
}

export type NoticeId = number

export type Notice = {
  id: NoticeId
  imgUrl: string
  srcUrl: string
}

export type CartItem = {
  count: number
  checked: boolean
}

export interface User {
  email: string,
  id: string,
  nickname: string,
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