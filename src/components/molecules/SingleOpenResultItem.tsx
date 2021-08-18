import React from 'react'
import {
  View,
  Text,
  ImageSourcePropType,
  StyleSheet,
  Platform,
  Image,
} from 'react-native'
import { SCREEN_HEIGHT } from '@constants/figure'
import { scale } from 'react-native-size-matters'
import Bold from '@components/atoms/typography/Bold'

export interface OpenResultItem {
  key: number,
  image: ImageSourcePropType,
  name: string,
  price: number
}

const SingleOpenResultItem = (props: OpenResultItem) => {
  return (
    <View
      style={[
        styles.container,
        Platform.OS === 'ios' ? styles.iosShadow : styles.androidShadow
      ]}
    >
      <Image
        source={props.image}
        style={styles.image}
      />

      <Bold
        numberOfLines={1}
        style={styles.name}
      >
        {props.name}
      </Bold>

      <Text style={styles.price}>
        {props.price.toLocaleString()} 원
      </Text>
    </View>
  )
}

export default SingleOpenResultItem

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 138 / 720,
    width: scale(216),
    height: scale(220),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(22),
  },
  iosShadow: {
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  androidShadow: {
    elevation: 12,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  image: {
    width: scale(112),
    height: scale(112),
    borderRadius: 12,
  },
  name: {
    width: '100%',
    marginTop: scale(18),
    fontSize: 14,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#060606',
    marginTop: 4,
  }
})
