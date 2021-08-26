import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashPage from '@components/pages/SplashPage'
import AuthStack from '@components/navigations/AuthStack'
import MainBottomTab from '@components/navigations/MainBottomTab'
import { RootStackParamList } from '@constants/navigationTypes'
import CartContextProvider from '@src/stores/CartContext'
import OpenStack from '@components/navigations/OpenStack'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Auth"
          screenOptions={{
            headerShown: false
          }}
        > 
          <Stack.Screen 
            name="Auth"
            component={AuthStack}
          />

          <Stack.Screen
            name="Main"
            component={MainBottomTab}
          />

          <Stack.Screen
            name="Open"
            component={OpenStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  )
}

export default App
