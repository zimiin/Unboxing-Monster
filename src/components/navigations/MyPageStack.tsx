import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyPagePage from '@components/pages/MyPagePage'

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
    </MyPageStack.Navigator>
  )
}

export default MyPageStack
