import LoginRequestTemplate from '@components/templates/LoginRequestTemplate'
import { LoginRequestProps } from '@constants/navigationTypes'
import React, { useState, useEffect } from 'react'

const LoginRequestPage = ({ route, navigation }: LoginRequestProps) => {
  return (
    <LoginRequestTemplate
      hasPreviousScreen={true}
      goBackToPrevScreen={() => navigation.goBack()}
      onPressLogin={() => navigation.push('Login')}
    />
  )
}

export default LoginRequestPage
