import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BoxInfoPage from '@components/pages/BoxInfoPage'
import CartPage from '@components/pages/CartPage'
import SearchPage from '@components/pages/SearchPage'
import HomePage from '@components/pages/HomePage'
import AddToCartPage from '@components/pages/AddToCartPage'
import PaymentPage from '@components/pages/PaymentPage'
import PaymentCompletePage from '@components/pages/PaymentCompletePage'

const HomeStackScreen = () => {
  const HomeStack = createStackNavigator()

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomePage}
      />

      <HomeStack.Screen
        name="BoxInfo"
        component={BoxInfoPage}
      />

      <HomeStack.Screen
        name="Cart"
        component={CartPage}
      />

      <HomeStack.Screen
        name="AddToCart"
        component={AddToCartPage}
      />

      <HomeStack.Screen
        name="Search"
        component={SearchPage}
        options={{ animationEnabled: false, }}
      />

      <HomeStack.Screen
        name="Payment"
        component={PaymentPage}
      />

      <HomeStack.Screen
        name="PaymentComplete"
        component={PaymentCompletePage}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
