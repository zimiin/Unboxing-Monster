import LoadingTemplate from '@components/templates/LoadingTemplate'
import { LoadingProps } from '@constants/navigationTypes'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { URLS } from '@constants/urls'
import { getLoginUserId } from '@src/utils/loginUtils'

const LoadingPage = ({route, navigation}: LoadingProps) => {
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const postCoupon = async (item: number[]) => {
      console.log('===postCoupon')

      try {
        const userId = await getLoginUserId()

        for (let itemId of item) {
          const response = await fetch(
            URLS.unboxing_api + 'coupon',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                ownerId: userId,
                itemId: itemId,
                qr: 'https://user-images.githubusercontent.com/45932570/129915902-c08ed219-fcc7-495d-b712-d8e2b3f6a4d4.png'
              })
            }
          )

          if (response.status !== 201) {
            const json = await response.json()
            throw json.message + ' url: ' + response.url
          }
        }
      } catch (error) {
        console.error('Error in postCoupon', error)
        throw error
      }
    }

    const requestBoxOpen = async () => {
      try {
        console.log('===requestBoxOpen')

        const url = URLS.unboxing_api + 'box/open/' + route.params.boxId
          + '?count=' + route.params.count
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Accept: 'text/html',
            'Content-Type': 'text/html'
          }
        })

        if (response.status === 500) {
          setModalVisible(true)
          throw 'Bolckchain server error'
        }
        
        const json = await response.json()

        if (response.status !== 200) {
          console.log(url)
          throw json.message
        }
        
        // 결과에 해당하는 모바일쿠폰 디비에 저장
        await postCoupon(json.result)

        navigation.push('Opening', { result: json.result })
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
