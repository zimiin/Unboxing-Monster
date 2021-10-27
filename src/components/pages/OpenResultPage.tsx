import OpenResultTemplate from '@components/templates/OpenResultTemplate'
import { OpenResultProps } from '@constants/navigationTypes'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { URLS } from '@constants/urls'
import { Item } from '@constants/types'

const OpenResultPage = ({route, navigation}: OpenResultProps) => {
  const [openResultData, setOpenResultData] = useState<Item[]>()
  
  useEffect(() => {
    const setOpenResultDataState = async () => {
      const result = route.params.result
      let data: Item[] = []

      for (let i = 0; i < result.length; i++) {
        try {
          const url = URLS.unboxing_api + 'item/' + result[i]
          const response = await fetch(
            url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            }
          )
          
          if (response.status !== 200) {
            const json = await response.json()
            throw json.message + ' url: ' + response.url
          }
          
          const item: Item = await response.json()
          data.push(item)
        } catch (error) {
          console.error(error)
        }
      }
      setOpenResultData(data)
    }

    setOpenResultDataState()
  }, [])

  const firstOpen = async (): Promise<boolean> => {
    // 모든 오픈 결과 가져와서 오픈 기록 찾기 (만약 응답 안하면 오픈할때마다 물어볼수있도록)
    // ---> 설문조사 여부로 확인하기!!!!
    return true
  }

  const goToStorage = async () => {
    if (await firstOpen()) {
      navigation.navigate('Poll')
    } else {
      navigation.navigate('Main')
    }
  }

  return (
    <OpenResultTemplate 
      onPressGoToStorage={goToStorage}
      openResultData={openResultData || []}
    />
  )
}

export default OpenResultPage
