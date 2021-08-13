import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Storage from '@components/pages/Storage'

const StorageStack = () => {
  const StorageStack = createStackNavigator()

  return (
    <StorageStack.Navigator
      initialRouteName="Storage"
    >
      <StorageStack.Screen
        name="Storage"
        component={Storage}
      />
    </StorageStack.Navigator>
  )
}

export default StorageStack
