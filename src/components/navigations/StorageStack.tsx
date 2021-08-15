import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StoragePage from '@components/pages/StoragePage'

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
    </StorageStack.Navigator>
  )
}

export default StorageStack
