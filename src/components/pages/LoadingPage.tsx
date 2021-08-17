import LoadingTemplate from '@components/templates/LoadingTemplate'
import { LoadingProps } from '@constants/navigationTypes'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
  View,
  Text,
} from 'react-native'

const LoadingPage = ({route, navigation}: LoadingProps) => {
  useEffect(() => {
    const parseStringArray = async (str: string) => {
      str = str.replace(/'/g, '\"')
      str = str.replace(/ /g, ',')
      
      const arr: string[] = JSON.parse(str)
      return arr.map(strNum => parseInt(strNum))
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
          // TODO 블록체인 오류 안내 띄우기
        }
        
        if (response.status !== 200) {
          const json = await response.json()
          console.log(url)
          throw json.message
        }
        
        const result = await parseStringArray(await response.text())
        navigation.push('Opening', { result: result })
      } catch (error) {
        console.error(error)
      }
    }

    requestBoxOpen()
  }, [])

  return (
    <LoadingTemplate  
      
    />
  )
}

export default LoadingPage
