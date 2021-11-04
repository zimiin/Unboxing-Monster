import LoadingTemplate from '@components/templates/LoadingTemplate'
import { LoadingProps } from '@constants/navigationTypes'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { URLS } from '@constants/urls'
import { getAccessTokenFromAsyncStorage } from '@src/utils/asyncStorageUtils'
import { Coupon, ItemId } from '@constants/types'

const LoadingPage = ({route, navigation}: LoadingProps) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [switchImage, setSwitchImage] = useState<number>(0)
  const [openResult, setOpenResult] = useState<ItemId[]>()
  const [showOpenFailedModal, setShowOpenFailedModal] = useState<boolean>(false)

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
        setOpenResult(Array.from(coupons, (coupon) => coupon.itemId))
      } catch (error) {
        setShowOpenFailedModal(true)
        console.log('Error in requestBoxOpen', error)
      }
    }

    requestBoxOpen()
      .catch(error => console.log('Error in LoadingPage useEffect', error))
    setTimeout(() => setSwitchImage(1), 2900)
  }, [])

  useEffect(() => {
    if (switchImage === 1 && openResult !== undefined) {
      navigation.push('Opening', { result: openResult })
    }
  }, [openResult, switchImage])

  return (
    <LoadingTemplate  
      modalVisible={modalVisible}
      openFailedModalVisible={showOpenFailedModal}
      switchImage={switchImage}
      onRequestModalClose={() => {
        setModalVisible(false)
        setShowOpenFailedModal(false)
        navigation.navigate('Main', { screen: 'Storage' })
      }}
    />
  )
}

export default LoadingPage
