import LoadingTemplate from '@components/templates/LoadingTemplate'
import { LoadingProps } from '@constants/navigationTypes'
import React from 'react'
import {
  View,
  Text,
} from 'react-native'

const LoadingPage = ({route, navigation}: LoadingProps) => {
  console.log('box id: ' + route.params.boxId + ' count: ' + route.params.count)
  
  return (
    <LoadingTemplate
    
    />
  )
}

export default LoadingPage
