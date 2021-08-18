import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { Notice } from '@constants/types'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = SLIDER_WIDTH

export interface NoticeItemProps {
  item: Notice,
  index: number,
  onPress: () => void
}

const NoticeItem = ({item}: {item: NoticeItemProps}) => {
  return (
    <View style={styles.container} key={item.index}>
      <TouchableOpacity
        onPress={item.onPress}
      >
        <Image
          source={{ uri: item.item.imgUrl }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  )
}

export default NoticeItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 244,
  },
})