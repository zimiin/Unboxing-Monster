import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './home';
import CustomBox from './CustomBox';
import Storage from './Storage';
import MyPage from './MyPage';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName= "Home"
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Custom Box" component={CustomBox} />
            <Tab.Screen name="Storage" component={Storage} />
            <Tab.Screen name="My Page" component={MyPage} />
        </Tab.Navigator>
    );
}

export default Main;