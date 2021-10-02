import React from 'react'
import { StyleSheet } from 'react-native'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType
} from 'react-native'
import SubTitle from '@components/atoms/typography/SubTitle'

const BoxListItem = ({ image, title, price, onPress }: { image: string, title: string, price: number, onPress: () => void }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Image
          source={{ uri: image }}
          style={styles.image}
        />

        <View style={styles.name}>
          <SubTitle content={title} />
        </View>

        <Text style={styles.price}>
          정가 {price.toLocaleString()}원
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BoxListItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  name: {
    marginTop: 13,
    paddingHorizontal: 7,
  },
  price: {
    fontSize: 13,
    color: 'rgba(6, 6, 6, 0.5)',
    marginTop: 1,
    fontFamily: 'NotoSansCJKkr-Regular',
    lineHeight: 18,
    letterSpacing: -0.32
  }
})