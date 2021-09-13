import HeaderWithCart from '@components/organisms/header/HeaderWithCart'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

interface Props {
  hasPrevScreen: boolean,
  cartItemCount: number,
  onPressGoBack: () => void,
  onPressCart: () => void,
}

const MyCustomBoxTemplate = (props: Props) => {
  return (
    <>
      <HeaderWithCart
        canGoBack={props.hasPrevScreen}
        goBackAction={props.onPressGoBack}
        onPressCart={props.onPressCart}
        title={'나의 커스텀 박스'}
        cartItemCount={props.cartItemCount}
      />
    </>
  )
}

export default MyCustomBoxTemplate

const styles = StyleSheet.create({

})