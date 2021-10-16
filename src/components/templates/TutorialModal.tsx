import React, { ReactNode } from "react"
import {
  Dimensions,
  ImageSourcePropType,
  Modal,
  Text,
} from 'react-native'
import { Dispatch, SetStateAction } from 'react'
import Swiper from 'react-native-swiper'
import { IMAGES } from '@constants/images'
import SwipeImage from '@components/atoms/SwipeImage'
import SwipeDot from '@components/atoms/SwipeDot'
import Bold from '@components/atoms/typography/Bold'
import SwiperSlide from '@components/organisms/SwiperSlide'
import Carousel from "react-native-snap-carousel"
import { SCREEN_WIDTH } from "@constants/figure"

type TutorialModalProps = {
  modalVisible: boolean
  onRequestClose: () => void,
}

type SlideItem = {
  image: ImageSourcePropType, 
  content: ReactNode
}

const slideData: SlideItem[] = [
  {
    image: IMAGES.tutorial_01,
    content: (
      <>
        <Bold>UNBOXING</Bold>
        <Text>은</Text>
        <Text>두 가지의 구매방식을</Text>
        <Text>지원해요</Text>
      </>
    )
  },
  {
    image: IMAGES.tutorial_02,
    content: (
      <>
        <Text>만들어진 상품</Text>
        <Text>구매하기</Text>
      </>
    )
  },
  {
    image: IMAGES.tutorial_03,
    content: (
      <>
        <Text>직접 조합하여</Text>
        <Text>구매하기</Text>
      </>
    )
  }, 
  {
    image: IMAGES.tutorial_04,
    content: (
      <>
        <Text>이제</Text>
        <Bold>UNBOXING</Bold><Text>을</Text>
        <Text>즐겨보세요!</Text>
      </>
    )
  },
]

const TutorialModal = (props: TutorialModalProps)  => {
  const slideItem = (item: { item: SlideItem, index: number }) => {
    const isLastItem = item.index === slideData.length - 1

    return (
      <SwiperSlide
        image={item.item.image}
        onPressFn={props.onRequestClose}
        useEndBtn={isLastItem ? true : undefined}
        endBtnText={isLastItem ? '시작하기' : undefined}
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
      onRequestClose={props.onRequestClose}
    >
      {/* <Swiper 
        showsButtons={true}
        loop={false} 
        nextButton={<SwipeImage source={IMAGES.btn_next}/>}
        prevButton={<SwipeImage source={IMAGES.btn_prev}/>}
        dot={
          <SwipeDot backgroundColor={'#eef1f2'}/>
        }
        activeDot={
          <SwipeDot backgroundColor={'#29a3ff'}/>
        }
        dotStyle={{position: 'absolute', bottom: Dimensions.get('window').height * (148 / 740)}}
      > */}
      {/*
        <SwiperSlide image={IMAGES.tutorial_01} onPressFn={props.onRequestClose}>
          <>
            <Bold>UNBOXING</Bold><Text>은</Text>
            <Text>두 가지의 구매방식을</Text>
            <Text>지원해요</Text>
          </>
        </SwiperSlide>

        <SwiperSlide image={IMAGES.tutorial_02} onPressFn={props.onRequestClose}>
          <>
            <Text>만들어진 상품</Text>
            <Text>구매하기</Text>
          </>
        </SwiperSlide>
        
        <SwiperSlide image={IMAGES.tutorial_03} onPressFn={props.onRequestClose}>
          <>
            <Text>직접 조합하여</Text>
            <Text>구매하기</Text>
          </>
        </SwiperSlide>

        <SwiperSlide image={IMAGES.tutorial_03} onPressFn={props.onRequestClose} useEndBtn={true} endBtnText={'시작하기'}>
          <>
            <Text>이제</Text>
            <Bold>UNBOXING</Bold><Text>을</Text>
            <Text>즐겨보세요!</Text>
          </>
        </SwiperSlide>*/}

    {/* </Swiper>  */}
      
      <Carousel
        data={slideData}
        renderItem={slideItem}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
      />
    </Modal>
  )
}

export default TutorialModal
