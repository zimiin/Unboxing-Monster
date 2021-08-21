import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import { Box } from '@constants/types'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
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
          {item.price.toLocaleString()}원
      </Text>
    </TouchableOpacity>
  );
}

export default BoxItem

const styles = StyleSheet.create({
  image: {
    width: windowWidth * (5 / 12),
    height: windowWidth * (5 / 12),
    borderRadius: 10,
    borderWidth: 0.07
  },
  name: {
    marginTop: 14,
    fontWeight: 'bold',
    fontSize: 14,
  },
  price: {
    fontFamily: 'GmarketSansTTFLight',
    marginTop: 5,
    color: '#060606',
    fontSize: 12,
  }
})