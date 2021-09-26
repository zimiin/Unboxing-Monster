import CheckBox from '@components/atoms/button/CheckBox'
import HalfWidthButton from '@components/atoms/button/HalfWidthButton'
import GreyInputBox from '@components/atoms/GreyInputBox'
import InfoIcon from '@components/atoms/icon/InfoIcon'
import Bold from '@components/atoms/typography/Bold'
import ConfirmModal from '@components/molecules/ConfirmModal'
import Header from '@components/organisms/header/Header'
import { COLORS } from '@constants/colors'
import { scale, verticalScale } from '@constants/figure'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native'

interface Props {
  phoneInput: string,
  checked: boolean,
  error: string,
  showModal: boolean,
  isLoading: boolean,
  goBackToPreviousScreen: () => void,
  onChangePhoneInput: (input: string) => void,
  onPressCheckBox: () => void,
  onPressCancel: () => void,
  onPressConfirm: () => void,
  onRequestCloseModal: () => void,
  onConfirmPhone: () => void,
}

const CouponConfirmTemplate = (props: Props) => {
  return (
    <>
      <Header
        canGoBack={true}
        title={'확정 안내'}
        goBackAction={props.goBackToPreviousScreen}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.screen}
      >
        <ScrollView>
          <View style={styles.centerView}>
            <InfoIcon style={styles.info} />

            <Bold style={styles.infoText}>{'상품을 확정하게 되면 환불이 불가능합니다.\n정말 확정하시겠습니까?'}</Bold>

            <Text style={styles.phoneInputIntro}>
              모바일쿠폰을 수신할 핸드폰번호
            </Text>

            <View style={styles.phoneInputRow}>
              <GreyInputBox 
                style={styles.inputBox}
                placeHolder={'010-1234-5678'}
                textInputStyle={styles.inputText}
                keyboardType={'numeric'}
                returnKeyType={'done'}
                value={props.phoneInput}
                onChangeText={props.onChangePhoneInput}
              />

              <CheckBox
                checked={props.checked}
                style={styles.checkbox}
                onPress={props.onPressCheckBox}
              />

              <Text style={styles.useNext}>다음에도 사용하기</Text>
            </View>

            <Text style={styles.error}>{props.error}</Text>

            <View style={styles.buttonRow}>
              <HalfWidthButton
                text={'취소'}
                buttonStyle={styles.cancelButton}
                textStyle={styles.cancelText}
                onPress={props.onPressCancel}
              />

              <HalfWidthButton
                text={'확정하기'}
                onPress={props.onPressConfirm}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <ConfirmModal
        visible={props.showModal}
        onRequestClose={props.onRequestCloseModal}
        onConfirm={props.onConfirmPhone}
      >
        <Text style={styles.confirmText}>{props.phoneInput + '로\n모바일쿠폰을 전송합니다.'}</Text>
        
        {props.isLoading ?
          <ActivityIndicator
            animating={true}
            style={styles.loading}
          />
          :
          null
        }
      </ConfirmModal>
    </>
  )
}

export default CouponConfirmTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  centerView: {
    alignItems: 'center',
  },
  info: {
    marginTop: verticalScale(144),
  },
  infoText: {
    textAlign: 'center',
    marginTop: verticalScale(23),
    fontSize: scale(16),
    color: '#060606',
    lineHeight: scale(24),
  },
  phoneInputIntro: {
    color: 'black',
    fontSize: scale(14),
    marginTop: verticalScale(100),
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(24),
    marginTop: verticalScale(15),
  },
  inputBox: {
    flex: 1,
    paddingHorizontal: scale(15),
  },
  inputText: {
    fontSize: scale(14),
  },
  checkbox: {
    marginLeft: scale(15),
  },
  useNext: {
    marginLeft: scale(10),
    color: 'black',
    fontSize: scale(13),
  },
  error: {
    color: COLORS.error,
    fontSize: scale(13),
    alignSelf: 'flex-start',
    marginLeft: scale(24),
    marginTop: verticalScale(5),
    height: scale(17),
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: verticalScale(25),
    marginBottom: verticalScale(60),
  },
  cancelButton: {
    backgroundColor: COLORS.grey_box,
    marginRight: scale(14),
  },
  cancelText: {
    color: COLORS.grey_text,
  },
  confirmText: {
    textAlign: 'center',
    fontSize: scale(14),
    fontWeight: '400',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  loading: {
    marginBottom: verticalScale(20),
  }
})