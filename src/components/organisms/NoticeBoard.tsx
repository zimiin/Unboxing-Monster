import React, { useState, useRef } from "react"
import {
  View,
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import NoticeItem from '@components/molecules/NoticeItem'
import { SCREEN_WIDTH } from "@constants/figure"
import { COLORS } from "@constants/colors"
import { Notice } from "@constants/types"
import { openUrl } from "@src/utils/utils"

const openIntroModalUrl = 'https://open.Intro.Modal'
const manualModal = 'https://user-images.githubusercontent.com/45932570/140607004-e3187a57-bbe8-42ce-90da-dfc03589d466.png'

const defaultNotice: Notice[] = [{
  id: 0,
  imgUrl: 'https://user-images.githubusercontent.com/45932570/129535240-50cb4e7b-fb8c-4315-9bfc-6a79a3b7d425.png',
  srcUrl: openIntroModalUrl
}]

interface Props {
  noticeData?: Notice[],
  openIntroModal?: () => void,
  openManualModal?: () => void,
}

const NoticeBoard = (props: Props) => {
  const isCarousel = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const renderItem = ({item}: {item: Notice}) => {
    let onPress: () => void

    if (item.srcUrl === openIntroModalUrl) {
      onPress = props.openIntroModal ? props.openIntroModal : () => console.log('No openModal function passed')
    } else if (item.srcUrl === manualModal) {
      onPress = props.openManualModal ? props.openManualModal : () => console.log('No openModal function passed')
    } else {
      onPress = () => openUrl(item.srcUrl)
    }

    return (
      <NoticeItem
        id={item.id}
        image={{uri: item.imgUrl}}
        onPress={onPress}
      />
    )
  }

  const noticeDataToPass = props.noticeData?.length === 0 || props.noticeData === undefined ? defaultNotice : props.noticeData

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={noticeDataToPass}
        renderItem={renderItem}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        inactiveSlideShift={0}
        inactiveSlideScale={1}
        useScrollView={true}
        onSnapToItem={(index) => setActiveSlide(index)}
        style={{
          position: 'relative',
        }}
      />

      <Pagination
        dotsLength={props.noticeData ? props.noticeData.length : 1}
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
          backgroundColor: COLORS.main,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
    </View>
  )
}

export default NoticeBoard