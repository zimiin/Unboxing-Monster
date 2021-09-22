import React from "react"
import StorageTemplate, { Focus } from "@components/templates/StorageTemplate"
import { useState } from "react"
import { useEffect } from "react"
import { BoxId, BoxStorage, Coupon, Item, ItemId, User } from "@constants/types"
import { StorageProps } from "@constants/navigationTypes"
import { URLS } from '@constants/urls'
import { hasLoggedIn } from '@src/utils/loginUtils'
import { getAccessTokenFromAsyncStorage } from "@src/utils/asyncStorageUtils"

export interface UserCoupon extends Coupon {
  owner: User,
  item: Item
}

const StoragePage = ({route, navigation}: StorageProps) => {
  const [loginState, setLoginState] = useState<boolean>(false)
  const [focus, setFocus] = useState<Focus>('randomBox')
  const [boxData, setBoxData] = useState<BoxStorage[]>()
  const [couponData, setCouponData] = useState<UserCoupon[]>()
  const [refreshingBoxData, setRefreshingBoxData] = useState<boolean>(false)
  const [boxRefreshThrottled, setBoxRefreshThrottled] = useState<boolean>(false)
  const [refreshingCouponData, setRefreshingCouponData] = useState<boolean>(false)
  const [couponRefreshThrottled, setCouponRefreshThrottled] = useState<boolean>(false)
  
  const getBoxStorageData = async () => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage()
      const url = URLS.unboxing_api + 'box-storage/user'
      
      const response = await fetch(
        url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      })

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }

      const boxes: BoxStorage[] = await response.json()
      return boxes
    } catch (error) {
      console.log('Error in fetchBoxStorage::', error)
      throw error
    }
  }

  const getAndSetBoxData = async () => {
    try {
      if (boxRefreshThrottled) {
        return
      }

      console.log('getAndSetBoxData')

      setRefreshingBoxData(true)
      setBoxRefreshThrottled(true)

      const data = await getBoxStorageData()
      setBoxData(data)

      setRefreshingBoxData(false)
      setTimeout(() => setBoxRefreshThrottled(false), 3000)
    } catch (error) {
      console.log('Error in setBoxStorageData', error)
    }
  }

  const getCouponData = async () => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage()
      const url = URLS.unboxing_api + 'coupon/user'
      const response = await fetch(
        url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      })

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }

      const coupons: UserCoupon[] = await response.json()
      return coupons
    } catch (error) {
      console.log('Error in fetchCoupon::', error)
      throw error
    }
  }

  const getAndSetCouponData = async () => {
    try {
      getCouponData().then(data => setCouponData(data))
    } catch (error) {
      console.log('Error in getAndSetCouponData', error)
    }
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      hasLoggedIn().then(
        result => {
          if (result === true) {
            setLoginState(true)
            getAndSetBoxData()
            getAndSetCouponData()
          }
        }
      )
    })
  }, [])

  const openBox = (boxId: BoxId, count: number) => {
    navigation.navigate('Open', {
      screen: 'Loading',
      params: {
        boxId: boxId,
        count: count
      }
    })
  }

  const onPressConfirmCoupon = (couponId: number) => {
    
  }

  const onPressRefundCoupon = (couponId: number) => {

  }

  const onPressCoupon = (item: Item) => {
    navigation.navigate('ItemInfo', {itemId: item.id, itemImage: item.image, itemDetail: item.detail, itemPrice: item.price, itemTitle: item.title})
  }

  return (
    <StorageTemplate
      loginState={loginState}
      focusOn={focus}
      onPressRandomBoxTab={() => setFocus('randomBox')}
      onPressCouponTab={() => setFocus('coupon')}
      boxData={boxData || []}
      couponData={couponData || []}
      refreshingBoxList={refreshingBoxData}
      onRefreshBoxList={getAndSetBoxData}
      refreshingCouponList={refreshingCouponData}
      onRefreshCouponList={getAndSetCouponData}
      onPressLogin={() => navigation.replace('Auth', {screen: 'Login'})}
      openBox={openBox}
      onPressBox={(boxId: BoxId) => navigation.navigate('BoxInfo', {boxId: boxId})}
      onPressConfirmCoupon={onPressConfirmCoupon}
      onPressRefundCoupon={onPressRefundCoupon}
      onPressCoupon={onPressCoupon}
    />
  )
}

export default StoragePage