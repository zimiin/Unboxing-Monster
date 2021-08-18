import React, { ReactNode, useState } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { scale } from 'react-native-size-matters'
import HorizontalRule from '@components/atoms/HorizontalRule'
import StorageTab from '@components/molecules/StorageTab'
import BaseHeader from '@components/organisms/header/BaseHeader'
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
  couponData: StorageCouponData[]
}

const StorageTemplate = (props: Props) => {
  const [boxes, setBoxes] = useState<ReactNode>()
  const [coupons, setCoupons] = useState<ReactNode>()
  
  useEffect(() => {
    const boxComponents = props.boxData.map(
      item => {
        return (
          <StorageBox
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            count={item.count}
            openOneBox={item.openOneBox}
            openAllBox={item.openAllBox}
          />
        )
      })
    setBoxes(boxComponents)
  }, [props.boxData])

  useEffect(() => {
    const couponComponents = props.couponData.map(
      item => {
        return (
          <StorageCoupon
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            confirmableDays={item.confirmableDays}
            onPressConfirm={item.onPressConfirm}
            onPressRefund={item.onPressRefund}
          />
        )
      }
    )
    setCoupons(couponComponents)
  }, [props.couponData])

  return (
    <View style={styles.container}>
      <BaseHeader
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

      <ScrollView style={styles.storageData}>
        {props.focusOn === 'randomBox' ? boxes : coupons}
      </ScrollView>
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
