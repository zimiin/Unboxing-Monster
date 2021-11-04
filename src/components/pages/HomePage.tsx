import React from 'react'
import { HomeProps } from '@constants/navigationTypes'
import { useState, useContext } from 'react'
import { CartContext } from '@src/stores/CartContext'
import { useEffect } from 'react'
import HomeTemplate from '@components/templates/HomeTemplate'
import { Box, BoxId, ItemId, Notice, OpenResult } from '@constants/types'
import { URLS } from '@constants/urls'
import { printAsyncStorage } from '@src/utils/loginUtils'
import { getIsFirstUseFromStorage, setIsFirstUseFromStorage } from '@src/utils/asyncStorageUtils'
import { Text, TouchableOpacity } from 'react-native'

const HomePage = ({route, navigation}: HomeProps) => {
  const [{ cart }, { }] = useContext(CartContext)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [noticeData, setNoticeData] = useState<Notice[]>()
  const [popularBoxData, setPopularBoxData] = useState<Box[]>()
  const [customBoxData, setCustomBoxData] = useState<Box[]>()
  const [allBoxData, setAllBoxData] = useState<Box[]>()
  const [refreshing, setRefreshing] = useState<boolean>(true)
  const [throttled, setThrottled] = useState<boolean>(false)
  const [scrollerContent, setScrollerContent] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    getIsFirstUseFromStorage()
      .then(value => {
        if (value !== 'false') {
          setModalVisible(true)
        }
      })
  }, [])

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
      throw error
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
      throw error
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
      throw error
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
      throw error
    }
  }

  const makeResultString = async (results: OpenResult[]): Promise<string> => {
    try {
      let resultString: string = ''

      for (let result of results) {
        const user = result.user.nickname
        const item = result.item.title

        resultString += '    ✨ ' + user + '님이 ' + item + '에 당첨되셨습니다. ✨'
      }

      return resultString
    } catch (error) {
      console.log('Error in makeResultString', error)
      throw error
    }
  }

  const getScrollerContent = async (): Promise<string> => {
    try {
      const url = new URL(URLS.unboxing_api + 'open-result/')
      url.searchParams.append('take', '5')

      const response = await fetch(
        url.toString() , {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ' status ' + response.status + ', ' + json.message
      }
      
      const openResult: OpenResult[] = await response.json()
      const resultString = makeResultString(openResult)
      return resultString
    } catch (error) {
      console.log('Error in getScrollerContent', error)
      throw error
    }
  }

  const setDatas = async () => {
    if (throttled) {
      return
    }

    setThrottled(true)
    setRefreshing(true)
    
    getNoticeData().then(data => setNoticeData(data)).catch(error => console.log('Error in setDatas', error))
    getPopularBoxData().then(data => setPopularBoxData(data)).catch(error => console.log('Error in setDatas', error))
    getCustomBoxData().then(data => setCustomBoxData(data)).catch(error => console.log('Error in setDatas', error))
    getAllBoxData().then(data => setAllBoxData(data)).catch(error => console.log('Error in setDatas', error))
    getScrollerContent().then(data => setScrollerContent(data)).catch(error => console.log('Error in setDatas', error))
    
    setRefreshing(false)
    setTimeout(() => setThrottled(false), 3000)
  }

  useEffect(() => {
    printAsyncStorage()
    setDatas()
    .finally(() => setIsLoading(false))
  }, [])

  const closeTutorialModal = () => {
    setModalVisible(false)
    setIsFirstUseFromStorage(false)
  }

  return (
    <>
      <HomeTemplate
        isLoading={isLoading}
        onPressSearchBar={() => navigation.push('Search')}
        onPressCart={() => navigation.push('Cart')}
        cartItemCount={cart.size > 0 ? cart.size : undefined}
        noticeData={noticeData}
        popularBoxData={popularBoxData}
        customBoxData={customBoxData?.length === 0 || customBoxData === undefined ? popularBoxData : customBoxData}
        allBoxData={allBoxData}
        modalVisible={modalVisible}
        scorllerContent={scrollerContent || ''}
        closeTutorialModal={closeTutorialModal}
        onRefresh={setDatas}
        refreshing={refreshing}
        openIntroModal={() => setModalVisible(true)}
        onPressBoxItem={(boxId: number) => navigation.navigate('BoxInfo', {boxId: boxId})}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Open', {screen: 'Loading', params: {boxId: 0, count: 0}})}
      >
        <Text>Loading Page</Text>
      </TouchableOpacity>
    </>
  )
}

export default HomePage

