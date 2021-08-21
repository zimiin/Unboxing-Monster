import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
} from 'react-native'
import BaseHeader from '@components/organisms/header/BaseHeader'
import { ItemInfoNavigationProp } from '@constants/navigationTypes'
import ItemInfoImage from '@components/molecules/ItemInfoImage'
import HorizontalRule from '@components/atoms/HorizontalRule'
import ItemInfoDetail from '@components/molecules/ItemInfoDetail'

type ItemInfoTemplateProps = {
  navigation: ItemInfoNavigationProp,
  image: string,
  title: string,
  price: number,
  detail: string,
}

const ItemInfoTemplate = (props: ItemInfoTemplateProps) => {
  return (
    <>
      <BaseHeader title={props.title} canGoBack={true} goBackAction={() => props.navigation.goBack()}/>
      <HorizontalRule/>
      
      <ScrollView style={styles.screen}>
        <ItemInfoImage image={props.image} title={props.title} price={props.price}/>
        <HorizontalRule/>
        <ItemInfoDetail detail={props.detail}/>
      </ScrollView>
    </>

  )
}

export default ItemInfoTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
})