import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native'
import Bold from '@components/atoms/typography/Bold'
import { scale } from 'react-native-size-matters'
import { OpenResultItem } from '@components/molecules/SingleOpenResultItem'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants/figure'

const MultipleOpenResultItem = (props: OpenResultItem) => {
  return (
    <View
      style={[
        styles.conatiner,
        Platform.OS === 'ios' ? styles.iosShadow : styles.androidShadow
      ]}
    >
      <View style={styles.imageName}>
        <Image
          source={props.image}
          style={styles.image}
        />

        <Bold
          numberOfLines={2}
          style={styles.name}
        >
          {props.name}
        </Bold>
      </View>

      <Text style={styles.price}>
        {props.price.toLocaleString()} 원
      </Text>
    </View>
  )
}

export default MultipleOpenResultItem

const styles = StyleSheet.create({
  conatiner: {
    width: SCREEN_WIDTH * 150 / 360,
    height: scale(232),
    borderRadius: 12,
    margin: 6,
    alignItems: 'center',
    position: 'relative',
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
  imageName: {
    marginTop: SCREEN_HEIGHT * 19 / 720,
    alignItems: 'center',
  },
  image: {
    width: scale(112),
    height: scale(112),
    borderRadius: 12,
  },
  name: {
    marginHorizontal: scale(17),
    textAlign: 'center',
    marginTop: SCREEN_HEIGHT * 12 / 720,
    fontSize: 14,
    lineHeight: 20,
  },
  price: {
    fontSize: 14,
    position: 'absolute',
    bottom: SCREEN_HEIGHT * 20 / 720,
  }
})
