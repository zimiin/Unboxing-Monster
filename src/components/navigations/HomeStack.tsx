import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchPage from '@components/pages/SearchPage'
import HomePage from '@components/pages/HomePage'
import { HomeStackParamList } from '@constants/navigationTypes'

const HomeStackScreen = () => {
  const HomeStack = createStackNavigator<HomeStackParamList>()
  
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
        name="Search"
        component={SearchPage}
        options={{ animationEnabled: false, }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
