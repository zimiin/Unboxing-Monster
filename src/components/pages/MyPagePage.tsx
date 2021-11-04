import MyPageTemplate from "@components/templates/MyPageTemplate"
import { MyPageProps } from "@constants/navigationTypes"
import { User } from "@constants/types"
import { URLS } from "@constants/urls"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { CommonActions } from "@react-navigation/native"
import { UserContext } from "@src/stores/UserContext"
import { clearUserData, getAccessTokenFromAsyncStorage, getNicknameFromAsyncStorage } from "@src/utils/asyncStorageUtils"
import { getLoginUserId, hasLoggedIn } from "@src/utils/loginUtils"
import React, { useCallback, useContext, useEffect, useMemo, useState } from "react"

const MyPagePage = ({route, navigation}: MyPageProps) => {
  const [{ }, { deleteUserData }] = useContext(UserContext)
  const [loginState, setLoginState] = useState<boolean>(false)
  const [isFetchingLoginState, setIsFetchingLoginState] = useState<boolean>(true)
  const [nickname, setNickname] = useState<string>()
  const [point, setPoint] = useState<number>()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showReportModal, setShowReportModal] = useState<boolean>(false)
  const [showWithdrawalModal, setShowWithdrawalModal] = useState<boolean>(false)

  const getPoint = async () => {
    try {
      const accessToken = await getAccessTokenFromAsyncStorage()
      const response = await fetch(
        URLS.unboxing_api + 'users', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          }
        }
      )

      if (response.status !== 200) {
        const json = await response.json()
        throw 'Failed to GET ' + response.url + ', status ' + response.status + ', ' + json.message
      }

      const userData: User = await response.json()
      return userData.point
    } catch (error) {
      console.log('Error in getPoint', error)
    }
  }

  useEffect(() => {
    try {
      hasLoggedIn().then(
        result => {
          setLoginState(result || false)
          setIsFetchingLoginState(false)

          if (result === false) {
            return
          }

          getNicknameFromAsyncStorage().then(
            result => {
              setNickname(result || '')
            }
          )

          getPoint().then(
            result => {
              setPoint(result)
            }
          )
          
          navigation.addListener('focus', () => {
            getPoint().then(
              result => {
                setPoint(result)
              }
            )
          })
        }
      )
    } catch (error) {
      console.log('Error in useEffect in MyPagePage::', error)
    }
  }, [])

  const logout = async () => {    
    setShowModal(false)
    await clearUserData()
    deleteUserData()
    navigation.replace('Auth', {screen: 'Login'})
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <MyPageTemplate
      isFetchingLoginState={isFetchingLoginState}
      loginState={loginState}
      nickname={nickname || ''}
      point={point || 0}
      modalVisible={showModal}
      showReportModal={showReportModal}
      showWithdrawalModal={showWithdrawalModal}
      onConfirmLogout={logout}
      onPressLogout={() => setShowModal(true)}
      onPressLogin={() => navigation.replace('Auth', {screen: 'Login'})}
      onPressCart={() => navigation.navigate('Cart')}
      onPressPointHistory={() => navigation.navigate('PointHistory')}
      onPressPaymentHistory={() => navigation.navigate('PaymentHistory')}
      onCloseModal={closeModal}
      closeReportModal={() => setShowReportModal(false)}
      openReportModal={() => setShowReportModal(true)}
      onPressTermsOfService={() => navigation.navigate('TermsOfService')}
      onPressPrivacyPolicy={() => navigation.navigate('PrivacyPolicy')}
      closeWithdrawalModal={() => setShowWithdrawalModal(false)}
      onPressWithdrawal={() => setShowWithdrawalModal(true)}
    />
  )
}

export default MyPagePage