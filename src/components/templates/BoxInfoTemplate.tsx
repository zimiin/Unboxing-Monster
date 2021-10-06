import React, { useState } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ImageSourcePropType,
} from 'react-native'
import SubTitle from '@components/atoms/typography/SubTitle'
import FullWidthButton from '@components/atoms/button/FullWidthButton'
import Footer from '@components/molecules/Footer'
import PolicyDescriptionList from '@components/organisms/PolicyDescriptionList'
import ToIntroButton from '@components/atoms/button/ToIntroButton'
import ToProbabilityButton from '@components/atoms/button/ToProbabilityButton'
import IntroModal from '@components/templates/IntroModal'
import { CONTENT_WIDTH, scale, SCREEN_WIDTH } from '@constants/figure'
import HeaderWithCart from '@components/organisms/header/HeaderWithCart'
import { BoxInfoNavigationProp } from '@constants/navigationTypes'
import Title from '@components/atoms/typography/Title'
import HorizontalRule from '@components/atoms/HorizontalRule'
import { COLORS } from '@constants/colors'
import BoxInfoImage from '@components/atoms/BoxInfoImage'
import BoxPriceInfo from '@components/atoms/BoxPriceInfo'
import Body from '@components/atoms/typography/Body'
import RenderHTML, { HTMLSourceInline } from 'react-native-render-html'

type BoxInfoTemplateProps = {
  boxImage?: ImageSourcePropType,
  boxName?: string,
  boxPrice?: number,
  boxDetail?: string,
  boxItems: object,
  onPressAddToCart: () => void,
  onPressProbInfo: () => void,
  navigation: BoxInfoNavigationProp,
  cartItemCount?: number,
}

const BoxInfoTemplate = (props: BoxInfoTemplateProps) => {
  const [introModalVisible, setIntroModalVisible] = useState<boolean>(false)
  const source: HTMLSourceInline = {
    html: props.boxDetail || ''
  }

  return (
    <>
      <HeaderWithCart
        canGoBack={true}
        goBackAction={() => props.navigation.goBack()}
        title={props.boxName}
        onPressCart={() => props.navigation.push('Cart')}
        cartItemCount={props.cartItemCount}
      />

      <HorizontalRule />

      <View style={styles.screen}>
        <IntroModal modalVisible={introModalVisible} setModalVisible={setIntroModalVisible}></IntroModal>

        <ScrollView>
          <BoxInfoImage
            image={props.boxImage} 
          />

          <View style={styles.contentContainer}>
            <Title
              style={styles.boxName}
              content={props.boxName}
            />

            <BoxPriceInfo
              price={props.boxPrice}
              style={styles.boxPrice}
            />

            <SubTitle
              style={styles.subTitle}
              content={'이 박스는요'}
            />

            <RenderHTML
              contentWidth={scale(312)}
              source={source}
            />

            <SubTitle
              content={'구성상품'}
              style={styles.subTitle}
            />

            <View style={styles.boxItemContainer}>
              {props.boxItems}
            </View>
          </View>
          
          <ToIntroButton setModalVisible={setIntroModalVisible}/>

          <View style={styles.probButtonContainer}>
            <ToProbabilityButton onPress={props.onPressProbInfo}/>
          </View>

          <View style={styles.policyContainer}>
            <PolicyDescriptionList />
          </View>

          <Footer />                
        </ScrollView>
      </View>

      <SafeAreaView style={styles.bottomButtonContainer}>
        <FullWidthButton 
          onPress={props.onPressAddToCart}
          content='장바구니에 담기'
        />
      </SafeAreaView>
    </>
  )
}

export default BoxInfoTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    width: CONTENT_WIDTH,
    alignSelf: 'center',
  },
  boxName: {
    marginTop: 26,
  },
  boxPrice: {
    marginTop: 5,
  },
  subTitle: {
    marginTop: 26,
    marginBottom: 4,
  },
  boxDetail: {
    marginTop: 4,
  },
  boxItemContainer: {
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  probButtonContainer: {
    marginTop: 13,
  },
  policyContainer: {
    marginTop: 31,
  },
  bottomButtonContainer: {
    backgroundColor: COLORS.main
  }
})