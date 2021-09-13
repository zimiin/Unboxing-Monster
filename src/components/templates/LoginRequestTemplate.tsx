import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import Header from '@components/organisms/header/Header'

interface Props {
  hasPreviousScreen: boolean,
  goBackToPrevScreen: () => void,
}

const LoginRequestTemplate = (props: Props) => {
  return (
    <>
      <Header
        canGoBack={props.hasPreviousScreen}
        goBackAction={props.goBackToPrevScreen}
      />

      <View style={styles.screen}>
        <Text>This is ComponentName.</Text>
      </View>
    </>
  )
}

export default LoginRequestTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  }
})