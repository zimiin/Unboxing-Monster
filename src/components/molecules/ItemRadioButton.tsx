import CheckBox from '@components/atoms/button/CheckBox'
import Bold from '@components/atoms/typography/Bold'
import { scale } from '@constants/figure'
import { defaultBox } from '@constants/images'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  Image,
  ImageSourcePropType,
} from 'react-native'

export interface ItemRadioButtonProps extends ViewProps{
  id: number,
  image: ImageSourcePropType,
  name: string,
  price: number,
  checked: boolean,
  onPress?: () => void,
}

const ItemRadioButton = (props: ItemRadioButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.style]}
    >
      <Image
        source={props.image || defaultBox}
        style={styles.image}
      />

      <View style={styles.namePriceContainer}>
        <Bold
          numberOfLines={2}
          ellipsizeMode='tail'
          style={styles.name}
        >
          {props.name || ''}
        </Bold>

        <Text style={styles.price}>
          {props.price ? props.price.toLocaleString() + ' 원' : '0 원'}
        </Text>
      </View>

      <View style={styles.radioButtonContainer}>
        <CheckBox
          checked={props.checked}
        />
      </View>
    </TouchableOpacity>
  )
}

export default ItemRadioButton

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: scale(72),
    height: scale(72),
    borderRadius: scale(12),
  },
  namePriceContainer: {
    marginHorizontal: scale(28),
    flex: 1,
  },
  name: {
    fontSize: scale(14),
    letterSpacing: -0.35,
    flex: 1,
    marginTop: 5,
  },
  price: {
    color: 'rgba(6, 6, 6, 0.5)',
    fontSize: scale(14),
    letterSpacing: -0.35,
    marginBottom: 5,
  },
  radioButtonContainer: {
    justifyContent: 'center',
  }
})
