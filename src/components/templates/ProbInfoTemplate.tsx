import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import HeaderWithCart from '@components/organisms/header/HeaderWithCart'

import { ProbInfoNavigationProp } from '@constants/navigationTypes'
import { CartContext } from '@src/stores/CartContext'
import { useContext } from 'react'
import { Item } from '@constants/types'
import HorizontalRule from '@components/atoms/HorizontalRule'
import ProbViewTab from '@components/organisms/ProbViewTab'

type ProbInfoTemplateProps = {
  boxId: number,
  navigation: ProbInfoNavigationProp,
  items: Item[],
  probs: number[],
}

const ProbInfoTemplate = (props: ProbInfoTemplateProps) => {
  const [{ cart }, { modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll }] = useContext(CartContext)
  return (
    <>
      <View style={styles.screen}>
        <HeaderWithCart
          title={"확률정보"}
          canGoBack={true} 
          goBackAction={props.navigation.goBack}
          onPressCart={() => props.navigation.push('Cart')}
          cartItemCount={cart.size > 0 ? cart.size : undefined}
        />
        <HorizontalRule/>
        <ProbViewTab probs={props.probs} items={props.items} boxId={props.boxId}/>
      </View>
    </>

  )
}

export default ProbInfoTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  }
})