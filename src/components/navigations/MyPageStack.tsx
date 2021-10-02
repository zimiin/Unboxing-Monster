import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyPagePage from '@components/pages/MyPagePage'
import PointHistoryPage from '@components/pages/PointHistoryPage'
import PaymentHistoryPage from '@components/pages/PaymentHistoryPage'

const MyPageStack = () => {
  const MyPageStack = createStackNavigator()

  return (
    <MyPageStack.Navigator
      initialRouteName="MyPage"
      screenOptions={{
        headerShown: false
      }}
    >
      <MyPageStack.Screen
        name="MyPage"
        component={MyPagePage}
      />

      <MyPageStack.Screen
        name="PointHistory"
        component={PointHistoryPage}
      />

      <MyPageStack.Screen
        name="PaymentHistory"
        component={PaymentHistoryPage}
      />
    </MyPageStack.Navigator>
  )
}

export default MyPageStack
