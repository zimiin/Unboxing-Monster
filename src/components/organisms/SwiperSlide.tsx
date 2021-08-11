import React from 'react'
import { Dispatch, SetStateAction } from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageSourcePropType
} from 'react-native'

import { IMAGES } from '@constants/images'

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
  );
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
    lineHeight: 31.5,
    fontSize: 20,
    bottom: 211.5,
    textAlign: 'center'
  },
  imageContainer: {
    position: 'absolute', 
    top: 156, 
    paddingTop: 30,
  },
  image: {
    width: 260, 
    height: 260,
  },
  close_btn_img: {
    position: 'absolute',
    right: 17,
    top: 36,
  },
  done_btn: {
    bottom: -280, 
    backgroundColor: '#29a3ff', 
    height: 48, 
    width: 312,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 6,
  },
  done_btn_text: {
    fontSize:14, 
    color: '#fff', 
    fontWeight: 'bold'
  }
})

export default SwiperSlide

