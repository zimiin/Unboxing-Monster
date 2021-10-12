import Header from '@components/organisms/header/Header'
import { TermsOfServiceProps } from '@constants/navigationTypes'
import React, { useState, useEffect } from 'react'

const TermsOfServicePage = ({ route, navigation }: TermsOfServiceProps) => {
  return (
    <>
      <Header
        canGoBack={true}
        goBackAction={() => navigation.goBack()}
      />
    </>
  )
}

export default TermsOfServicePage
