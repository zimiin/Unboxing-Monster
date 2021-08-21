import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import FastImage from 'react-native-fast-image'

const ItemInfoImage = ({ image, title, price }: { image: string, title: string, price: number }) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: image }}
        style={styles.image}
        resizeMode='contain'
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.priceBlock}>
        <Text style={styles.priceTitle}>
          {"정가 "}
        </Text>
        <Text style={styles.price}>
          {price.toLocaleString() + " 원"}
        </Text>
      </Text>
    </View>
  )
}

export default ItemInfoImage

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 296,
  },
  image: {
    marginTop: 48,
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 27,
    color: '#060606',
    letterSpacing: -0.45,
  },
  priceBlock: {
    marginTop: 5,
  },
  priceTitle: {
    fontSize: 16,
    color: '#060606',
    letterSpacing: -0.45,
  },
  price: {
    fontSize: 18,
    color: '#060606',
    letterSpacing: -0.45,
  }
})