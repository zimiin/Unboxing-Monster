import FullContentWidthButton from '@components/atoms/button/FullContentWidthButton'
import Loading from '@components/atoms/Loading'
import InputBox from '@components/molecules/InputBox'
import Header from '@components/organisms/header/Header'
import { scale } from '@constants/figure'
import React from 'react'
import { KeyboardType } from 'react-native'
import {
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'

interface Props {
  title: string,
  isLoading: boolean,
  canGoBack: boolean,
  onPressGoBack: () => void,
  label: string,
  keyboardType?: KeyboardType,
  input: string,
  onChangeText: (input: string) => void,
  canGoNext: boolean,
  onPressNext: () => void,
  error?: string,
  onSubmitEditing?: () => void,
  buttonText: string,
}

const SignUpInputTemplate = (props: Props) => {
  return (
    <>
      <Header
        canGoBack={props.canGoBack}
        goBackAction={props.onPressGoBack}
        title={props.title}
      />

      <KeyboardAvoidingView style={styles.container}>
        <InputBox
          input={props.input}
          onChangeText={props.onChangeText}
          placeholder={props.label}
          keyboardType={props.keyboardType}
          style={styles.inputBox}
          error={props.error}
          onSubmitEditing={props.onSubmitEditing}
        />

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
    alignItems: 'center',
  },
  inputBox: {
    marginTop: 8,
    width: scale(312)
  },
  button: {
    marginTop: 19,
  },
  greyBackground: {
    backgroundColor: '#eef1f2'
  }
})
