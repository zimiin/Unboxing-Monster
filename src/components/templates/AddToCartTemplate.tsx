import Header from '@components/organisms/header/Header'
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import HorizontalRule from '@components/atoms/HorizontalRule'
import BoxInfoImage from '@components/atoms/BoxInfoImage'
import Title from '@components/atoms/typography/Title'
import { scale } from 'react-native-size-matters'
import BoxPriceInfo from '@components/atoms/BoxPriceInfo'
import MinusButton from '@components/atoms/button/MinusButton'
import PlusButton from '@components/atoms/button/PlusButton'
import { StyleSheet } from 'react-native'

interface Props {
  boxImage: string,
  boxName: string,
  boxPrice: number,
  count: number,
  goBackAction: () => void,
  onPressMinus: () => void,
  onPressPlus: () => void,
  onPressAdd: () => void,
}

const AddToCartTemplate = (props: Props) => {
  return (
    <>
      <Header
        canGoBack={true}
        goBackAction={props.goBackAction}
        title={'장바구니에 담기'}
      />

      <HorizontalRule />

      <ScrollView style={styles.container}>
        <BoxInfoImage image={props.boxImage} />

        <View style={styles.boxNamePrice}>
          <Title content={props.boxName} />
            
          <View style={styles.boxPrice}>
            <BoxPriceInfo price={props.boxPrice} />
          </View>
        </View>

        <HorizontalRule />

        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            수량
          </Text>

          <MinusButton onPress={props.onPressMinus}/>

          <Text style={styles.count}>
              {props.count}개
          </Text>

          <PlusButton onPress={props.onPressPlus}/>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.totalText}>
            총
          </Text>

          <BoxPriceInfo price={props.boxPrice * props.count} />
        </View>
      </ScrollView>

      {/* 담기 버튼 */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={props.onPressAdd}
      >
        <Text style={styles.add}>
          담기
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default AddToCartTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxNamePrice: {
    paddingVertical: 22,
    paddingHorizontal: scale(24),
  },
  boxPrice: {
      marginTop: 5,
  },
  countContainer: {
    paddingVertical: 22,
    paddingHorizontal: scale(24),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgba(6, 6, 6, 0.15)',
    borderBottomWidth: 1,
  },
  countText: {
    fontSize: 14,
    flex: 1,
  },
  count: {
    fontSize: 14,
    marginHorizontal: scale(19),
  },
  priceContainer: {
    paddingVertical: 22,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: scale(24),
    flexDirection: 'row',
  },
  totalText: {
    fontSize: 16,
    marginRight: 5,
  },
  addButton: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29a3ff',
  },
  add: {
    color: 'white',
    fontSize: 16,
    marginVertical: 15,
    fontWeight: 'bold',
  }
})