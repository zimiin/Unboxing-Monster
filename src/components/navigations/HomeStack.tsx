import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
    BoxInfoPage,
} from '../components'
import CartPage from '../pages/CartPage'
import HeaderWithCart from '../organisms/header/HeaderWithCart'
import HeaderWithBack from '../organisms/header/HeaderWithBack'
import HeaderWithSearch from '../organisms/header/HeaderWithSearch'
import SearchPage from '../pages/SearchPage'
import SearchBar from '../molecules/SearchBar'
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
                // options={{headerShown: false}}
                // options={{ header: props => <SearchBar {...props} /> }}
            />

            {/* BoxInfoPage, ProbInfoPage, ItemInfoPage Group으로 묶어서 헤더 적용 */}
            <HomeStack.Screen 
                name="BoxInfo" 
                component={BoxInfoPage}
                // TODO 타입 에러 해결
                // options={props => HeaderWithCart(props)}
                // options={{header: props => <SearchBar {...props} />}}
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
