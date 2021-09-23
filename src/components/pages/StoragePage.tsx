import React from "react"
import StorageTemplate, { Focus } from "@components/templates/StorageTemplate"
import { useState } from "react"
import { useEffect } from "react"
import { BoxId, BoxStorage, Coupon, Item, ItemId, User } from "@constants/types"
import { StorageProps } from "@constants/navigationTypes"
import { URLS } from '@constants/urls'
import { hasLoggedIn } from '@src/utils/loginUtils'
import { getAccessTokenFromAsyncStorage, getPhoneFromAsyncStorage } from "@src/utils/asyncStorageUtils"
import { getDaysBetweenDates } from "@src/utils/utils"

export interface UserCoupon extends Coupon {
  owner: User,
  item: Item
}

const StoragePage = ({route, navigation}: StorageProps) => {
  const [loginState, setLoginState] = useState<boolean>(false)
  const [focus, setFocus] = useState<Focus>('randomBox')
  const [boxData, setBoxData] = useState<BoxStorage[]>([])
  const [couponData, setCouponData] = useState<UserCoupon[]>([])
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
      console.log('Error in fetchCoupon', error)
      throw error
    }
  }

  const requestRefundCoupon = async (coupon: UserCoupon) => {
    try {
      const response = await fetch(
        URLS.unboxing_api + 'coupon/refund/' + coupon.id, {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authrization': 'Bearer ' + await getAccessTokenFromAsyncStorage()
          },
        }
      )

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to PATCH ' + response.url + ', status ' + response.status + ', message: ' + json.message
      }
    } catch (error) {
      console.log('Error in requestRefundCoupon', error)
      throw error
    }
  }

  const removeExpiredUsedCoupons = (coupons: UserCoupon[]) => {
    const newCoupons: UserCoupon[] = []
    
    try {
      for (let coupon of coupons) {
        if (coupon.isUsed === true) {
          continue
        }

        const validDays = getDaysBetweenDates(new Date(), new Date(coupon.Expiration))
        
        if (validDays <= 0) {
          requestRefundCoupon(coupon).catch(error => console.log('Error in removeExpiredCoupons', error))
        } else {
          newCoupons.push(coupon)
        }
      }
    } catch (error) {
      console.log('Error in removeExpiredCoupons', error)
      throw error
    }

    return newCoupons
  }

  const getAndSetCouponData = async () => {
    try {
      if (couponRefreshThrottled) {
        return
      }

      setRefreshingCouponData(true)
      setCouponRefreshThrottled(true)

      let coupons = await getCouponData()
      coupons = removeExpiredUsedCoupons(coupons)
      
      setCouponData(coupons)

      setRefreshingCouponData(false)
      setTimeout(() => setCouponRefreshThrottled(false), 3000)
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

  const requestConfirmCoupon = async (coupon: UserCoupon, phone: string) => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage()
      const url = new URL(URLS.unboxing_api + 'coupon/confirm/' + coupon.id)
      url.searchParams.append('phone', phone)

      const response = await fetch(
        url.toString(), {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      })

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to PATCH ' + response.url + ' status ' + response.status + ', ' + json.message
      }
      console.log('onPressConfirmCoupon status 200')
    } catch (error) {
      console.log('Error in requestConfirmCoupon', error)
      throw error
    }
  }

  const onPressRefundCoupon = (coupon: UserCoupon) => {
    requestRefundCoupon(coupon).catch(error => console.log('Error in onPressRefundCoupon', error))
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
      boxData={boxData}
      couponData={couponData}
      refreshingBoxList={refreshingBoxData}
      onRefreshBoxList={getAndSetBoxData}
      refreshingCouponList={refreshingCouponData}
      onRefreshCouponList={getAndSetCouponData}
      onPressLogin={() => navigation.replace('Auth', {screen: 'Login'})}
      openBox={openBox}
      onPressBox={(boxId: BoxId) => navigation.navigate('BoxInfo', {boxId: boxId})}
      onPressConfirmCoupon={(coupon: Coupon) => navigation.navigate('CouponConfirm', {coupon: coupon})}
      onPressRefundCoupon={onPressRefundCoupon}
      onPressCoupon={onPressCoupon}
    />
  )
}

export default StoragePage