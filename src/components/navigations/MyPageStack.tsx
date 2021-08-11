import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyPage from '@components/pages/MyPage'

const MyPageStack = () => {
    const MyPageStack = createStackNavigator()

    return (
        <MyPageStack.Navigator
            initialRouteName="MyPage"
        >
            <MyPageStack.Screen
                name="MyPage"
                component={MyPage}
            />
        </MyPageStack.Navigator>
    )
}

export default MyPageStack
