import React from 'react'
import { HomeProps } from '@constants/navigationTypes'
import { useState, useContext } from 'react'
import { CartContext } from '@src/stores/CartContext'
import { useEffect } from 'react'
import HomeTemplate from '@components/templates/HomeTemplate'
import { Box, Notice } from '@constants/types'
import { Props } from '@components/molecules/BoxItem'
import { URLS } from '@constants/urls'
import { printAsyncStorage } from '@src/utils/loginUtils'
import { IMAGES } from '@constants/images'

const HomePage = ({route, navigation}: HomeProps) => {
  const [{ cart }, { }] = useContext(CartContext)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [noticeData, setNoticeData] = useState<Notice[]>()
  const [popularBoxData, setPopularBoxData] = useState<Box[]>()
  const [allBoxData, setAllBoxData] = useState<Props[]>()
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

  const getPopularBoxData = async () => {
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

  const setAllBoxDataState = async () => {
    try {
      const url = URLS.unboxing_api + 'box'
      const response = await fetch(url)
      const json = await response.json()

      if (response.status !== 200) {
        throw 'Reponse status: ' + response.status
        + ', url: ' + response.url
        + ', message: ' + json.message
      }

      const boxes: Props[] = json.map(
        (box: Box) => {
          return {
            key: box.id,
            image: box.isLocal ? IMAGES[box.image] : { uri: box.image },
            name: box.title,
            price: box.price,
            onPress: () => navigation.push('BoxInfo', { boxId: box.id })
          }
        }
      )

      setAllBoxData(boxes)
    } catch (error) {
      console.log('Error in setAllBoxDataState', error)
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
    setAllBoxDataState()
    
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
      popularBoxData={[]}
      // customBoxData={popularBoxData || []}
      allBoxData={allBoxData || []} 
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      onRefresh={setDatas}
      refreshing={refreshing}
      openIntroModal={() => setModalVisible(true)}
    />
  )
}

export default HomePage

