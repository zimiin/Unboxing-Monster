import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  ViewProps,
} from 'react-native'
import Bold from '@components/atoms/typography/Bold'
import { scale } from '@constants/figure'
import { defaultBox } from '@constants/images'

export interface ItemInfoRowProps extends ViewProps {
  image: ImageSourcePropType,
  name: string,
  price: number,
}

const ItemInfoRow = (props: ItemInfoRowProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={props.image || defaultBox}
        style={styles.image}
      />

      <View style={styles.namePriceContainer}>
        <Bold
          numberOfLines={2}
          ellipsizeMode='tail'
          style={styles.name}
        >
          {props.name || ''}
        </Bold>

        <Text style={styles.price}>
          {props.price ? props.price.toLocaleString() + ' 원' : '0 원'}
        </Text>
      </View>
    </View>
  )
}

export default ItemInfoRow

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  namePriceContainer: {
    marginHorizontal: scale(28),
    flex: 1,
  },
  name: {
    fontSize: 14,
    letterSpacing: -0.35,
    lineHeight: 20,
    flex: 1,
    marginTop: 5,
  },
  price: {
    color: 'rgba(6, 6, 6, 0.5)',
    fontSize: 14,
    letterSpacing: -0.35,
    marginBottom: 5,
    fontFamily: 'NotoSansCJKkr-Regular',
    lineHeight: 20,
  },
  image: {
    width: scale(72),
    height: scale(72),
    borderRadius: scale(12),
  },
})
