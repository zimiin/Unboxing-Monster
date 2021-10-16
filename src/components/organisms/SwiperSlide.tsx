import React, { ReactNode } from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
} from 'react-native'
import { IMAGES } from '@constants/images'
import { scale, verticalScale } from '@constants/figure'

const SwiperSlide = ({ 
  image, 
  children, 
  onPressFn, 
  useEndBtn, 
  isFirstSlide, 
  isLastSlide, 
  endBtnText,
  index,
  onPressArrow,
}: {
  image: ImageSourcePropType, 
  children: ReactNode,
  isFirstSlide?: boolean,
  isLastSlide?: boolean,
  useEndBtn?: boolean,
  endBtnText?: string
  onPressFn: () => void,
  index: number,
  onPressArrow: (nextSlide: number) => void,
}) => {
  return (
    <View 
      style={styles.slide}
    >
      <TouchableOpacity 
        style={styles.close_btn_img} 
        onPress={onPressFn}
      >
        <Image 
          source={IMAGES.close_modal}
        />
      </TouchableOpacity>

      <Image 
        source={image} 
        style={styles.image}
      />
        
      <View
        style={styles.textContainer}
      >
        {children}
      </View>

      {useEndBtn ?
        <TouchableOpacity 
          style={styles.done_btn}
          onPress={onPressFn}
        >
          <Text 
            style={styles.done_btn_text}
          >
            {endBtnText}
          </Text>
        </TouchableOpacity>
        : 
        null}
      
      {isFirstSlide ?
        undefined
        :
        <TouchableOpacity
          style={styles.moveButton}
          onPress={() => {
            onPressArrow(index - 1)
          }}
        >
          <Image
            source={IMAGES.btn_prev}
          />
        </TouchableOpacity>
      }

      {isLastSlide ?
        undefined
        :
        <TouchableOpacity
          style={[
            styles.moveButton,
            styles.rightButton
          ]}
          onPress={() => {
            onPressArrow(index + 1)
          }}
        >
          <Image
            source={IMAGES.btn_next}
          />
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  close_btn_img: {
    alignSelf: 'flex-end',
    marginRight: scale(17),
    marginTop: verticalScale(12),
    width: verticalScale(32),
    height: verticalScale(32),
  },
  image: {
    marginTop: verticalScale(64),
    width: scale(360), 
    height: verticalScale(296),
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: verticalScale(13),
    alignItems: 'center',
  },
  done_btn: {
    position: 'absolute',
    bottom: verticalScale(60),
    height: verticalScale(48), 
    width: scale(312),
    borderRadius: verticalScale(6),
    alignSelf: 'center',
    backgroundColor: '#29a3ff', 
    alignItems:'center',
    justifyContent:'center',
  },
  done_btn_text: {
    fontSize: verticalScale(14), 
    color: '#fff', 
    fontFamily: 'NotoSansCJKkr-Bold',
    lineHeight: verticalScale(26),
  },
  moveButton: {
    width: scale(24),
    height: scale(24),
    position: 'absolute',
    top: verticalScale(268),
    marginHorizontal: scale(12),
  },
  rightButton: {
    right: scale(12),
  }
})

export default SwiperSlide

