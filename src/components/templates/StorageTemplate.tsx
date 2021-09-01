import React, { ReactNode, useState } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { scale } from 'react-native-size-matters'
import HorizontalRule from '@components/atoms/HorizontalRule'
import StorageTab from '@components/molecules/StorageTab'
import Header from '@components/organisms/header/Header'
import StorageBox from '@components/molecules/StorageBox'
import { StorageBoxData } from '@components/molecules/StorageBox'
import { useEffect } from 'react'
import StorageCoupon, { StorageCouponData } from '@components/molecules/StorageCoupon'

export type Focus = 'randomBox' | 'coupon'

interface Props {
  focusOn: Focus,
  onPressRandomBoxTab: () => void,
  onPressCouponTab: () => void,
  boxData: StorageBoxData[],
  couponData: StorageCouponData[],
  refreshingBoxList: boolean,
  onRefreshBoxList: () => void,
  refreshingCouponList: boolean,
  onRefreshCouponList: () => void,
}

const StorageTemplate = (props: Props) => {
  const boxes = (
    <FlatList
      renderItem={StorageBox}
      data={props.boxData}
      style={styles.storageData}
      refreshing={props.refreshingBoxList}
      onRefresh={props.onRefreshBoxList}
    />
  )

  const coupons = (
    <FlatList
      renderItem={StorageCoupon}
      data={props.couponData}
      style={styles.storageData}
      refreshing={props.refreshingCouponList}
      onRefresh={props.onRefreshCouponList}
    />
  )
  // useEffect(() => {
  //   const couponComponents = props.couponData.map(
  //     item => {
  //       return (
  //         <StorageCoupon
  //           key={item.id}
  //           id={item.id}
  //           image={item.image}
  //           name={item.name}
  //           price={item.price}
  //           confirmableDays={item.confirmableDays}
  //           onPressConfirm={item.onPressConfirm}
  //           onPressRefund={item.onPressRefund}
  //         />
  //       )
  //     }
  //   )
  //   setCoupons(couponComponents)
  // }, [props.couponData])

  return (
    <View style={styles.container}>
      <Header
        canGoBack={false}
        title='보관함'
      />

      <HorizontalRule />

      <View style={styles.tab}>
        <View style={styles.tabItemContainer}>
          <StorageTab 
            title='랜덤박스'
            focused={props.focusOn === 'randomBox'}
            onPress={props.onPressRandomBoxTab}
          />
        </View>
        
        <View style={styles.tabItemContainer}>
          <StorageTab 
            title='모바일쿠폰' 
            focused={props.focusOn === 'coupon'}
            onPress={props.onPressCouponTab}
          />
        </View>
      </View>

      {props.focusOn === 'randomBox' ? boxes : coupons}
    </View>
  )
}

export default StorageTemplate

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white' 
  },
  tab: {
    height: 52,
    borderBottomColor: '#f9f9f9',
    borderBottomWidth: 2,
    flexDirection: 'row',
    paddingHorizontal: scale(24),
  },
  tabItemContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  storageData: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  }
})
