import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BoxInfoPage from '../pages/BoxInfoPage'
import CartPage from '../pages/CartPage'
import SearchPage from '../pages/SearchPage'
import HomePage from '../pages/HomePage'

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
                name="Search"
                component={SearchPage}
                options={{animationEnabled: false,}}
            />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen
