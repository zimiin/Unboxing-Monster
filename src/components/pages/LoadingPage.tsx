import LoadingTemplate from '@components/templates/LoadingTemplate'
import { LoadingProps } from '@constants/navigationTypes'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const LoadingPage = ({route, navigation}: LoadingProps) => {
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const parseStringArray = async (str: string) => {
      str = str.replace(/'/g, '\"')
      str = str.replace(/ /g, ',')
      
      const arr: string[] = JSON.parse(str)
      return arr.map(strNum => parseInt(strNum))
    }

    const postCoupon = async (item: number[]) => {
      for (let itemId of item) {
        try {
          const response = await fetch(
            'http://3.37.238.160/coupon',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                ownerId: 'k1804801727',
                itemId: itemId,
                qr: 'https://user-images.githubusercontent.com/45932570/129915902-c08ed219-fcc7-495d-b712-d8e2b3f6a4d4.png'
              })
            }
          )

          if (response.status !== 201) {
            const json = await response.json()
            throw json.message + ' url: ' + response.url
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    const requestBoxOpen = async () => {
      try {
        const url = 'http://3.37.238.160/box/open/' + route.params.boxId
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
        
        if (response.status !== 200) {
          const json = await response.json()
          console.log(url)
          throw json.message
        }
        
        const result = await parseStringArray(await response.text())
        
        // 결과에 해당하는 모바일쿠폰 디비에 저장
        await postCoupon(result)

        navigation.push('Opening', { result: result })
      } catch (error) {
        console.error(error)
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
