import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)
import { carouselItem } from '../../types';

const CarouselCardItem = ({ item, index }: { item: carouselItem; index: number }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
    </View>
  )
}

export default CarouselCardItem;

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