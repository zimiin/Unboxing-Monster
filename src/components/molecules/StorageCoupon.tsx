import StorageCouponConfirmButton from '@components/atoms/button/StorageCouponConfirmButton'
import Bold from '@components/atoms/typography/Bold'
import React from 'react'
import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { scale } from 'react-native-size-matters'
import { defaultBox } from '@constants/images'
import { ItemId } from '@constants/types'
import DeleteButton from '@components/atoms/button/DeleteButton'
import { COLORS } from '@constants/colors'

export interface Props {
  id: number,
  itemId: ItemId,
  image: ImageSourcePropType,
  name: string,
  price: number,
  confirmableDays: number,
  isUsed: boolean,
  isRefunded: boolean,
  onPressConfirm: () => void,
  onPressRefund: () => void
  onPress: () => void,
  onPressDelete: () => void,
}

const defaultFunction = () => {
  console.log("No function passed to StorageCoupon")
}

const StorageCoupon = (props: Props) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={props.onPress}
    >
      <Image
        source={props.image || defaultBox}
        style={styles.image}
      />

      {/* 오른쪽 부분 */}
      <View style={styles.rightSideContainer}>
        <Bold
          style={styles.name}
          numberOfLines={1}
        >
          {props.name || ''}
        </Bold>

        <Text style={styles.price}>
          {props.price.toLocaleString() || ''} 원
        </Text>

        <Text style={styles.confirmableDays}>
          {props.isUsed === true ? '이미 사용한 쿠폰입니다.'
            : props.isRefunded === true ? '환불된 쿠폰입니다.' : '자동 환불까지 ' + props.confirmableDays + '일 남았습니다.'}
        </Text>
        <View style={styles.buttonContainer}>
          <StorageCouponConfirmButton
            onPress={props.isUsed || props.isRefunded ? undefined : props.onPressConfirm}
            buttonStyle={props.isUsed || props.isRefunded ? styles.inactiveButton : styles.confirmButton}
            textStyle={props.isUsed || props.isRefunded ? styles.inactiveText : styles.confirmText}
          >
            확정
          </StorageCouponConfirmButton>

          <StorageCouponConfirmButton
            onPress={props.isUsed || props.isRefunded ? undefined : props.onPressRefund}
            buttonStyle={[styles.refundButtonMargin, props.isUsed || props.isRefunded ? styles.inactiveButton : styles.refundButton]}
            textStyle={props.isUsed || props.isRefunded ? styles.inactiveText : styles.refundText}
          >
            환불
          </StorageCouponConfirmButton>
        </View>
      </View>

      {props.isUsed || props.isRefunded ?
        <DeleteButton 
          onPress={props.onPressDelete}
        />
      : null}
    </TouchableOpacity>
  )
}

export default StorageCoupon

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scale(24),
    marginVertical: 16,
  },
  image: {
    width: 112,
    height: 112,
    borderRadius: 12,
  },
  rightSideContainer: {
    marginLeft: scale(20),
    flex: 1,
  },
  name: {
    fontSize: 14,
    width: '100%',
    lineHeight: 20,
    color: COLORS.bold_black,
  },
  price: {
    fontSize: 14,
    color: 'rgba(6, 6, 6, 0.5)',
    fontFamily: 'NotoSansCJKkr-Regular',
    lineHeight: 20,
  },
  confirmableDays: {
    color: 'rgba(6, 6, 6, 0.5)',
    fontSize: 12,
    marginTop: 2,
    fontFamily: 'NotoSansCJKkr-Regular',
    letterSpacing: -0.3,
    lineHeight: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  inactiveButton: {
    backgroundColor: COLORS.grey_box,
  },
  confirmButton: {
    backgroundColor: '#29a3ff'
  },
  confirmText: {
    color: 'white'
  },
  inactiveText: {
    color: '#BBB',
  },
  refundButtonMargin: {
    marginLeft: scale(4),
  },
  refundButton: {
    backgroundColor: '#f9f9f9',
  },
  refundText: {
    color: '#ec4f47'
  },
  statusText: {
    color: 'black',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 13,
  }
})