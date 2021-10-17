import CheckBox from '@components/atoms/button/CheckBox'
import HalfWidthButton from '@components/atoms/button/HalfWidthButton'
import GreyInputBox from '@components/atoms/GreyInputBox'
import InfoIcon from '@components/atoms/icon/InfoIcon'
import Bold from '@components/atoms/typography/Bold'
import RegularText from '@components/atoms/typography/RegularText'
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
  TouchableOpacity,
} from 'react-native'

interface Props {
  phoneInput: string,
  checked: boolean,
  error: string,
  showModal: boolean,
  isLoading: boolean,
  personalInfoChecked: boolean,
  goBackToPreviousScreen: () => void,
  onChangePhoneInput: (input: string) => void,
  onPressCheckBox: () => void,
  onPressCancel: () => void,
  onPressConfirm: () => void,
  onRequestCloseModal: () => void,
  onConfirmPhone: () => void,
  onPressPersonalInfoUsage: () => void,
  onPressPersonalInfoCheckBox: () => void,
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

            <Text style={styles.infoText}>{'상품을 확정하게 되면 환불이 불가능합니다.\n정말 확정하시겠습니까?'}</Text>

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
          </View>

          <View
            style={styles.personalInfoRow}
          >
            <TouchableOpacity
              onPress={props.onPressPersonalInfoUsage}
            >
              <RegularText
                style={styles.personalInfoText}
              >
                제3자 개인정보제공 동의
              </RegularText>
            </TouchableOpacity>

            <CheckBox
              style={styles.personalInfoCheckBox}
              checked={props.personalInfoChecked}
              onPress={props.onPressPersonalInfoCheckBox}
            />
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
        </ScrollView>
      </KeyboardAvoidingView>

      <ConfirmModal
        visible={props.showModal}
        onRequestClose={props.onRequestCloseModal}
        onConfirm={props.onConfirmPhone}
      >
        <Text style={styles.confirmText}>{props.phoneInput + '로\n24시간 내에 모바일쿠폰이 전송됩니다.'}</Text>
        
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
    fontSize: 16,
    color: '#060606',
    lineHeight: 24,
    fontFamily: 'NotoSansCJKkr-Medium',
    letterSpacing: -0.68,
  },
  phoneInputIntro: {
    color: COLORS.bold_black,
    fontSize: 14,
    marginTop: verticalScale(100),
    lineHeight: 24,
    fontFamily: 'NotoSansCJKkr-Medium',
    letterSpacing: -0.68,
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
    fontFamily: 'NotoSansCJKkr-Regular',
    letterSpacing: -0.3,
    marginLeft: scale(10),
    color: 'black',
    fontSize: 12,
  },
  personalInfoRow: {
    flexDirection: 'row',
    marginLeft: scale(24),
    marginTop: 20,
  },
  personalInfoText: {
    fontSize: 13,
    lineHeight: 19,
    letterSpacing: -0.32,
    textDecorationLine: 'underline'
  },
  personalInfoCheckBox: {
    marginLeft: 5,
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
    marginTop: verticalScale(10),
    marginBottom: verticalScale(60),
    marginLeft: scale(24),
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
    fontSize: 14,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'NotoSansCJKkr-Regular'
  },
  loading: {
    marginBottom: verticalScale(20),
  }
})