import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomBoxInitPage from '@components/pages/CustomBoxInitPage'
import { CustomBoxStackParamList } from '@constants/navigationTypes'
import BoxMakingStep1Page from '@components/pages/BoxMakingStep1Page'

const CustomBoxStack = () => {
  const CustomBoxStack = createStackNavigator<CustomBoxStackParamList>()

  return (
    <CustomBoxStack.Navigator
      initialRouteName="CustomBoxInit"
      screenOptions={{
        headerShown: false
      }}
    >
      <CustomBoxStack.Screen
        name="CustomBoxInit"
        component={CustomBoxInitPage}
      />

      <CustomBoxStack.Screen
        name="BoxMakingStep1"
        component={BoxMakingStep1Page}
      />
    </CustomBoxStack.Navigator>
  )
}

export default CustomBoxStack
