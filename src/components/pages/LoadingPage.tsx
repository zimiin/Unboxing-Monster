import LoadingTemplate from '@components/templates/LoadingTemplate'
import { LoadingProps } from '@constants/navigationTypes'
import React from 'react'
import {
  View,
  Text,
} from 'react-native'

const LoadingPage = ({route, navigation}: LoadingProps) => {
  console.log('box id: ' + route.params.boxId + ' count: ' + route.params.count)
  // 오픈 요청 보내고 대기

  return (
    <LoadingTemplate  
    />
  )
}

export default LoadingPage
