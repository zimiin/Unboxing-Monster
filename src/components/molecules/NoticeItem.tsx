import React from 'react'
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { ImageSourcePropType } from 'react-native'
import { SCREEN_WIDTH, DESIGN_WIDTH } from '@constants/figure'

export interface Props {
  id: number,
  image: ImageSourcePropType,
  onPress: () => void
}

const NoticeItem = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Image
        source={props.image}
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