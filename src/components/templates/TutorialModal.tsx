import React, { ReactNode, useState, useRef } from "react"
import {
  ImageSourcePropType,
  Modal,
  Text,
  View,
  StyleSheet,
} from 'react-native'
import { IMAGES } from '@constants/images'
import SwiperSlide from '@components/organisms/SwiperSlide'
import Carousel, { Pagination } from "react-native-snap-carousel"
import { scale, SCREEN_WIDTH, verticalScale } from "@constants/figure"
import { COLORS } from "@constants/colors"

type TutorialModalProps = {
  modalVisible: boolean
  onRequestClose: () => void,
}

type SlideItem = {
  image: ImageSourcePropType, 
  content: ReactNode
}

const TutorialModal = (props: TutorialModalProps)  => {
  const [ activeSlide, setActiveSlide ] = useState<number>(0)
  const carousel = useRef<Carousel<SlideItem>>(null)
  
  const slideData: SlideItem[] = [
    {
      image: IMAGES.tutorial_welcome,
      content: (
        <>
          <Text
            style={styles.text}
          >
            {'반갑습니다!'}
          </Text>

          <Text
            style={styles.text}
          >
            {'저희는 SW 마에스트로 12기'}
          </Text>

          <Text
            style={styles.text}
          >
            {'꾸러기원정대 팀입니다.'}
          </Text>
        </>
      )
    },
    {
      image: IMAGES.tutorial_bow,
      content: (
        <>
          <Text
            style={styles.smallText}
          >
            {'이 앱은 저희 주제에 대한'}
          </Text>

          <Text
            style={styles.smallText}
          >
            {'사용자반응을 조사하기 위한 앱입니다.'}
          </Text>

          <Text
            style={styles.smallText}
          >
            {'아직 베타서비스라 부족한 점이 많지만'}
          </Text>

          <Text
            style={styles.smallText}
          >
            {'예쁘게 봐주세요 :)'}
          </Text>
        </>
      )
    },
    {
      image: IMAGES.tutorial_01,
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
              {' 은'}
            </Text>
          </View>

          <Text
            style={styles.text}
          >
            {'두 가지의 구매방식을'}
          </Text>

          <Text
            style={styles.text}
          >
            {'지원해요'}
          </Text>
        </>
      )
    },
    {
      image: IMAGES.tutorial_02,
      content: (
        <>
          <Text
            style={styles.text}
          >
            {'만들어진 상품'}
          </Text>

          <Text
            style={styles.text}
          >
            {'구매하기'}
          </Text>
        </>
      )
    },
    {
      image: IMAGES.tutorial_03,
      content: (
        <>
          <Text
            style={styles.text}
          >
            {'직접 조합하여'}
          </Text>

          <Text
            style={styles.text}
          >
            {'구매하기'}
          </Text>
        </>
      )
    },
    {
      image: IMAGES.tutorial_04,
      content: (
        <>
          <Text
            style={styles.text}
          >
            {'이제'}
          </Text>

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
              {' 을'}
            </Text>
          </View>

          <Text
            style={styles.text}
          >
            {'즐겨보세요!'}
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
        endBtnText={isLastItem ? '시작하기' : undefined}
        index={item.index}
        onPressArrow={(nextSlide: number) => {
          if (carousel.current) {
            carousel.current.snapToItem(nextSlide)
          }
        }}
        useCloseBtn={false}
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

export default TutorialModal

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
  smallText: {
    fontFamily: 'GmarketSansTTFMedium',
    fontSize: verticalScale(17),
    lineHeight: verticalScale(27),
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
