import { scale } from '@constants/figure'
import { IMAGES } from '@constants/images'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageStyle,
} from 'react-native'

interface Props {
  style?: ImageStyle
}

const NoticeIcon = (props: Props) => {
  return (
    <Image
      source={IMAGES.notice}
      style={[styles.icon, props.style]}
    />
  )
}

export default NoticeIcon

const styles = StyleSheet.create({
  icon: {
    width: scale(88),
    height: scale(88)
  }
})