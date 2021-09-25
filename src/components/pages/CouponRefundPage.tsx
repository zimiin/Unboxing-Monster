import CouponRefundTemplate from '@components/templates/CouponRefundTemplate'
import { CouponRefundProps } from '@constants/navigationTypes'
import { Coupon } from '@constants/types'
import { URLS } from '@constants/urls'
import { getAccessTokenFromAsyncStorage } from '@src/utils/asyncStorageUtils'
import { hasLoggedIn } from '@src/utils/loginUtils'
import React, { useState, useEffect } from 'react'

const CouponRefundPage = ({ route, navigation }: CouponRefundProps) => {
  const requestRefundCoupon = async (coupon: Coupon) => {
    try {
      if (await hasLoggedIn() === false) {
        navigation.navigate('Auth', {screen: 'LoginRequest'})
        return
      }

      const accessToken = await getAccessTokenFromAsyncStorage()
      const response = await fetch(
        URLS.unboxing_api + 'coupon/refund/' + coupon.id, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
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

  return (
    <CouponRefundTemplate
      goToPreviousScreen={() => navigation.goBack()}
      onPressRefundButton={() => requestRefundCoupon(route.params.coupon)}
    />
  )
}

export default CouponRefundPage