import React from 'react'
import { HomeProps } from '@constants/navigationTypes'
import { useState, useContext } from 'react'
import { CartContext } from '@src/stores/CartContext'
import { useEffect } from 'react'
import HomeTemplate from '@components/templates/HomeTemplate'
import { Box, BoxId, ItemId, Notice, OpenResult } from '@constants/types'
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
  const [scrollerContent, setScrollerContent] = useState<string>()

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

  const getOpenResultOf = async (boxId: BoxId, itemIds: ItemId[], skip: number = 0, take?: number): Promise<OpenResult[]> => {
    try {
      const url = new URL(URLS.unboxing_api + 'open-result/' + boxId)
      url.searchParams.append('skip', skip.toString())
      if (take) {
        url.searchParams.append('take', take.toString())
      }

      const response = await fetch(
        url.toString(), {
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

      const result: OpenResult[] = await response.json()
      const returnResult: OpenResult[] = []

      for (let resultValue of result) {
        const item = resultValue.itemId

        if (itemIds.find(itemId => itemId === item)) {
          returnResult.push(resultValue)
        }
      }

      return returnResult
    } catch (error) {
      console.log('Error in getOpenResultOf', error)
      throw error 
    }
  }

  const makeResultString = async (results: OpenResult[]): Promise<string> => {
    try {
      let resultString: string = ''

      for (let result of results) {
        const user = result.user.nickname
        const item = result.item.title

        console.log('user', user, 'item', item)
        resultString += '    ✨ ' + user + '님이 ' + item + '에 당첨되셨습니다. ✨'
        console.log(resultString)
      }

      return resultString
    } catch (error) {
      console.log('Error in makeResultString', error)
      throw error
    }
  }

  const getScrollerContent = async (): Promise<string> => {
    try {
      const boxItems: {boxId: BoxId, itemIds: ItemId[]}[] = [
        { boxId: 1, itemIds: [1] },
        { boxId: 2, itemIds: [6] },
        { boxId: 3, itemIds: [10] },
        { boxId: 4, itemIds: [15] },
        { boxId: 5, itemIds: [18] },
        { boxId: 6, itemIds: [24] }
      ]
      const openResult: OpenResult[] = []
      const resultCountPerBox = 1

      for (let boxItem of boxItems) {
        const result: OpenResult[] = await getOpenResultOf(boxItem.boxId, boxItem.itemIds)
        
        for (let i = 0; i < result.length && i < resultCountPerBox; i++) {
          openResult.push(result[i])
        }
      }

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
      scorllerContent={scrollerContent || ''}
      setModalVisible={setModalVisible}
      onRefresh={setDatas}
      refreshing={refreshing}
      openIntroModal={() => setModalVisible(true)}
      onPressBoxItem={(boxId: number) => navigation.navigate('BoxInfo', {boxId: boxId})}
    />
  )
}

export default HomePage

