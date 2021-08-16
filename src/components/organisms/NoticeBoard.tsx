import React, { useState, useRef } from "react"
import {
  View,
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import NoticeItem, { SLIDER_WIDTH, ITEM_WIDTH } from '@components/molecules/NoticeItem'
import { Notice } from "@constants/types"
import { useEffect } from "react"

const defaultNotice: Notice[] = [{
  id: 0,
  imgUrl: 'https://user-images.githubusercontent.com/45932570/129535240-50cb4e7b-fb8c-4315-9bfc-6a79a3b7d425.png',
  srcUrl: 'https://swmaestro.org'
}]

const NoticeBox = () => {
  const isCarousel = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [noticeData, setNoticeData] = useState<Notice[]>()

  const getNoticeData = async () => {
    let url = 'http://3.37.238.160/notice'
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (response.status === 200) {
      let json = await response.json()
      setNoticeData(json)
    } else {
      console.log('No reponse! url:', url)
    }
  }
  useEffect(() => {
    getNoticeData()
  }, [])

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={noticeData || defaultNotice}
        renderItem={NoticeItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        inactiveSlideScale={1}
        useScrollView={true}
        onSnapToItem={(index) => setActiveSlide(index)}
        style={{
          position: 'relative',
        }}
      />

      <Pagination
        dotsLength={noticeData ? noticeData.length : 1} // 여기에 보여줄 공지 개수
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          paddingVertical: 0,
          position: 'absolute',
          width: '100%',
          bottom: 32,
        }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
    </View>
  )
}

export default NoticeBox