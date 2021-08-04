import React, { Component } from "react";
import {
  Modal,
} from 'react-native';
import { Dispatch, SetStateAction } from 'react'
import Swiper from 'react-native-swiper'
import { IMAGES } from '../../constants/images'
import SwipeImage from '../atoms/SwipeImage'
import SwipeDot from '../atoms/SwipeDot'
import Bold from '../atoms/Bold'
import SwiperSlide from '../organisms/SwiperSlide'


type IntroModalProps = {
  modalVisible: boolean
  setModalVisible: Dispatch<SetStateAction<boolean>>
}


const IntroModal = (props: IntroModalProps)  => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      presentationStyle="formSheet"
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(!props.modalVisible);
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
        <SwiperSlide image={IMAGES.intro_01} onPressFn={props.setModalVisible}>
          <Bold>UNBOXING</Bold> 은 어떻게{"\n"}투명하고 공정한{"\n"}랜덤박스를 제공할까요?
        </SwiperSlide>
        <SwiperSlide image={IMAGES.intro_02} onPressFn={props.setModalVisible}>
          모든 Box의 오픈 요청은{"\n"}블록체인에 기록 해요
        </SwiperSlide>
        <SwiperSlide image={IMAGES.intro_03} onPressFn={props.setModalVisible}>
          사전에 알수 없는{"\n"}미래의 블록 정보를 이용해서{"\n"}박스를 열어요
        </SwiperSlide>
        <SwiperSlide image={IMAGES.intro_03} onPressFn={props.setModalVisible} useEndBtn={true} endBtnText={'확인'}>
          모든 과정은{"\n"}블록체인에 남아 있어요
        </SwiperSlide>
      </Swiper>
    </Modal>
  )
}

export default IntroModal
