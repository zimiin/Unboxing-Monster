import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomBoxInitPage from '@components/pages/CustomBoxInitPage'
import { CustomBoxStackParamList } from '@constants/navigationTypes'
import BoxMakingStep1Page from '@components/pages/BoxMakingStep1Page'
import CustomBoxContextProvider from '@src/stores/CustomBoxContext'
import BoxMakingStep2Page from '@components/pages/BoxMakingStep2Page'
import BoxMakingStep3Page from '@components/pages/BoxMakingStep3Page'
import LoginRequestPage from '@components/pages/LoginRequestPage'
import MyCustomBoxPage from '@components/pages/MyCustomBoxPage'

const CustomBoxStack = () => {
  const CustomBoxStack = createStackNavigator<CustomBoxStackParamList>()

  return (
    <CustomBoxContextProvider>
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

        <CustomBoxStack.Screen
          name="BoxMakingStep2"
          component={BoxMakingStep2Page}
        />

        <CustomBoxStack.Screen
          name="BoxMakingStep3"
          component={BoxMakingStep3Page}
        />

        <CustomBoxStack.Screen
          name="MyCustomBox"
          component={MyCustomBoxPage}
        />
      </CustomBoxStack.Navigator>
    </CustomBoxContextProvider>
  )
}

export default CustomBoxStack
