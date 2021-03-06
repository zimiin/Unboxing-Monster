import React from 'react'
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native'
import { scale } from 'react-native-size-matters'
import HorizontalRule from '@components/atoms/HorizontalRule'
import StorageTab from '@components/molecules/StorageTab'
import Header from '@components/organisms/header/Header'
import StorageBox from '@components/molecules/StorageBox'
import StorageCoupon from '@components/molecules/StorageCoupon'
import LoginNotice from '@components/organisms/LoginNotice'
import MonsterNotice from '@components/molecules/MonsterNotice'
import { BoxId, BoxStorage, Coupon, Item, ItemId } from '@constants/types'
import { IMAGES } from '@constants/images'
import { UserCoupon } from '@components/pages/StoragePage'
import { getDaysBetweenDates } from '@src/utils/utils'
import { verticalScale } from '@constants/figure'
import Loading from '@components/atoms/Loading'

export type Focus = 'randomBox' | 'coupon'

interface Props {
  loginState: boolean,
  fetchingLoginState: boolean,
  focusOn: Focus,
  boxData: BoxStorage[],
  couponData: UserCoupon[],
  refreshingBoxList: boolean,
  refreshingCouponList: boolean,
  onPressRandomBoxTab: () => void,
  onPressCouponTab: () => void,
  onRefreshBoxList: () => void,
  onRefreshCouponList: () => void,
  onPressLogin: () => void,
  openBox: (boxId: BoxId, count: number) => void,
  onPressBox: (boxId: BoxId) => void,
  onPressConfirmCoupon: (coupon: UserCoupon) => void,
  onPressRefundCoupon: (coupon: UserCoupon) => void,
  onPressCoupon: (item: Item) => void,
  onPressDeleteCoupon: (couponId: number) => void,
}

const StorageTemplate = (props: Props) => {
  const boxListRenderItem = ({item}: {item: BoxStorage}) => {
    return (
      <StorageBox
        id={item.boxId}
        image={item.box.isLocal ? IMAGES[item.box.image] : {uri: item.box.image}}
        name={item.box.title}
        count={item.count}
        openOneBox={() => props.openBox(item.boxId, 1)}
        openAllBox={() => props.openBox(item.boxId, item.count)}
        onPress={() => props.onPressBox(item.boxId)}
      />
    )
  }

  const couponListRenderItem = ({ item }: { item: UserCoupon}) => {
    return (
      <StorageCoupon
        id={item.id}
        itemId={item.itemId}
        image={{uri: item.item.image}}
        name={item.item.title}
        price={item.item.price}
        isUsed={item.isUsed}
        isRefunded={item.refund}
        confirmableDays={getDaysBetweenDates(new Date(), new Date(item.Expiration))}
        onPressConfirm={() => props.onPressConfirmCoupon(item)}
        onPressRefund={() => props.onPressRefundCoupon(item)}
        onPress={() => props.onPressCoupon(item.item)}
        onPressDelete={() => props.onPressDeleteCoupon(item.id)}
      />
    )
  }

  const boxes = (
    <FlatList
      renderItem={boxListRenderItem}
      ListEmptyComponent={<MonsterNotice style={styles.notice} notice={'?????????????????? ???????????????'}/>}
      data={props.boxData}
      style={styles.storageData}
      refreshing={props.refreshingBoxList}
      onRefresh={props.onRefreshBoxList}
    />
  )

  const coupons = (
    <FlatList
      renderItem={couponListRenderItem}
      ListEmptyComponent={<MonsterNotice style={styles.notice} notice={'????????????????????? ???????????????'} />}
      data={props.couponData}
      style={styles.storageData}
      refreshing={props.refreshingCouponList}
      onRefresh={props.onRefreshCouponList}
    />
  )

  const storageTabContent = (
    <>
      <View style={styles.tab}>
        <View style={styles.tabItemContainer}>
          <StorageTab
            title='????????????'
            focused={props.focusOn === 'randomBox'}
            onPress={props.onPressRandomBoxTab}
          />
        </View>

        <View style={styles.tabItemContainer}>
          <StorageTab
            title='???????????????'
            focused={props.focusOn === 'coupon'}
            onPress={props.onPressCouponTab}
          />
        </View>
      </View>

      {props.focusOn === 'randomBox' ? boxes : coupons}
    </>
  )

  return (
    <View style={styles.container}>
      <Header
        canGoBack={false}
        title='?????????'
      />

      <HorizontalRule />

      {props.loginState === false ? 
        <LoginNotice 
          onPressLogin={props.onPressLogin}
        /> 
        : storageTabContent}
      
      {props.fetchingLoginState ? <Loading /> : null}
    </View >
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
  },
  notice: {
    height: verticalScale(450)
  }
})
