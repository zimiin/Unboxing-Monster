import React, { useContext } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ImageSourcePropType,
} from 'react-native'
import HorizontalRule from '@components/atoms/HorizontalRule'
import Header from '@components/organisms/header/Header'
import { scale } from 'react-native-size-matters'
import CheckBox from '@components/atoms/button/CheckBox'
import { Box, BoxId } from '@constants/types'
import CartItem from '@components/molecules/CartItem'
import { Cart, CartContext } from '@src/stores/CartContext'
import { defaultBox, IMAGES } from '@constants/images'

interface Props {
  onPressBack: () => void,
  checkAll: boolean,
  onPressCheckAll: () => void,
  totalBoxCount: number,
  totalBoxPrice: number,
  onPressPurchase: () => void,
}

const CartTemplate = (props: Props) => {
  const [{cart, boxData}, {setChecked, deleteFromCart, modifyBoxCount}] = useContext(CartContext)

  const renderItem = ({item}: {item: {boxId: BoxId, cartValue: Cart}}) => {
    const box = boxData.get(item.boxId)
    let boxImage: ImageSourcePropType | undefined

    if (box) {
      if (box.isLocal) {
        boxImage = IMAGES[box.image]
      } else {
        boxImage = {uri: box.image}
      }
    }

    return (
      <CartItem
        key={item.boxId}
        checked={item.cartValue.checked}
        image={boxImage}
        name={box?.title}
        price={box?.price}
        count={item.cartValue.count}
        onPressCheckBox={() => setChecked(item.boxId, !item.cartValue.checked)}
        onPressX={() => deleteFromCart([item.boxId])}
        onPressMinusButton={() => modifyBoxCount(item.boxId, -1)}
        onPressPlusButton={() => modifyBoxCount(item.boxId, +1)}
      />
    )
  }

  const listHeader = (
    <View style={styles.checkAll}>
      <CheckBox
        checked={props.checkAll}
        onPress={props.onPressCheckAll}
      />

      <Text
        style={[
          styles.text14,
          { marginLeft: scale(14) }
        ]}
      >
        전체선택
      </Text>
    </View>
  )

  const listFooter = (
    <>
      <View style={styles.totalBoxCountPrice}>
        <Text
          style={[
            styles.text14,
            { flex: 1 }
          ]}
        >
          총 {props.totalBoxCount}박스 결제 금액
        </Text>

        <Text style={styles.totalBoxPrice}>
          {props.totalBoxPrice.toLocaleString()} 원
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
    </>
  )

  return (
    <>
      <Header
        canGoBack={true}
        goBackAction={props.onPressBack}
        title={'장바구니'}
      />

      <HorizontalRule />
      
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={listHeader}
          data={Array.from(cart, ([boxId, cartValue]) => ({boxId, cartValue}))}
          renderItem={renderItem}
          keyExtractor={({boxId, cartValue}) => boxId.toString()}
          ListFooterComponent={listFooter}
        />
      </View>

      <SafeAreaView style={styles.safeArea}/>
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
  },
  safeArea: {
    backgroundColor: 'white',
  }
})