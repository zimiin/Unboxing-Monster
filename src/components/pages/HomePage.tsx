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
import { useState, useContext } from 'react'
import TutorialModal from '@components/templates/TutorialModal'
import { CartContext } from '@src/stores/CartContext'
import HorizontalRule from '@components/atoms/HorizontalRule'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

// TODO 여기서 데이터 넘겨주는 형태로 변경하기
const Home = (props: HomeProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [{ cart }, { modifyBoxCount, deleteFromCart, setChecked, setCheckedToAll }] = useContext(CartContext)

  const printAsyncStorage = async () => {
    const token = await AsyncStorage.getItem('@token')
    const socialLoginProvider = await AsyncStorage.getItem('@socialLoginProvider')
    console.log('token: ', token)
    console.log('socialLoginProvider: ', socialLoginProvider)
  }

  useEffect(() => {
    printAsyncStorage()
  }, [])

  return (
    <>
      <HomeScreenHeader 
        onPressSearchBar={() => props.navigation.push('Search')}
        onPressCart={() => props.navigation.push('Cart')}
        cartItemCount={cart.size > 0 ? cart.size : undefined}
      />

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <NoticeBoard 
            onPressIntro={() => setModalVisible(true)}
          />
          <Scroller />
          <HotBoxList />
          <CustomBoxList />
          <HorizontalRule/>
          <BoxProductList />
        </ScrollView>
      </SafeAreaView>

      <TutorialModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})


