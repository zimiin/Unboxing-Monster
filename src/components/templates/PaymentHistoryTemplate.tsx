import React, { ReactNode } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from 'react-native'
import HorizontalRule from '@components/atoms/HorizontalRule'
import Header from '@components/organisms/header/Header'
import { defaultBox } from '@constants/images'
import { PurchaseLog } from '@constants/types'
import { parseDate } from '@src/utils/utils'
import { COLORS } from '@constants/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ConfirmModal from '@components/molecules/ConfirmModal'
import NoticeModal from '@components/molecules/NoticeModal'
import Loading from '@components/atoms/Loading'
import NoticeIcon from '@components/atoms/icon/NoticeIcon'
import RegularText from '@components/atoms/typography/RegularText'

interface Props {
  paymentHistories: PurchaseLog[],
  showRefundConfirmModal: boolean,
  showAfterRefundModal: boolean,
  isLoading: boolean,
  showErrorModal: boolean,
  errorModalContent: string,
  onPressBack: () => void,
  onPressRefund: (idx: number) => void,
  closeRefundConfrimModal: () => void,
  processRefund: () => void,
  closeAfterRefundModal: () => void,
  closeErrorModal: () => void,
}

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const PaymentHistoryTemplate  = (props: Props) => {
  const paymentHistories = props.paymentHistories

  return (
    <>
      <Header
        canGoBack={true}
        goBackAction={props.onPressBack}
        title={'구매내역'}
      />

      <HorizontalRule />

      <ScrollView style={styles.container}>
        {
          paymentHistories.map((paymentHistory, idx) => {
            return (
              <View key={ paymentHistory.id }>
                <View style={{marginLeft: WIDTH * (24 / 360), marginRight: WIDTH * (24 / 360), paddingBottom: (18 / 740) * HEIGHT}}>
                  <View style={styles.dateRow}>
                    <Text style={{fontSize: 15, lineHeight: HEIGHT * (18 / 740), fontFamily: 'Roboto-Medium', opacity: 0.7}}>
                      {parseDate(new Date(paymentHistory.purchaseAt))}
                    </Text>
                    
                    {paymentHistory.refund ?
                      <Text style={[styles.refundText, { opacity: 0.5 }]}>
                        결제가 취소되었습니다.
                      </Text>
                      :
                      <TouchableOpacity onPress={() => props.onPressRefund(idx)}>
                        <Text style={[styles.refundText, { color: COLORS.error }]}>
                          결제 취소
                        </Text>
                      </TouchableOpacity>
                    }
                  </View >

                  <View style={{borderBottomColor: '#f9f9f9', borderBottomWidth: 2, paddingBottom: HEIGHT * (15 / 740), paddingTop: HEIGHT * (6 / 740), marginBottom: (21 / 740) * HEIGHT}}>
                    {
                      paymentHistory.boxes.map(box => (
                          <View key={box.id} style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <Image
                              source={defaultBox}
                              style={{
                                width: WIDTH * (76 / 360),
                                height: WIDTH * (76 / 360),
                              }}
                              resizeMode='contain'
                            />

                            <View style={{marginLeft: WIDTH * (15 / 360), width: WIDTH * (125 / 360)}}>
                              <Text style={{fontFamily: 'NotoSansCJKkr-Bold', fontSize: 15, lineHeight: HEIGHT * (22 / 740), marginTop: HEIGHT * (22 / 740)}}>
                                {box.box.title}
                              </Text>
                              
                              <Text style={{fontFamily: 'NotoSansCJKkr-Regular', fontSize: 12, lineHeight: HEIGHT * (18 / 740), opacity: 0.5}}>
                                수량: {box.count} 개
                              </Text>
                            </View>

                            <View style={{width: WIDTH * (98 / 360)}}>
                              <Text style={{fontFamily: 'NotoSansCJKkr-Medium', fontSize: 16, lineHeight: HEIGHT * (24 / 740), marginTop: HEIGHT * (40 / 740), textAlign: 'right'}}>
                                {(box.box.price * box.count).toLocaleString()} 원
                              </Text>
                            </View>
                          </View>
                        )
                      )
                    }
                  </View>

                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 14, lineHeight: HEIGHT * (20 / 740), fontFamily: 'NotoSansCJKkr-Regular'}}>
                      상품 금액
                    </Text>
                    
                    <Text style={{fontSize: 16, lineHeight: HEIGHT * (24 / 740), fontFamily: 'NotoSansCJKkr-Regular'}}>
                      {paymentHistory.price.toLocaleString()} 원
                    </Text>
                  </View >

                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 14, lineHeight: HEIGHT * (20 / 740), fontFamily: 'NotoSansCJKkr-Regular'}}>
                      언박싱 포인트 사용
                    </Text>
                    
                    <Text style={{fontSize: 16, lineHeight: HEIGHT * (24 / 740), fontFamily: 'NotoSansCJKkr-Regular'}}>
                      - {paymentHistory.usedPoint.toLocaleString()} 원
                    </Text>
                  </View >

                  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * (3 / 740)}}>
                    <Text style={{fontSize: 14, lineHeight: HEIGHT * (20 / 740), fontFamily: 'NotoSansCJKkr-Medium'}}>
                      결제 금액
                    </Text>
                    
                    <Text style={{fontSize: 16, lineHeight: HEIGHT * (24 / 740), fontFamily: 'NotoSansCJKkr-Medium'}}>
                      {(paymentHistory.price - paymentHistory.usedPoint).toLocaleString()} 원
                    </Text>
                  </View >
                </View>
                <HorizontalRule />
              </View>
            )
          })
        }
      </ScrollView>

      <ConfirmModal
        visible={props.showRefundConfirmModal}
        onRequestClose={props.closeRefundConfrimModal}
        onConfirm={props.processRefund}
        greyConfirmButton={true}
      >
        <Text style={styles.modalText}>
          구매하신 모든 박스에 대해 결제 취소됩니다.{'\n'}
          정말 취소하시겠습니까?
        </Text>
      </ConfirmModal>

      <NoticeModal
        visible={props.showAfterRefundModal}
        onRequestClose={props.closeAfterRefundModal}
      >
        <Text style={styles.modalText}>
          결제 취소되었습니다.{'\n'}
          환불까지는 영업일 기준 2-3일이{'\n'}
          소요될 수 있습니다.
        </Text>
      </NoticeModal>

      <NoticeModal
        visible={props.showErrorModal}
        onRequestClose={props.closeErrorModal}
      >
        <NoticeIcon />

        <Text style={styles.failedToRefundText}>
          환불 실패
        </Text>

        <RegularText style={styles.errorContent}>
          {props.errorModalContent}
        </RegularText>
      </NoticeModal>

      {props.isLoading ? <Loading /> : null}
    </>
  )
}

export default PaymentHistoryTemplate

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  dateRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: HEIGHT * (17 / 740),
    alignItems: 'center',
  },
  refundText: { 
    fontSize: 13, 
    lineHeight: HEIGHT * (19 / 740), 
    fontFamily: 'NotoSansCJKkr-Regular',
  },
  modalText: {
    fontFamily: 'NotoSansCJKkr-Bold',
    fontSize: 15,
    letterSpacing: -0.38,
    textAlign: 'center',
    color: '#060606',
    lineHeight: 22,
    marginVertical: 36,
  },
  failedToRefundText: {
    fontFamily: 'NotoSansCJKkr-Bold',
    fontSize: 15,
    letterSpacing: -0.38,
    lineHeight: 22,
  },
  errorContent: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 14,
  }
})