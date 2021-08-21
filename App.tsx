import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashPage from '@components/pages/SplashPage'
import Auth from '@components/pages/Auth'
import Main from '@components/navigations/Main'
import { RootStackParamList } from '@constants/navigationTypes'
import CartContextProvider from '@src/stores/CartContext'
import OpenStack from '@components/navigations/OpenStack'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen 
            name="Splash"
            component={SplashPage}
          />
          
          <Stack.Screen 
            name="Auth"
            component={Auth}
          />

          <Stack.Screen
            name="Main"
            component={Main}
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
