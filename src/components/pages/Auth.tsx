import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from "../../constants/navigationTypes";

import Login from './Login';
import Register from "./Register";

const Stack = createStackNavigator<AuthStackParamList>();

const Auth = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
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
        </NavigationContainer>
    );
};

export default Auth;

