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
      <ItemInfoRow
        image={props.image}
        name={props.name}
        price={props.price}
      />

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
  radioButtonContainer: {
    justifyContent: 'center',
  }
})
