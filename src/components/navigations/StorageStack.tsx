import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StoragePage from '@components/pages/StoragePage'
import CouponConfirmPage from '@components/pages/CouponConfirmPage'
import CouponRefundPage from '@components/pages/CouponRefundPage'

const StorageStack = () => {
  const StorageStack = createStackNavigator()

  return (
    <StorageStack.Navigator
      initialRouteName="Storage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StorageStack.Screen
        name="Storage"
        component={StoragePage}
      />

      <StorageStack.Screen
        name="CouponConfirm"
        component={CouponConfirmPage}
      />

      <StorageStack.Screen
        name="CouponRefund"
        component={CouponRefundPage}
      />
    </StorageStack.Navigator>
  )
}

export default StorageStack
