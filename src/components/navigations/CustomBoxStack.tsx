import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CustomBox from '../pages/CustomBox'

const CustomBoxStack = () => {
    const CustomBoxStack = createStackNavigator()

    return (
        <CustomBoxStack.Navigator
            initialRouteName="CustomBox"
        >
            <CustomBoxStack.Screen
                name="CustomBox"
                component={CustomBox}
            />
        </CustomBoxStack.Navigator>
    )
}

export default CustomBoxStack
