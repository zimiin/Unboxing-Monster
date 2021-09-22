import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from 'react-native'
import CheckBox from '@components/atoms/button/CheckBox'
import SubTitle from '@components/atoms/typography/SubTitle'
import DeleteButton from '@components/atoms/button/DeleteButton'
import MinusButton from '@components/atoms/button/MinusButton'
import PlusButton from '@components/atoms/button/PlusButton'
import { scale } from 'react-native-size-matters'
import { defaultBox } from '@constants/images'

interface Props {
  checked: boolean,
  image?: ImageSourcePropType,
  name?: string,
  price?: number,
  count: number,
  onPressCheckBox: () => void,
  onPressX: () => void,
  onPressMinusButton: () => void,
  onPressPlusButton: () => void
}

const CartItem = (props: Props) => {
  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.cartItemInfoContainer}>
        <CheckBox
          checked={props.checked}
          onPress={props.onPressCheckBox}
        />

        <Image
          source={props.image || defaultBox}
          style={styles.cartItemImage}
        />

        <View style={styles.cartItemNamePrice}>
          <SubTitle content={props.name || ''}/>

          <Text style={styles.cartItemPrice}>
            {props.price?.toLocaleString() || ''}원
          </Text>
        </View>

        <View style={styles.delete}>
          <DeleteButton onPress={props.onPressX}/>
        </View>
      </View>

      <View style={styles.cartItemCountContainer}>
        <Text
          style={[
            styles.text14, 
            { marginRight: 33 }
          ]}
        >
          수량
        </Text>

        <MinusButton onPress={props.onPressMinusButton}/>

        <View style={styles.cartItemCount}>
          <Text style={styles.text14}>
            {props.count}개
          </Text>
        </View>

        <PlusButton onPress={props.onPressPlusButton}/>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  cartItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(6, 6, 6, 0.15)',
    paddingVertical: 15,
    paddingHorizontal: scale(24),
  },
  cartItemInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#f9f9f9',
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  cartItemImage: {
    width: 78,
    height: 78,
    marginLeft: scale(14),
  },
  cartItemNamePrice: {
    marginLeft: scale(14),
    flex: 1,
  },
  cartItemPrice: {
    fontSize: 12,
    color: 'rgba(6, 6, 6, 0.5)',
    marginTop: 1,
  },
  cartItemCountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 15,
  },
  cartItemCount: {
    width: scale(60),
    alignItems: 'center',
  },
  delete: {
    height: '100%',
  },
  text14: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})