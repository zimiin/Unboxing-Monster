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
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    color: '#060606',
    fontFamily: 'GmarketSansTTFMedium',
    letterSpacing: -0.03,
    lineHeight: HEIGHT * (31.5 / 740),
    fontSize: 20,
    bottom: HEIGHT * (180 / 740),
    textAlign: 'center'
  },
  imageContainer: {
    position: 'absolute', 
    top: HEIGHT * (144 / 740), 
    paddingTop: 30,
  },
  image: {
    width: WIDTH * (260 / 360), 
    height: HEIGHT * (260 / 740),
  },
  close_btn_img: {
    position: 'absolute',
    right: WIDTH * (17 / 360),
    top: HEIGHT * (36 / 740),
  },
  done_btn: {
    position: 'absolute',
    bottom: HEIGHT * (60 / 740), 
    backgroundColor: '#29a3ff', 
    height: HEIGHT * (48 / 740), 
    width: WIDTH * (312 / 360),
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

