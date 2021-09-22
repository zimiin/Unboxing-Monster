import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageSourcePropType,
} from 'react-native';
import { SCREEN_WIDTH } from '@constants/figure';

export interface Props {
  key: number,
  image: ImageSourcePropType,
  name: string,
  price: number,
  onPress?: () => void,
}

const BoxItem = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
    <Image
      source={props.image}
      style={styles.image}
    />

      <Text style={styles.name}>
        {props.name}
      </Text>

      <Text style={styles.price}>
        {props.price.toLocaleString()}원
      </Text>
    </TouchableOpacity>
  );
}

export default BoxItem

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH * (5 / 12),
    height: SCREEN_WIDTH * (5 / 12),
    borderRadius: 10,
    borderWidth: 0.07,
    resizeMode: 'contain'
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