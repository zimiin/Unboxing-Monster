import Bold from '@components/atoms/typography/Bold'
import { COLORS } from '@constants/colors'
import { defaultBox } from '@constants/images'
import React from 'react'
import {
  View,
  Text,
  Image,
  ViewProps,
  ImageSourcePropType,
  StyleSheet,
} from 'react-native'
import { scale } from 'react-native-size-matters'

export interface PaymentBoxItemProps extends ViewProps {
  id?: number,
  image?: ImageSourcePropType,
  name?: string,
  count?: number,
  price?: number,
}

const PaymentBoxItem = (props: PaymentBoxItemProps) => {
  const { image, name, count, price, style, ...rest } = props

  return (
    <View style={[styles.container, style]}>
      <Image
        source={image || defaultBox}
        style={styles.image}
      />

      <View style={styles.centerView}>
        <Bold style={styles.name}>
          {name || ''}
        </Bold>

        <Text style={styles.count}>
          수량 {count || null}개
        </Text>
      </View>

      <View style={styles.rightView}>
        <Bold style={styles.price}>
          {price ? price.toLocaleString() + ' 원' : ''}
        </Bold>
      </View>
    </View>
  )
}

export default PaymentBoxItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: scale(78),
    height: scale(78),
    borderRadius: 4,
    marginRight: scale(13),
  },
  centerView: {
    justifyContent: 'center',
    flex: 1,
  },
  name: {
    fontSize: 15,
  },
  count: {
    color: COLORS.grey_text,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3,
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  price: {
    fontSize: 16,
    marginBottom: 3,
  }
})