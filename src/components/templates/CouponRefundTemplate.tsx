import HalfWidthButton from '@components/atoms/button/HalfWidthButton'
import NoticeIcon from '@components/atoms/icon/NoticeIcon'
import Bold from '@components/atoms/typography/Bold'
import Header from '@components/organisms/header/Header'
import { COLORS } from '@constants/colors'
import { scale, verticalScale } from '@constants/figure'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

interface Props {
  goToPreviousScreen: () => void,
  onPressRefundButton: () => void,
}

const CouponRefundTemplate = (props: Props) => {
  return (
    <>
      <Header
        canGoBack={true}
        goBackAction={props.goToPreviousScreen}
        title={'환불 안내'}
      />

      <View style={styles.screen}>
        <NoticeIcon style={styles.noticeIcon}/>

        <Bold style={styles.noticeText}>
          {'상품 금액의 80%를 포인트로 전환합니다.\n상품을 환불하게 되면 취소할 수 없습니다.\n정말 환불하시겠습니까?'}
        </Bold>

        <View style={styles.buttonRow}>
          <HalfWidthButton
            buttonStyle={styles.greyButton}
            textStyle={styles.greyButtonText}
            text={'취소'}
            onPress={props.goToPreviousScreen}
          />

          <HalfWidthButton
            buttonStyle={styles.redButton}
            text={'환불'}
            onPress={props.onPressRefundButton}
          />
        </View>
      </View>
    </>
  )
}

export default CouponRefundTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  noticeIcon: {
    marginTop: verticalScale(120),
  },
  noticeText: {
    fontSize: scale(16),
    textAlign: 'center',
    lineHeight: scale(24),
    marginTop: verticalScale(11),
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: verticalScale(30),
  },
  greyButton: {
    backgroundColor: COLORS.grey_box,
    marginRight: scale(12),
  },
  greyButtonText: {
    color: COLORS.grey_text,
  },
  redButton: {
    backgroundColor: COLORS.error,
  }
})
