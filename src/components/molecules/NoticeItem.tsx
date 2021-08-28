import React from 'react'
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { ImageSourcePropType } from 'react-native'
import { SCREEN_WIDTH, DESIGN_WIDTH } from '@constants/figure'

export interface NoticeItemProps {
  id: number,
  image: ImageSourcePropType,
  onPress: () => void
}

const NoticeItem = ({ item }: { item: NoticeItemProps }) => {
  return (
    <TouchableOpacity
      onPress={item.onPress}
    >
      <Image
        source={item.image}
        style={styles.image}
        resizeMode='contain'
      />
    </TouchableOpacity>
  )
}

export default NoticeItem

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH,
    height: 232 / DESIGN_WIDTH * SCREEN_WIDTH
  }
})