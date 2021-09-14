import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthStack from '@components/navigations/AuthStack'
import MainBottomTab from '@components/navigations/MainBottomTab'
import { RootStackParamList } from '@constants/navigationTypes'
import CartContextProvider from '@src/stores/CartContext'
import OpenStack from '@components/navigations/OpenStack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { printAsyncStorage } from '@src/utils/loginUtils'
import BoxInfoPage from '@components/pages/BoxInfoPage'
import ItemInfoPage from '@components/pages/ItemInfoPage'
import ProbInfoPage from '@components/pages/ProbInfoPage'
import CartPage from '@components/pages/CartPage'
import AddToCartPage from '@components/pages/AddToCartPage'
import PaymentPage from '@components/pages/PaymentPage'
import PaymentCompletePage from '@components/pages/PaymentCompletePage'
import PGPaymentPage from '@components/pages/PGPaymentPage'
import PaymentResultPage from '@components/pages/PaymentResultPage'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  // AsyncStorage.clear()
  printAsyncStorage()

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

          <Stack.Screen
            name="BoxInfo"
            component={BoxInfoPage}
          />

          <Stack.Screen
            name="ItemInfo"
            component={ItemInfoPage}
          />

          <Stack.Screen
            name="ProbInfo"
            component={ProbInfoPage}
          />

          <Stack.Screen
            name="Cart"
            component={CartPage}
          />

          <Stack.Screen
            name="AddToCart"
            component={AddToCartPage}
          />

          <Stack.Screen
            name="Payment"
            component={PaymentPage}
          />

          <Stack.Screen
            name="PaymentComplete"
            component={PaymentCompletePage}
          />

          <Stack.Screen
            name="PGPayment"
            component={PGPaymentPage}
          />

          <Stack.Screen
            name="PaymentResult"
            component={PaymentResultPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContextProvider>
  )
}

export default App
