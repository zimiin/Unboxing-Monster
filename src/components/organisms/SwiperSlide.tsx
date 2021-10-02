import React from 'react'
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

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const SwiperSlide = ({image, children, onPressFn, useEndBtn, endBtnText}: {
  image: ImageSourcePropType, 
  children: any, 
  onPressFn: Dispatch<SetStateAction<boolean>>,
  useEndBtn?: boolean,
  endBtnText?: string
}) => {
  return (
    <View style={styles.slide}>
      <TouchableOpacity 
        style={styles.close_btn_img} 
        onPress={() => onPressFn(false)}
      >
        <Image source={IMAGES.close_modal}/>
      </TouchableOpacity>

      <View style={styles.centerAlign}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image}/>
        </View>
        <Text style={styles.text}>{children}</Text>
        {useEndBtn ? 
            <TouchableOpacity style={styles.done_btn}
              onPress={() => onPressFn(false)}
            >
              <Text style={styles.done_btn_text}>{endBtnText}</Text>
            </TouchableOpacity> :
            null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  rightAlign: {
    alignItems: 'flex-end',
  },
  centerAlign: {
    alignItems: 'center',
  },
  text: {
    color: '#060606',
    fontFamily: 'GmarketSansTTFMedium',
    letterSpacing: -0.03,
    lineHeight: verticalScale(31.5),
    fontSize: 20,
    marginTop: verticalScale(25),
    textAlign: 'center'
  },
  imageContainer: {
    marginTop: verticalScale(122),
  },
  image: {
    width: scale(360), 
    height: verticalScale(296),
    resizeMode: 'contain',
  },
  close_btn_img: {
    position: 'absolute',
    right: scale(17),
    top: verticalScale(17),
    zIndex: 1,
  },
  done_btn: {
    position: 'absolute',
    bottom: -verticalScale(100),
    backgroundColor: '#29a3ff', 
    height: 48, 
    width: scale(312),
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 7,
  },
  done_btn_text: {
    fontSize: 14, 
    color: '#fff', 
    fontWeight: 'bold'
  }
})

export default SwiperSlide

