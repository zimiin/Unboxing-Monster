import React from 'react'
import { HomeProps } from '@constants/navigationTypes'
import { useState, useContext } from 'react'
import { CartContext } from '@src/stores/CartContext'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HomeTemplate from '@components/templates/HomeTemplate'
import { Box, Notice } from '@constants/types'
import { NoticeItemProps } from '@components/molecules/NoticeItem'
import { Linking } from 'react-native'
import { BoxItemProps } from '@components/molecules/BoxItem'
import debounce from 'lodash.debounce'
import { useCallback } from 'react'

const HomePage = ({route, navigation}: HomeProps) => {
  const [{ cart }, { modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll }] = useContext(CartContext)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [noticeData, setNoticeData] = useState<NoticeItemProps[]>()
  const [popularBoxData, setPopularBoxData] = useState<BoxItemProps[]>()
  const [allBoxData, setAllBoxData] = useState<BoxItemProps[]>()
  const [refreshing, setRefreshing] = useState<boolean>(true)

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
      const url = 'http://3.37.238.160/notice'
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
      const url = 'http://3.37.238.160/box/popular'
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
            image: {uri: box.image},
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
      const url = 'http://3.37.238.160/box'
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
            image: { uri: box.image },
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

  const printAsyncStorage = async () => {
    const token = await AsyncStorage.getItem('@access_token')
    console.log('@access_token: ', token)
  }

  const setDatas = async () => {
    console.log('set datas')
    setRefreshing(true)
    await setNoticeDataState()
    await setPopularBoxDataState()
    await setAllBoxDataState()
    setRefreshing(false)
  }

  const debouncedSetDatas = useCallback(
    debounce(setDatas, 3000)
  , [])

  useEffect(() => {
    printAsyncStorage()
    setDatas()
  }, [])

  return (
    <HomeTemplate
      onPressSearchBar={() => navigation.push('Search')}
      onPressCart={() => navigation.push('Cart')}
      cartItemCount={cart.size > 0 ? cart.size : undefined}
      noticeData={noticeData || []}
      popularBoxData={popularBoxData || []}
      customBoxData={popularBoxData || []}
      allBoxData={allBoxData || []} 
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      onRefresh={debouncedSetDatas}
      refreshing={refreshing}
    />
  )
}

export default HomePage

