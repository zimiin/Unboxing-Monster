import Bold from '@components/atoms/typography/Bold'
import { COLORS } from '@constants/colors'
import { scale } from '@constants/figure'
import { defaultBox } from '@constants/images'
import React, { ReactNode } from 'react'
import {
  View,
  StyleSheet,
  Image,
  ViewProps,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

interface Props extends TouchableOpacityProps {
  boxImage?: ImageSourcePropType,
  children?: ReactNode
}

const GreyBackgroundBox = (props: Props) => {
  return (
    <TouchableOpacity 
      style={[styles.greyBox, props.style]}
      onPress={props.onPress}
    >
      <Image
        source={props.boxImage || defaultBox}
        style={styles.boxImage}
      />

      {props.children}
    </TouchableOpacity>
  )
}

export default GreyBackgroundBox

const styles = StyleSheet.create({
  greyBox: {
    width:scale(150),
    backgroundColor: COLORS.grey_box,
    zIndex: -1,
    borderRadius: scale(12),
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingTop: scale(75),
    paddingBottom: scale(20),
  },
  boxImage: {
    width: scale(102),
    height: scale(97),
    position: 'absolute',
    top: -scale(23),
    borderRadius: scale(8),
  },
})