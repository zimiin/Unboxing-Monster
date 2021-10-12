import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackParamList } from "@constants/navigationTypes"
import LoginPage from "@components/pages/LoginPage"
import SplashPage from "@components/pages/SplashPage"
import SignUpPhoneInputPage from "@components/pages/SignUpPhoneInputPage"
import SignUpContextProvider from "@src/stores/SignUpContext"
import SignUpPhoneConfirmInputPage from "@components/pages/SignUpPhoneConfirmInputPage"
import SignUpNicknameInputPage from "@components/pages/SignUpNicknameInputPage"
import SignUpEmailInputPage from "@components/pages/SignUpEmailInputPage"
import LoginRequestPage from "@components/pages/LoginRequestPage"
import TermsOfServicePage from "@components/pages/TermsOfServicePage"

const Stack = createStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  return (
    <SignUpContextProvider>
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
          name="SignUpEmailInput"
          component={SignUpEmailInputPage}
        />

        <Stack.Screen
          name="SignUpPhoneInput"
          component={SignUpPhoneInputPage}
        />
        
        <Stack.Screen
          name="SignUpPhoneConfirmInput"
          component={SignUpPhoneConfirmInputPage}
        />

        <Stack.Screen
          name="SignUpNicknameInput"
          component={SignUpNicknameInputPage}
        />

        <Stack.Screen
          name="LoginRequest"
          component={LoginRequestPage}
        />

        <Stack.Screen
          name="TermsOfService"
          component={TermsOfServicePage}
        />
      </Stack.Navigator>
    </SignUpContextProvider>
  )
}

export default AuthStack

