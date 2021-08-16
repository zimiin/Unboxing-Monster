import LoadingPage from '@components/pages/LoadingPage'
import { OpenStackParamList } from '@constants/navigationTypes'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {
  View,
  Text,
} from 'react-native'

const OpenStack = () => {
  const OpenStack = createStackNavigator<OpenStackParamList>()

  return (
    <OpenStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OpenStack.Screen
        name="Loading"
        component={LoadingPage}
      />
    </OpenStack.Navigator>
  )
}

export default OpenStack
