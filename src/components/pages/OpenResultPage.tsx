import OpenResultTemplate from '@components/templates/OpenResultTemplate'
import { OpenResultProps } from '@constants/navigationTypes'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { URLS } from '@constants/urls'
import { Item } from '@constants/types'
import { getAccessTokenFromAsyncStorage } from '@src/utils/asyncStorageUtils'

const OpenResultPage = ({route, navigation}: OpenResultProps) => {
  const [openResultData, setOpenResultData] = useState<Item[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
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

  const activatedPollEvent = async (): Promise<boolean> => {
    try {
      const response = await fetch(URLS.unboxing_api + 'event/survey/check')

      if (response.status !== 200) {
        const json = await response.json()
        console.log('activatedPollEvent ' + 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message)
      }

      const numOfEnrollments = parseInt(await response.text())
      console.log('activatedPollEvent numOfEnrollments', numOfEnrollments)

      if (numOfEnrollments < 200) {
        return true
      } else {
        return false
      }
    } catch (error) {
      console.log('Error in activatedPollEvent', error)
      return false
    }
  }

  const didNotAnswerPoll = async (): Promise<boolean> => {
    try {
      const response = await fetch(
        URLS.unboxing_api + 'event/survey/check/user', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + await getAccessTokenFromAsyncStorage()
        }
      })

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }

      const answeredPoll = await response.text()
      console.log('didNotAnswerPoll answeredPoll', answeredPoll)

      if (answeredPoll === 'false') {
        return true
      } else {
        return false
      }
    } catch (error) {
      console.log('Error in didNotAnswerPoll', error)
      return false
    }
  }

  const goToStorage = async () => {
    if (await activatedPollEvent() && await didNotAnswerPoll()) {
      setIsLoading(false)
      navigation.replace('PollInit')
    } else {
      setIsLoading(false)
      navigation.replace('Main', {screen: 'Storage'})
    }
  }

  return (
    <OpenResultTemplate 
      onPressGoToStorage={() => {
        setIsLoading(true)
        goToStorage()
      }}
      openResultData={openResultData || []}
      isLoading={isLoading}
    />
  )
}

export default OpenResultPage
