import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/pages/Home';
import BoxInfo from './components/pages/BoxInfo';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
        >
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="BoxInfo" component={BoxInfo} />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;
