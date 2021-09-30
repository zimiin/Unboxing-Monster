import { 
  getAccessTokenFromAsyncStorage, 
  getEmailFromAsyncStorage, 
  getNicknameFromAsyncStorage, 
  getPhoneFromAsyncStorage, 
  getUserIdFromAsyncStorage, 
  setAccessTokenToAsyncStorage, 
  setEmailToAsyncStorage, 
  setNicknameToAsyncStorage, 
  setPhoneToAsyncStorage, 
  setUserIdToAsyncStorage 
} from "@src/utils/asyncStorageUtils"
import React, { useEffect, useState } from "react"

interface UserInfo {
  userId?: string,
  nickname?: string,
  email?: string,
  accessToken?: string,
  phone?: string,
}

type Context = [
  {
    // User DB에 point 컬럼이 있는데, 여기서 point를 저장하면 결제 / 환불 시 여기의 포인트 값 신경써야 할 것 같아서 point 제외함
    // point 제외하면서 필요 부분만 빼서 여기서 저장
    userId: string,
    nickname: string,
    email: string,
    accessToken: string,
    phone: string,
  },
  {
    deleteUserData: () => void,
    setUserData: (userId: string, nickname: string, email: string, accessToken: string, phone: string) => void,
    setUserId: (id: string) => void,
    setNickname: (nickname: string) => void,
    setEmail: (email: string) => void,
    setAccessToken: (accessToken: string) => void,
    setPhone: (phone: string) => void,
  }
]

const defaultContext: Context = [
  {
    userId: '',
    nickname: '',
    email: '',
    accessToken: '',
    phone: '',
  },
  {
    deleteUserData: () => {},
    setUserData: (userId: string, nickname: string, email: string, accessToken: string, phone: string) => { },
    setUserId: (id: string) => { },
    setNickname: (nickname: string) => { },
    setEmail: (email: string) => { },
    setAccessToken: (accessToken: string) => { },
    setPhone: (phone: string) => { },
  }
]

export const UserContext = React.createContext<Context>(defaultContext)

interface Props {
  children?: React.ReactNode
}

const UserContextProvider = (props: Props) => {

  // 애매한 set~~ 함수명... 컨텍스트에서의 함수명과 겹침
  const [userId, setUserIdState] = useState<string>('')
  const [nickname, setNicknameState] = useState<string>('')
  const [email, setEmailState] = useState<string>('')
  const [accessToken, setAccessTokenState] = useState<string>('')
  const [phone, setPhoneState] = useState<string>('')

  /** ===== Example ===== */
  // const [userInfo, setUserInfo] = useState<UserInfo>()

  // const newUserInfo = async (newUserInfo: UserInfo) => {
  //   setUserInfo(newUserInfo)
  // }

  // const updateUserInfo = async (newUserInfo: UserInfo) => {
  //   let info = {...userInfo, ...newUserInfo}
  //   setUserInfo(info)

  //   saveUserInfoToStorage(JSON.stringfy(info))
  // }

  // const removeUserInfo = async () => {
  //   removeUserInfoFromStorage()
  //   setUserInfo({})
  // }

  /** ===== End Example ===== */
  

  useEffect(() => {
    getUserIdFromAsyncStorage()
      .then(userId => setUserIdState(userId || ''))
      .catch(error => console.log('Error in UserContextProvider', error))

    getNicknameFromAsyncStorage()
      .then(nickname => setNicknameState(nickname || ''))
      .catch(error => console.log('Error in UserContextProvider', error))

    getEmailFromAsyncStorage()
      .then(email => setEmailState(email || ''))
      .catch(error => console.log('Error in UserContextProvider', error))

    getAccessTokenFromAsyncStorage()
      .then(accessToken => setAccessTokenState(accessToken || ''))
      .catch(error => console.log('Error in UserContextProvider', error))

    getPhoneFromAsyncStorage()
      .then(phone => setPhoneState(phone || ''))
      .catch(error => console.log('Error in UserContextProvider', error))
  }, [])


  const setUserData = async (userId: string, nickname: string, email: string, accessToken: string, phone: string) => {
    try {
      setUserIdState(userId)
      setNicknameState(nickname)
      setEmailState(email)
      setAccessTokenState(accessToken)
      setPhoneState(phone)

      await setUserIdToAsyncStorage(userId)
      await setNicknameToAsyncStorage(nickname)
      await setEmailToAsyncStorage(email)
      await setAccessTokenToAsyncStorage(accessToken)
      await setPhoneToAsyncStorage(phone)
    } catch (error) {
      console.log('Error in setUserData', error)
      throw error
    }
  }

  const deleteUserData = async () => {
    try {
      setUserData('', '', '', '', '')
    } catch (error) {
      console.log('Error in deleteUserData', error)
      throw error
    }
  }
  
  const setUserId = async (id: string) => {
    try {
      setUserIdState(id)
      await setUserIdToAsyncStorage(id)
    } catch (error) {
      console.log('Error in setUserId', error)
      throw error
    }
  }
      
  const setNickname = async (nickname: string) => {
    try {
      setNicknameState(nickname)
      await setNicknameToAsyncStorage(nickname)
    } catch (error) {
      console.log('Error in setNickname', error)
      throw error
    }
  }
        
  const setEmail = async (email: string) => {
    try {
      setEmailState(email)
      await setEmailToAsyncStorage(email)
    } catch (error) {
      console.log('Error in setEmail', error)
      throw error
    }
  }
          
  const setAccessToken = async (accessToken: string) => {
    try {
      setAccessTokenState(accessToken)
      await setAccessTokenToAsyncStorage(accessToken)
    } catch (error) {
      console.log('Error in setAccessToken', error)
      throw error
    }
  }
          
  const setPhone = async (phone: string) => {
    try {
      setPhoneState(phone)
      await setPhoneToAsyncStorage(phone)
    } catch (error) {
      console.log('Error in setPhone', error)
      throw error
    }
  }

  return (
    <UserContext.Provider value={[
      {
        userId,
        nickname,
        email,
        accessToken,
        phone
      },
      {
        deleteUserData,
        setUserData,
        setUserId,
        setNickname,
        setEmail,
        setAccessToken,
        setPhone
      }
    ]}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider