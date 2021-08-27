import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackParamList } from "@constants/navigationTypes"
import Register from "@components/pages/Register"
import LoginPage from "@components/pages/LoginPage"
import SplashPage from "@components/pages/SplashPage"

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  return (
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
        name="Login"
        component={LoginPage}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: '회원가입',
          headerBackTitle: '',
          headerShown: true,
          headerStyle: {
            shadowColor: 'black',
            shadowOffset: {
              height: 1,
              width: 1,
            },
            backgroundColor: 'mediumturquoise',
          },
          headerTintColor: 'black',
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack

