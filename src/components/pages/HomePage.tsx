import React from 'react'
import { HomeProps } from '@constants/navigationTypes'
import { useState, useContext } from 'react'
import { CartContext } from '@src/stores/CartContext'
import { useEffect } from 'react'
import HomeTemplate from '@components/templates/HomeTemplate'
import { Box, Notice } from '@constants/types'
import { URLS } from '@constants/urls'
import { printAsyncStorage } from '@src/utils/loginUtils'

const HomePage = ({route, navigation}: HomeProps) => {
  const [{ cart }, { }] = useContext(CartContext)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [noticeData, setNoticeData] = useState<Notice[]>()
  const [popularBoxData, setPopularBoxData] = useState<Box[]>()
  const [customBoxData, setCustomBoxData] = useState<Box[]>()
  const [allBoxData, setAllBoxData] = useState<Box[]>()
  const [refreshing, setRefreshing] = useState<boolean>(true)
  const [throttled, setThrottled] = useState<boolean>(false)

  const getNoticeData = async (): Promise<Notice[] | undefined> => {
    try {
      const url = URLS.unboxing_api + 'notice'
      const response = await fetch(url)
      
      if (response.status !== 200) {
        const json = await response.json()
        throw 'Response status: ' + response.status + ', message: ' + json + ', url: ' + response.url
      }
      
      const notices: Notice[] = await response.json()

      return notices
    } catch (error) {
      console.log('Error in setNoticeDataState', error)
    }
  }

  const getPopularBoxData = async (): Promise<Box[] | undefined> => {
    try {
      const url = URLS.unboxing_api + 'box/popular'
      const response = await fetch(url)
      
      if (response.status !== 200) {
        const json = await response.json()
        throw 'Reponse status: ' + response.status + ', url: ' + response.url + ', message: ' + json.message
      }

      const popularBoxes: Box[] = await response.json()
      return popularBoxes
    } catch (error) {
      console.log('Error in setPopularBoxDataState', error)
    }
  }

  const getCustomBoxData = async (): Promise<Box[] | undefined> => {
    try {
      const url = new URL(URLS.unboxing_api + 'box/custom/random')
      url.searchParams.append('take', '5')
      
      const response = await fetch(url.toString())

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }

      const customBoxes: Box[] = await response.json()
      return customBoxes
    } catch (error) {
      console.log('Error in getCustomBoxData', error)
    }
  }

  const getAllBoxData = async (): Promise<Box[] | undefined> => {
    try {
      const url = URLS.unboxing_api + 'box'
      const response = await fetch(url)
      
      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }

      const boxes: Box[] = await response.json()
      return boxes
    } catch (error) {
      console.log('Error in getAllBoxData', error)
    }
  }

  const setDatas = async () => {
    if (throttled) {
      return
    }

    console.log('set datas')
    setThrottled(true)
    setRefreshing(true)
    
    getNoticeData().then(data => setNoticeData(data))
    getPopularBoxData().then(data => setPopularBoxData(data))
    getCustomBoxData().then(data => setCustomBoxData(data))
    getAllBoxData().then(data => setAllBoxData(data))
    
    setRefreshing(false)
    setTimeout(() => setThrottled(false), 3000)
  }

  useEffect(() => {
    printAsyncStorage()
    setDatas()
  }, [])

  return (
    <HomeTemplate
      onPressSearchBar={() => navigation.push('Search')}
      onPressCart={() => navigation.push('Cart')}
      cartItemCount={cart.size > 0 ? cart.size : undefined}
      noticeData={noticeData}
      popularBoxData={popularBoxData}
      customBoxData={customBoxData?.length === 0 || customBoxData === undefined ? popularBoxData : customBoxData}
      allBoxData={allBoxData}
      modalVisible={modalVisible}
      scorllerContent={''}
      setModalVisible={setModalVisible}
      onRefresh={setDatas}
      refreshing={refreshing}
      openIntroModal={() => setModalVisible(true)}
      onPressBoxItem={(boxId: number) => navigation.navigate('BoxInfo', {boxId: boxId})}
    />
  )
}

export default HomePage

