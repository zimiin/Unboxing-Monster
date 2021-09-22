import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import {
  Text,
  View,
} from 'react-native'

const BoxPriceInfo = ({ price, style }: { price?: number, style?: ViewStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.priceText}>
        {price?.toLocaleString() || ''}
      </Text>

      <Text style={styles.wonText}>
        원
      </Text>
    </View>
  )
}

export default BoxPriceInfo

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  priceText: {
    fontSize: 16,
    fontWeight: "500",
  },
  wonText: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 3,
  }
})