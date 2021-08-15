import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'

import { Box } from '@constants/types'

const BoxItem = ({ item }: { item: Box }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BoxInfo', { boxId: item.id })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {item.title}
      </Text>

      <Text style={styles.price}>
        {item.price}원
      </Text>
    </TouchableOpacity>
  )
}

export default BoxItem

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 81,
  },
  name: {
    marginTop: 19,
    fontWeight: 'bold',
    fontSize: 14,
  },
  price: {
    marginTop: 1,
    color: '#060606',
    fontSize: 12,
  }
})