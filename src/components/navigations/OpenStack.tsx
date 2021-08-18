import LoadingPage from '@components/pages/LoadingPage'
import OpeningPage from '@components/pages/OpeningPage'
import OpenResultPage from '@components/pages/OpenResultPage'
import { OpenStackParamList } from '@constants/navigationTypes'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

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
        options={{ animationEnabled: false }}
      />

      <OpenStack.Screen
        name="Opening"
        component={OpeningPage}
        options={{ animationEnabled: false }}
      />

      <OpenStack.Screen
        name="OpenResult"
        component={OpenResultPage}
        options={{ animationEnabled: false }}
      />
    </OpenStack.Navigator>
  )
}

export default OpenStack
