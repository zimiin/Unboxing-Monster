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

interface Props {
  loginState: boolean,
  nickname: string,
  point: number,
  onPressLogout: () => void,
  onPressLogin: () => void,
  onPressCart: () => void,
  onPressPaymentHistory: () => void,
  onPressPointHistory: () => void,
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

            <HorizontalRule />

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
    </>
  )
}

export default MyPageTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: scale(24),
  },
  greeting: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: verticalScale(15),
  },
  welcome: {
    fontSize: scale(12),
    color: COLORS.bold_black,
    marginBottom: scale(3),
    marginRight: scale(13),
  },
  name: {
    fontSize: scale(20),
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
    fontSize: scale(12),
    color: COLORS.bold_black,
    flex: 1,
    marginLeft: scale(29),
  },
  pointNumber: {
    fontSize: scale(26),
    letterSpacing: -scale(0.78),
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
    fontSize: scale(15),
    letterSpacing: -scale(0.37),
    color: COLORS.bold_black,
    flex: 1,
  },
  logoutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: verticalScale(50),
  },
  logout: {
    backgroundColor: '#eef1f2'
  }
})