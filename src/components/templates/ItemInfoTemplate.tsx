import React, { useState } from 'react'
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import Header from '@components/organisms/header/Header'
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
      <Header title={props.title} canGoBack={true} goBackAction={() => props.navigation.goBack()} />
      <HorizontalRule />

      <SafeAreaView style={styles.screen}>
        <ScrollView>
          <ItemInfoImage image={props.image} title={props.title} price={props.price} />
          <HorizontalRule />
          <ItemInfoDetail detail={props.detail} />
        </ScrollView>
      </SafeAreaView>
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