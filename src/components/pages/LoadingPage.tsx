import LoadingTemplate from '@components/templates/LoadingTemplate'
import { LoadingProps } from '@constants/navigationTypes'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { URLS } from '@constants/urls'
import { getAccessTokenFromAsyncStorage } from '@src/utils/asyncStorageUtils'
import { Coupon } from '@constants/types'

const LoadingPage = ({route, navigation}: LoadingProps) => {
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const requestBoxOpen = async () => {
      try {
        const accessToken = await getAccessTokenFromAsyncStorage()
        const url = URLS.unboxing_api + 'box/open/' + route.params.boxId + '?count=' + route.params.count
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Accept: 'text/html',
            'Content-Type': 'text/html',
            'Authorization': 'Bearer ' + accessToken
          }
        })

        if (response.status === 500) {
          setModalVisible(true)
          throw 'Bolckchain server error'
        }
        
        
        if (response.status !== 200) {
          const json = await response.json()
          throw 'Failed to GET ' + response.url + ', status ' + response.status + ', ' + json.message
        }

        const coupons: Coupon[] = await response.json()
        navigation.push('Opening', { result: Array.from(coupons, (coupon) => coupon.itemId) })
      } catch (error) {
        console.error('Error in requestBoxOpen', error)
      }
    }

    requestBoxOpen()
  }, [])

  return (
    <LoadingTemplate  
      modalVisible={modalVisible}
      onRequestModalClose={() => navigation.navigate('Main')}
    />
  )
}

export default LoadingPage
