import HorizontalRule from "@components/atoms/HorizontalRule"
import Bold from "@components/atoms/typography/Bold"
import Header from "@components/organisms/header/Header"
import { COLORS } from "@constants/colors"
import { scale, verticalScale } from "@constants/figure"
import FullContentWidthButton from "@components/atoms/button/FullContentWidthButton"
import { IMAGES } from "@constants/images"
import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native'
import LoginNotice from "@components/organisms/LoginNotice"
import RightArrow from "@components/atoms/icon/RightArrow"
import Loading from "@components/atoms/Loading"
import ConfirmModal from "@components/molecules/ConfirmModal"

interface Props {
  loginState: boolean,
  nickname: string,
  point: number,
  isFetchingLoginState: boolean,
  modalVisible: boolean,
  onPressLogout: () => void,
  onPressLogin: () => void,
  onPressCart: () => void,
  onPressPaymentHistory: () => void,
  onPressPointHistory: () => void,
  onConfirmLogout: () => void,
  onCloseModal: () => void,
}

const MyPageTemplate = (props: Props) => {
  return (
    <>
      <Header
        canGoBack={false}
        title={'마이페이지'}
      />

      <HorizontalRule />

      {props.loginState === false ? 
        <LoginNotice 
          onPressLogin={props.onPressLogin}
        />
        :
        <>
          <View style={styles.screen}>
            <View style={styles.padding}>
              <View style={styles.greeting}>
                <Bold style={styles.welcome}>
                  환영합니다
                </Bold>

                <Bold style={styles.name}>
                  {props.nickname + ' 님'}
                </Bold>
              </View>

              <TouchableOpacity
                style={styles.pointBox}
                onPress={props.onPressPointHistory}
              >
                <Bold style={styles.pointText}>
                  잔여포인트
                </Bold>

                <Bold style={styles.pointNumber}>
                  {props.point?.toLocaleString() + ' P'}
                </Bold>
              </TouchableOpacity>
            </View>

            <HorizontalRule />

            <View style={styles.padding}>
              <TouchableOpacity
                onPress={props.onPressCart}
                style={styles.listItem}
              >
                <Bold style={styles.listText}>
                  장바구니
                </Bold>

                <RightArrow />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={props.onPressPaymentHistory}
                style={styles.listItem}
              >
                <Bold style={styles.listText}>
                  구매내역
                </Bold>

                <RightArrow />
              </TouchableOpacity>
            </View>

            <View style={styles.logoutContainer}>
              <FullContentWidthButton
                onPress={props.onPressLogout}
                style={styles.logout}
                fontColor='black'
              >
                로그아웃
              </FullContentWidthButton>
            </View>
          </View>
        </>
      }
      
      {props.isFetchingLoginState ? <Loading /> : null}

      <ConfirmModal 
        visible={props.modalVisible}
        onConfirm={props.onConfirmLogout}
        onRequestClose={props.onCloseModal}
      >
        <Text style={styles.modalText}>로그아웃 하시겠습니까?</Text>
      </ConfirmModal>
    </>
  )
}

export default MyPageTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  padding: {
    paddingHorizontal: scale(24),
  },
  greeting: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: verticalScale(15),
  },
  welcome: {
    fontSize: 12,
    color: COLORS.bold_black,
    marginBottom: 3,
    marginRight: 13,
    lineHeight: 20,
  },
  name: {
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.bold_black,
  },
  pointBox: {
    backgroundColor: COLORS.grey_box,
    width: '100%',
    height: verticalScale(76),
    borderRadius: scale(6),
    marginTop: verticalScale(11),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(28),
  },
  pointText: {
    fontSize: 12,
    letterSpacing: -0.3,
    color: COLORS.bold_black,
    flex: 1,
    marginLeft: scale(29),
  },
  pointNumber: {
    fontFamily: 'Roboto-Medium',
    fontSize: 26,
    letterSpacing: -0.78,
    color: COLORS.main,
    marginRight: scale(33),
  },
  listItem: {
    height: verticalScale(72),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
  },
  listText: {
    fontSize: 15,
    letterSpacing: -0.37,
    color: COLORS.bold_black,
    flex: 1,
    lineHeight: 22,
  },
  logoutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: verticalScale(50),
  },
  logout: {
    backgroundColor: '#eef1f2'
  },
  modalText: {
    fontFamily: 'NotoSansCJKkr-Regular',
    fontSize: 15,
    marginVertical: 30,
  }
})