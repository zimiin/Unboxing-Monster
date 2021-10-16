import React, { useState } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TextInput,
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
import InfoIcon from '@components/atoms/icon/InfoIcon'
import NoticeModal from '@components/molecules/NoticeModal'

type BoxInfoTemplateProps = {
  boxImage?: ImageSourcePropType,
  boxName?: string,
  boxPrice?: number,
  boxDetail?: string,
  boxItems: object,
  navigation: BoxInfoNavigationProp,
  cartItemCount?: number,
  isManagerBox?: boolean,
  showReportModal: boolean,
  onPressAddToCart: () => void,
  onPressProbInfo: () => void,
  onPressReport: () => void,
  closeReportModal: () => void,
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

            {props.isManagerBox === false ?
              <View
                style={styles.reportContainer}
              >
                <TouchableOpacity
                  onPress={props.onPressReport}
                  style={styles.reportButton}
                >
                  <Text
                    style={styles.reportText}
                  >
                    부적절한 이름 신고하기
                  </Text>

                  <InfoIcon
                    style={styles.reportIcon}
                  />
                </TouchableOpacity>
              </View>
              : null
            }

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

      <NoticeModal
        visible={props.showReportModal}
        onRequestClose={props.closeReportModal}
      >
        <View
          style={styles.noticeContainer}
        >
          <Text
            style={styles.noticeText}
          >
            부적절한 이름이 있는 화면을 캡쳐하여{'\n'}아래의 메일로 보내주세요.
          </Text>

          <Text
            style={styles.noticeText}
            selectable={true}
          >
            ask.unboxing.monster@gmail.com
          </Text>
        </View>
      </NoticeModal>

      <IntroModal
        modalVisible={introModalVisible}
        setModalVisible={setIntroModalVisible}
        onRequestClose={() => setIntroModalVisible(false)}
      />
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
  reportContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 15,
  },
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportText: {
    fontSize: 13,
    lineHeight: 19,
    color: COLORS.main,
  },
  reportIcon: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    marginLeft: 3,
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
  },
  noticeContainer: {
    marginVertical: 20,
  },
  noticeText: {
    textAlign: 'center',
  }
})