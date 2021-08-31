import FullWidthButton from '@components/atoms/button/FullWidthButton'
import HorizontalRule from '@components/atoms/HorizontalRule'
import ContentBox from '@components/atoms/ContentBox'
import Header from '@components/organisms/header/Header'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,

} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { scale } from 'react-native-size-matters'
import PaymentBoxItem, { PaymentBoxItemProps } from '@components/molecules/PaymentBoxItem'
import PointTableRow from '@components/molecules/PointTableRow'
import { COLORS } from '@constants/colors'
import CheckBox from '@components/atoms/button/CheckBox'
import TextRadioButton from '@components/atoms/button/TextRadioButton'
import { SCREEN_WIDTH } from '@constants/figure'
import EdgeAlignedRow from '@components/atoms/EdgeAlignedRow'
import Bold from '@components/atoms/typography/Bold'

interface Props {
  screenTitle: string,
  canGoBack: boolean,
  onPressBack: () => void,
  boxData: PaymentBoxItemProps[],
  currentPoint: number,
  usingPoint: number,
  onChangeUsingPointAmount: (point: string) => void,
  useAllPoint: boolean,
  onPressUseAllPoint: () => void,
  paymentMethod: string,
  onChangePaymentMethod: (method: string) => void,
  totalPrice: number,
  finalPrice: number,
  onPressMakePayment: () => void,
}

const PaymentTemplate = (props: Props) => {
  const boxItems = props.boxData.map((item) => 
    <PaymentBoxItem
      key={item.id}
      id={item.id}
      image={item.image}
      name={item.name}
      count={item.count}
      price={item.price}
      style={{
        marginVertical: 8,
      }}
    />
  )

  return (
    <>
      <Header
        canGoBack={props.canGoBack}
        goBackAction={props.onPressBack}
        title={props.screenTitle}
      />

      <HorizontalRule />

      <ScrollView style={styles.container}>
        <ContentBox title='상품정보'>
          <View style={styles.boxInfo}>
            {boxItems}
          </View>
        </ContentBox>

        <HorizontalRule />

        <ContentBox title='언박싱 포인트'>
          <View style={styles.pointTable}>
            <PointTableRow
              style={styles.pointTableRow}
              left={
                <Text style={styles.tableText}>
                  보유
                </Text>
              }
              center={
                <Text
                  style={[
                    styles.tableText, 
                    styles.pointText,
                    styles.flexEnd
                  ]}
                >
                  {props.currentPoint + ' P'}
                </Text>
              }
            />

            <PointTableRow
              style={styles.pointTableRow}
              left={
                <Text style={styles.tableText}>
                  사용
                </Text>
              }
              center={
                <View style={styles.pointInputView}>
                  <TextInput 
                    style={styles.tableText}
                    defaultValue={'0'}
                    value={props.usingPoint.toString()}
                    onChangeText={props.onChangeUsingPointAmount}
                    keyboardType='numeric'
                    returnKeyType='done'
                    selectTextOnFocus={true}
                  />

                  <Text
                    style={[
                      styles.tableText,
                      styles.pointText
                    ]}
                  >
                    {' P'}
                  </Text>
                </View>
              }
              right={
                <View style={[
                  styles.flexEnd,
                  styles.pointCheckBoxContainer
                ]}
                >
                  <Text style={styles.tableText}>
                    모두 사용
                  </Text>

                  <CheckBox
                    checked={props.useAllPoint}
                    onPress={props.onPressUseAllPoint}
                    style={styles.checkbox}
                  />
                </View>
              }
            />
          </View>
        </ContentBox>

        <HorizontalRule />

        <ContentBox title='결제수단'
          style={styles.paymentMethodContentBox}>
          <View style={styles.radioButtonContainer}>
            <TextRadioButton
              status={props.paymentMethod}
              onPress={() => props.onChangePaymentMethod('신용카드')}
              style={styles.radioButton}
            >
              신용카드
            </TextRadioButton>

            <TextRadioButton
              status={props.paymentMethod}
              onPress={() => props.onChangePaymentMethod('무통장입금')}
              style={styles.radioButton}
            >
              무통장입금
            </TextRadioButton>

            <TextRadioButton
              status={props.paymentMethod}
              onPress={() => props.onChangePaymentMethod('삼성페이')}
              style={styles.radioButton}
            >
              삼성페이
            </TextRadioButton>

            <TextRadioButton
              status={props.paymentMethod}
              onPress={() => props.onChangePaymentMethod('카카오페이')}
              style={styles.radioButton}
            >
              카카오페이
            </TextRadioButton>

            <TextRadioButton
              status={props.paymentMethod}
              onPress={() => props.onChangePaymentMethod('토스')}
              style={styles.radioButton}
            >
              토스
            </TextRadioButton>
          </View>
        </ContentBox>

        <HorizontalRule />

        <ContentBox title='최종 결제 금액'>
          <View style={styles.finalPriceContainer}>
            <EdgeAlignedRow
              style={styles.totalPriceRow}
              left={
                <Text style={styles.finalPriceTitle}>
                  상품 금액
                </Text>
              }
              right={
                <Text style={styles.finalPrice}>
                  {props.totalPrice.toLocaleString()} 원
                </Text>
              }
            />

            <EdgeAlignedRow
              style={styles.totalPriceRow}
              left={
                <Text style={styles.finalPriceTitle}>
                  언박싱 포인트 사용
                </Text>
              }
              right={
                <Text style={styles.finalPrice}>
                  -{props.usingPoint.toLocaleString()} 원
                </Text>
              }
            />

            <EdgeAlignedRow
              style={styles.totalPriceRow}
              left={
                <Bold style={styles.finalPriceTitle}>
                  결제 금액
                </Bold>
              }
              right={
                <Bold style={styles.finalPrice}>
                  {props.finalPrice.toLocaleString() + ' 원'}
                </Bold>
              }
            />
          </View>
        </ContentBox>
      </ScrollView>

      <FullWidthButton
        content='결제'
        onPress={props.onPressMakePayment}
      />
    </>
  )
}

export default PaymentTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxInfo: {
    marginTop: 6,
    marginBottom: 20,
  },
  pointTable: {
    marginTop: 5,
    marginBottom: 21,
  },
  pointTableRow: {
    marginVertical: 3,
  },
  tableText: { 
    fontSize: 13 
  },
  pointText: {
    marginRight: 11,
  },
  pointInputView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: COLORS.grey_box,
    height: '100%',
    width: scale(108),
  },
  flexEnd: { 
    alignSelf: 'flex-end' 
  },
  pointCheckBoxContainer: {
    flexDirection: 'row',
  },
  checkbox: {
    marginLeft: 9,
  },
  radioButton: {
    marginHorizontal: SCREEN_WIDTH * 3 / 360,
    marginVertical: 3,
  },
  totalPriceRow: {
    marginVertical: 2,
  },
  paymentMethodContentBox: {
    paddingHorizontal: SCREEN_WIDTH * 21 / 360
  },
  radioButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 11,
    marginBottom: 17,
  },
  finalPriceContainer: {
    marginTop: 11,
    marginBottom: 17,
  },
  finalPriceTitle: {
    fontSize: 14,
  },
  finalPrice: {
    fontSize: 16,
  }
})
