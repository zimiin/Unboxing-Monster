import StorageCouponConfirmButton from '@components/atoms/button/StorageCouponConfirmButton'
import Bold from '@components/atoms/typography/Bold'
import React from 'react'
import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  StyleSheet,
} from 'react-native'
import { scale } from 'react-native-size-matters'
import { defaultBox } from '@constants/images'

export interface StorageCouponData {
  id: number,
  image: ImageSourcePropType,
  name: string,
  price: number,
  confirmableDays: number,
  onPressConfirm: () => void,
  onPressRefund: () => void
}

const defaultBoxURI = { uri: defaultBox }
const defaultFunction = () => {
  console.log("No function passed to StorageCoupon")
}

const StorageCoupon = (props: StorageCouponData) => {
  return (
    <View style={styles.container}>
      <Image
        source={props.image || defaultBoxURI}
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
          자동 환불까지 {props.confirmableDays || ''}일 남았습니다.
        </Text>

        <View style={styles.buttonContainer}>
          <StorageCouponConfirmButton
            onPress={props.onPressConfirm || defaultFunction}
            buttonStyle={styles.confirmButton}
            textStyle={styles.confirmText}
          >
            확정
          </StorageCouponConfirmButton>

          <StorageCouponConfirmButton
            onPress={props.onPressRefund || defaultFunction}
            buttonStyle={styles.refundButton}
            textStyle={styles.refundText}
          >
            환불
          </StorageCouponConfirmButton>
        </View>
      </View>
    </View>
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
  },
  price: {
    fontSize: 14,
    color: 'rgba(6, 6, 6, 0.5)',
    marginTop: 5,
  },
  confirmableDays: {
    color: 'rgba(6, 6, 6, 0.5)',
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
  },
  confirmButton: {
    backgroundColor: '#29a3ff'
  },
  confirmText: {
    color: 'white'
  },
  refundButton: {
    backgroundColor: '#f9f9f9',
    marginLeft: scale(4),
  },
  refundText: {
    color: '#ec4f47'
  }
})