import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Text,
  View,
} from 'react-native'

const BoxPriceInfo = ({ price }: { price: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>
        {price}
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