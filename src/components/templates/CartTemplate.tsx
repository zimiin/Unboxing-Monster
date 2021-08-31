import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import HorizontalRule from '@components/atoms/HorizontalRule'
import Header from '@components/organisms/header/Header'
import { scale } from 'react-native-size-matters'
import CheckBox from '@components/atoms/button/CheckBox'
import { BoxId } from '@constants/types'
import { defaultBox } from '@constants/images'
import CartItem from '@components/molecules/CartItem'


export interface CartData {
  boxId: number,
  count: number,
  deleteOneFromCart: () => void,
  addOneToCart: () => void,
  checked: boolean,
  setChecked: () => void,
  delete: () => void
}

export interface BoxInfo {
  name: string,
  price: number,
  image: string,
}

const defaultBoxInfo: BoxInfo = {
  name: '',
  price: 0,
  image: defaultBox
}

export type BoxData = Map<BoxId, BoxInfo>

interface Props {
  onPressBack: () => void,
  cartData: CartData[],
  boxData: BoxData,
  checkAll: boolean,
  onPressCheckAll: () => void,
  totalBoxCount: number,
  totalBoxPrice: number,
  onPressPurchase: () => void,
}

const CartTemplate = (props: Props) => {

  const getItems = () => {
    if (props.cartData) {
      return (
        props.cartData.map((item) => {
          const boxInfo: BoxInfo = props.boxData.get(item.boxId) || defaultBoxInfo
          return (
            <CartItem
              key={item.boxId}
              checked={item.checked}
              image={boxInfo.image}
              name={boxInfo.name}
              price={boxInfo.price}
              count={item.count}
              onPressCheckBox={item.setChecked}
              onPressX={item.delete}
              onPressMinusButton={item.deleteOneFromCart}
              onPressPlusButton={item.addOneToCart}
            />
          )
        })
      )
    }
  }
  const items = getItems()

  return (
    <>
      <Header
        canGoBack={true}
        goBackAction={props.onPressBack}
        title={'장바구니'}
      />

      <HorizontalRule />
      
      <ScrollView style={styles.container}>
        <View style={styles.checkAll}>
          <CheckBox 
            checked={props.checkAll}
            onPress={props.onPressCheckAll}
          />

          <Text 
            style={[
              styles.text14, 
              {marginLeft: scale(14)}
            ]}
          >
            전체선택
          </Text>
        </View>

        {items}

        <View style={styles.totalBoxCountPrice}>
          <Text
            style={[
              styles.text14,
              { flex:1 }
            ]}
          >
            총 {props.totalBoxCount}박스 결제 금액
          </Text>

          <Text style={styles.totalBoxPrice}>
            {props.totalBoxPrice} 원
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.purchaseButton}
          onPress={props.onPressPurchase}
        >
          <Text style={styles.purchaseText}>
            결제하기  
          </Text>  
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

export default CartTemplate

const styles = StyleSheet.create({
  text14: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  checkAll: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: scale(24),
    paddingVertical: 20,
    borderBottomColor: '#f9f9f9',
    borderBottomWidth: 1,
  },
  totalBoxCountPrice: {
    paddingHorizontal: scale(24),
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  totalBoxPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  purchaseButton: {
    width: scale(312),
    height: 48,
    backgroundColor: '#29a3ff',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    alignSelf: 'center',
  },
  purchaseText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})