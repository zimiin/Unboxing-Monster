import FullWidthButton from '@components/atoms/button/FullWidthButton'
import HorizontalRule from '@components/atoms/HorizontalRule'
import ContentBox from '@components/atoms/ContentBox'
import Header from '@components/organisms/header/Header'
import React, { useContext, useMemo } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ImageSourcePropType,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native'
import { scale } from 'react-native-size-matters'
import PaymentBoxItem from '@components/molecules/PaymentBoxItem'
import PointTableRow from '@components/molecules/PointTableRow'
import { COLORS } from '@constants/colors'
import CheckBox from '@components/atoms/button/CheckBox'
import TextRadioButton from '@components/atoms/button/TextRadioButton'
import { SCREEN_WIDTH, verticalScale } from '@constants/figure'
import EdgeAlignedRow from '@components/atoms/EdgeAlignedRow'
import Bold from '@components/atoms/typography/Bold'
import { PaymentMethod } from '@components/pages/PaymentPage'
import { Cart, CartContext } from '@src/stores/CartContext'
import {BoxId, Box} from '@constants/types'
import { IMAGES } from '@constants/images'
import GreyInputBox from '@components/atoms/GreyInputBox'
import Footer from '@components/molecules/Footer'
import RegularText from '@components/atoms/typography/RegularText'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Loading from '@components/atoms/Loading'
import NoticeModal from '@components/molecules/NoticeModal'
import NoticeIcon from '@components/atoms/icon/NoticeIcon'

interface Props {
  screenTitle: string,
  canGoBack: boolean,
  currentPoint: number,
  usingPoint: number,
  useAllPoint: boolean,
  paymentMethods: PaymentMethod[],
  selectedPaymentMethod?: PaymentMethod,
  totalPrice: number,
  finalPrice: number,
  phoneInput?: string,
  savePhone: boolean,
  phoneInputError: string,
  pointInputError: string,
  personalInfoChecked: boolean,
  isLoading: boolean,
  noticeText: string,
  showNoticeModal: boolean,
  onPressSavePhone: () => void,
  onPressBack: () => void,
  onChangeUsingPointAmount: (point: string) => void,
  onPressUseAllPoint: () => void,
  onChangePaymentMethod: (method: PaymentMethod) => void,
  onPressMakePayment: () => void,
  onChangePhoneInput: (input: string) => void,
  onSubmitPhoneInput: () => void,
  onSubmitPointInput: () => void,
  onPressPersonalInfoUsage: () => void,
  onPressPersonalInfoCheckBox: () => void,
  closeNoticeModal: () => void,
}

const PaymentTemplate = (props: Props) => {
  const [{cart, boxData}, {}] = useContext(CartContext)

  const paymentMethodRadioButtons = useMemo(() => {
    return (
      props.paymentMethods.map(
        (method, index) => {
          return (
            <TextRadioButton
              key={index}
              status={props.selectedPaymentMethod?.label || ''}
              onPress={() => props.onChangePaymentMethod(method)}
              style={styles.radioButton}
            >
              {method.label}
            </TextRadioButton>
          )
        }
      )
    )
  }, [props.selectedPaymentMethod])

  const boxListRenderItem = ({item}: {item: {boxId: BoxId, cartValue: Cart}}) => {
    if (item.cartValue.checked === false) {
      return (<></>)
    }
    
    let boxImage: ImageSourcePropType | undefined
    const box = boxData.get(item.boxId)
    if (box) {
      if (box.isLocal) {
        boxImage = IMAGES[box.image]
      } else {
        boxImage = {uri: box.image}
      }
    }

    return (
      <PaymentBoxItem
        id={item.boxId}
        image={boxImage}
        name={box?.title}
        count={item.cartValue.count}
        price={box?.price}
        style={styles.productInfo}
      />
    )
  }

  const productInfoHeader = (
    <Bold style={styles.title}>
      ????????????
    </Bold>
  )

  const productInfoFooter = (
    <>
      <HorizontalRule style={styles.horizontalRule} />

      <ContentBox title='????????? ?????????'>
        <Text style={styles.errorText}>{props.pointInputError}</Text>

        <View style={styles.pointTable}>
          <PointTableRow
            style={styles.pointTableRow}
            left={
              <Text style={styles.tableText}>
                ??????
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
                ??????
              </Text>
            }
            center={
              <View style={styles.pointInputView}>
                <TextInput
                  style={[
                    styles.tableText, 
                    styles.pointInput,
                  ]}
                  value={props.usingPoint.toString()}
                  onChangeText={props.onChangeUsingPointAmount}
                  keyboardType='numeric'
                  returnKeyType='done'
                  selectTextOnFocus={true}
                  onSubmitEditing={props.onSubmitPointInput}
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
                  ?????? ??????
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

      <ContentBox title='????????????'
        style={styles.paymentMethodContentBox}>
        <View style={styles.radioButtonContainer}>
          {paymentMethodRadioButtons}
        </View>
      </ContentBox>

      <HorizontalRule />
      
      {/*<View>
         <Bold style={styles.title}>????????? ?????? ??????</Bold>

        <View style={styles.phoneInputRow}>
          <GreyInputBox
            value={props.phoneInput}
            onChangeText={props.onChangePhoneInput}
            keyboardType={'numeric'}
            returnKeyType={'done'}
            style={styles.phoneInputBox}
            onSubmitEditing={props.onSubmitPhoneInput}
          />

          <CheckBox
            style={styles.phoneCheckBox}
            checked={props.savePhone}
            onPress={props.onPressSavePhone}
          />

          <Text style={styles.tableText}>???????????? ????????????</Text>
        </View>

        <View
          style={[
            styles.phoneInputRow,
            styles.personalInfoRow
          ]}
        >
          <TouchableOpacity
            onPress={props.onPressPersonalInfoUsage}
          >
            <RegularText
              style={styles.personalInfoText}
            >
              ???3??? ?????????????????? ??????
            </RegularText>
          </TouchableOpacity>

          <CheckBox
            style={styles.personalInfoCheckBox}
            checked={props.personalInfoChecked}
            onPress={props.onPressPersonalInfoCheckBox}
          />
        </View>

        {props.phoneInputError ? <Text style={[styles.errorText, styles.phoneInputError]}>{props.phoneInputError}</Text> : null} 
      </View> */}

      {/* <HorizontalRule style={styles.horizontalRule}/> */}

      <ContentBox title='?????? ?????? ??????'>
        <View style={styles.finalPriceContainer}>
          <EdgeAlignedRow
            style={styles.totalPriceRow}
            left={
              <Text style={styles.finalPriceTitle}>
                ?????? ??????
              </Text>
            }
            right={
              <Text style={styles.finalPrice}>
                {props.totalPrice.toLocaleString()} ???
              </Text>
            }
          />

          <EdgeAlignedRow
            style={styles.totalPriceRow}
            left={
              <Text style={styles.finalPriceTitle}>
                ????????? ????????? ??????
              </Text>
            }
            right={
              <Text style={styles.finalPrice}>
                -{props.usingPoint.toLocaleString()} ???
              </Text>
            }
          />

          <EdgeAlignedRow
            style={styles.totalPriceRow}
            left={
              <Bold style={styles.finalPriceTitle}>
                ?????? ??????
              </Bold>
            }
            right={
              <Bold style={styles.finalPrice}>
                {props.finalPrice.toLocaleString() + ' ???'}
              </Bold>
            }
          />
        </View>
      </ContentBox>

      <Footer />
    </>
  )

  return (
    <>
      <Header
        canGoBack={props.canGoBack}
        goBackAction={props.onPressBack}
        title={props.screenTitle}
      />

      <HorizontalRule />

      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <FlatList
          ListHeaderComponent={productInfoHeader}
          renderItem={boxListRenderItem}
          data={Array.from(cart, ([boxId, cartValue]) => ({boxId: boxId, cartValue: cartValue}))}
          keyExtractor={(item) => item.boxId.toString()}
          ListFooterComponent={productInfoFooter}
        />
      </KeyboardAvoidingView>

      <SafeAreaView style={styles.bottomButtonContainer}>
        <FullWidthButton
          content='??????'
          onPress={props.onPressMakePayment}
        />
      </SafeAreaView>

      {props.isLoading ? <Loading /> : undefined}

      <NoticeModal
        visible={props.showNoticeModal}
        onRequestClose={props.closeNoticeModal}
      >
        <NoticeIcon />

        <Text 
          style={[
            styles.tableText
            , { marginVertical: 10 }
          ]}
        >
          {props.noticeText}
        </Text>
      </NoticeModal>
    </>
  )
}

export default PaymentTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 15,
    marginTop: 14,
    marginLeft: scale(24),
    marginBottom: 6,
    lineHeight: 22,
  },
  horizontalRule: {
    marginTop: 17,
  },
  productInfo: {
    marginVertical: 8,
    marginHorizontal: scale(24),
  },
  pointTable: {
    marginTop: 5,
    marginBottom: 21,
  },
  pointTableRow: {
    marginVertical: 3,
  },
  tableText: { 
    fontSize: 13,
    fontFamily: 'NotoSansCJKkr-Medium',
    lineHeight: 19,
    letterSpacing: -0.32,
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
  pointInput: {
    position: 'absolute',
    right: scale(22),
    textAlign: 'right',
  },
  pointInputAndroid: {
    position: 'absolute',
    right: scale(16)
  },
  phoneInputError: {
    marginLeft: scale(24),
  },
  errorText: {
    marginTop: 5,
    fontSize: scale(11),
    color: '#ec4f47',
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
    fontFamily: 'NotoSansCJKkr-Regular',
    letterSpacing: -0.35,
    lineHeight: 20,
  },
  finalPrice: {
    fontSize: 16,
    fontFamily: 'NotoSansCJKkr-Regular',
    letterSpacing: -0.4,
    lineHeight: 24,
  },
  bottomButtonContainer: {
    backgroundColor: COLORS.main
  },
  phoneInputRow: {
    flexDirection: 'row',
    paddingHorizontal: scale(24),
    alignItems: 'center',
  },
  personalInfoRow: {
    marginTop: 15,
  },
  personalInfoCheckBox: {
    marginLeft: 5,
  },
  personalInfoText: {
    fontSize: 13,
    lineHeight: 19,
    letterSpacing: -0.32,
    textDecorationLine: 'underline'
  },
  phoneInputBox: {
    flex: 1,
    paddingHorizontal: scale(9),
  },
  phoneCheckBox: {
    marginHorizontal: scale(9),
  }
})
