import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BoxInfoPage from '@components/pages/BoxInfoPage'
import CartPage from '@components/pages/CartPage'
import SearchPage from '@components/pages/SearchPage'
import HomePage from '@components/pages/HomePage'
import AddToCartPage from '@components/pages/AddToCartPage'

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

            {/* 여기 아래 타입들 추가 */}
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
                options={{animationEnabled: false,}}
            />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen
