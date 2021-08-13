import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashPage from '@components/pages/SplashPage'
import Auth from '@components/pages/Auth'
import Main from '@components/navigations/Main'
import { RootStackParamList } from '@constants/navigationTypes'
import CartContextProvider from '@src/stores/CartContext'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
        {/* <Stack.Navigator initialRouteName="test">
          <Stack.Screen
            name="test"
            component={BoxInfoPage}
            options={{headerShown: true}}
          /> */}
        
          <Stack.Screen 
            name="Splash"
            component={SplashPage}
            options={{headerShown: false}}
          />
          
          <Stack.Screen 
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  )
}

export default App
