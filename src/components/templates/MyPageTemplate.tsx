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
  ScrollView,
} from 'react-native'
import LoginNotice from "@components/organisms/LoginNotice"
import RightArrow from "@components/atoms/icon/RightArrow"
import Loading from "@components/atoms/Loading"
import ConfirmModal from "@components/molecules/ConfirmModal"
import NoticeModal from "@components/molecules/NoticeModal"

interface Props {
  loginState: boolean,
  nickname: string,
  point: number,
  isFetchingLoginState: boolean,
  modalVisible: boolean,
  showReportModal: boolean,
  showWithdrawalModal: boolean,
  onPressLogout: () => void,
  onPressLogin: () => void,
  onPressCart: () => void,
  onPressPaymentHistory: () => void,
  onPressPointHistory: () => void,
  onConfirmLogout: () => void,
  onCloseModal: () => void,
  closeReportModal: () => void,
  openReportModal: () => void,
  onPressTermsOfService: () => void,
  onPressPrivacyPolicy: () => void,
  closeWithdrawalModal: () => void,
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
          <ScrollView style={styles.screen}>
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

              <TouchableOpacity
                onPress={props.openReportModal}
                style={styles.listItem}
              >
                <Bold style={styles.listText}>
                  부적절한 이름 신고
                </Bold>

                <RightArrow />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={props.onPressPrivacyPolicy}
                style={[styles.listItem]}
              >
                <Bold style={styles.listText}>
                  회원 탈퇴
                </Bold>

                <RightArrow />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={props.onPressTermsOfService}
                style={styles.listItem}
              >
                <Bold style={styles.listText}>
                  서비스 이용약관
                </Bold>

                <RightArrow />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={props.onPressPrivacyPolicy}
                style={[styles.listItem, { marginBottom: scale(98) }]}
              >
                <Bold style={styles.listText}>
                  개인정보 처리방침
                </Bold>

                <RightArrow />
              </TouchableOpacity>
            </View>
          </ScrollView>
          
          <FullContentWidthButton
            onPress={props.onPressLogout}
            style={styles.logout}
            fontColor='black'
          >
            로그아웃
          </FullContentWidthButton>
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

      <NoticeModal
        visible={props.showWithdrawalModal}
        onRequestClose={props.closeWithdrawalModal}
      >
        <View
          style={styles.noticeContainer}
        >
          <Text
            style={styles.noticeText}
          >
            닉네임과 함께 탈퇴 요청을{'\n'}아래의 메일로 보내주세요.
          </Text>

          <Text
            style={styles.noticeText}
            selectable={true}
          >
            ask.unboxing.monster@gmail.com
          </Text>
        </View>
      </NoticeModal>
    </>
  )
}

export default MyPageTemplate

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: verticalScale(98)
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
  logout: {
    backgroundColor: '#eef1f2',
    position: 'absolute',
    bottom: verticalScale(25),
    marginLeft: scale(24),
  },
  modalText: {
    fontFamily: 'NotoSansCJKkr-Regular',
    fontSize: 15,
    marginVertical: 30,
  },
  noticeContainer: {
    marginVertical: 20,
  },
  noticeText: {
    textAlign: 'center',
  }
})