import CheckBox from '@components/atoms/button/CheckBox'
import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton'
import Loading from '@components/atoms/Loading'
import RegularText from '@components/atoms/typography/RegularText'
import InputBox from '@components/molecules/InputBox'
import Header from '@components/organisms/header/Header'
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
  agreeToPolicy: boolean,
  showPolicyAgreement?: boolean,
  onPressGoBack: () => void,
  onChangeText: (input: string) => void,
  onPressNext: () => void,
  onSubmitEditing?: () => void,
  onPressAgreeToPolicy: () => void,
  onPressAgreeToPolicyCheckBox: () => void,
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
                서비스 이용 약관 동의
              </RegularText>
            </TouchableOpacity>

            <CheckBox
              style={styles.checkBox}
              checked={props.agreeToPolicy}
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
  }
})
