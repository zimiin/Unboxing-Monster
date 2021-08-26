import React from 'react'
import FirstTemplate from '@components/templates/FirstTemplate'
import { FirstProps } from '@constants/navigationTypes'

const FirstPage = ({route, navigation}: FirstProps) => {
  return (
    <FirstTemplate
      onPressLookAround={() => navigation.replace('Main')}
    />
  )
}

export default FirstPage