import React, { ReactNode } from 'react'
import { Dispatch, SetStateAction } from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
  Dimensions
} from 'react-native'

import { IMAGES } from '@constants/images'
import { scale, verticalScale } from '@constants/figure'

const SwiperSlide = ({image, children, onPressFn, useEndBtn, endBtnText}: {
  image: ImageSourcePropType, 
  children: ReactNode,
  onPressFn: Dispatch<SetStateAction<boolean>>,
  useEndBtn?: boolean,
  endBtnText?: string
}) => {
  return (
    <View 
      style={styles.slide}
    >
      <TouchableOpacity 
        style={styles.close_btn_img} 
        onPress={() => onPressFn(false)}
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
          onPress={() => onPressFn(false)}
        >
          <Text 
            style={styles.done_btn_text}
          >
            {endBtnText}
          </Text>
        </TouchableOpacity>
        : 
        null}
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
  },
  image: {
    marginTop: verticalScale(88),
    width: scale(360), 
    height: verticalScale(296),
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: verticalScale(13),
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
  }
})

export default SwiperSlide

