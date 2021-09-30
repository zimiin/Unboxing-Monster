import React, { useContext, useEffect, useState } from 'react'
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

interface Props {
  onPressBack: () => void,
  paymentHistories: PurchaseLog[]
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
          paymentHistories.map(paymentHistory => {
            return (
              <View key={ paymentHistory.id }>
                <View style={{marginLeft: WIDTH * (24 / 360), marginRight: WIDTH * (24 / 360), paddingBottom: (18 / 740) * HEIGHT}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: HEIGHT * (17 / 740)}}>
                    <Text style={{fontSize: 15, lineHeight: HEIGHT * (18 / 740), fontFamily: 'Roboto-Medium', opacity: 0.7}}>
                      {parseDate(new Date(paymentHistory.purchaseAt))}
                    </Text>
                    
                    {paymentHistory.refund ?
                      <Text style={{ fontSize: 13, lineHeight: HEIGHT * (19 / 740), fontFamily: 'NotoSansCJKkr-Regular', opacity: 0.5 }}>결제가 취소되었습니다.</Text>
                      : undefined}
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

    </>
  )
}

export default PaymentHistoryTemplate

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
})