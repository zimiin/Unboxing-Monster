import CheckBox from '@components/atoms/button/CheckBox'
import { scale } from '@constants/figure'
import React from 'react'
import ItemInfoRow from '@components/molecules/ItemInfoRow'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  ImageSourcePropType,
  Image,
} from 'react-native'
import { IMAGES } from '@constants/images'

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
      <ItemInfoRow
        image={props.image}
        name={props.name}
        price={props.price}
      />

      <View style={styles.radioButtonContainer}>
        <Image
          source={props.checked ? IMAGES.checkBox_checked : IMAGES.checkBox_unchecked}
          style={{ width: 16, height: 16 }}
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
  radioButtonContainer: {
    justifyContent: 'center',
  }
})
