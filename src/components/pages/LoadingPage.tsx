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
