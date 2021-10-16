import React, { ReactNode, useState, useRef } from "react"
import {
  Modal,
  ImageSourcePropType,
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Dispatch, SetStateAction } from 'react'
import { IMAGES } from '@constants/images'
import Carousel, { Pagination } from "react-native-snap-carousel"
import { scale, SCREEN_WIDTH, verticalScale } from "@constants/figure"
import SwiperSlide from "@components/organisms/SwiperSlide"
import { COLORS } from "@constants/colors"

type IntroModalProps = {
  modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
  onRequestClose: () => void,
}

type SlideItem = {
  image: ImageSourcePropType,
  content: ReactNode
}

const IntroModal = (props: IntroModalProps)  => {
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const carousel = useRef<Carousel<SlideItem>>(null)

  const slideData: SlideItem[] = [
    {
      image: IMAGES.intro_01,
      content: (
        <>
          <View
            style={styles.flexRow}
          >
            <Text
              style={[
                styles.text,
                styles.boldText
              ]}
            >
              UNBOXING
            </Text>

            <Text
              style={styles.text}
            >
              {' 은 어떻게'}
            </Text>
          </View>

          <Text
            style={styles.text}
          >
            {'투명하고 공정한'}
          </Text>

          <Text
            style={styles.text}
          >
            {'랜덤박스를 제공할까요?'}
          </Text>
        </>
      )
    },
    {
      image: IMAGES.intro_02,
      content: (
        <>
          <Text
            style={styles.text}
          >
            {'모든 박스의 오픈 요청은'}
          </Text>

          <Text
            style={styles.text}
          >
            {'블록체인에 기록해요'}
          </Text>
        </>
      )
    },
    {
      image: IMAGES.intro_03,
      content: (
        <>
          <Text
            style={styles.text}
          >
            {'사전에 알 수 없는'}
          </Text>

          <Text
            style={styles.text}
          >
            {'미래의 블록 정보를 이용해서'}
          </Text>

          <Text
            style={styles.text}
          >
            {'박스를 열어요'}
          </Text>
        </>
      )
    },
    {
      image: IMAGES.intro_04,
      content: (
        <>
          <Text
            style={styles.text}
          >
            {'모든 과정은'}
          </Text>

          <Text
            style={styles.text}
          >
            {'블록체인에 남아있어요'}
          </Text>
        </>
      )
    },
  ]

  const slideItem = (item: { item: SlideItem, index: number }) => {
    const isFirstItem = item.index === 0
    const isLastItem = item.index === slideData.length - 1

    return (
      <SwiperSlide
        image={item.item.image}
        onPressFn={() => {
          props.onRequestClose()
          setActiveSlide(0)
        }}
        isFirstSlide={isFirstItem}
        isLastSlide={isLastItem}
        useEndBtn={isLastItem ? true : undefined}
        endBtnText={isLastItem ? '확인' : undefined}
        index={item.index}
        onPressArrow={(nextSlide: number) => {
          if (carousel.current) {
            carousel.current.snapToItem(nextSlide)
          }
        }}
      >
        {item.item.content}
      </SwiperSlide>
    )
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      presentationStyle="formSheet"
      visible={props.modalVisible}
      onRequestClose={() => {
        props.onRequestClose()
        setActiveSlide(0)
      }}
    >
      <Carousel
        data={slideData}
        renderItem={slideItem}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        onSnapToItem={(index) => setActiveSlide(index)}
        ref={carousel}
      />

      <Pagination
        dotsLength={slideData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.dotsContainer}
        dotStyle={styles.dot}
        dotColor={COLORS.main.toString()}
        inactiveDotColor={COLORS.grey_text.toString()}
      />
    </Modal>
  )
}

export default IntroModal

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: verticalScale(20),
    lineHeight: verticalScale(31.5),
    letterSpacing: verticalScale(-0.6),
    textAlign: 'center',
  },
  boldText: {
    fontFamily: 'GmarketSansTTFBold'
  },
  dotsContainer: {
    position: 'absolute',
    bottom: verticalScale(100),
    alignSelf: 'center',
  },
  dot: {
    width: scale(8),
    height: scale(8),
  }
})