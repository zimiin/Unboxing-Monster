import { SCREEN_HEIGHT, SCREEN_WIDTH, verticalScale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React, { ReactNode, useState } from 'react'
import { Image, Modal, TouchableOpacity, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

interface Props {
  modalVisible: boolean,
  onRequestClose: () => void,
  slideData: ReactNode[],
}

const SwiperModal = (props: Props) => {
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const slideItem = (item: { item: ReactNode, index: number }) => {
    return (
      <View>
        {item.item}
      </View>
    )
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      presentationStyle="formSheet"
      visible={props.modalVisible}
      onRequestClose={() => {
        setActiveSlide(0)
        props.onRequestClose()
      }}
    >
      <Carousel
        data={props.slideData || []}
        renderItem={slideItem}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        onSnapToItem={(index) => setActiveSlide(index)}
      />

      <Pagination
        dotsLength={props.slideData?.length || 0}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          width: '100%',
          position: 'absolute',
          bottom: verticalScale(20),
          paddingVertical: 0,
        }}
        dotColor={'black'}
        inactiveDotColor={'white'}
      />

      <TouchableOpacity
        onPress={() => {
          props.onRequestClose()
          setActiveSlide(0)
        }}
        style={{
          position: 'absolute',
          top: 17,
          right: 17,
        }}
      >
        <Image
          source={IMAGES.x}
          style={{
            width: 32,
            height: 32,
          }}
        />
      </TouchableOpacity>
    </Modal>
  )
}

export default SwiperModal
