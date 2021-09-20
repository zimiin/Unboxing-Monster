import React from 'react'
import { HomeProps } from '@constants/navigationTypes'
import { useState, useContext } from 'react'
import { CartContext } from '@src/stores/CartContext'
import { useEffect } from 'react'
import HomeTemplate from '@components/templates/HomeTemplate'
import { Box, Notice } from '@constants/types'
import { NoticeItemProps } from '@components/molecules/NoticeItem'
import { Linking } from 'react-native'
import { BoxItemProps } from '@components/molecules/BoxItem'
import { URLS } from '@constants/urls'
import { printAsyncStorage } from '@src/utils/loginUtils'
import { IMAGES } from '@constants/images'

const HomePage = ({route, navigation}: HomeProps) => {
  const [{ cart }, { }] = useContext(CartContext)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [noticeData, setNoticeData] = useState<NoticeItemProps[]>()
  const [popularBoxData, setPopularBoxData] = useState<BoxItemProps[]>()
  const [allBoxData, setAllBoxData] = useState<BoxItemProps[]>()
  const [refreshing, setRefreshing] = useState<boolean>(true)
  const [throttled, setThrottled] = useState<boolean>(false)

  const openUrl = async (url: string) => {
    const supported = await Linking.canOpenURL(url)
    
    if (supported) {
      Linking.openURL(url)
    } else {
      console.log("Don't know how to open URI: " + url)
    }
  }

  const setNoticeDataState = async () => {
    try {
      const url = URLS.unboxing_api + 'notice'
      const response = await fetch(url)
      
      const json = await response.json()

      if (response.status !== 200) {
        throw 'Response status: ' + response.status 
        + ', message: ' + json
        + ', url: ' + response.url
      }
      
      const notices: NoticeItemProps[] = json.map(
        (notice: Notice, index: number) => {
          let onPress: () => void

          if (index === 0) {
            onPress = () => setModalVisible(true)
          } else {
            onPress = () => openUrl(notice.srcUrl)
          }

          return {
            index: index,
            image: {uri: notice.imgUrl},
            onPress: onPress
          }
        }
      )

      setNoticeData(notices)
    } catch (error) {
      console.log('Error executing setNoticeDataState')
      console.log(error)
    }
  }

  const setPopularBoxDataState = async () => {
    try {
      const url = URLS.unboxing_api + 'box/popular'
      const response = await fetch(url)
      const json = await response.json()

      if (response.status !== 200) {
        throw 'Reponse status: ' + response.status
        + ', url: ' + response.url
        + ', message: ' + json.message
      }

      const popularBoxes: BoxItemProps[] = json.map(
        (box: Box) => {
          return {
            key: box.id,
            image: box.isLocal ? IMAGES[box.image] : {uri: box.image},
            name: box.title,
            price: box.price,
            onPress: () => navigation.push('BoxInfo', { boxId: box.id })
          }
        }
      )

      setPopularBoxData(popularBoxes)
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

      const boxes: BoxItemProps[] = json.map(
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
    
    setNoticeDataState()
    setPopularBoxDataState()
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
      popularBoxData={popularBoxData || []}
      customBoxData={popularBoxData || []}
      allBoxData={allBoxData || []} 
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      onRefresh={setDatas}
      refreshing={refreshing}
    />
  )
}

export default HomePage

