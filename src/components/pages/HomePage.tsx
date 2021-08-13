import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native'

import NoticeBoard from '@components/organisms/NoticeBoard'
import Scroller from '@components/organisms/Scroller'
import HotBoxList from '@components/organisms/HotBoxList'
import CustomBoxList from '@components/organisms/CustomBoxList'
import BoxProductList from '@components/organisms/BoxProductList'

import { HomeProps } from '@constants/navigationTypes'
import HomeScreenHeader from '@components/organisms/header/HomeScreenHeader'

// TODO 여기서 데이터 넘겨주는 형태로 변경하기
const Home = (props: HomeProps) => {
  return (
    <>
      <HomeScreenHeader 
        onPressSearchBar={() => props.navigation.push('Search')}
        onPressCart={() => props.navigation.push('Cart')}
      />

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <NoticeBoard />
          <Scroller />
          <HotBoxList />
          <CustomBoxList />
          <BoxProductList />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})


