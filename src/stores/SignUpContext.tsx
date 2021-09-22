import React, { useState } from "react"

type Context = [
  {
    email: string,
    phone: string,
    nickname: string,
    provider: string,
    providerToken: string,
  },
  {
    setEmail: (email: string) => void,
    setPhone: (phone: string) => void,
    setNickname: (nickname: string) => void,
    setProvider: (provider: string) => void,
    setProviderToken: (providerToken: string) => void
  }
]

const defaultContext: Context = [
  {
    email: '',
    phone: '',
    nickname: '',
    provider: '',
    providerToken: '',
  },
  {
    setEmail: (email: string) => { },
    setPhone: (phone: string) => { },
    setNickname: (nickname: string) => { },
    setProvider: (provider: string) => { },
    setProviderToken: (providerToken: string) => { },
  }
]

export const SignUpContext = React.createContext<Context>(defaultContext)

interface Props {
  children?: React.ReactNode
}

const SignUpContextProvider = (props: Props) => {
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [provider, setProvider] = useState<string>('')
  const [providerToken, setProviderToken] = useState<string>('')

  return (
    <SignUpContext.Provider value={[{ email, phone, nickname, provider, providerToken }, { setEmail, setPhone, setNickname, setProvider, setProviderToken}]}>
      {props.children}
    </SignUpContext.Provider>
  )
}

export default SignUpContextProvider