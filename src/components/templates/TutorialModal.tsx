import React from "react"
import {
  Modal,
} from 'react-native'
import { Dispatch, SetStateAction } from 'react'
import Swiper from 'react-native-swiper'
import { IMAGES } from '@constants/images'
import SwipeImage from '@components/atoms/SwipeImage'
import SwipeDot from '@components/atoms/SwipeDot'
import Bold from '@components/atoms/typography/Bold'
import SwiperSlide from '@components/organisms/SwiperSlide'


type TutorialModalProps = {
  modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
}


const TutorialModal = (props: TutorialModalProps)  => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      presentationStyle="formSheet"
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible)
      }}
    >
      <Swiper 
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
      >
        <SwiperSlide image={IMAGES.tutorial_01} onPressFn={props.setModalVisible}>
          <Bold>UNBOXING</Bold> 은{"\n"}두 가지의 구매방식을{"\n"}지원해요
        </SwiperSlide>
        <SwiperSlide image={IMAGES.tutorial_02} onPressFn={props.setModalVisible}>
          만들어진 상품{"\n"}구매하기
        </SwiperSlide>
        <SwiperSlide image={IMAGES.tutorial_03} onPressFn={props.setModalVisible}>
          직접 조합하여{"\n"}구매하기
        </SwiperSlide>
        <SwiperSlide image={IMAGES.tutorial_03} onPressFn={props.setModalVisible} useEndBtn={true} endBtnText={'시작하기'}>
          이제{"\n"}<Bold>UNBOXING</Bold> 을{"\n"}즐겨보세요!
        </SwiperSlide>
      </Swiper>
    </Modal>
  )
}

export default TutorialModal
