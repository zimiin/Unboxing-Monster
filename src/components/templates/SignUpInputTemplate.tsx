import CheckBox from '@components/atoms/button/CheckBox'
import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton'
import Loading from '@components/atoms/Loading'
import RegularText from '@components/atoms/typography/RegularText'
import ConfirmModal from '@components/molecules/ConfirmModal'
import InputBox from '@components/molecules/InputBox'
import NoticeModal from '@components/molecules/NoticeModal'
import Header from '@components/organisms/header/Header'
import { EVENT_RESULT, ResultCode } from '@components/pages/SignUpNicknameInputPage'
import { scale } from '@constants/figure'
import React from 'react'
import { KeyboardType, Text, TouchableOpacity, View } from 'react-native'
import {
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'

interface Props {
  title: string,
  isLoading: boolean,
  canGoBack: boolean,
  label: string,
  keyboardType?: KeyboardType,
  input: string,
  canGoNext: boolean,
  error?: string,
  buttonText: string,
  agreeToPolicy?: boolean,
  showPolicyAgreement?: boolean,
  showPointEventModal?: boolean,
  pointEventResult?: ResultCode,
  onPressGoBack: () => void,
  onChangeText: (input: string) => void,
  onPressNext: () => void,
  onSubmitEditing?: () => void,
  onPressAgreeToPolicy?: () => void,
  onPressAgreeToPolicyCheckBox?: () => void,
  onClosePointEventModal?: () => void,
}

const SignUpInputTemplate = (props: Props) => {
  return (
    <>
      <Header
        canGoBack={props.canGoBack}
        goBackAction={props.onPressGoBack}
        title={props.title}
      />

      <KeyboardAvoidingView 
        style={styles.container}
      >
        <InputBox
          input={props.input}
          onChangeText={props.onChangeText}
          placeholder={props.label}
          keyboardType={props.keyboardType}
          style={styles.inputBox}
          error={props.error}
          onSubmitEditing={props.onSubmitEditing}
        />

        {props.showPolicyAgreement === true ?
          <View
            style={styles.policyAgreementRow}
          >
            <TouchableOpacity
              onPress={props.onPressAgreeToPolicy}
            >
              <RegularText
                style={styles.agreeToPolicyText}
              >
                ????????? ?????? ?????? ??????
              </RegularText>
            </TouchableOpacity>

            <CheckBox
              style={styles.checkBox}
              checked={props.agreeToPolicy || false}
              onPress={props.onPressAgreeToPolicyCheckBox}
            />
          </View>
        : null}
        

        <FullContentWidthButton
          onPress={props.onPressNext}
          style={[
            styles.button,
            props.canGoNext ? null : styles.greyBackground
          ]}
          fontColor={props.canGoNext ? undefined : 'black'}
        >
          {props.buttonText}
        </FullContentWidthButton>
      </KeyboardAvoidingView>

      {props.isLoading === true ? <Loading /> : null}

      <NoticeModal
        visible={props.showPointEventModal || false}
        onRequestClose={props.onClosePointEventModal || (() => {})}
      >
        <View
          style={styles.modalContent}
        >
          {props.pointEventResult === EVENT_RESULT.SUCCESS ?
            <>
              <RegularText
                style={styles.modalText}
              >
                ???????????? ??????!
              </RegularText>
              
              <RegularText
                style={styles.modalText}
              >
                3000???????????? ??????????????????.
              </RegularText>
            </>
            :
            props.pointEventResult === EVENT_RESULT.EVENT_END ?
            <>
              <RegularText
                style={styles.modalText}
              >
                ??????????????? ???????????????,
              </RegularText>

              <RegularText
                style={styles.modalText}
              >
                ?????? ???????????? ??????????????????.
              </RegularText>

              <RegularText
                style={styles.modalText}
              >
                ??? ?????? ?????? ??????????????? ?????? ????????????.
              </RegularText>
            </>
            :
            props.pointEventResult === EVENT_RESULT.DUPLICATED ?
              <>
                <RegularText
                  style={styles.modalText}
                >
                  ??????????????? ???????????????,
                </RegularText>

                <RegularText
                  style={styles.modalText}
                >
                  ?????? ???????????? ???????????????
                </RegularText>

                <RegularText
                  style={styles.modalText}
                >
                  ???????????? ???????????? ????????????.
                </RegularText>
              </>
            : 
              <RegularText
                style={styles.modalText}
              >
                ???????????? ??????!
              </RegularText>
          }
        </View>
      </NoticeModal>
    </>
  )
}

export default SignUpInputTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputBox: {
    marginTop: 8,
    width: scale(312),
    marginLeft: scale(24),
  },
  button: {
    marginTop: 19,
    marginLeft: scale(24),
  },
  greyBackground: {
    backgroundColor: '#eef1f2'
  },
  policyAgreementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(24),
    marginTop: 10,
  },
  agreeToPolicyText: {
    fontSize: 12,
    lineHeight: 20,
    textDecorationLine: 'underline',
  },
  checkBox: {
    marginLeft: 20,
  },
  modalContent: {
    marginVertical: 20,
    alignItems: 'center'
  },
  modalText: {
    fontSize: 14,
    lineHeight: 20,
  }
})
