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
  isManager: boolean
}

export type ItemId = number

export type Item = {
  id: ItemId
  productId: string
  seller: number
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

export interface User {
  email: string,
  id: string,
  nickname: string,
  point: number,
  isManager: boolean
}

export interface BoxStorage {
  id: number,
  ownerId: string,
  boxId: BoxId,
  count: number,
  owner: User,
  box: Box,
}

export interface Coupon {
  id: number,
  ownerId: string,
  itemId: ItemId,
  isUsed: boolean,
  createAt: string,
  refund: boolean,
  refundAt: string,
  Expiration: string,
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