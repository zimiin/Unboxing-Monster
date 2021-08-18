import { OpenResultItem } from '@components/molecules/SingleOpenResultItem'
import OpenResultTemplate from '@components/templates/OpenResultTemplate'
import { OpenResultProps } from '@constants/navigationTypes'
import { CommonActions } from '@react-navigation/native'
import React, { useState } from 'react'
import { useEffect } from 'react'

const OpenResultPage = ({route, navigation}: OpenResultProps) => {
  const [openResultData, setOpenResultData] = useState<OpenResultItem []>()
  
  useEffect(() => {
    const setOpenResultDataState = async () => {
      const result = route.params.result
      let data: OpenResultItem[] = []

      for (let i = 0; i < result.length; i++) {
        try {
          const url = 'http://3.37.238.160/item/' + result[i]
          const response = await fetch(
            url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            }
          )
          
          const json = await response.json()

          if (response.status !== 200) {
            throw json.message + ' url: ' + response.url
          }
          
          data.push({
            key: i,
            image: {uri: json.image},
            name: json.title,
            price: json.price
          })
        } catch (error) {
          console.error(error)
        }
      }
      setOpenResultData(data)
    }

    setOpenResultDataState()
  }, [])

  return (
    <OpenResultTemplate 
      onPressGoToStorage={() => navigation.navigate('Main')}
      openResultData={openResultData || []}
    />
  )
}

export default OpenResultPage
