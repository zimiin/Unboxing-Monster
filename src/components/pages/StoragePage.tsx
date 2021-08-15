import React from "react"
import StorageTemplate, { Focus } from "@components/templates/StorageTemplate"
import { useState } from "react"
import { useEffect } from "react"
import { BoxStorage, CouponWithItem } from "@constants/types"
import { StorageBoxData } from '@components/molecules/StorageBox'
import { StorageCouponData } from "@components/molecules/StorageCoupon"

const StoragePage = () => {
  const [focus, setFocus] = useState<Focus>('randomBox')
  const [boxData, setBoxData] = useState<StorageBoxData[]>()
  const [couponData, setCouponData] = useState<StorageCouponData[]>()

  useEffect(() => {
    const fetchBoxStorage = async () => {
      try {
        const url = 'http://3.37.238.160/box-storage/' + 'f4123798117741192'
        const response = await fetch(
          url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })

        if (response.status !== 200) {
          throw 'No response from ' + url
        }

        return await response.json()
      } catch (error) {
        console.log(error)
      }
    }

    const setBoxDataState = async () => {
      const json: BoxStorage[] = await fetchBoxStorage()
      let boxDataValue: StorageBoxData[] = []

      for (let item of json) {
        boxDataValue.push({
          id: item.id,
          image: {uri: item.box.image},
          name: item.box.title,
          count: item.count,
          openOneBox: () => { console.log('Open ' + 'one' + ' id:' + item.boxId + ' boxes.') },
          openAllBox: () => { console.log('Open ' + item.count + ' id:' + item.boxId + ' boxes.') },
        })
      }

      setBoxData(boxDataValue)
    }

    setBoxDataState()
  }, [])

  useEffect(() => {
    const fetchCoupon = async () => {
      try {
        const url = 'http://3.37.238.160/coupon/' + 'f4123798117741192'
        const response = await fetch(
          url, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })

        if (response.status !== 200) {
          throw 'No response from ' + url
        }

        return await response.json()
      } catch (error) {
        console.log(error)
      }
    }

    const setCouponDataState = async () => {
      const json: CouponWithItem[] = await fetchCoupon()
      let couponDataValue: StorageCouponData[] = []

      for (let coupon of json) {
        couponDataValue.push({
          id: coupon.id,
          image: {uri: coupon.item.image},
          name: coupon.item.title,
          price: coupon.item.price,
          confirmableDays: 10,
          onPressConfirm: () => {console.log('Confirm to use ' + coupon.itemId)},
          onPressRefund: () => {console.log('Decide to refund ' + coupon.itemId)}
        })
      }

      setCouponData(couponDataValue)
    }
    
    setCouponDataState()
  }, [])

  return (
    <StorageTemplate
      focusOn={focus}
      onPressRandomBoxTab={() => setFocus('randomBox')}
      onPressCouponTab={() => setFocus('coupon')}
      boxData={boxData || []}
      couponData={couponData || []}
    />
  )
}

export default StoragePage