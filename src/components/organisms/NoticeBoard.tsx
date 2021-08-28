import React, { useState, useRef } from "react"
import {
  View,
} from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import NoticeItem, { NoticeItemProps } from '@components/molecules/NoticeItem'
import { SCREEN_WIDTH } from "@constants/figure"
import { COLORS } from "@constants/colors"

const defaultNotice: NoticeItemProps[] = [{
  id: 0,
  image: {uri: 'https://user-images.githubusercontent.com/45932570/129535240-50cb4e7b-fb8c-4315-9bfc-6a79a3b7d425.png'},
  onPress: () => console.log('Notice is pressed')
}]

interface Props {
  noticeData: NoticeItemProps[] | undefined
}

const NoticeBox = (props: Props) => {
  const isCarousel = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={props.noticeData || defaultNotice}
        renderItem={NoticeItem}
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

export default NoticeBox